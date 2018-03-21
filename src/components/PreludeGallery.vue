<template>
    <div class="prelude-gallery">
        <h1>{{gallery.name}}</h1>
        <ul>
            <prelude-photo v-for="(photo, index) in gallery.photos" :key="photo.codeName" :photo="photo" :index="index" :total="gallery.photos.length"></prelude-photo>
        </ul>
        <apply></apply>
        <wirbelwind></wirbelwind>
    </div>
</template>

<script>
    import Apply from "@/components/Apply";
    import PreludePhoto from "@/components/PreludePhoto";
    import Wirbelwind from "@/components/Wirbelwind";

    export default {
        name: "PreludeGallery",
        components: {
            Apply,
            PreludePhoto,
            Wirbelwind
        },
        computed: {
            gallery() {
                return this.$store.state.nowGallery;
            }
        },
        mounted() {
            window.scrollTo(0, 0)
        }
    };
</script>

<style lang="less">
    .prelude-gallery {
        text-align: center;
        margin: 8px 4px 44px 4px;
        ul {
            min-height: 50vh;
        }
    }
</style>