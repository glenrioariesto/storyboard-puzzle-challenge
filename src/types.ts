export type NarrativeTag = 'pengenalan' | 'konflik_awal' | 'klimaks' | 'resolusi' | '';

export interface Scene {
  id: number;           // Original chronological index (0, 1, 2, 3)
  title: string;
  imageUrl: string;
  narrative: string;
  correctTag: NarrativeTag;
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
  assignedTags: Record<number, NarrativeTag>; // Map of scene ID -> assigned tag
  showFeedback: boolean;
  checked: boolean;
  attempts: number;
  answers: StoryAnswer[];
}
