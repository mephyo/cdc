<template>
    <nav class="navigator" v-if="scenes !== 'Overtune'">
        <div class="navigator_content_wrapper" v-if="scenes === 'PreludeGallery'">
            <navigator-guider @click.native="goHome">
                <div class="logo"></div>
            </navigator-guider>
        </div>
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
    .navigator {
        position: fixed;
        width: 100vw;
        height: 37px;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.25));
        .navigator_content_wrapper {
            height: inherit;
            width: inherit;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    .logo {
        background-image: url(../assets/images/logo.svg);
        width: 22px;
        height: 24px;
        background-position: 0 2px;
        background-size: 21px 21px;
        background-repeat: no-repeat;
        opacity: 0.875;
    }
</style>