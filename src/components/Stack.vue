<template>
  <div class="stack">
    <img class="casar" :src="gallery[2]">
    <img class="berta" :src="gallery[1]">
    <img class="anton" :src="gallery[0]">
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