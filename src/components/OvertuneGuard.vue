<template>
    <div class="alien">
        <div class="keyboard">
            <div class="key" v-for="key in keys" :key="key.id">
                <div class="key_icon" :class="key.icon" @click="enter(key.id)">
                    <svg v-if="key.icon==='airplane'" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
                    </svg>
                    <svg v-if="key.icon==='cake'" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M21,21V17C21,15.89 20.1,15 19,15H18V12C18,10.89 17.1,10 16,10H13V8H11V10H8C6.89,10 6,10.89 6,12V15H5C3.89,15 3,15.89 3,17V21H1V23H23V21M12,7A2,2 0 0,0 14,5C14,4.62 13.9,4.27 13.71,3.97L12,1L10.28,3.97C10.1,4.27 10,4.62 10,5A2,2 0 0,0 12,7Z" />
                    </svg>
                    <svg v-if="key.icon==='iris'" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M13.73,15L9.83,21.76C10.53,21.91 11.25,22 12,22C14.4,22 16.6,21.15 18.32,19.75L14.66,13.4M2.46,15C3.38,17.92 5.61,20.26 8.45,21.34L12.12,15M8.54,12L4.64,5.25C3,7 2,9.39 2,12C2,12.68 2.07,13.35 2.2,14H9.69M21.8,10H14.31L14.6,10.5L19.36,18.75C21,16.97 22,14.6 22,12C22,11.31 21.93,10.64 21.8,10M21.54,9C20.62,6.07 18.39,3.74 15.55,2.66L11.88,9M9.4,10.5L14.17,2.24C13.47,2.09 12.75,2 12,2C9.6,2 7.4,2.84 5.68,4.25L9.34,10.6L9.4,10.5Z" />
                    </svg>
                    <svg v-if="key.icon==='cat'" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z" />
                    </svg>
                    <svg v-if="key.icon==='dna'" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M4,2H6V4C6,5.44 6.68,6.61 7.88,7.78C8.74,8.61 9.89,9.41 11.09,10.2L9.26,11.39C8.27,10.72 7.31,10 6.5,9.21C5.07,7.82 4,6.1 4,4V2M18,2H20V4C20,6.1 18.93,7.82 17.5,9.21C16.09,10.59 14.29,11.73 12.54,12.84C10.79,13.96 9.09,15.05 7.88,16.22C6.68,17.39 6,18.56 6,20V22H4V20C4,17.9 5.07,16.18 6.5,14.79C7.91,13.41 9.71,12.27 11.46,11.16C13.21,10.04 14.91,8.95 16.12,7.78C17.32,6.61 18,5.44 18,4V2M14.74,12.61C15.73,13.28 16.69,14 17.5,14.79C18.93,16.18 20,17.9 20,20V22H18V20C18,18.56 17.32,17.39 16.12,16.22C15.26,15.39 14.11,14.59 12.91,13.8L14.74,12.61M7,3H17V4L16.94,4.5H7.06L7,4V3M7.68,6H16.32C16.08,6.34 15.8,6.69 15.42,7.06L14.91,7.5H9.07L8.58,7.06C8.2,6.69 7.92,6.34 7.68,6M9.09,16.5H14.93L15.42,16.94C15.8,17.31 16.08,17.66 16.32,18H7.68C7.92,17.66 8.2,17.31 8.58,16.94L9.09,16.5M7.06,19.5H16.94L17,20V21H7V20L7.06,19.5Z" />
                    </svg>
                    <svg v-if="key.icon==='duck'" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M8.5,5A1.5,1.5 0 0,0 7,6.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 10,6.5A1.5,1.5 0 0,0 8.5,5M10,2A5,5 0 0,1 15,7C15,8.7 14.15,10.2 12.86,11.1C14.44,11.25 16.22,11.61 18,12.5C21,14 22,12 22,12C22,12 21,21 15,21H9C9,21 4,21 4,16C4,13 7,12 6,10C2,10 2,6.5 2,6.5C3,7 4.24,7 5,6.65C5.19,4.05 7.36,2 10,2Z" />
                    </svg>
                    <svg v-if="key.icon==='ghost'" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12,2A9,9 0 0,0 3,11V22L6,19L9,22L12,19L15,22L18,19L21,22V11A9,9 0 0,0 12,2M9,8A2,2 0 0,1 11,10A2,2 0 0,1 9,12A2,2 0 0,1 7,10A2,2 0 0,1 9,8M15,8A2,2 0 0,1 17,10A2,2 0 0,1 15,12A2,2 0 0,1 13,10A2,2 0 0,1 15,8Z" />
                    </svg>
                    <svg v-if="key.icon==='heart'" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                    </svg>
                    <svg v-if="key.icon==='run'" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M13.5,5.5C14.59,5.5 15.5,4.58 15.5,3.5C15.5,2.38 14.59,1.5 13.5,1.5C12.39,1.5 11.5,2.38 11.5,3.5C11.5,4.58 12.39,5.5 13.5,5.5M9.89,19.38L10.89,15L13,17V23H15V15.5L12.89,13.5L13.5,10.5C14.79,12 16.79,13 19,13V11C17.09,11 15.5,10 14.69,8.58L13.69,7C13.29,6.38 12.69,6 12,6C11.69,6 11.5,6.08 11.19,6.08L6,8.28V13H8V9.58L9.79,8.88L8.19,17L3.29,16L2.89,18L9.89,19.38Z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OvertuneGuard",
        data() {
            return {
                rawKeys: [{
                        id: 1,
                        icon: "airplane"
                    },
                    {
                        id: 2,
                        icon: "heart"
                    },
                    {
                        id: 3,
                        icon: "cat"
                    },
                    {
                        id: 4,
                        icon: "ghost"
                    },
                    {
                        id: 5,
                        icon: "cake"
                    },
                    {
                        id: 6,
                        icon: "iris"
                    },
                    {
                        id: 7,
                        icon: "dna"
                    },
                    {
                        id: 8,
                        icon: "duck"
                    },
                    {
                        id: 9,
                        icon: "run"
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
                if (this.keyword === '3333') {
                    this.$emit('unlocked')
                }
            }
        },
        mounted() {
            this.keys = this.shuffle(this.rawKeys)
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .alien {
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        .keyboard {
            width: 300px;
            height: 300px;
            display: flex;
            flex-wrap: wrap;
            .key {
                width: 90px;
                height: 90px;
                margin: 5px;
                background-color: rgba(0, 0, 0, 0.25);
                transition: 0.125s ease;
                cursor: pointer;
                svg {
                    opacity: 0.5;
                    transition: inherit;
                    margin: 33px;
                    fill: @Europa;
                }
                &:active {
                    background-color: rgba(0, 0, 0, 0.125);
                    svg {
                        opacity: 0.25;
                    }
                }
            }
        }
    }
</style>