<template>
    <div class="overtune">
        <transition name="trans_blur">
            <div v-if="!locked">
                <div class="logo main-logo"></div>
                <h1>Camera del Cavallo
                    <span v-if="noLimits"> 🔞</span>
                </h1>
                <ul class="gallery-list">
                    <li v-for="project in gallery" :key="project.codeName">
                        <router-link :to="{ name: 'SingleGallery', params: { galleryId: project.codeName }}">
                            <stark :gallery="project.cover"></stark>
                            <div class="title">{{project.name}}</div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <alien v-else @unlocked="unlock"></alien>
        </transition>
    </div>
</template>

<script>
    import Stark from "@/components/Stark";
    import Alien from "@/components/Alien";

    export default {
        name: "Overtune",
        components: {
            Stark,
            Alien
        },
        data() {
            return {
                gallery: {},
                locked: true
            }
        },
        computed: {
            noLimits() {
                return this.$store.state.showPrivate;
            },
            badFilter() {
                function checkPrivate(project) {
                    if (project.private === true) {
                        return project
                    }
                }
                return this.$store.state.gallery.filter(checkPrivate);
            },
            goodFilter() {
                function checkPrivate(project) {
                    if (project.private === false) {
                        return project
                    }
                }
                return this.$store.state.gallery.filter(checkPrivate);
            }
        },
        methods: {
            rebelion() {
                const edgeOfLaw = this.$route.path
                if (edgeOfLaw === '/nlm') {
                    this.$store.commit("getMeOut")
                    this.gallery = this.badFilter
                } else {
                    this.locked = false
                    this.gallery = this.goodFilter
                }
            },
            unlock() {
                this.locked = false
            }
        },
        mounted() {
            this.rebelion();
        }
    };
</script>