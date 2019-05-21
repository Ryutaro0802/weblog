import { Person, Tag, Article } from "~/types";

export interface RootState {
  tags: any
};

export interface IndexState {
  people: Person[];
  isLoaded: boolean,
  user: string
};

export interface ArticleState {
  articles: [],
  article: Article | null
};

export interface TagState {
  tags: [],
};