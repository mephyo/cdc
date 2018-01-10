<template>
    <div class="single-gallery">
        <h1>{{gallery.name}}</h1>
        <ul>
            <li v-for="photo in gallery.photos" :key="photo.codeName">
                <lazy-component>
                    <router-link :to="{ name: 'SinglePhoto', params: { photoId: photo.codeName }}">
                        <img class="photo" v-lazy="photo.src">
                        <img class="caught" src="../assets/images/caught.png" v-if="!hackMode">
                    </router-link>
                </lazy-component>
            </li>
        </ul>
        <apply></apply>
    </div>
</template>

<script>
    import Apply from "@/components/Apply";

    export default {
        name: "SingleGallery",
        components: {
            Apply
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