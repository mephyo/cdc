<template>
  <div class="photo">
      <img :src="thumb" class="photo-thumb">
      <img :src="src" class="photo-main" ref="mainPhoto">
  </div>
</template>

<script>
export default {
  name: "Photo",
  props: {
    src: String,
    thumb: String
  },
  watch: {
      $mainPhoto(){
          
      }
  }
};
</script>