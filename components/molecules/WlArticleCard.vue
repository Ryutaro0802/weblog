<template>
  <div>
    <WlIndexCard :link-to="`/articles/${article.id}`">
      <template v-slot:image>
        <img src="https://dummyimage.com/328x174/474747/474747" alt>
      </template>
      <template v-slot:contents>
        <p class="article-title">{{ article.title }}</p>
        <p class="article-text">{{ article.text }}</p>
      </template>
      <template v-slot:sub>
        <p class="article-sub-text">{{ article.createdAt }}</p>
      </template>
    </WlIndexCard>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { Article } from '~/types';
import WlIndexCard from "~/components/atoms/WlIndexCard.vue";

@Component({
  components: {
    WlIndexCard
  }
})
export default class WlArticleCard extends Vue {
  @Prop() article: Article;
}
</script>

<style scoped>
.index-card {
  height: 100%;
}
.article-title {
  font-size: 26px;
  font-weight: bold;
}
.article-text {
  color: #616161;
  font-size: 18px;
}
.article-tag-list {
  margin-top: 15px;
}
.article-sub-text {
  color: #8c8989;
}
</style>
