<template>
    <div class="king-in-the-north" ref="stark">
        <img :style="robb" class="stark" :src="gallery[2]">
        <img :style="bran" class="stark" :src="gallery[1]">
        <img :style="rickon" class="stark" :src="gallery[0]">
        <h3 :style="katherine" class="tully">{{name}}</h3>
    </div>
</template>

<script>
    export default {
        name: "OvertuneStark",
        props: {
            gallery: Array,
            name: String
        },
        data() {
            return {
                revenge: 0
            }
        },
        computed: {
            robb() {
                return {
                    transform: "rotate(" + this.revenge * 12 + "deg) translateX(" + this.revenge * 48 + "px) translateZ(0)"
                }
            },
            bran() {
                return {
                    transform: "rotate(" + this.revenge * -6 + "deg) translateX(" + this.revenge * -48 + "px) translateZ(0)"
                }
            },
            rickon() {
                return {
                    transform: "translateY(" + this.revenge * -4 + "px) translateZ(0)"
                }
            },
            katherine() {
                return {
                    opacity: 0.75 - this.revenge,
                    transform: "translateY(" + this.revenge * 4 + "px) translateZ(0)"
                }
            }
        },
        methods: {
            northenInvading() {
                let kingsLanding = window.innerHeight / 2
                let robbsArmy = this.$refs.stark.getBoundingClientRect().y + 100
                if (robbsArmy < 0) {
                    robbsArmy = 0
                } else if (robbsArmy > window.innerHeight) {
                    robbsArmy = window.innerHeight
                }
                let roadToVictory = Math.abs(kingsLanding - robbsArmy)
                this.revenge = 1 - roadToVictory / kingsLanding
            }
        },
        created() {
            window.addEventListener('scroll', this.northenInvading);
        },
        destroyed() {
            window.removeEventListener('scroll', this.northenInvading);
        },
        mounted() {
            setTimeout(() => {
                this.northenInvading()
            }, 1000);
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .king-in-the-north {
        position: relative;
        height: 200px;
        width: 200px;
        margin: 8px auto;
        .stark {
            display: block;
            outline: 1px solid @Arcturus;
            box-shadow: 0 4px 8px @Cygnus;
            height: 160px;
            width: 160px;
            position: absolute;
            top: 20px;
            left: 20px;
            object-fit: cover;
            transition: all 0.05s ease;
            pointer-events: none;
        }
        .tully {
            position: absolute;
            height: 40px;
            line-height: 40px;
            margin: 80px 0;
            text-align: center;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: @Moon;
            font-size: 2em;
            font-style: italic;
            text-shadow: 0 0 8px @Arcturus;
        }
    }
</style>