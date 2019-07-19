<template>
  <h1 class="title is-1">
    <nuxt-link :to="href">
      <slot />
    </nuxt-link>
  </h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class WlLogo extends Vue {
  @Prop()
  href!: string
}
</script>

<style scoped>
</style>
