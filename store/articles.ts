import { RootState, ArticleState, Article } from "~/types";
import { MutationTree, ActionTree, GetterTree } from "vuex";
import { firestoreAction } from 'vuexfire';
import dayjs from 'dayjs';
import firebase from '~/plugins/firebase';

const firestore = firebase.firestore();
const articlesCollection = firestore.collection('articles');

export const name = 'articles';

export const state = (): ArticleState => ({
    articles: [],
    article: null
});

export const getters: GetterTree<ArticleState, RootState> = {
    articles: (state, getters: any, rootState) => {
        const tags: [] = rootState.tags.tags;
        return state.articles.map(article => {
            article.tags = tags.filter(tag => article.tagIds.includes(tag.id));
            article.createdAt = dayjs(article.createdAt.nanoseconds).format(
                'YYYY-MM-DD'
            );
            article.updatedAt = dayjs(article.updatedAt.nanoseconds).format(
                'YYYY-MM-DD'
            );
            return article;
        });
    }
};

export const mutations: MutationTree<ArticleState> = {
    saveArticle(state, article: Article): void {
        state.article = article;
    }
};

export const actions: ActionTree<RootState, RootState> = {
    BIND_ARTICLES: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('articles', articlesCollection);
    })
};
