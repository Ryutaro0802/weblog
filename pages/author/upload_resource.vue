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
  layout: "author",
  components: {}
})
export default class UploadResourcePage extends Vue {}
</script>

<style scoped>
</style>
