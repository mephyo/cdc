<template>
    <div class="guider_wrapper">
        <div class="icon icon_left"></div>
        <div class="guider_content">
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
    .guider_wrapper {
        height: 36px;
        margin-bottom: 1px;
        display: flex;
        .icon {
            margin: 2px 0;
            width: 22px;
        }
        .guider_content {
            height: 36px;
            .logo {
                margin: 6px 0;
            }
        }
    }
</style>