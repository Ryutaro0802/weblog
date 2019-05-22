<template>
  <section>
    <div class="columns is-multiline">
      <div v-for="article in articles" :key="article.id" class="column is-one-third">
        <WlArticleCard :article="article"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State, namespace } from "vuex-class";
import { Article, Tag } from "~/types";
import WlArticleCard from "~/components/molecules/WlArticleCard.vue";
import * as tags from "~/store/tags";
import * as articles from "~/store/articles";

const Tags = namespace(tags.name);
const Articles = namespace(articles.name);

@Component({
  components: {
    WlArticleCard
  }
})
export default class IndexPage extends Vue {
  @Tags.Getter tags!: [];
  @Tags.Action BIND_TAGS;
  @Articles.Getter articles!: [];
  @Articles.Action BIND_ARTICLES;
  async mounted() {
    await Promise.all([
      this.tags.length ? Promise.resolve() : this.BIND_TAGS(),
      this.articles.length ? Promise.resolve() : this.BIND_ARTICLES()
    ]);
  }
}
</script>

<style scoped>
</style>
