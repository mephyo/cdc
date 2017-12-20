<template>
  <div class="overtune">
    <div class="logo main-logo"></div>
    <h1>Camera del Cavallo</h1>
    <ul class="gallery-list">
      <li v-for="project in gallery" :key="project.codeName">
        <router-link :to="project.codeName">
          <stack :gallery="[project.photos[project.cover[0]].src, project.photos[project.cover[1]].src, project.photos[project.cover[2]].src]"></stack>
            <div class="title">{{project.name}}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import Stack from "@/components/Stack";

  export default {
    name: "Overtune",
    components: {
      Stack
    },
    computed: {
      gallery() {
        return this.$store.state.gallery;
      }
    }
  };

</script>
