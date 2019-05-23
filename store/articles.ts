import { RootState, ArticleState, Article, Tag } from "~/types";
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
        return state.articles.map((article: Article) => {
            const copyArticle = Object.assign({}, article);
            copyArticle.id = article.id;
            copyArticle.tags = tags.filter((tag: Tag) => article.tagIds.includes(tag.id));
            copyArticle.createdAt = dayjs(article.createdAt.nanoseconds).format(
                'YYYY-MM-DD'
            );
            copyArticle.updatedAt = dayjs(article.updatedAt.nanoseconds).format(
                'YYYY-MM-DD'
            );
            return copyArticle;
        });
    },
    article: state => state.article
};

export const mutations: MutationTree<ArticleState> = {
    saveArticle(state, article: Article): void {
        state.article = article;
    }
};

export const actions: ActionTree<RootState, RootState> = {
    BIND_ARTICLES: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('articles', articlesCollection);
    }),
    INIT_SINGLE_ARTICLE: async ({ commit }, { id }) => {
        console.log(id);
        const snapshot: any = await articlesCollection.doc(id).get();
        commit('saveArticle', { article: snapshot.data() });
    }
};
