<template>
    <div class="alien">
        <div class="keyboard">
            <div class="key" v-for="key in keys" :key="key.id">
                <div class="icon" :class="key.icon" @click="enter(key.id)"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Alien",
        data() {
            return {
                rawKeys: [{
                        id: 1,
                        icon: "icon_airplane"
                    },
                    {
                        id: 2,
                        icon: "icon_heart"
                    },
                    {
                        id: 3,
                        icon: "icon_cat"
                    },
                    {
                        id: 4,
                        icon: "icon_ghost"
                    },
                    {
                        id: 5,
                        icon: "icon_cake"
                    },
                    {
                        id: 6,
                        icon: "icon_iris"
                    },
                    {
                        id: 7,
                        icon: "icon_dna"
                    },
                    {
                        id: 8,
                        icon: "icon_duck"
                    },
                    {
                        id: 9,
                        icon: "icon_run"
                    },
                ],
                keys: [],
                keyword: ""
            }
        },
        methods: {
            shuffle(array) {
                var currentIndex = array.length,
                    temporaryValue, randomIndex;
                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }
                return array;
            },
            enter(key) {
                if (key === 8) {
                    this.keyword = ""
                } else {
                    this.keyword += key
                }
                if (this.keyword === '33333') {
                    this.$emit('unlocked')
                }
            }
        },
        mounted() {
            this.keys = this.shuffle(this.rawKeys)
        }
    }
</script>