<template>
    <div class="overtune">
        <div v-if="!locked">
            <overtune-flag :black="hackMode" :nlm="noLimits" @click.native="launchHackMode" />
            <ul class="gallery-list">
                <li v-for="project in gallery" :key="project.codeName">
                    <router-link :to="{ name: 'PreludeGallery', params: { galleryId: project.codeName }}">
                        <overtune-stark :gallery="project.cover" :name="project.name"></overtune-stark>
                    </router-link>
                </li>
            </ul>
            <wirbelwind></wirbelwind>
        </div>
        <overtune-guard v-else @unlocked="unlock"></overtune-guard>
    </div>
</template>

<script>
    import OvertuneStark from "@/components/OvertuneStark";
    import OvertuneGuard from "@/components/OvertuneGuard";
    import OvertuneFlag from "@/components/OvertuneFlag";
    import Wirbelwind from "@/components/Wirbelwind";

    export default {
        name: "Overtune",
        components: {
            OvertuneStark,
            OvertuneGuard,
            OvertuneFlag,
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
                        "name": "喜欢过的照片",
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
            window.scrollTo(0, 0);
            setTimeout(() => {
                this.remix()
            }, 500);
        }
    };
</script>

<style lang="less">
    .gallery-list {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        li {
            margin: 8px;
            max-width: 480px;
        }
    }
</style>