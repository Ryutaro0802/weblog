<template>
  <section>
    <div class="columns is-multiline">
      <div
        v-for="article in articles"
        :key="article.id"
        class="column is-one-third"
      >
        <WlArticleCard :article="article" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State, namespace } from "vuex-class";
import { Person, Article, Tag } from "~/types";
import Card from "~/components/Card.vue";
import WlArticleCard from "~/components/molecules/WlArticleCard.vue";
import * as tags from '~/store/tags';

const Tags = namespace(tags.name);

const articles = [
  {
    id: 0,
    title: "articleTitle",
    text: "articleText",
    createdAt: "articleCreatedAt"
  },
  {
    id: 1,
    title: "articleTitle",
    text: "articleText",
    createdAt: "articleCreatedAt"
  },
  {
    id: 2,
    title: "articleTitle",
    text: "articleText",
    createdAt: "articleCreatedAt"
  },
  {
    id: 3,
    title: "articleTitle",
    text: "articleText",
    createdAt: "articleCreatedAt"
  },
  {
    id: 4,
    title: "articleTitle",
    text: "articleText",
    createdAt: "articleCreatedAt"
  }
];

@Component({
  components: {
    WlArticleCard
  }
})
export default class IndexPage extends Vue {
  articles = articles;
  @State people?: Person;
  @Tags.Getter tags?: Tag;
  @Tags.Action INIT_TAGS;
  async mounted() {
    console.log('mounted');
    this.INIT_TAGS();
  }
}
</script>

<style scoped>
</style>
