<template>
    <div>
        index.vue
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State, namespace, Action } from "vuex-class";
import { Article, Tag } from "~/types";

@Component({
  layout: 'author',
  middleware: 'authenticated',
  components: {}
})
export default class WriteArticlePage extends Vue {}
</script>

<style scoped>
</style>
