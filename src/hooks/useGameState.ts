import { useState } from 'react';
import { GameState, Scene, StoryAnswer } from '../types';
import { STORYBOARD_CAMPAIGN } from '../data/storyboardData';
import { playSynthesizerNote } from '../utils/audio';

const getRank = (score: number) => {
  if (score === 5) return { title: "Sutradara Maestro (Legendaris)", desc: "Sempurna! Anda memiliki insting narasi luar biasa dan mampu menyusun semua struktur cerita tanpa kesalahan.", color: "text-emerald-800 border-2 border-emerald-700 bg-emerald-50" };
  if (score === 4) return { title: "Editor Senior", desc: "Sangat memahami struktur linier cerita, transisi adegan, dan konflik dramatis.", color: "text-indigo-800 border-2 border-indigo-700 bg-indigo-50" };
  if (score === 3) return { title: "Penulis Skrip Menengah", desc: "Pemahaman narasi yang cukup baik, namun masih ada ruang untuk perbaikan di beberapa level.", color: "text-sky-800 border-2 border-sky-700 bg-sky-50" };
  if (score === 2) return { title: "Penulis Skrip Magang", desc: "Anda memahami dasar-dasar narasi, tetapi masih perlu mengasah penempatan adegan.", color: "text-orange-800 border-2 border-orange-700 bg-orange-50" };
  if (score === 1) return { title: "Penonton Pemula", desc: "Masih banyak yang perlu dipelajari tentang alur cerita dan kronologi narasi.", color: "text-amber-800 border-2 border-amber-700 bg-amber-50" };
  return { title: "Penonton Biasa", desc: "Pelajari lagi perbedaan kronologi cerita, transisi adegan, dan penyelesaian resolusi.", color: "text-rose-800 border-2 border-rose-700 bg-rose-50" };
};

const shuffleScenes = (scenes: Scene[]): Scene[] => {
  const arr = [...scenes];
  // Fisher-Yates shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // Double check that it's actually shuffled (not sorted by luck)
  let isSorted = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id !== i) {
      isSorted = false;
      break;
    }
  }

  if (isSorted && arr.length > 1) {
    [arr[0], arr[1]] = [arr[1], arr[0]]; // force swap first two
  }

  return arr;
};

