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
            identifier() {
                let viewTimes = localStorage.getItem("viewTimes")
                let lastLocation = localStorage.getItem("lastLocation")
                if (!viewTimes) {
                    viewTimes = 1
                    localStorage.setItem("viewTimes", 1)
                } else {
                    viewTimes++
                    localStorage.setItem("viewTimes", viewTimes)
                }
                if (!lastLocation) {
                    lastLocation = "Not Applied."
                }

                const viewerInfo = {
                    model: navigator.userAgent,
                    viewTimes: viewTimes,
                    lastLocation: lastLocation
                }

                setTimeout(() => {
                    this.$store.dispatch("newViewer", viewerInfo)
                }, 2000);
            },
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
            this.identifier()
        },
        watch: {
            $route() {
                this.indexing();
            }
        }
    };
</script>