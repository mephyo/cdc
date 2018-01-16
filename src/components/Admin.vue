<template>
    <div class="admin">
        <div v-if="!locked">
            <ol v-if="viewers.length">
                <li v-for="v in viewers" :key="v._id">
                    <dl>
                        <dt>Time</dt>
                        <dd>{{v.time}}</dd>
                    </dl>
                    <dl>
                        <dt>Model</dt>
                        <dd>{{v.model}}</dd>
                    </dl>
                    <dl>
                        <dt>View Times</dt>
                        <dd>{{v.viewTimes}}</dd>
                    </dl>
                    <dl>
                        <dt>Last Location</dt>
                        <dd>
                            <a :href="v.map" v-if="v.map" target="_blank">Open Map</a>
                            <span v-else>Did not Catch</span>
                        </dd>
                    </dl>
                </li>
            </ol>
            <button @click="getLocations">Get Locations</button>
            <ol v-if="locations.length">
                <li v-for="l in locations" :key="l._id">
                    <dl>
                        <dt>Time</dt>
                        <dd>{{l.time}}</dd>
                    </dl>
                    <dl>
                        <dt>Location</dt>
                        <dd>
                            <a :href="l.map" v-if="l.map" target="_blank">Open Map</a>
                            <span v-else>Did not Catch</span>
                        </dd>
                    </dl>
                </li>
            </ol>
        </div>
        <alien v-else @unlocked="locked = false"></alien>
    </div>
</template>

<script>
    import Alien from "@/components/Alien";

    export default {
        name: "Admin",
        components: {
            Alien
        },
        data() {
            return {
                locked: true,
                viewers: [],
                locations: []
            }
        },
        methods: {
            getViewers(){
                this.$http.get("listViewer").then(response=>{
                    this.viewers = response.body.reverse()
                })
            },
            getLocations(){
                this.$http.get("listLocation").then(response=>{
                    this.locations = response.body.reverse()
                })
            }
        },
        mounted() {
            this.getViewers();
        }
    };
</script>

<style lang="less">
    .admin {
        font-size: 0.75em;
        margin-bottom: 44px;
        ol {
            padding-left: 1em;
        dt {
            font-weight: 600;
        }
        dd {
            -webkit-margin-start: 0;
            margin: 0 1em;
        }
        }
    }
</style>