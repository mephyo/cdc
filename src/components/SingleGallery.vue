<template>
    <div class="single-gallery">
        <h1>{{gallery.name}}</h1>
        <ul>
            <li v-for="(photo, index) in gallery.photos" :key="photo.codeName">
                <router-link :to="{ name: 'SinglePhoto', params: { photoId: photo.codeName }}">
                    <img class="photo" v-lazy="photo.src">
                    <img class="caught" src="../assets/images/caught.png" v-if="!hackMode">
                </router-link>
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
        }
    };
</script>