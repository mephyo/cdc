<template>
    <div class="guider_wrapper">
        <svg class="guider-arrow" viewBox="0 0 20 36">
            <path d="M5.83,15.17l11-11A4,4,0,0,1,19.66,3H20V33h-.34a4,4,0,0,1-2.83-1.17l-11-11A4,4,0,0,1,5.83,15.17Z" />
        </svg>
        <div class="guider-content">
            <slot></slot>
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
            line-height: 30px;
            margin: 3px 0;
            background-color: @Centaur;
            color: @Arcturus;
            border-radius: 0 4px 4px 0;
            padding-right: 8px;
            font-size: 0.875em;
            font-weight: 400;
            font-style: italic;
        }
    }
</style>