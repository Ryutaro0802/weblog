<template>
  <div>
    <template v-if="loaded">
      <h1 class="title is-1">{{article.article.title}}</h1>
      <p>{{article.article.text}}</p>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <!-- <div v-html="markDownToHtml" /> -->
    </template>
  </div>
</template>

<script lang="ts">
import marked from "marked";
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import * as articles from "~/store/articles";

const Articles = namespace(articles.name);

@Component({
  components: {}
})
export default class ArticleDetailPage extends Vue {
  @State loaded;
  @Action loadComplete;
  @Articles.Getter article;

  async asyncData({ store, route, params }) {
    await store.dispatch("articles/INIT_SINGLE_ARTICLE", { id: params.id });
    store.dispatch('loadComplete');
  }
}
</script>

<style scoped></style>
