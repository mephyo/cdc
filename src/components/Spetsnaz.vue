<template>
    <div class="spetsnaz">
        <div class="spetsnaz_head">
            <span class="spetsnaz_label">{{model.label}}</span>
            <span v-if="model.hint" class="spetsnaz_hint">({{model.hint}})</span>
        </div>
        <div class="spetsnaz_field" v-if="model.type==='input'">
            <div class="spetsnaz_inputz">
                <input :type="model.inputType" v-model="localValue" :placeholder="model.placeholder" class="spetsnaz_input">
            </div>
        </div>
        <div class="spetsnaz_field" v-if="model.type==='select'">
            <div class="spetsnaz_boxy">
                <div v-for="v in model.values" :key="v.id" class="spetsnaz_box" :class="{selected: v.selected}" @click="selectOne(v.id)">
                    <div v-if="v.icon" class="icon" :class="'icon_' + v.icon"></div>
                    <div>{{v.name}}</div>
                </div>
            </div>
        </div>
        <div class="spetsnaz_field" v-if="model.type==='checklist'">
            <div class="spetsnaz_boxz">
                <div v-for="v in model.values" :key="v.id" class="spetsnaz_box" :class="{selected: v.selected}" @click="checkOne(v.id)">
                    <div v-if="v.icon" class="icon" :class="'icon_' + v.icon"></div>
                    <div>{{v.name}}</div>
                </div>
            </div>
        </div>
        <div class="spetsnaz_field" v-if="model.type==='checkbox'">
            <div class="spetsnaz_checker" @click="switchChick">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24" v-if="localValue === true">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Spetsnaz",
        props: {
            q: String,
            value: [String, Array, Boolean],
            schema: Array
        },
        data() {
            return {
                model: {},
                localValue: "",
                bougie: 3
            }
        },
        methods: {
            callDaddy() {
                this.$emit("input", this.q, this.localValue)
            },
            selectOne(id) {
                this.model.values.forEach(value => {
                    if (value.id === id) {
                        value.selected = true
                        this.localValue = value.id
                    } else {
                        value.selected = false
                    }
                });
                this.$forceUpdate()
            },
            checkOne(id) {
                this.model.values.forEach(value => {
                    if (value.id === id) {
                        if (value.selected === false) {
                            value.selected = true
                            this.localValue.push(id)
                        } else {
                            value.selected = false
                            for (var i = this.localValue.length - 1; i >= 0; i--) {
                                if (this.localValue[i] === id) {
                                    this.localValue.splice(i, 1);
                                }
                            }
                        }
                    }
                });
                this.$forceUpdate()
            },
            switchChick() {
                if (this.localValue === true) {
                    this.localValue = false
                } else {
                    this.localValue = true
                }
            }
        },
        mounted() {
            this.schema.forEach(element => {
                if (element.model === this.q) {
                    this.model = element
                }
            });
            this.localValue = this.value
            switch (this.model.type) {
                case "select":
                    this.model.values.forEach(value => {
                        if (this.value === value.id) {
                            value.selected = true
                        } else {
                            value.selected = false
                        }
                    })
                    break;
                case "checklist":
                    this.model.values.forEach(value => {
                        if (this.value.includes(value.id)) {
                            value.selected = true
                        } else {
                            value.selected = false
                        }
                    })
                    break;

                default:
                    break;
            }
        },
        watch: {
            localValue() {
                if (this.bougie > 3) {
                    this.callDaddy()
                }
                this.bougie++
            }
        }
    }
</script>