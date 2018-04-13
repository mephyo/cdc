<template>
    <nav class="navigator" v-if="scenes === 'PreludeGallery'">
        <navigator-guider @click.native="goHome">
            <span lang="zh-cn">家</span>
        </navigator-guider>
    </nav>
</template>

<script>
    import NavigatorGuider from "@/components/NavigatorGuider";

    export default {
        name: "Navigator",
        components: {
            NavigatorGuider
        },
        props: {
            gallery: Object
        },
        computed: {
            noLimits() {
                return this.$store.state.showPrivate;
            },
            scenes() {
                return this.$route.name
            }
        },
        methods: {
            goHome() {
                if (this.noLimits) {
                    this.$router.push({
                        path: "/nlm"
                    });
                } else {
                    this.$router.push({
                        path: "/"
                    });
                }
            }
        }
    };
</script>

<style lang="less">
    @import "../style/variables.less";
    .navigator {
        position: fixed;
        height: 36px;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: @Arcturus;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
        display: flex;
        justify-content: space-between;
    }
</style>