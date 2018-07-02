<template>
    <svg viewBox="0 0 24 24" :style="iconStyle" class="dyn-icon">
        <transition name="fade">
            <g v-if="type==='galleryH'" key="galleryH">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7zm0 1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7z" />
                <path d="M7 7h10v10H7V7zM0 7h4v10H0zM20 7h4v10h-4z" />
            </g>
            <g v-if="type==='galleryV'" key="galleryV">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3h-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3H5V4zm0 13v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3h-1v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3H5z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 4h10v3H7V4zm0 13h10v3H7v-3zm12-9H5v8h14V8z" />
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