export const useGameState = () => {
  const [state, setState] = useState<GameState>({
    pageView: 'splash',
    currentStoryIndex: 0,
    score: 0,
    shuffledScenes: [],
    scenesByStoryId: {},
    showFeedback: false,
    checked: false,
    attempts: 0,
    answers: [],
  });

  const activeStory = STORYBOARD_CAMPAIGN[state.currentStoryIndex];

  // Level initialization is handled inside event handlers directly (startInvestigation, advanceStory, jumpToStory)

  const startInvestigation = () => {
    playSynthesizerNote('success');
    const firstScenes = shuffleScenes(STORYBOARD_CAMPAIGN[0].scenes);
    setState({
      pageView: 'game',
      currentStoryIndex: 0,
      score: 0,
      shuffledScenes: firstScenes,
      scenesByStoryId: {
        [STORYBOARD_CAMPAIGN[0].id]: firstScenes,
      },
      showFeedback: false,
      checked: false,
      attempts: 0,
      answers: [],
    });
  };

  const moveCard = (index: number, direction: 'up' | 'down') => {
    if (state.showFeedback) return;

    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= state.shuffledScenes.length) return;

    playSynthesizerNote('slide');
    const newScenes = [...state.shuffledScenes];
    [newScenes[index], newScenes[targetIndex]] = [newScenes[targetIndex], newScenes[index]];

    setState(prev => ({
      ...prev,
      shuffledScenes: newScenes,
      scenesByStoryId: {
        ...prev.scenesByStoryId,
        [activeStory.id]: newScenes,
      },
      checked: false // Reset checked status on change
    }));
  };

  const reorderCard = (fromIndex: number, toIndex: number) => {
    if (state.showFeedback) return;
    if (fromIndex === toIndex) return;

    playSynthesizerNote('slide');
    const newScenes = [...state.shuffledScenes];
    const [draggedCard] = newScenes.splice(fromIndex, 1);
    newScenes.splice(toIndex, 0, draggedCard);

    setState(prev => ({
      ...prev,
      shuffledScenes: newScenes,
      scenesByStoryId: {
        ...prev.scenesByStoryId,
        [activeStory.id]: newScenes,
      },
      checked: false // Reset checked status on change
    }));
  };

  const checkStoryboard = () => {
    if (state.showFeedback) return;

    const nextAttempts = state.attempts + 1;
    
    // Check positions: index in shuffledScenes must match original id
    const isAllCorrect = state.shuffledScenes.every((scene, idx) => scene.id === idx);

    if (isAllCorrect) {
      playSynthesizerNote('success');
      const newAnswer: StoryAnswer = {
        storyId: activeStory.id,
        isCorrect: true,
        attemptsCount: nextAttempts
      };

      setState(prev => {
        const existingIdx = prev.answers.findIndex(a => a.storyId === activeStory.id);
        const updatedAnswers = [...prev.answers];
        if (existingIdx !== -1) {
          updatedAnswers[existingIdx] = newAnswer;
        } else {
          updatedAnswers.push(newAnswer);
        }
        const newScore = updatedAnswers.filter(a => a.isCorrect).length;

        return {
          ...prev,
          answers: updatedAnswers,
          score: newScore,
          showFeedback: true,
          checked: true,
          attempts: nextAttempts,
          scenesByStoryId: {
            ...prev.scenesByStoryId,
            [activeStory.id]: [...prev.shuffledScenes],
          },
        };
      });
    } else {
      playSynthesizerNote('fail');
      setState(prev => ({
        ...prev,
        checked: true,
        attempts: nextAttempts
      }));
    }
  };

  const jumpToStory = (index: number) => {
    if (index < 0 || index >= STORYBOARD_CAMPAIGN.length) return;
    if (index === state.currentStoryIndex) return;

    playSynthesizerNote('btn');
    const targetStory = STORYBOARD_CAMPAIGN[index];
    const existingAnswer = state.answers.find(a => a.storyId === targetStory.id);

    let scenes = state.scenesByStoryId?.[targetStory.id];
    if (!scenes) {
      scenes = existingAnswer?.isCorrect
        ? [...targetStory.scenes]
        : shuffleScenes(targetStory.scenes);
    }

    setState(prev => ({
      ...prev,
      currentStoryIndex: index,
      shuffledScenes: scenes,
      scenesByStoryId: {
        ...prev.scenesByStoryId,
        [targetStory.id]: scenes,
      },
      showFeedback: false,
      checked: !!existingAnswer?.isCorrect,
      attempts: existingAnswer ? existingAnswer.attemptsCount : 0,
    }));
  };

  const advanceStory = () => {
    playSynthesizerNote('btn');

    // Check if all stories in campaign have been completed
    const allCompleted = STORYBOARD_CAMPAIGN.every(s =>
      state.answers.some(a => a.storyId === s.id && a.isCorrect)
    );

    if (allCompleted) {
      playSynthesizerNote('unlock');
      setState(prev => ({
        ...prev,
        pageView: 'result',
        showFeedback: false,
        checked: false,
      }));
      return;
    }

    // Try next sequential level first, or wrap around to find first uncompleted level
    let nextIndex = state.currentStoryIndex + 1;
    if (nextIndex >= STORYBOARD_CAMPAIGN.length) {
      nextIndex = STORYBOARD_CAMPAIGN.findIndex(s =>
        !state.answers.some(a => a.storyId === s.id && a.isCorrect)
      );
      if (nextIndex === -1) {
        playSynthesizerNote('unlock');
        setState(prev => ({
          ...prev,
          pageView: 'result',
          showFeedback: false,
          checked: false,
        }));
        return;
      }
    }

    const nextStory = STORYBOARD_CAMPAIGN[nextIndex];
    const existingAnswer = state.answers.find(a => a.storyId === nextStory.id);
    let scenes = state.scenesByStoryId?.[nextStory.id];
    if (!scenes) {
      scenes = existingAnswer?.isCorrect
        ? [...nextStory.scenes]
        : shuffleScenes(nextStory.scenes);
    }

    setState(prev => ({
      ...prev,
      currentStoryIndex: nextIndex,
      shuffledScenes: scenes,
      scenesByStoryId: {
        ...prev.scenesByStoryId,
        [nextStory.id]: scenes,
      },
      showFeedback: false,
      checked: !!existingAnswer?.isCorrect,
      attempts: existingAnswer ? existingAnswer.attemptsCount : 0,
    }));
  };

  const restartGame = () => {
    playSynthesizerNote('success');
    setState({
      pageView: 'splash',
      currentStoryIndex: 0,
      score: 0,
      shuffledScenes: [],
      scenesByStoryId: {},
      showFeedback: false,
      checked: false,
      attempts: 0,
      answers: [],
    });
  };

  return {
    pageView: state.pageView,
    currentStoryIndex: state.currentStoryIndex,
    activeStory,
    totalStories: STORYBOARD_CAMPAIGN.length,
    score: state.score,
    shuffledScenes: state.shuffledScenes,
    showFeedback: state.showFeedback,
    checked: state.checked,
    attempts: state.attempts,
    answers: state.answers,
    startInvestigation,
    moveCard,
    reorderCard,
    checkStoryboard,
    advanceStory,
    jumpToStory,
    restartGame,
    getRank,
  };
};
