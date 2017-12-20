<template>
  <div class="stack">
    <img class="charlie" v-lazy="gallery[2]">
    <img class="bravo" v-lazy="gallery[1]">
    <img class="able" v-lazy="gallery[0]">
  </div>
</template>

<script>
export default {
  name: "Stack",
  props: {
    gallery: Array
  },
  data() {
    return {};
  }
};
</script>