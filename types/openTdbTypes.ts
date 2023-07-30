// Response Codes
// The API appends a "Response Code" to each API Call to help tell developers what the API is doing.

import { Question } from "@/types/quizTypes";

// Code 0: Success Returned results successfully.
// Code 1: No Results Could not return results. The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)
// Code 2: Invalid Parameter Contains an invalid parameter. Arguements passed in aren't valid. (Ex. Amount = Five)
// Code 3: Token Not Found Session Token does not exist.
// Code 4: Token Empty Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.

export interface OpenTDBResponse {
  response_code: ResponseCodeEnum;
  results: OpenTDBQuestion[];
}

export interface TriviaApiResponse {
  responseCode: ResponseCodeEnum;
  responseMessage: string;
  questions: Question[];
}

export enum ResponseCodeEnum {
  Success = 0,
  NoResults = 1,
  InvalidParameter = 2,
  TokenNotFound = 3,
  TokenEmpty = 4
}

// create map of ResponseCode to string for display
export const ResponseCodeMap = new Map<ResponseCodeEnum, string>([
  [ResponseCodeEnum.Success, "Success: Returned results successfully"],
  [ResponseCodeEnum.NoResults, "No Results: Could not return results. The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)"],
  [ResponseCodeEnum.InvalidParameter, "Invalid Parameter: Contains an invalid parameter. Arguements passed in aren't valid. (Ex. Amount = Five)"],
  [ResponseCodeEnum.TokenNotFound, "Token Not Found: Session Token does not exist"],
  [ResponseCodeEnum.TokenEmpty, "Token Empty: Session Token has returned all possible questions for the specified query. Resetting the Token is necessary"]
]);

export interface OpenTDBQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}