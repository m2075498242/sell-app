<template>
  <div class="shop-info"></div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ShopInfo extends Vue {
  private created() {
    // this.active = 0;
    console.log(this.$route);
  }
}
</script>

<style scoped></style>
