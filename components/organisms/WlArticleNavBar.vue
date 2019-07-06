<template>
  <div class="navigation">
    <div class="left">
      <ul class="anchors">
        <li>
          <nuxt-link to="/author" class="anchor">トップ</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/author/write_article" class="anchor">記事を書く</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/author/management_articles" class="anchor">記事編集</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/author/management_tags" class="anchor">タグ編集</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="right" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class WlNavBar extends Vue {}
</script>

<style scoped>
.navigation {
  display: flex;
  border-bottom: 1px solid #d8d8d8;
  margin-bottom: 20px;
}
.left {
  flex-grow: 1;
}
.anchors {
  display: flex;
}
.anchors li {
  margin-right: 20px;
}
.anchor {
  color: inherit;
  padding: 15px 0;
  display: block;
}
</style>