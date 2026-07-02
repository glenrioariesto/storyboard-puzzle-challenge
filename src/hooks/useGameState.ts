import { useState } from 'react';
import { GameState, Scene, NarrativeTag, StoryAnswer } from '../types';
import { STORYBOARD_CAMPAIGN } from '../data/storyboardData';
import { playSynthesizerNote } from '../utils/audio';

const getRank = (score: number) => {
  if (score === 3) return { title: "Sutradara Maestro (Legendaris)", desc: "Sempurna! Anda memiliki insting narasi luar biasa dan mampu menyusun semua struktur cerita tanpa kesalahan.", color: "text-emerald-800 border-2 border-emerald-700 bg-emerald-50" };
  if (score === 2) return { title: "Editor Senior", desc: "Sangat memahami struktur linier cerita, transisi adegan, dan konflik dramatis.", color: "text-indigo-800 border-2 border-indigo-700 bg-indigo-50" };
  if (score === 1) return { title: "Penulis Skrip Magang", desc: "Anda memahami dasar-dasar narasi, tetapi masih perlu mengasah penempatan klimaks.", color: "text-orange-850 border-2 border-orange-700 bg-orange-50" };
  return { title: "Penonton Biasa", desc: "Pelajari lagi perbedaan antara eksposisi awal, titik balik konflik, dan penyelesaian resolusi.", color: "text-rose-800 border-2 border-rose-700 bg-rose-50" };
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
    assignedTags: {},
    showFeedback: false,
    checked: false,
    attempts: 0,
    answers: [],
  });

  const activeStory = STORYBOARD_CAMPAIGN[state.currentStoryIndex];

  // Level initialization is handled inside event handlers directly (startInvestigation, advanceStory)

  const startInvestigation = () => {
    playSynthesizerNote('success');
    setState({
      pageView: 'game',
      currentStoryIndex: 0,
      score: 0,
      shuffledScenes: shuffleScenes(STORYBOARD_CAMPAIGN[0].scenes),
      assignedTags: {},
      showFeedback: false,
      checked: false,
      attempts: 0,
      answers: [],
    });
  };

  const moveCard = (index: number, direction: 'left' | 'right') => {
    if (state.showFeedback) return;

    const targetIndex = direction === 'left' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= state.shuffledScenes.length) return;

    playSynthesizerNote('btn');
    const newScenes = [...state.shuffledScenes];
    [newScenes[index], newScenes[targetIndex]] = [newScenes[targetIndex], newScenes[index]];

    setState(prev => ({
      ...prev,
      shuffledScenes: newScenes,
      checked: false // Reset checked status on change
    }));
  };

  const assignTag = (sceneId: number, tag: NarrativeTag) => {
    if (state.showFeedback) return;

    playSynthesizerNote('btn');
    setState(prev => ({
      ...prev,
      assignedTags: {
        ...prev.assignedTags,
        [sceneId]: tag
      },
      checked: false // Reset checked status on change
    }));
  };

  const checkStoryboard = () => {
    if (state.showFeedback) return;

    const nextAttempts = state.attempts + 1;
    
    // Check positions: index in shuffledScenes must match original id
    const isOrderCorrect = state.shuffledScenes.every((scene, idx) => scene.id === idx);

    // Check tags: assigned tag must match correctTag
    const isTagsCorrect = state.shuffledScenes.every(
      (scene) => state.assignedTags[scene.id] === scene.correctTag
    );

    const isAllCorrect = isOrderCorrect && isTagsCorrect;

    if (isAllCorrect) {
      playSynthesizerNote('success');
      const newAnswer: StoryAnswer = {
        storyId: activeStory.id,
        isCorrect: true,
        attemptsCount: nextAttempts
      };

      setState(prev => ({
        ...prev,
        answers: [...prev.answers, newAnswer],
        score: prev.score + 1,
        showFeedback: true,
        checked: true,
        attempts: nextAttempts
      }));
    } else {
      playSynthesizerNote('fail');
      setState(prev => ({
        ...prev,
        checked: true,
        attempts: nextAttempts
      }));
    }
  };

  const advanceStory = () => {
    playSynthesizerNote('btn');
    const isLastStory = state.currentStoryIndex === STORYBOARD_CAMPAIGN.length - 1;

    if (isLastStory) {
      playSynthesizerNote('unlock');
      setState(prev => ({
        ...prev,
        pageView: 'result',
        showFeedback: false,
        checked: false
      }));
    } else {
      const nextIndex = state.currentStoryIndex + 1;
      const nextStory = STORYBOARD_CAMPAIGN[nextIndex];
      setState(prev => ({
        ...prev,
        currentStoryIndex: nextIndex,
        shuffledScenes: shuffleScenes(nextStory.scenes),
        assignedTags: {},
        showFeedback: false,
        checked: false,
        attempts: 0
      }));
    }
  };

  const restartGame = () => {
    playSynthesizerNote('success');
    setState({
      pageView: 'splash',
      currentStoryIndex: 0,
      score: 0,
      shuffledScenes: [],
      assignedTags: {},
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
    assignedTags: state.assignedTags,
    showFeedback: state.showFeedback,
    checked: state.checked,
    attempts: state.attempts,
    answers: state.answers,
    startInvestigation,
    moveCard,
    assignTag,
    checkStoryboard,
    advanceStory,
    restartGame,
    getRank,
  };
};
