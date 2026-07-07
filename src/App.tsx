import React from 'react';
import { useGameState } from './hooks/useGameState';
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

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#FAF8F5] bg-paper-grid flex flex-col antialiased text-slate-800 relative">
      {/* Landscape phone orientation locks */}
      <PortraitWarning />

      {/* Pages Switcher */}
      {pageView === 'splash' && (
        <SplashPage onStart={startInvestigation} />
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
          onMoveCard={moveCard}
          onReorderCard={reorderCard}
          onCheck={checkStoryboard}
          onAdvance={advanceStory}
          onBack={restartGame}
        />
      )}

      {pageView === 'result' && (
        <ResultPage
          score={score}
          answers={answers}
          onRestart={restartGame}
          getRank={getRank}
        />
      )}
    </div>
  );
}
