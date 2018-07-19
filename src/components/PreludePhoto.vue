<template>
    <li class="prelude-photo">
        <img class="photo" :src="photo.src" :alt="photo.codeName">
        <div class="scrim"></div>
    </li>
</template>

<script>
    export default {
        name: "PreludePhoto",
        props: {
            photo: Object,
            index: Number
        },
    };
</script>

<style lang="less">
    @import "../style/variables.less";
    .prelude-photo {
        position: relative;
        margin: 16px 0;
        .photo {
            margin: 0 auto;
            max-width: 100vw;
            display: block;
        }
        .scrim {
            .abs;
            user-select: none;
        }
    }
</style>