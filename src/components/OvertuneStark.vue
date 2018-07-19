<template>
    <div class="stack-wrapper">
        <img class="stack-cover" :src="cover" :alt="name">
        <div class="stack-title-wrapper">
            <h2>{{name}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OvertuneStark",
        props: {
            gallery: Array,
            name: String
        },
        computed: {
            cover() {
                return this.gallery[0]
            }
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .stack-wrapper {
        .abs;
        .stack-cover {
            .abs;
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
        }
        .stack-title-wrapper {
            .abs;
            .inner-middle;
            background-color: rgba(0, 0, 0, 0.125);
            h2 {
                font-size: 1.125em;
                color: @White0;
                font-style: italic;
                font-weight: 400;
            }
        }
    }
</style>