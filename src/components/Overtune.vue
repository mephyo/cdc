<template>
    <div class="overtune">
        <transition name="trans_blur">
            <div v-if="!locked">
                <div class="logo main-logo" :class="{invert: hackMode}" @click="launchHackMode"></div>
                <h1>Camera del Cavallo
                    <span v-if="noLimits"> 🔞</span>
                </h1>
                <ul class="gallery-list">
                    <li v-for="project in gallery" :key="project.codeName">
                        <router-link :to="{ name: 'SingleGallery', params: { galleryId: project.codeName }}">
                            <stark :gallery="project.cover" :name="project.name"></stark>
                        </router-link>
                    </li>
                </ul>
                <wirbelwind></wirbelwind>
            </div>
            <alien v-else @unlocked="unlock"></alien>
        </transition>
    </div>
</template>

<script>
    import Stark from "@/components/Stark";
    import Alien from "@/components/Alien";
    import Wirbelwind from "@/components/Wirbelwind";

    export default {
        name: "Overtune",
        components: {
            Stark,
            Alien,
            Wirbelwind
        },
        data() {
            return {
                gallery: {},
                locked: true,
                log: 0
            }
        },
        computed: {
            noLimits() {
                return this.$store.state.showPrivate;
            },
            hackMode() {
                return this.$store.state.hackMode;
            },
            badFilter() {
                return this.$store.state.gallery;
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
                const haveAccess = sessionStorage.getItem('locked')
                const edgeOfLaw = this.$route.path
                if (haveAccess) {
                    this.locked = false
                }
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
                sessionStorage.setItem('locked', false);
            },
            launchHackMode() {
                if (this.log >= 7) {
                    this.$store.commit("hackModeEnabled")
                } else {
                    this.log++
                }
            }
        },
        mounted() {
            this.rebelion();
        }
    };
</script>