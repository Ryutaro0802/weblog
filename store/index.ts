import { IndexState } from "~/types"
import { MutationTree, ActionTree, GetterTree } from "vuex"
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

export const name = 'index'

export const state = (): IndexState => ({
  loaded: false,
  user: '',
  loggedIn: false
})

export const getters: GetterTree<IndexState, IndexState> = {
  loaded: state => state.loaded,
  user: state => state.user,
  loggedIn: state => state.loggedIn,
}

export const mutations: MutationTree<IndexState> = {
  ...vuexfireMutations,
  setLoaded(state: IndexState, isLoaded: boolean): void {
    state.loaded = isLoaded
  },
  setUser(state: IndexState, user: string):void {
    state.user = user
    state.loggedIn = true
  }
}

export const actions: ActionTree<IndexState, IndexState> = {
  async callAuth() {
    const provider = new firebase.auth.GoogleAuthProvider()
    // try {
    //   const result:any = await firebase.auth().signInWithRedirect(provider)
    //   alert(result.credential)
    // } catch (error) {

    // }
    await firebase.auth().signInWithRedirect(provider).then(result => {
      if (result.credential) {
        const token = result.credential.accessToken
      }
      const user = result.user
      console.log(user)
    }).catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.email
      const credential = error.credential
    })
  },
  signOut() {
    firebase.auth().signOut()
  }
}
