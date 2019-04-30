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
import { State } from "vuex-class";
import { Person } from "~/types";
import Card from "~/components/Card.vue";
import WlArticleCard from "~/components/molecules/WlArticleCard.vue";

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
export default class extends Vue {
  articles = articles;
  @State people: Person;
}
</script>

<style scoped>
</style>
