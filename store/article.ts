import { RootState, Article } from "~/types";
import { MutationTree, ActionTree } from "vuex";

export interface State {
    articles: [],
    article: Article | null
}

export const state = (): State => ({
    articles: [],
    article: null
});

export const mutations: MutationTree<State> = {
    saveArticle(state, article:Article):void {
        state.article = article;
    }
}

export const actions: ActionTree<RootState, RootState> = {
}
