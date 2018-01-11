<template>
    <div class="overtune">
        <transition name="trans_blur">
            <div v-if="!locked">
                <div class="logo main-logo" :class="{invert: hackMode}" @click="launchHackMode"></div>
                <h1>Camera del Cavallo
                    <span v-if="noLimits || noSecrets"> 🔞</span>
                </h1>
                <ul class="gallery-list">
                    <li v-for="project in gallery" :key="project.codeName">
                        <router-link :to="{ name: 'SingleGallery', params: { galleryId: project.codeName }}">
                            <stark :gallery="project.cover"></stark>
                            <div class="title">{{project.name}}</div>
                        </router-link>
                    </li>
                </ul>
                <div class="logo ww_logo" :class="{invert: hackMode}" @click="launchHackMode"></div>
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
                locked: true,
                log: 0
            }
        },
        computed: {
            noLimits() {
                return this.$store.state.showPrivate;
            },
            noSecrets() {
                return this.$store.state.onlyForLisa;
            },
            hackMode() {
                return this.$store.state.hackMode;
            },
            secretFilter() {
                function checkPrivate(project) {
                    if (project.secret === false) {
                        return project
                    }
                }
                return this.$store.state.gallery.filter(checkPrivate);
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
                } else if (edgeOfLaw === '/18x') {
                    this.$store.commit("lisaIsWatching")
                    this.gallery = this.secretFilter
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