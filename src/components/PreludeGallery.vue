<template>
    <div class="prelude-gallery">
        <h1>{{gallery.name}}</h1>
        <ul v-if="!galleryHorizonalMode">
            <prelude-photo v-for="(photo, index) in gallery.photos" :key="photo.codeName" :photo="photo" :index="index" :total="gallery.photos.length"></prelude-photo>
        </ul>
        <div class="slider-wrapper" v-else>
            <agile :arrows="false" :dots="false" :infinite="false">
                <prelude-photo v-for="(photo, index) in gallery.photos" :key="photo.codeName" :photo="photo" :index="index" :total="gallery.photos.length"></prelude-photo>
            </agile>
        </div>
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
            },
            galleryHorizonalMode() {
                return this.$store.state.galleryHorizonalMode;
            }
        },
        mounted() {
            window.scrollTo(0, 0)
        }
    };
</script>

<style lang="less">
    @import "../style/variables.less";
    .prelude-gallery {
        text-align: center;
        margin: 8px 0 44px 0;
        h1 {
            font-size: 4em;
            margin: 16px 0;
            white-space: nowrap;
            font-weight: 800;
            overflow: hidden;
        }
        ul,
        .slider-wrapper {
            min-height: 50vh;
            padding: 16px 0;
            margin-bottom: 32px;
            background-color: @Arcturus;
        }
    }
</style>