import { RootState, Person } from "~/types";
import { MutationTree, ActionTree, GetterTree } from "vuex";
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import firebase from '~/plugins/firebase';

export const name = 'index';

export const state = (): RootState => ({
  people: [],
  isLoaded: false,
  user: null
});

export const mutations: MutationTree<RootState> = {
  ...vuexfireMutations,
  setPeople(state: RootState, people: Person[]): void {
    state.people = people;
  },
  setUser(state: RootState, user: string):void {
    state.user = user;
  },
  setLoaded(state: RootState, isLoaded: boolean): void {
    state.isLoaded = isLoaded;
  }
};

export const getters: GetterTree<RootState, RootState> = {
  user: state => state.user
};

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    let people: Person[] = [];
    people = await context.app.$axios.$get("./random-data.json");
    commit("setPeople", people.slice(0, 10));
  },
  callAuth() {
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  },
  signOut() {
    firebase.auth().signOut();
  }
};
