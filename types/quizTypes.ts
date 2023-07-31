export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  answers: string[];
  correctAnswer: string;
}

export interface QuestionProps {
  question: Question;
  selectedAnswer: string;
  onAnswer: (answer: string) => void;
}

export interface QuizProps {
  questions: Question[];
  onFinish: () => void;
}