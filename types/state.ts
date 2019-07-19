import { Tag, Article } from "~/types";

export interface RootState {
  tags: any
};

export interface IndexState {
  loaded: boolean,
  user: string,
  loggedIn: boolean
};

export interface ArticleState {
  articles: [],
  article: Article | null
};

export interface TagState {
  tags: [],
};
