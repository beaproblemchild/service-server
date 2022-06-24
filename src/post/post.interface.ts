export enum subjectList {
  CHINESE,
  ENGLISH,
  MATH,
  SOCIAL,
  SCIENCE,
}

export type TimeStamp = typeof Date.now | number;

export interface injectData {
  id: string;
  time: TimeStamp;
  subject: typeof subjectList.SOCIAL | number;
  content: string;
  imgUrl: string;
}

export interface addPostParams {
  subject: number;
  content: string;
  imgUrl: string;
}
