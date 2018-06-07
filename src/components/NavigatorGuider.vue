<template>
    <div class="guider_wrapper">
        <svg class="guider-arrow" viewBox="0 0 20 36">
            <path d="M5.83,15.17l11-11A4,4,0,0,1,19.66,3H20V33h-.34a4,4,0,0,1-2.83-1.17l-11-11A4,4,0,0,1,5.83,15.17Z" />
        </svg>
        <div class="guider-content">
            <div class="guider-content-inner">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavigatorGuider"
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .guider_wrapper {
        height: 36px;
        display: flex;
        cursor: pointer;
        overflow: hidden;
        .guider-arrow {
            height: 36px;
            width: 20px;
            fill: @Centaur;
        }
        .guider-content {
            height: 30px;
            margin: 3px 0;
            padding: 3px 4px 3px 0;
            box-sizing: border-box;
            background-color: @Centaur;
            border-radius: 0 4px 4px 0;
            .guider-content-inner {
                margin-left: -8px;
            }
        }
        &:active {
            .guider-arrow {
                fill: @Andromeda;
            }
            .guider-content {
                background-color: @Andromeda;
            }
        }
    }
</style>