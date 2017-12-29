<template>
  <nav class="navigator" v-if="this.scenes !== 'Overtune'">
    <div class="navigator_content_wrapper" v-if="this.scenes === 'SingleGallery'||'Apply'">
      <div class="navs" @click="goHome">
        <div class="icon icon_left"></div>
        <div class="logo"></div>
      </div>
      <div class="tools">
        <a href="mailto:hergloves@gmail.com?subject='想要和你拍照'">
          <div class="navigator_button" v-if="this.theEndIsNear">我也很想拍你哦</div>
        </a>
      </div>
    </div>
    <div class="navigator_content_wrapper" v-if="this.scenes === 'SinglePhoto'">
      <div class="navs" @click="goGallery">
        <div class="icon icon_left"></div>
        <div class="gallery-name">{{this.galleryName}}</div>
      </div>
      <div class="tools">
        <div class="icon icon_back" @click="goPrevious" :class="{disabled : !havePrevious}"></div>
        <div class="icon icon_forward" @click="goNext" :class="{disabled : !haveNext}"></div>
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
    data() {
      return {
        theEndIsNear: false
      }
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
        if (this.$store.state.nowPhoto) {
          return this.$store.state.nowPhotoIndex > 0 ? true : false;
        }
      },
      haveNext() {
        if (this.$store.state.nowPhoto) {
          return this.$store.state.nowPhotoIndex + 1 < this.$store.state.nowGallery.photos.length ? true : false;
        }
      }
    },
    methods: {
      handleScroll: function () {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - window.innerHeight / 2)) {
          this.theEndIsNear = true
        } else {
          this.theEndIsNear = false
        }
      },
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
          return;
        }
        const previousId = this.$store.state.nowGallery.photos[
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
          return;
        }
        const nextId = this.$store.state.nowGallery.photos[
          this.$store.state.nowPhotoIndex + 1
        ].codeName;
        this.$router.push({
          name: "SinglePhoto",
          params: {
            photoId: nextId
          }
        });
      }
    },
    created: function () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  };

</script>
