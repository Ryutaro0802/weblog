import { RootState, Tag } from "~/types";
import { MutationTree, ActionTree, GetterTree } from 'vuex';
import { firestoreAction } from 'vuexfire';
import firebase from '~/plugins/firebase';

const firestore = firebase.firestore();
const tagsCollection = firestore.collection('tags');

export const name = 'tags';

export interface State {
    tags: [],
};

export const state = (): State => ({
    tags: []
});

export const getters: GetterTree<State, RootState> = {
    tags: state => state.tags
};

export const actions: ActionTree<State, RootState> = {
    BIND_TAGS: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('tags', tagsCollection);
    })
};
