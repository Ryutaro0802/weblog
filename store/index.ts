import { RootState, IndexState } from "~/types";
import { MutationTree, ActionTree } from "vuex";
import { vuexfireMutations, firestoreAction } from 'vuexfire';

export const name = 'index';

export const state = (): IndexState => ({
  loaded: false,
  user: ''
});

export const mutations: MutationTree<IndexState> = {
  ...vuexfireMutations,
  setLoaded(state: IndexState, isLoaded: boolean): void {
    state.loaded = isLoaded;
  }
};

export const actions: ActionTree<IndexState, RootState> = {
  // async nuxtServerInit({ commit }, context) {
  //   let people: Person[] = [];
  //   people = await context.app.$axios.$get("./random-data.json");
  //   commit("setPeople", people.slice(0, 10));
  // },
  loadComplete({ commit }) {
    commit('setLoaded', true);
  }
};
