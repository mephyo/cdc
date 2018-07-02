<template>
    <div class="flag">
        <!-- <div class="flag-wrapper">
            <svg viewBox="0 0 30 10" class="flag-main">
                <path d="M28.52 6.79l-27 2a.25.25 0 0 1-.27-.25v-5a.25.25 0 0 1 .23-.25l27-2a.25.25 0 0 1 .27.25v5a.25.25 0 0 1-.23.25zM28.46 1l-27 2a.49.49 0 0 0-.46.5v5a.5.5 0 0 0 .54.5l27-2a.49.49 0 0 0 .46-.5v-5a.5.5 0 0 0-.54-.5z" />
                <path d="M3.36 8c-1 .07-1.5-.62-1.5-2.06s.5-2.2 1.5-2.27a1.19 1.19 0 0 1 .46 0 1.35 1.35 0 0 1 .34.17 1 1 0 0 1 .26.27 2 2 0 0 1 .18.32l-.31.17a2.44 2.44 0 0 0-.14-.28.65.65 0 0 0-.15-.18.69.69 0 0 0-.3-.14 1 1 0 0 0-.34 0 1 1 0 0 0-.84.47 2.22 2.22 0 0 0-.28 1.18v.56a2 2 0 0 0 .28 1.14.86.86 0 0 0 .84.36 1.3 1.3 0 0 0 .34-.08 1.17 1.17 0 0 0 .3-.19 1.12 1.12 0 0 0 .19-.24c0-.1.1-.2.14-.3l.27.1a3 3 0 0 1-.18.36 1.48 1.48 0 0 1-.26.3 1.2 1.2 0 0 1-.34.21 1.51 1.51 0 0 1-.46.13zM7.84 4l-1 2.37c-.4-.89-.59-1.34-1-2.23v3.61h-.33V3.59H6c.35.81.53 1.21.88 2l.87-2.13h.46v4.12h-.36zM23.36 6.65c-1 .07-1.5-.61-1.5-2.06s.5-2.2 1.5-2.27a1.19 1.19 0 0 1 .46 0 .91.91 0 0 1 .34.17 1.07 1.07 0 0 1 .26.26 1.74 1.74 0 0 1 .18.33l-.31.16c0-.08-.09-.16-.14-.24a.8.8 0 0 0-.15-.21.91.91 0 0 0-.26-.13 1 1 0 0 0-.34 0 1 1 0 0 0-.84.47 2.22 2.22 0 0 0-.28 1.18v.57A2 2 0 0 0 22.52 6a.86.86 0 0 0 .84.35A1 1 0 0 0 24 6.1a.83.83 0 0 0 .19-.23c.05-.1.1-.2.14-.3l.31.12a2.31 2.31 0 0 1-.18.35 1.48 1.48 0 0 1-.26.3 1.52 1.52 0 0 1-.34.22 1.22 1.22 0 0 1-.5.09zM26.57 6.35l-1.3-4.09h.39L26.81 6c.47-1.56.7-2.34 1.16-3.9h.37L27 6.38z" />
            </svg>
            <svg viewBox="0 0 7 7" class="flag-logo">
                <circle class="logo-o" :class="{black: black}" cx="3.5" cy="3.5" r="3.5" />
                <path class="logo-star" d="M5.4 5.2l-.8.6-1.1-1.5-1.1 1.5-.8-.6 1.1-1.4L1 3.2l.3-.9 1.7.5V1h1v1.8l1.7-.6.3 1-1.7.6 1.1 1.4z" />
            </svg>
        </div> -->
        <router-link :to="{ name: 'PreludeGallery', params: { galleryId: 'April-2018-5-27' }}">
            <div class="flag-special" :class="{black: black}"></div>
        </router-link>
        <template v-if="nlm">
            <p>'NLM' means No Limits.</p>
            <p>Batman has no limits, but you do.</p>
        </template>
        <template v-if="black">
            <p>Once go black, never go back.</p>
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
        text-align: center; // .flag-wrapper {
        //     position: relative;
        //     display: flex;
        //     justify-content: center;
        //     align-items: center;
        //     height: 100px;
        //     width: 270px;
        //     margin: 16px auto;
        //     .flag-main {
        //         position: absolute;
        //         width: 270px;
        //         height: 90px;
        //         margin: 5px 0;
        //         fill: @Arcturus;
        //         z-index: -1;
        //     }
        //     .flag-logo {
        //         width: 98px;
        //         height: 98px;
        //         .logo-star {
        //             fill: @Moon;
        //         }
        //         .logo-o {
        //             fill: @Arcturus;
        //             stroke: @Moon;
        //             stroke-width: 0.5px;
        //             &.black {
        //                 fill: #000;
        //             }
        //         }
        //     }
        // }
        .flag-special {
            width: 250px;
            height: 125px;
            background-image: url(../assets/images/cv.png);
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 250px 125px;
            margin: 0 auto;
            &.black {
                filter: invert(1);
            }
        }
    }
</style>