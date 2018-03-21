<template>
    <footer class="ww_wrapper" @click="showOff">
        <div class="ww_text">Wirbel</div>
        <div class="ww_logo" :class="{rotating: hobbit}"></div>
        <div class="ww_text">Wind</div>
    </footer>
</template>

<script>
    export default {
        name: "Wirbelwind",
        data() {
            return {
                hobbit: false
            }
        },
        methods: {
            showOff() {
                this.hobbit = true
                setTimeout(() => {
                    this.hobbit = false
                }, 2000);
            }
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .ww_logo {
        background-image: url(../assets/images/ww_logo.svg);
        width: 28px;
        height: 28px;
        background-position: center center;
        background-size: 28px 28px;
        background-repeat: no-repeat;
        opacity: 0.875;
    }

    .ww_wrapper {
        display: flex;
        margin: 32px 32px 0 32px;
        padding: 8px 0;
        align-items: center;
        justify-content: center;
        border-top: 1px solid @Cygnus;
        .ww_text {
            font-size: 0.875em;
            color: @Europa;
            font-style: italic;
            font-weight: 300;
            margin: 0 4px;
            width: 40px;
            &:first-child {
                text-align: right;
            }
            &:last-child {
                text-align: left;
            }
        }
    }
</style>