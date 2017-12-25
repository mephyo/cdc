<template>
  <div class="stack">
    <img class="charlie" :img="gallery[2]">
    <img class="bravo" :img="gallery[1]">
    <img class="able" :img="gallery[0]">
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