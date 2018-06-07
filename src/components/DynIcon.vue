<template>
    <svg viewBox="0 0 24 24" :style="iconStyle" class="dyn-icon">
        <transition name="fade">
            <g v-if="type==='galleryH'" key="galleryH">
                <path d="M4 9h4v6H4V9zM9 9h6v6H9zM16 9h4v6h-4z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H4zm0 1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H4z" />
            </g>
            <g v-if="type==='galleryV'" key="galleryV">
                <path d="M9 20v-4h6v4H9zM9 15V9h6v6H9zM9 8V4h6v4H9z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v16zm1 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v16z" />
            </g>
            <path v-if="type==='arrowL'" key="arrowL" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
        </transition>
    </svg>
</template>
<script>
    export default {
        name: "DynIcon",
        props: {
            type: {
                type: String,
                default: "arrowL"
            },
            color: {
                type: String,
                default: "rgb(225, 220, 215)"
            },
            size: {
                type: Number,
                default: 24
            }
        },
        data() {
            return {
                iconStyle: {
                    width: this.size + 'px',
                    height: this.size + 'px',
                    fill: this.color
                }
            }
        }
    }
</script>

<style lang="less">
    .dyn-icon {
        min-width: 24px;
        min-height: 24px;
        display: block;
    }
</style>