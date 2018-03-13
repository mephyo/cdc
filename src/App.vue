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
                    lastLocation: lastLocation,
                    language: navigator.language,
                    width: window.innerWidth,
                    height: window.innerHeight
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
            this.$store.dispatch("getGallery").then(() => this.indexing())
            this.identifier()
            console.log('%c开发者，如果您要保存图片，请仅用于个人欣赏，谢谢。', 'font-size: 18px;');
            console.log('%cHacker, do whatever you want but respect the model.', 'font-size: 18px;');
        },
        watch: {
            $route() {
                this.indexing();
            }
        }
    };
</script>