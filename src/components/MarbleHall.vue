<template>
  <nav class="hall">
      <div class="glass"></div>
      <div class="marble">
          <ul class="navigator_main">
              <li class="navigator_item"></li>
          </ul>
      </div>
  </nav>
</template>

<script>
  export default {
    name: "MarbleHall",
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
          return this.$store.state.nowPhotoIndex + 1 < this.$store.state.nowGallery.photos.length ? true : false;
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
      },
      goGallery() {
        this.$router.push({
          name: "SingleGallery",
          params: {
            galleryId: this.$store.state.nowGallery.codeName
          }
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
