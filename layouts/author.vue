<template>
  <div>
    <div v-if="!loaded">
      ロード中だよ
    </div>
    <div class="container">
      <WlLogo>memo.</WlLogo>
      <WlArticleNavBar />
      <nuxt/>
    </div>
  </div>
</template>

<script lang="ts">
import { State, namespace } from "vuex-class";
import { Component, Prop, Vue } from "nuxt-property-decorator";
import WlLogo from "~/components/atoms/WlLogo.vue";
import WlArticleNavBar from "~/components/organisms/WlArticleNavBar.vue";

@Component({
  components: {
    WlLogo,
    WlArticleNavBar
  }
})
export default class Default extends Vue {
  @State loaded;
}
</script>
