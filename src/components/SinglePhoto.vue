<template>
  <div class="single-photo">
    <img class="photo" :src="photo.src">
    <p v-if="photo.desc">{{photo.desc}}</p>
  </div>
</template>

<script>
export default {
  name: "SinglePhoto",
  computed: {
    photo() {
      return this.$store.state.nowPhoto;
    }
  },
};
</script>