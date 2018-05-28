<template>
    <ol class="contracts-stepper" lang="zh-cn">
        <li v-for="s in steps" :key="s.order" class="stepper-item" :class="{selected: s.order===currentStep}">
            <div class="step-order">{{s.order}}</div>
            <div class="step-label">{{s.label}}</div>
        </li>
    </ol>
</template>

<script>
    export default {
        name: "ContractsStepper",
        props: {
            steps: Array,
            currentStep: Number
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .contracts-stepper {
        display: flex;
        justify-content: space-around;
        padding: 8px 0;
        .stepper-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 40px;
            .step-order {
                height: 16px;
                width: 16px;
                text-align: center;
                line-height: 16px;
                border-radius: 8px;
                background-color: @Neptune;
                color: @Moon;
                font-size: 12px;
                font-family: monospace;
            }
            .step-label {
                color: @Neptune;
                font-size: 0.75em;
                margin-top: 4px;
            }
            &.selected {
                .step-order {
                    background-color: @Arcturus;
                }
                .step-label {
                    color: @Arcturus;
                }
            }
        }
    }
</style>