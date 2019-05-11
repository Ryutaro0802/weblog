import { RootState, Person } from "~/types";
import { MutationTree, ActionTree } from "vuex";
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import localRandomData from "~/static/random-data.json";

export const state = (): RootState => ({
  people: [],
  isLoaded: false,
  user: ''
});

export const mutations: MutationTree<RootState> = {
  ...vuexfireMutations,
  setPeople(state: RootState, people: Person[]): void {
    state.people = people;
  },
  setLoaded(state: RootState, isLoaded: boolean): void {
    state.isLoaded = isLoaded;
  }
};

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    let people: Person[] = [];
    people = await context.app.$axios.$get("./random-data.json");
    commit("setPeople", people.slice(0, 10));
  }
};
