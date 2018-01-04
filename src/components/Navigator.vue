<template>
  <nav class="navigator" v-if="scenes !== 'Overtune'">
    <div class="navigator_content_wrapper" v-if="scenes === 'SingleGallery'">
      <div class="navs" @click="goHome">
        <div class="icon icon_left"></div>
        <div class="logo"></div>
      </div>
    </div>
    <div class="navigator_content_wrapper" v-if="scenes === 'SinglePhoto'">
      <div class="navs" @click="goGallery">
        <div class="icon icon_left"></div>
        <div class="gallery-name">{{galleryName}}</div>
      </div>
      <div class="tools">
        <!-- <div class="icon icon_back" @click="goPrevious" :class="{disabled : !havePrevious}"></div> -->
        <!-- <div class="icon icon_forward" @click="goNext" :class="{disabled : !haveNext}"></div> -->
      </div>
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
      scenes() {
        return this.$route.name
      },
      galleryName() {
        if (this.$store.state.nowGallery) {
          return this.$store.state.nowGallery.name;
        }
      },
      havePrevious() {
        if (this.$store.state.nowPhoto.src) {
          return this.$store.state.nowPhotoIndex > 0 ? true : false;
        }
      },
      haveNext() {
        if (this.$store.state.nowPhoto.src) {
          return this.$store.state.nowPhotoIndex + 1 < this.$store.state.nowGallery.photos.length ? true : false;
        }
      }
    },
    methods: {
      // In SingleGallery
      goHome() {
        this.$router.push({
          name: "Overtune"
        });
      },
      // In SinglePhoto
      goGallery() {
        this.$router.push({
          name: "SingleGallery",
          params: {
            galleryId: this.$store.state.nowGallery.codeName
          }
        });
      },
      goPrevious() {
        if (!this.havePrevious) {
          return "No more";
        }
        let previousId = this.$store.state.nowGallery.photos[
          this.$store.state.nowPhotoIndex - 1
        ].codeName;
        this.$router.push({
          name: "SinglePhoto",
          params: {
            photoId: previousId
          }
        });
      },
      goNext() {
        if (!this.haveNext) {
          return "No more";
        }
        let nextId = this.$store.state.nowGallery.photos[
          this.$store.state.nowPhotoIndex + 1
        ].codeName;
        this.$router.push({
          name: "SinglePhoto",
          params: {
            photoId: nextId
          }
        });
      }
    }
  };

</script>
