import { RootState, Article } from "~/types";
import { MutationTree, ActionTree, GetterTree } from "vuex";
import { firestoreAction } from 'vuexfire';
import dayjs from 'dayjs';
import firebase from '~/plugins/firebase';

const firestore = firebase.firestore();
const articlesCollection = firestore.collection('articles');

export const name = 'articles';

export interface State {
    articles: [],
    article: Article | null
}

export const state = (): State => ({
    articles: [],
    article: null
});

export const getters: GetterTree<State, RootState> = {
    articles: state => state.articles
};

export const mutations: MutationTree<State> = {
    saveArticle(state, article:Article):void {
        state.article = article;
    }
}

export const actions: ActionTree<RootState, RootState> = {
    BIND_ARTICLES: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('articles', articlesCollection);
    })
}
