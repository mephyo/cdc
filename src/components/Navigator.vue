<template>
    <nav class="navigator" v-if="canShow">
        <navigator-guider @click.native="goHome">
            <dyn-icon type="arrowL"></dyn-icon>
        </navigator-guider>
        <div class="navigator-btn" @click="toggleHorizonal">
            <dyn-icon :type="galleryModeIcon"></dyn-icon>
        </div>
    </nav>
</template>

<script>
    import NavigatorGuider from "@/components/NavigatorGuider";
    import DynIcon from "@/components/DynIcon";

    export default {
        name: "Navigator",
        components: {
            NavigatorGuider,
            DynIcon
        },
        props: {
            gallery: Object
        },
        computed: {
            noLimits() {
                return this.$store.state.showPrivate;
            },
            galleryHorizonalMode() {
                return this.$store.state.galleryHorizonalMode;
            },
            galleryModeIcon() {
                if (this.galleryHorizonalMode) {
                    return "galleryV"
                } else {
                    return "galleryH"
                }
            },
            canShow() {
                const scenes = this.$route.name
                switch (scenes) {
                    case "PreludeGallery":
                        return true
                        break;
                    case "Copyright":
                        return true
                        break;
                    case "Settings":
                        return true
                        break;
                    default:
                        return false
                        break;
                }
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
            },
            toggleHorizonal() {
                this.$store.commit("toggleHorizonal")
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
    }

    .navigator-btn {
        height: 30px;
        margin: 3px 8px;
        padding: 3px 8px;
        box-sizing: border-box;
        background-color: @Centaur;
        border-radius: 4px;
        cursor: pointer;
        &:active {
            background-color: @Andromeda;
        }
    }
</style>