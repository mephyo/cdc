<template>
    <div class="overtune">
        <div class="logo main-logo"></div>
        <h1>Camera del Cavallo
            <span v-if="outLaw"> 🔞</span>
        </h1>
        <ul class="gallery-list">
            <li v-for="project in gallery" :key="project.codeName">
                <lazy-component>
                    <router-link :to="{ name: 'SingleGallery', params: { galleryId: project.codeName }}">
                        <stark :gallery="project.cover"></stark>
                        <div class="title">{{project.name}}</div>
                    </router-link>
                </lazy-component>
            </li>
        </ul>
    </div>
</template>

<script>
    import Stark from "@/components/Stark";

    export default {
        name: "Overtune",
        components: {
            Stark
        },
        data() {
            return {
                gallery: {},
                outLaw: false
            }
        },
        computed: {
            allGallery() {
                return this.$store.state.gallery;
            },
            filteredGallery() {
                function checkPrivate(project) {
                    if (project.private === false) {
                        return project
                    }
                }
                return this.$store.state.gallery.filter(checkPrivate);
            }
        },
        mounted() {
            const edgeOfLaw = this.$route.path
            if (edgeOfLaw === '/nlm') {
                this.gallery = this.allGallery
                this.outLaw = true
            } else {
                this.gallery = this.filteredGallery
                this.outLaw = false
            }
        }
    };
</script>