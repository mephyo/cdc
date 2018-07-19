<template>
    <div class="overtune">
        <navigator></navigator>
        <ul class="gallery-list">
            <li v-for="project in gallery" :key="project.codeName">
                <router-link :to="{ name: 'PreludeGallery', params: { galleryId: project.codeName }}">
                    <overtune-stark :gallery="project.cover" :name="project.name"></overtune-stark>
                </router-link>
            </li>
        </ul>
        <finale></finale>
    </div>
</template>

<script>
    import Navigator from "@/components/Navigator";
    import OvertuneStark from "@/components/OvertuneStark";
    import Finale from "@/components/Finale";

    export default {
        name: "Overtune",
        components: {
            Navigator,
            OvertuneStark,
            Finale
        },
        computed: {
            gallery() {
                return this.$store.state.gallery
            }
        }
    };
</script>

<style lang="less">
    .gallery-list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 40px;
        li {
            width: 50vw;
            height: 50vw;
            position: relative;
            &:first-child {
                width: 100vw;
                height: 100vw;
            }
        }
    }
</style>