<template>
    <main id="app">
        <router-view v-if="galleryLoaded" />
    </main>
</template>

<script>
    export default {
        name: "app",
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
                } else {
                    viewTimes++
                }
                localStorage.setItem("viewTimes", viewTimes)
                if (!lastLocation) {
                    lastLocation = "Not Applied."
                }

                const viewerInfo = {
                    model: navigator.userAgent,
                    viewTimes: viewTimes,
                    lastLocation: lastLocation,
                    navigator: {
                        language: navigator.language,
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                }
                setTimeout(() => {
                    this.$store.dispatch("newViewer", viewerInfo)
                }, 2000);
            },
            indexing() {
                this.galleryLoaded = true
                let galleryId = this.$route.params.galleryId;
                if (galleryId) {
                    this.$store.commit("changeGallery", galleryId);
                }
            }
        },
        mounted() {
            localStorage.removeItem("likedPhotos")
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