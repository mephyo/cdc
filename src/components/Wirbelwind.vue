<template>
    <footer class="ww_wrapper" @click="showOff">
        <div class="ww_text">Wirbel</div>
        <div class="ww_logo" :class="{rotating: hobbit}"></div>
        <div class="ww_text">Wind</div>
    </footer>
</template>

<script>
    export default {
        name: "Wirbelwind",
        data() {
            return {
                hobbit: false
            }
        },
        methods: {
            showOff() {
                this.hobbit = true
                setTimeout(() => {
                    this.hobbit = false
                }, 2000);
            }
        }
    }
</script>