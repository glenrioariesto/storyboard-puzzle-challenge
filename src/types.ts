export interface Scene {
  id: number;           // Original chronological index (0, 1, 2, ...)
  title: string;
  imageUrl: string;
  narrative: string;
}

export interface Story {
  id: number;
  title: string;
  category: string;
  description: string;
  scenes: Scene[];      // The correct ordered scenes
  explanation: string;  // Educational review explanation
}

export interface StoryAnswer {
  storyId: number;
  isCorrect: boolean;
  attemptsCount: number;
}

export interface GameState {
  pageView: 'splash' | 'game' | 'result';
  currentStoryIndex: number;
  score: number;
  shuffledScenes: Scene[]; // Active shuffled scene cards
  showFeedback: boolean;
  checked: boolean;
  attempts: number;
  answers: StoryAnswer[];
}
