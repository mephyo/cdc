<template>
    <li class="single-photo">
        <img class="photo" :src="photo.src" :class="{untouchable: !hackMode}">
        <div class="scrim" @dblclick="likeMe" @click="dblTap()" v-if="!hackMode"></div>
        <div class="photo_toolbar">
            <div class="photo_index">{{index + 1 + " / " + total}}</div>
            <div class="photo_like" @click="likeMe">
                <svg class="like_icon" :class="{liked: isLiked}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                </svg>
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        name: "SinglePhoto",
        props: {
            photo: Object,
            index: Number,
            total: Number
        },
        data() {
            return {
                isLiked: false,
                timer: null
            }
        },
        computed: {
            hackMode() {
                return this.$store.state.hackMode;
            }
        },
        methods: {
            likeMe() {
                let likedPhotos = JSON.parse(localStorage.getItem("likedPhotos"))
                if (this.isLiked) {
                    this.isLiked = false
                    if (!likedPhotos) {
                        localStorage.setItem("likedPhotos", JSON.stringify([]))
                    } else {
                        likedPhotos = likedPhotos.filter(e => e !== this.photo.codeName)
                        localStorage.setItem("likedPhotos", JSON.stringify(likedPhotos))
                    }
                } else {
                    this.isLiked = true
                    if (!likedPhotos) {
                        localStorage.setItem("likedPhotos", JSON.stringify([this.photo.codeName]))
                    } else {
                        likedPhotos.push(this.photo.codeName)
                        localStorage.setItem("likedPhotos", JSON.stringify(likedPhotos))
                    }
                }
            },
            dblTap() {
                if (this.timer == null) {
                    this.timer = setTimeout(function () {
                        this.timer = null;
                    }, 500)
                } else {
                    clearTimeout(this.timer);
                    this.timer = null;
                    this.likeMe()

                }
            }
        },
        mounted() {
            const likedPhotos = JSON.parse(localStorage.getItem("likedPhotos"))
            if (!likedPhotos) return
            likedPhotos.forEach(photo => {
                if (photo === this.photo.codeName) {
                    this.isLiked = true
                }
            });
        }
    };
</script>