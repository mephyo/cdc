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
            },
            remix() {
                const likedPhotos = JSON.parse(localStorage.getItem("likedPhotos"))
                if (likedPhotos && likedPhotos.length) {
                    let favourites = {
                        "name": "❤",
                        "codeName": "favourites",
                        "cover": [],
                        "private": false,
                        "photos": []
                    }
                    likedPhotos.forEach(like => {
                        this.gallery.forEach(g => {
                            if (g.codeName !== "favourites") {
                                g.photos.forEach(p => {
                                    if (p.codeName === like) {
                                        favourites.photos.unshift(p)
                                        favourites.cover.unshift(p.src)
                                    }
                                })
                            }
                        })
                    });
                    if (this.gallery[0].codeName === "favourites") {
                        this.gallery[0] = favourites
                    } else {
                        this.gallery.unshift(favourites)
                    }
                    this.$store.commit("addFavourite", favourites)
                } else {
                    if (this.gallery[0].codeName === "favourites") {
                        this.gallery.shift()
                        this.$store.commit("removeFavourite")
                    }
                }
            }
        },
        mounted() {
            this.rebelion();
            this.remix();
            window.scrollTo(0, 0)
        }
    };
</script>