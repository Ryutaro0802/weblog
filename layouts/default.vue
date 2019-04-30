<template>
  <div class="container">
    <WlLogo>
      memo.
    </WlLogo>
    <WlNavBar />
    <nuxt/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import WlLogo from "~/components/atoms/WlLogo.vue";
import WlNavBar from "~/components/organisms/WlNavBar.vue";

@Component({
  components: {
    WlLogo,
    WlNavBar
  }
})
export default class Default extends Vue {}
</script>
