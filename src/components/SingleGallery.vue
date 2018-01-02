<template>
  <div class="single-gallery">
    <h1>{{gallery.name}}</h1>
    <ul>
      <li v-for="photo in gallery.photos" :key="photo.codeName">
        <lazy-component>
          <a @click="goPhoto(photo.codeName)">
            <picture class="photo">
              <source :srcset="photo.webp" type="image/webp" v-if="photo.webp">
              <source :srcset="photo.src" type="image/jpeg">
              <img :src="photo.src">
            </picture>
            <img class="caught" src="../assets/images/caught.png">
          </a>
        </lazy-component>
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
          params: {
            photoId: codeName
          }
        });
      }
    }
  };

</script>
