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
        let galleryId = this.$route.params.galleryId;
        let photoId = this.$route.params.photoId;
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
      console.log("Love is wise, hatred is foolish.");
    },
    watch: {
      $route() {
        this.indexing();
      }
    }
  };

</script>
