<template>
    <div class="guider_wrapper">
        <svg class="guider_arrow" width="17" height="28" viewBox="0 0 17 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path id="path0_fill" d="M 12.8284 1.17157C 13.5786 0.421427 14.596 0 15.6569 0L 17 0L 17 1L 15.6569 1C 14.8612 1 14.0981 1.31607 13.5355 1.87868L 1.41421 14L 13.5355 26.1213C 14.0981 26.6839 14.8612 27 15.6569 27L 17 27L 17 28L 15.6569 28C 14.596 28 13.5786 27.5786 12.8284 26.8284L 0 14L 12.8284 1.17157Z" />
        </svg>
        <div class="guider_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Guider"
    }
</script>