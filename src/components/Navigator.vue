<template>
    <nav class="nav">
        <div class="nav-center">
            <h1 v-if="title">{{title}}</h1>
            <dyn-logo v-else></dyn-logo>
        </div>
        <div class="nav-guider" v-if="title" @click="goHome">
            <svg class="guider-arrow" viewBox="0 0 20 36">
                <path d="M5.83,15.17l11-11A4,4,0,0,1,19.66,3H20V33h-.34a4,4,0,0,1-2.83-1.17l-11-11A4,4,0,0,1,5.83,15.17Z" />
            </svg>
            <div class="guider-content">
                <svg viewBox="0 0 24 24" class="true-arrow">
                    <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
                </svg>
            </div>
        </div>
    </nav>
</template>

<script>
    import DynLogo from "@/components/DynLogo";

    export default {
        name: "Navigator",
        components: {
            DynLogo
        },
        props: {
            title: String
        },
        methods: {
            goHome() {
                this.$router.push({
                    path: "/"
                });
            }
        }
    };
</script>

<style lang="less">
    @import "../style/variables.less";
    .nav {
        position: fixed;
        z-index: 6;
        height: 40px;
        top: 0;
        left: 0;
        right: 0;
        background-color: @WhiteT;
        .nav-center {
            .abs;
            .inner-middle;
            margin: 0 25vw;
        }
    }

    .nav-guider {
        height: 36px;
        display: flex;
        cursor: pointer;
        user-select: none;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        margin: 2px 4px;
        .guider-arrow {
            height: 36px;
            width: 20px;
            fill: @White0;
        }
        .guider-content {
            height: 30px;
            margin: 3px 0;
            padding: 3px 4px 3px 0;
            box-sizing: border-box;
            background-color: @White0;
            border-radius: 0 4px 4px 0;
            .true-arrow {
                margin-left: -8px;
                width: 24px;
                height: 24px;
                display: block;
                fill: @Black0;
            }
        }
    }
</style>