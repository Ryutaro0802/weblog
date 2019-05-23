<template>
  <div>
     <h1 class="title is-1">
        {{article.title}}
      </h1>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <!-- <div v-html="markDownToHtml" /> -->
  </div>
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
    this.INIT_SINGLE_ARTICLE({ id: this.$route.params.id });
  }

  // async asyncData({ store, route, params }) {
  // await this.INIT_SINGLE_ARTICLE({ id: params.id });
  // }
}
</script>

<style scoped>
</style>
