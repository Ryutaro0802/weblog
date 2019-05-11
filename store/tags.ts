import { RootState, Tag } from "~/types";
import { MutationTree, ActionTree, GetterTree } from "vuex";
import firebase from '~/plugins/firebase';
import { firebaseAction } from 'vuexfire';

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
    INIT_TAGS: firebaseAction(({ bindFirebaseRef }) => {
        console.log('INIT_TAGS');
        bindFirebaseRef('tags', tagsCollection);
    })
};
