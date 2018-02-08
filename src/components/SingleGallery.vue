<template>
    <div class="single-gallery">
        <h1>{{gallery.name}}</h1>
        <ul>
            <li v-for="(photo, index) in gallery.photos" :key="photo.codeName">
                <img class="photo" :src="photo.src">
                <img class="caught" src="../assets/images/caught.png" v-if="!hackMode">
                <div class="photo_title">{{index + 1 + " / " + gallery.photos.length}}</div>
            </li>
        </ul>
        <apply></apply>
        <wirbelwind></wirbelwind>
    </div>
</template>

<script>
    import Apply from "@/components/Apply";
    import Wirbelwind from "@/components/Wirbelwind";

    export default {
        name: "SingleGallery",
        components: {
            Apply,
            Wirbelwind
        },
        computed: {
            gallery() {
                return this.$store.state.nowGallery;
            },
            hackMode() {
                return this.$store.state.hackMode;
            }
        },
        mounted() {
            window.scrollTo(0, 0)
        }
    };
</script>