export enum TriviaCategoryEnum {
  Any = 0,
  GeneralKnowledge = 9,
  EntertainmentBooks = 10,
  EntertainmentFilm = 11,
  EntertainmentMusic = 12,
  EntertainmentMusicalsAndTheatres = 13,
  EntertainmentTelevision = 14,
  EntertainmentVideoGames = 15,
  EntertainmentBoardGames = 16,
  ScienceAndNature = 17,
  ScienceComputers = 18,
  ScienceMathematics = 19,
  Mythology = 20,
  Sports = 21,
  Geography = 22,
  History = 23,
  Politics = 24,
  Art = 25,
  Celebrities = 26,
  Animals = 27,
  Vehicles = 28,
  EntertainmentComics = 29,
  ScienceGadgets = 30,
  EntertainmentJapaneseAnimeAndManga = 31,
  EntertainmentCartoonAndAnimations = 32
}

// create a map of the categories
export const triviaCategories: Map<TriviaCategoryEnum, string> = new Map<
  TriviaCategoryEnum,
  string
>([
  [TriviaCategoryEnum.Any, "Any Category"],
  [TriviaCategoryEnum.GeneralKnowledge, "General Knowledge"],
  [TriviaCategoryEnum.EntertainmentBooks, "Entertainment: Books"],
  [TriviaCategoryEnum.EntertainmentFilm, "Entertainment: Film"],
  [TriviaCategoryEnum.EntertainmentMusic, "Entertainment: Music"],
  [ 
    TriviaCategoryEnum.EntertainmentMusicalsAndTheatres,
    "Entertainment: Musicals & Theatres"
  ],
  [TriviaCategoryEnum.EntertainmentTelevision, "Entertainment: Television"],
  [TriviaCategoryEnum.EntertainmentVideoGames, "Entertainment: Video Games"],
  [TriviaCategoryEnum.EntertainmentBoardGames, "Entertainment: Board Games"],
  [TriviaCategoryEnum.ScienceAndNature, "Science & Nature"],
  [TriviaCategoryEnum.ScienceComputers, "Science: Computers"],
  [TriviaCategoryEnum.ScienceMathematics, "Science: Mathematics"],
  [TriviaCategoryEnum.Mythology, "Mythology"],
  [TriviaCategoryEnum.Sports, "Sports"],
  [TriviaCategoryEnum.Geography, "Geography"],
  [TriviaCategoryEnum.History, "History"],
  [TriviaCategoryEnum.Politics, "Politics"],
  [TriviaCategoryEnum.Art, "Art"],
  [TriviaCategoryEnum.Celebrities, "Celebrities"],
  [TriviaCategoryEnum.Animals, "Animals"],
  [TriviaCategoryEnum.Vehicles, "Vehicles"],
  [TriviaCategoryEnum.EntertainmentComics, "Entertainment: Comics"],
  [TriviaCategoryEnum.ScienceGadgets, "Science: Gadgets"],
  [
    TriviaCategoryEnum.EntertainmentJapaneseAnimeAndManga,
    "Entertainment: Japanese Anime & Manga"
  ],
  [
    TriviaCategoryEnum.EntertainmentCartoonAndAnimations,
    "Entertainment: Cartoon & Animations"
  ]
]);

export enum TriviaDifficultyEnum {
  Any = "",
  Easy = "easy",
  Medium = "medium",
  Hard = "hard"
}

// create a map of the difficulties
export const triviaDifficultiesMap: Map<TriviaDifficultyEnum, string> = new Map<
  TriviaDifficultyEnum,
  string
>([
  [TriviaDifficultyEnum.Any, "Any Difficulty"],
  [TriviaDifficultyEnum.Easy, "Easy"],
  [TriviaDifficultyEnum.Medium, "Medium"],
  [TriviaDifficultyEnum.Hard, "Hard"]
]);

export enum TriviaTypeEnum {
  Any = "",
  MultipleChoice = "multiple",
  TrueOrFalse = "boolean"
}

// create a map of the types
export const triviaTypesMap: Map<TriviaTypeEnum, string> = new Map<
  TriviaTypeEnum,
  string
>([
  [TriviaTypeEnum.Any, "Any Type"],
  [TriviaTypeEnum.MultipleChoice, "Multiple Choice"],
  [TriviaTypeEnum.TrueOrFalse, "True / False"]
]);

export interface TriviaConfigState {
  numQuestions: number;
  category: TriviaCategoryEnum;
  difficulty: TriviaDifficultyEnum;
  type: TriviaTypeEnum;
}

// create a default config
export const defaultTriviaConfig: TriviaConfigState = {
  numQuestions: 5,
  category: TriviaCategoryEnum.Any,
  difficulty: TriviaDifficultyEnum.Easy,
  type: TriviaTypeEnum.Any
};