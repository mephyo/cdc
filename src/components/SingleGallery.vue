<template>
    <div class="single-gallery">
        <h1>{{gallery.name}}</h1>
        <ul>
            <single-photo v-for="(photo, index) in gallery.photos" :key="photo.codeName" :photo="photo" :index="index" :total="gallery.photos.length"></single-photo>
        </ul>
        <apply></apply>
        <wirbelwind></wirbelwind>
    </div>
</template>

<script>
    import Apply from "@/components/Apply";
    import SinglePhoto from "@/components/SinglePhoto";
    import Wirbelwind from "@/components/Wirbelwind";

    export default {
        name: "SingleGallery",
        components: {
            Apply,
            SinglePhoto,
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