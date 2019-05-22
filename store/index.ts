import { RootState, IndexState, Person } from "~/types";
import { MutationTree, ActionTree } from "vuex";
import { vuexfireMutations, firestoreAction } from 'vuexfire';

export const state = (): IndexState => ({
  people: [],
  isLoaded: false,
  user: ''
});

export const mutations: MutationTree<IndexState> = {
  ...vuexfireMutations,
  setPeople(state: IndexState, people: Person[]): void {
    state.people = people;
  },
  setLoaded(state: IndexState, isLoaded: boolean): void {
    state.isLoaded = isLoaded;
  }
};

export const actions: ActionTree<IndexState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    let people: Person[] = [];
    people = await context.app.$axios.$get("./random-data.json");
    commit("setPeople", people.slice(0, 10));
  }
};
