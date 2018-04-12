<template>
    <div class="stack-wrapper">
        <div class="stack-photo-group">
            <img :src="gallery[1]" :alt="'Gallery ' + name + ' cover photo'">
            <img :src="gallery[0]" :alt="'Gallery ' + name + ' cover photo'">
            <img :src="gallery[2]" :alt="'Gallery ' + name + ' cover photo'">
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
            justify-content: center;
            img {
                display: block;
                border: 2px solid @Arcturus;
                width: 100px;
                height: 100px;
                margin: 0 8px;
                object-fit: cover;
                user-select: none;
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