import { IndexState } from "~/types"
import { MutationTree, ActionTree, GetterTree } from "vuex"
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

// FIXME stateにObjectを代入しようとするとstrict=trueの場合エラーがでるため暫定的にfalseに設定する
export const strict = false

export const name = 'index'

export const state = (): IndexState => ({
  loaded: false,
  user: null,
  loggedIn: false
})

export const getters: GetterTree<IndexState, IndexState> = {
  loaded: state => state.loaded,
  user: state => state.user,
  loggedIn: state => state.loggedIn
}

export const mutations: MutationTree<IndexState> = {
  ...vuexfireMutations,
  setLoaded(state: IndexState, isLoaded: boolean): void {
    state.loaded = isLoaded
  },
  setUser(state: IndexState, user:any):void {
    state.user = user
    state.loggedIn = true
  }
}

export const actions: ActionTree<IndexState, IndexState> = {
  async callAuth() {
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  },
  signOut() {
    firebase.auth().signOut()
  }
}
