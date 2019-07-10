import { IndexState } from "~/types";
import { MutationTree, ActionTree, GetterTree } from "vuex";
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import firebase from '~/plugins/firebase';

export const name = 'index';

export const state = (): IndexState => ({
  loaded: false,
  user: ''
});

export const mutations: MutationTree<IndexState> = {
  ...vuexfireMutations,
  setLoaded(state: IndexState, isLoaded: boolean): void {
    state.loaded = isLoaded
  },
  setUser(state: IndexState, user: string):void {
    state.user = user;
  }
}

export const getters: GetterTree<IndexState, IndexState> = {
  user: state => state.user
};

export const actions: ActionTree<IndexState, IndexState> = {
  callAuth() {
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  },
  signOut() {
    firebase.auth().signOut();
  }
}
