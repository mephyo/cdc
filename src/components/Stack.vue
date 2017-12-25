<template>
  <div class="stack">
    <img class="charlie" :src="gallery[2]">
    <img class="bravo" :src="gallery[1]">
    <img class="able" :src="gallery[0]">
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