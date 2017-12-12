<template>
  <nav class="navigator" v-if="this.status!==0">
      <div class="navs" @click="goBack">
          <div class="icon icon_left"></div>
          <div class="logo" v-if="this.status===1"></div>
          <div class="gallery-name" v-if="this.status===2">{{this.galleryName}}</div>
      </div>
      <div class="tools" v-if="this.status===2">
        <div class="icon icon_back" @click="goPrevious" :class="{disabled : !havePrevious}"></div>
        <div class="icon icon_forward" @click="goNext" :class="{disabled : !haveNext}"></div>
      </div>
  </nav>
</template>

<script>
export default {
  name: "Navigator",
  props: {
    gallery: Object
  },
  computed: {
    status() {
      switch (this.$route.name) {
        case "Overtune":
          return 0;
          break;
        case "SingleGallery":
          return 1;
          break;
        case "SinglePhoto":
          return 2;
          break;
        default:
          return 0;
          break;
      }
    },
    galleryName() {
      if (this.$store.state.nowGallery) {
        return this.$store.state.nowGallery.name;
      }
    },
    havePrevious() {
      if (this.$store.state.nowPhoto) {
        return this.$store.state.nowPhotoIndex > 0 ? true : false;
      }
    },
    haveNext() {
      if (this.$store.state.nowPhoto) {
        return this.$store.state.nowPhotoIndex + 1 <
          this.$store.state.nowGallery.photos.length
          ? true
          : false;
      }
    }
  },
  methods: {
    goPrevious() {
      if (!this.havePrevious) {
        return;
      }
      const previousId = this.$store.state.nowGallery.photos[
        this.$store.state.nowPhotoIndex - 1
      ].codeName;
      this.$router.push({
        name: "SinglePhoto",
        params: { photoId: previousId }
      });
    },
    goNext() {
      if (!this.haveNext) {
        return;
      }
      const nextId = this.$store.state.nowGallery.photos[
        this.$store.state.nowPhotoIndex + 1
      ].codeName;
      this.$router.push({
        name: "SinglePhoto",
        params: { photoId: nextId }
      });
    },
    goGallery() {
      this.$router.push({
        name: "SingleGallery",
        params: { galleryId: this.$store.state.nowGallery.codeName }
      });
    },
    goHome() {
      this.$router.push({
        name: "Overtune"
      });
    },
    goBack() {
      switch (this.status) {
        case 1:
          this.goHome();
          break;
        case 2:
          this.goGallery();
          break;
        default:
          break;
      }
    }
  }
};
</script>