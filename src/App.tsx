import React, { useEffect } from 'react';
import { useGameState } from './hooks/useGameState';
import { useAudio } from './hooks/useAudio';
import { SplashPage } from './pages/splash/SplashPage';
import { ArenaPage } from './pages/arena/ArenaPage';
import { ResultPage } from './pages/result/ResultPage';
import { PortraitWarning } from './components/PortraitWarning';

export default function App() {
  const {
    pageView,
    currentStoryIndex,
    activeStory,
    totalStories,
    score,
    shuffledScenes,
    showFeedback,
    checked,
    attempts,
    answers,
    startInvestigation,
    moveCard,
    reorderCard,
    checkStoryboard,
    advanceStory,
    restartGame,
    getRank
  } = useGameState();

  const { isMuted, toggleMute, startBgm } = useAudio();

  // Try playing BGM on mount (will activate upon user gesture if blocked by autoplay policy)
  useEffect(() => {
    startBgm();
  }, [startBgm]);

  const handleStart = () => {
    startBgm();
    startInvestigation();
  };

  return (
    <div
      id="app-root"
      className="h-screen w-screen overflow-hidden bg-[#FAF8F5] bg-paper-grid flex flex-col antialiased text-slate-800 relative"
    >
      {/* Landscape phone orientation locks */}
      <PortraitWarning />

      {/* Pages Switcher */}
      {pageView === 'splash' && (
        <SplashPage
          onStart={handleStart}
          isMuted={isMuted}
          onToggleAudio={toggleMute}
        />
      )}

      {pageView === 'game' && (
        <ArenaPage
          currentStoryIndex={currentStoryIndex}
          activeStory={activeStory}
          totalStories={totalStories}
          showFeedback={showFeedback}
          checked={checked}
          score={score}
          attempts={attempts}
          shuffledScenes={shuffledScenes}
          isMuted={isMuted}
          onToggleAudio={toggleMute}
          onMoveCard={moveCard}
          onReorderCard={reorderCard}
          onCheck={checkStoryboard}
          onAdvance={advanceStory}
        />
      )}

      {pageView === 'result' && (
        <ResultPage
          score={score}
          answers={answers}
          isMuted={isMuted}
          onToggleAudio={toggleMute}
          onRestart={restartGame}
          getRank={getRank}
        />
      )}
    </div>
  );
}
