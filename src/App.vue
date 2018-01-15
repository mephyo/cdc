<template>
    <main id="app">
        <router-view v-if="galleryLoaded" />
        <navigator></navigator>
    </main>
</template>

<script>
    import Navigator from "@/components/Navigator";

    export default {
        name: "app",
        components: {
            Navigator
        },
        data() {
            return {
                galleryLoaded: false
            }
        },
        methods: {
            indexing() {
                this.galleryLoaded = true
                let galleryId = this.$route.params.galleryId;
                let photoId = this.$route.params.photoId;
                if (galleryId) {
                    this.$store.commit("changeGallery", galleryId);
                }
                if (photoId) {
                    this.$store.commit("changePhoto", photoId);
                }
            }
        },
        mounted() {
            this.$store.dispatch("getGallery").then(() => this.indexing())
            setTimeout(() => {
                this.$store.dispatch("newViewer", navigator.userAgent)
            }, 2000);
        },
        watch: {
            $route() {
                this.indexing();
            }
        }
    };
</script>