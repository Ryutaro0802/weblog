<template>
  <section>articleDetailPage</section>
</template>

<script lang="ts">
import marked from "marked";
import { Component, Vue } from "nuxt-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import * as articles from "~/store/articles";

const Articles = namespace(articles.name);

@Component({
  components: {}
})
export default class ArticleDetailPage extends Vue {
  @Articles.Getter article;
  @Articles.Action INIT_SINGLE_ARTICLE;

  mounted($route) {
    console.log(this.$route)
    // this.INIT_SINGLE_ARTICLE({ id: params.id });
  }

  // async asyncData({ store, route, params }) {
  // await this.INIT_SINGLE_ARTICLE({ id: params.id });
  // }
}
</script>

<style scoped>
</style>
