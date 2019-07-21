<template>
  <div>
    <h1 class="title is-3">ログイン</h1>
    <p>user: {{ user }}</p>
    <div v-if="!user">
      <a class="button" @click="callAuth">SignIn</a>
    </div>
    <div v-else>ログイン済み</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State, Getter, Mutation, Action, namespace } from "vuex-class";
// import { Person, Article, Tag } from "~/types"
import auth from "~/plugins/auth";
import * as tags from "~/store/tags";

@Component({
  layout: "author",
  components: {}
})
export default class AuthorIndexPage extends Vue {
  @Getter user;
  @Mutation("setUser") setUser;
  @Action("callAuth") callAuth;
  @Action("signOut") signOut;

  async mounted() {
    let user: any = null;
    if (!this.user) {
      user = await auth();
      this.setUser({ user });
    }
  }
}
</script>

<style scoped></style>
