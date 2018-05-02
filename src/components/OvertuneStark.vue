<template>
    <div class="stack-wrapper">
        <div class="stack-photo-group">
            <img :src="gallery[0]" :alt="'Gallery ' + name + ' cover photo'" v-if="gallery[0]">
            <img :src="gallery[1]" :alt="'Gallery ' + name + ' cover photo'" v-if="gallery[1]">
            <img :src="gallery[2]" :alt="'Gallery ' + name + ' cover photo'" v-if="gallery[2]">
            <div class="stack-untouchable"></div>
        </div>
        <h3>{{name}}</h3>
    </div>
</template>

<script>
    export default {
        name: "OvertuneStark",
        props: {
            gallery: Array,
            name: String
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .stack-wrapper {
        padding: 16px 0;
        .stack-photo-group {
            display: flex;
            position: relative;
            margin: 0 auto;
            justify-content: space-between;
            border: 2px solid @Arcturus;
            border-radius: 8px;
            width: 244px;
            overflow: hidden;
            background-color: @Arcturus;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25), 0px 0px 8px rgba(0, 0, 0, 0.125);
            img {
                display: block;
                width: 80px;
                height: 80px;
                object-fit: cover;
                user-select: none;
            }
            .stack-untouchable {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }
        }
        h3 {
            color: @Arcturus;
            font-size: 1em;
            text-align: center;
            line-height: 1.375em;
            margin: 8px 0 0 0;
        }
    }
</style>