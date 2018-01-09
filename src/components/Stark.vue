<template>
    <div class="king-in-the-north" ref="stark">
        <img :style="robb" class="stark" :src="gallery[2]">
        <img :style="bran" class="stark" :src="gallery[1]">
        <img :style="rickon" class="stark" :src="gallery[0]">
    </div>
</template>

<script>
    export default {
        name: "Stark",
        props: {
            gallery: Array
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
                let scale = this.revenge
                return {
                    transform: "translateY(" + this.revenge * -4 + "px) translateZ(0)"
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