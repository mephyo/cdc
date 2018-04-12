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
    @import "../style/variables.less";
    .prelude-gallery {
        text-align: center;
        margin: 8px 0 44px 0;
        ul {
            min-height: 50vh;
            padding: 16px;
            margin-bottom: 32px;
            background-color: @Arcturus;
        }
    }
</style>