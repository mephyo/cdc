<template>
    <footer class="ww_wrapper" @click="showOff">
        <div class="ww_text">
            <router-link to="/copyright" v-if="showMore">Copyrights</router-link>
            <span v-else>Wirbel</span>
        </div>
        <div class="ww_logo" :class="{rotating: hobbit}"></div>
        <div class="ww_text">
            <router-link to="/settings" v-if="showMore">Settings</router-link>
            <span v-else>Wind</span>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Wirbelwind",
        data() {
            return {
                hobbit: false,
                showMore: false
            }
        },
        methods: {
            showOff() {
                this.hobbit = true
                this.showMore = this.showMore === false ? true : false
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
            &:first-child {
                text-align: right;
            }
            &:last-child {
                text-align: left;
            }
            a {
                text-decoration: underline;
                color: @Europa;
            }
        }
    }
</style>