import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'cleanbid-university-progress';

const defaultProgress = {
  completedModules: [],
  quizScores: {},
  bookmarks: [],
  lastVisited: null,
  startedAt: null,
  certified: false,
};

export function useUniversityProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? { ...defaultProgress, ...JSON.parse(stored) } : defaultProgress;
    } catch {
      return defaultProgress;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const markModuleComplete = useCallback((moduleId) => {
    setProgress((prev) => ({
      ...prev,
      completedModules: prev.completedModules.includes(moduleId)
        ? prev.completedModules
        : [...prev.completedModules, moduleId],
      startedAt: prev.startedAt || new Date().toISOString(),
    }));
  }, []);

  const saveQuizScore = useCallback((moduleId, score, total) => {
    setProgress((prev) => ({
      ...prev,
      quizScores: { ...prev.quizScores, [moduleId]: { score, total, passed: score / total >= 0.7, date: new Date().toISOString() } },
    }));
  }, []);

  const toggleBookmark = useCallback((path) => {
    setProgress((prev) => ({
      ...prev,
      bookmarks: prev.bookmarks.includes(path)
        ? prev.bookmarks.filter((b) => b !== path)
        : [...prev.bookmarks, path],
    }));
  }, []);

  const setLastVisited = useCallback((path) => {
    setProgress((prev) => ({ ...prev, lastVisited: path }));
  }, []);

  const issueCertificate = useCallback(() => {
    setProgress((prev) => ({ ...prev, certified: true, certifiedAt: new Date().toISOString() }));
  }, []);

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
  }, []);

  const completionPercentage = Math.round((progress.completedModules.length / 10) * 100);
  const isModuleComplete = (id) => progress.completedModules.includes(id);
  const isBookmarked = (path) => progress.bookmarks.includes(path);
  const getQuizScore = (id) => progress.quizScores[id] || null;

  return {
    progress,
    completionPercentage,
    markModuleComplete,
    saveQuizScore,
    toggleBookmark,
    setLastVisited,
    issueCertificate,
    resetProgress,
    isModuleComplete,
    isBookmarked,
    getQuizScore,
  };
}
