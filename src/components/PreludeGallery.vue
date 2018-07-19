<template>
    <div class="prelude-gallery">
        <navigator :title="gallery.name"></navigator>
        <ul>
            <prelude-photo v-for="photo in gallery.photos" :key="photo.codeName" :photo="photo"></prelude-photo>
        </ul>
        <finale></finale>
    </div>
</template>

<script>
    import Navigator from "@/components/Navigator";
    import PreludePhoto from "@/components/PreludePhoto";
    import Finale from "@/components/Finale";

    export default {
        name: "PreludeGallery",
        components: {
            Navigator,
            PreludePhoto,
            Finale
        },
        computed: {
            gallery() {
                return this.$store.state.nowGallery;
            },
        }
    };
</script>

<style lang="less">
    @import "../style/variables.less";
    .prelude-gallery {
        text-align: center;
        ul {
            margin-top: 40px;
            padding: 16px 0;
        }
    }
</style>