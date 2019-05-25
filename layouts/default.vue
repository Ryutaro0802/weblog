<template>
  <div>
    <div v-if="!loaded">
      ロード中だよ
    </div>
    <div class="container">
      <WlLogo>memo.</WlLogo>
      <WlNavBar/>
      <nuxt/>
    </div>
  </div>
</template>

<script lang="ts">
import { State, namespace } from "vuex-class";
import { Component, Prop, Vue } from "nuxt-property-decorator";
import WlLogo from "~/components/atoms/WlLogo.vue";
import WlNavBar from "~/components/organisms/WlNavBar.vue";

@Component({
  components: {
    WlLogo,
    WlNavBar
  }
})
export default class Default extends Vue {
  @State loaded;
}
</script>
