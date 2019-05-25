export * from './state';

export interface Article {
  id: number,
  title: string,
  text: string,
  createdAt: any,
  updatedAt: any,
  tags: any,
  tagIds: any
};

export interface Tag {
  id: string,
  label: string
};
