<template>
  <div class="index-card">
    <nuxt-link class="anchor" :to="linkTo">
      <figure v-if="$slots.image" class="image">
        <slot name="image"/>
      </figure>
      <div v-if="$slots.contents" class="contents">
        <slot name="contents"/>
      </div>
      <div v-if="$slots.sub" class="sub">
        <slot name="sub"/>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class BlIndexCard extends Vue {
  @Prop() linkTo?: string;
}
</script>

<style scoped>
.anchor {
  display: flex;
  flex-direction: column;
  color: inherit;
  height: 100%;
}
.contents {
  padding: 15px 0 25px;
  flex-grow: 1;
}
.sub {
  font-size: 14px;
  text-align: right;
}
</style>
