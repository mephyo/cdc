<template>
    <li class="prelude-photo">
        <div class="photo-wrapper">
            <img class="photo" :src="photo.src" :class="{untouchable: !hackMode}" :alt="'This is the ' + (index + 1) + nTail + ' photo'">
        </div>
        <div class="scrim" @dblclick="likeMe" @click="dblTap()" v-if="!hackMode"></div>
        <div class="photo_toolbar">
            <div class="photo_index">{{index + 1 + " / " + total}}</div>
            <div class="photo_like" @click="likeMe">
                <svg class="like_icon" :class="{liked: isLiked}" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                </svg>
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        name: "PreludePhoto",
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
            },
            nTail() {
                switch (this.index + 1) {
                    case 1:
                        return "st"
                        break;
                    case 2:
                        return "nd"
                        break;
                    case 3:
                        return "rd"
                        break;
                    default:
                        return "th"
                        break;
                }
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

<style lang="less">
    @import "../style/variables.less";
    .prelude-photo {
        position: relative;
        margin: 8px 0;
        .photo-wrapper {
            margin: 0 auto;
            box-sizing: border-box;
            border: 8px solid @Moon;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25), 0px 0px 8px rgba(0, 0, 0, 0.125);
            background-color: @Europa;
            padding: 24px;
            .photo {
                max-width: 100%;
                display: block;
                position: relative;
                &.untouchable {
                    pointer-events: none;
                    user-select: none;
                }
            }
        }
        .scrim {
            position: absolute;
            top: 0;
            bottom: 36px;
            left: 0;
            right: 0;
            user-select: none;
        }
        .photo_toolbar {
            position: sticky;
            bottom: 1px;
            height: 36px;
            margin: 0 72px;
            z-index: 3;
            .photo_index {
                font-size: 1.125em;
                font-weight: 600;
                color: @Moon;
                height: 36px;
                line-height: 36px;
                width: 60px;
                text-align: right;
                position: absolute;
                right: -60px;
                bottom: 0;
            }
            .photo_like {
                height: 36px;
                width: 36px;
                border-radius: 4px;
                position: relative;
                margin: 0 auto;
                .like_icon {
                    margin: 6px;
                    fill: transparent;
                    stroke: @Moon;
                    stroke-width: 2px;
                    transition: .25s;
                    &.liked {
                        fill: #da5353;
                        animation: scaling .5s ease 1;
                    }
                }
            }
        }
    }
</style>