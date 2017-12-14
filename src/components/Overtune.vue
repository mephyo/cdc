<template>
  <div class="overtune">
    <div class="logo main-logo"></div>
    <h1>Camera del Cavallo</h1>
    <ul class="gallery-list">
      <li v-for="project in gallery" :key="project.codeName">
        <router-link :to="project.codeName">
          <div class="overtune-card">
            <img class="cover" v-lazy="project.photos[project.cover].src">
            <div class="title">{{project.name}}</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Overtune",
    computed: {
      gallery() {
        return this.$store.state.gallery;
      }
    }
  };

</script>
