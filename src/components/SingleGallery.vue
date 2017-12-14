<template>
  <div class="single-gallery">
      <h1>{{gallery.name}}</h1>
    <ul>
      <li v-for="photo in gallery.photos" :key="photo.codeName">
        <a @click="goPhoto(photo.codeName)">
          <img class="photo" v-lazy="photo.src">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SingleGallery",
  computed: {
    gallery() {
      return this.$store.state.nowGallery;
    }
  },
  methods: {
    goPhoto(codeName) {
      this.$router.push({
        name: "SinglePhoto",
        params: { photoId: codeName }
      });
    }
  }
};
</script>