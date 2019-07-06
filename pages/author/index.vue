<template>
  <div>
    <h1 class="title is-3">
      ログイン
    </h1>
    <div v-if="!user">
      <a class="button" @click="callAuth">SignIn</a>
    </div>
    <div v-else>
      ログイン済み
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { State, namespace, Action, Getter, Mutation } from "vuex-class"
import { Article, Tag } from "~/types"
import auth from '~/plugins/auth'

@Component({
  layout: 'author',
  components: {}
})
export default class ArticlesIndexPage extends Vue {
  @Action callAuth
  @Getter user
  @Mutation setUser

  async created() {
    let user: any = null
    // if (!this.user) {
    //   user = await auth()
    // }
    // this.setUser({ user })
  }
}
</script>

<style scoped></style>
