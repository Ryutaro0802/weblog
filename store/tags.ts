import { RootState, TagState, Tag } from "~/types";
import { MutationTree, ActionTree, GetterTree } from 'vuex';
import { firestoreAction } from 'vuexfire';
import firebase from '~/plugins/firebase';

const firestore = firebase.firestore();
const tagsCollection = firestore.collection('tags');

export const name = 'tags';

export const state = (): TagState => ({
    tags: []
});

export const getters: GetterTree<TagState, RootState> = {
    tags: state => state.tags
};

export const actions: ActionTree<TagState, RootState> = {
    BIND_TAGS: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('tags', tagsCollection);
    })
};
