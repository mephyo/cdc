<template>
    <nav class="navigator" v-if="scenes !== 'Overtune'">
        <div class="navigator_content_wrapper" v-if="scenes === 'SingleGallery'">
            <guider @click.native="goHome">
                <div class="logo"></div>
            </guider>
        </div>
    </nav>
</template>

<script>
    import Guider from "@/components/Guider";

    export default {
        name: "Navigator",
        components: {
            Guider
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
            // In SingleGallery
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