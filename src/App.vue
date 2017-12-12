<template>
  <div id="app">
    <router-view/>
    <navigator></navigator>
  </div>
</template>

<script>
import Navigator from "@/components/Navigator";

export default {
  name: "app",
  components: {
    Navigator
  },
  methods: {
    indexing() {
      const galleryId = this.$route.params.galleryId;
      const photoId = this.$route.params.photoId;
      if (galleryId) {
        this.$store.commit("changeGallery", galleryId);
      }
      if (photoId) {
        this.$store.commit("changePhoto", photoId);
      }
    }
  },
  mounted() {
    this.indexing();
  },
  watch: {
    $route() {
      this.indexing();
    }
  }
};
</script>
