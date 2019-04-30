<template>
  <nuxt-link to="/">
    <h1 class="title is-1">
      <slot />
    </h1>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class WlLogo extends Vue {}
</script>

<style scoped>
</style>
