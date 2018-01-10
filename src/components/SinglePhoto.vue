<template>
    <div class="single_photo">
        <agile :options="agileOpts" v-if="galleryReady">
            <div class="single_slide" v-for="photo in gallery.photos" :key="photo.codeName">
                <div class="photo_wrapper">
                    <img class="photo" :src="photo.src">
                    <img class="caught" src="../assets/images/caught.png" v-if="!hackMode">
                </div>
                <p v-if="photo.desc">{{photo.desc}}</p>
            </div>
        </agile>
    </div>
</template>

<script>
    export default {
        name: "SinglePhoto",
        data() {
            return {
                agileOpts: {
                    arrows: false,
                    dots: false,
                    infinite: false,
                    speed: 600
                }
            }
        },
        computed: {
            gallery() {
                return this.$store.state.nowGallery;
            },
            photo() {
                return this.$store.state.nowPhoto;
            },
            galleryReady() {
                if (this.$store.state.nowGallery.photos) {
                    return true
                }
            },
            hackMode() {
                return this.$store.state.hackMode;
            }
        }
    };
</script>