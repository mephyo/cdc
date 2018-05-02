<template>
    <div class="flag">
        <div class="flag-wrapper">
            <svg viewBox="0 0 30 10" class="flag-main">
                <path d="M28.52,6.79l-27,2a.25.25,0,0,1-.27-.25v-5a.25.25,0,0,1,.23-.25l27-2a.25.25,0,0,1,.27.25v5A.25.25,0,0,1,28.52,6.79ZM28.46,1,1.46,3a.49.49,0,0,0-.46.5v5a.5.5,0,0,0,.54.5L28.54,7a.49.49,0,0,0,.46-.5v-5A.5.5,0,0,0,28.46,1Z" />
                <path d="M3.36,8c-1,.07-1.5-.62-1.5-2.06s.5-2.2,1.5-2.27a1.19,1.19,0,0,1,.46,0,1.35,1.35,0,0,1,.34.17,1,1,0,0,1,.26.27,2,2,0,0,1,.18.32l-.31.17a2.44,2.44,0,0,0-.14-.28A.65.65,0,0,0,4,4.14.69.69,0,0,0,3.7,4a1,1,0,0,0-.34,0,1,1,0,0,0-.84.47,2.22,2.22,0,0,0-.28,1.18v.56a2,2,0,0,0,.28,1.14.86.86,0,0,0,.84.36,1.3,1.3,0,0,0,.34-.08A1.17,1.17,0,0,0,4,7.44a1.12,1.12,0,0,0,.19-.24c0-.1.1-.2.14-.3L4.6,7a3,3,0,0,1-.18.36,1.48,1.48,0,0,1-.26.3,1.2,1.2,0,0,1-.34.21A1.51,1.51,0,0,1,3.36,8Z" />
                <path d="M7.84,4h0l-1,2.37c-.4-.89-.59-1.34-1-2.23h0V7.75H5.51V3.59H6c.35.81.53,1.21.88,2h0l.87-2.13h.46V7.58H7.85Z" />
                <path d="M23.36,6.65c-1,.07-1.5-.61-1.5-2.06s.5-2.2,1.5-2.27a1.19,1.19,0,0,1,.46,0,.91.91,0,0,1,.34.17,1.07,1.07,0,0,1,.26.26,1.74,1.74,0,0,1,.18.33l-.31.16c0-.08-.09-.16-.14-.24A.8.8,0,0,0,24,2.79a.91.91,0,0,0-.26-.13,1,1,0,0,0-.34,0,1,1,0,0,0-.84.47,2.22,2.22,0,0,0-.28,1.18v.57A2,2,0,0,0,22.52,6a.86.86,0,0,0,.84.35A1,1,0,0,0,24,6.1a.83.83,0,0,0,.19-.23c.05-.1.1-.2.14-.3l.31.12a2.31,2.31,0,0,1-.18.35,1.48,1.48,0,0,1-.26.3,1.52,1.52,0,0,1-.34.22A1.22,1.22,0,0,1,23.36,6.65Z" />
                <path d="M26.57,6.35l-1.3-4.09h.39L26.81,6h0c.47-1.56.7-2.34,1.16-3.9h.37L27,6.38Z" />
            </svg>
            <svg viewBox="0 0 7 7" class="flag-logo">
                <circle class="logo-o" :class="{black: black}" cx="3.5" cy="3.5" r="3.5" />
                <polygon class="logo-star" points="5.4 5.2 4.6 5.8 3.5 4.3 2.4 5.8 1.6 5.2 2.7 3.8 1 3.2 1.3 2.3 3 2.8 3 1 4 1 4 2.8 5.7 2.2 6 3.2 4.3 3.8 5.4 5.2" />
            </svg>
        </div>
        <template v-if="nlm">
            <p>'NLM' means No Limits</p>
            <p>Batman has no limits, but you do.</p>
        </template>
    </div>
</template>

<script>
    export default {
        name: "Flag",
        props: {
            black: Boolean,
            nlm: Boolean
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .flag {
        text-align: center;
        .flag-wrapper {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100px;
            width: 270px;
            margin: 16px auto;
            .flag-main {
                position: absolute;
                width: 270px;
                height: 90px;
                margin: 5px 0;
                fill: @Arcturus;
                z-index: -1;
            }
            .flag-logo {
                width: 98px;
                height: 98px;
                .logo-star {
                    fill: @Moon;
                }
                .logo-o {
                    fill: @Arcturus;
                    stroke: @Moon;
                    stroke-width: 0.5px;
                    &.black {
                        fill: #000;
                    }
                }
            }
        }
    }
</style>