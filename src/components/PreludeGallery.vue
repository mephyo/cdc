<template>
    <div class="prelude-gallery">
        <h1>{{gallery.name}}</h1>
        <!-- <dl lang="zh-CN" v-if="gallery.codeName==='favourites'">
            <dt>Q: 这个功能有什么用？</dt>
            <dd>A: 大多数时候没什么用，然而当你在提交找我拍照信息的时候，可以选择吧喜欢的照片清单一起提交，这样我就知道你喜欢的类型了。</dd>
            <dt>Q: 如果你的照片我一张都不喜欢呢？</dt>
            <dd>A: 那你还找我拍个毛照。</dd>
        </dl> -->
        <ul>
            <prelude-photo v-for="(photo, index) in gallery.photos" :key="photo.codeName" :photo="photo" :index="index" :total="gallery.photos.length"></prelude-photo>
        </ul>
        <apply></apply>
        <wirbelwind></wirbelwind>
    </div>
</template>

<script>
    import Apply from "@/components/Apply";
    import PreludePhoto from "@/components/PreludePhoto";
    import Wirbelwind from "@/components/Wirbelwind";

    export default {
        name: "PreludeGallery",
        components: {
            Apply,
            PreludePhoto,
            Wirbelwind
        },
        computed: {
            gallery() {
                return this.$store.state.nowGallery;
            }
        },
        mounted() {
            window.scrollTo(0, 0)
        }
    };
</script>

<style lang="less">
    @import "../style/variables.less";
    .prelude-gallery {
        text-align: center;
        margin: 8px 0 44px 0;
        h1 {
            font-size: 4em;
            margin: 16px 0;
            white-space: nowrap;
            font-weight: 800;
        }
        ul {
            min-height: 50vh;
            padding: 16px;
            margin-bottom: 32px;
            background-color: @Arcturus;
        }
    }
</style>