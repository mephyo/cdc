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
        name: "ApplySpetsnaz",
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

<style lang="less">
    @import "../style/variables.less";
    .spetsnaz {
        color: #333;
        margin: 8px 0;
        overflow: hidden;
        .spetsnaz_head {
            margin: 8px 8px 0 8px;
            height: 30px;
            line-height: 30px;
            .spetsnaz_label {
                color: #666;
            }
            .spetsnaz_hint {
                color: #999;
            }
        }
        .spetsnaz_field {
            margin: 0 8px 8px 8px;
        }
        .spetsnaz_inputz {
            margin: 4px;
            ::placeholder {
                color: #999;
            }
            .spetsnaz_input {
                font-size: 1em;
                outline: none;
                border: none;
                border-radius: 0;
                border-bottom: 1px solid @Neptune;
                background-color: transparent;
                display: block;
                width: 100%;
                box-sizing: border-box;
                height: 30px;
                line-height: 30px;
                color: @Moon;
                &:focus {
                    border-bottom: 1px solid @Moon;
                }
            }
        }
        .spetsnaz_box {
            margin: 8px;
            padding: 0 8px;
            box-sizing: border-box;
            border: 1px solid @Neptune;
            color: #999;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: flex;
            align-items: center;
            &.selected {
                background-color: @Moon;
                border-color: @Moon;
                color: @Arcturus;
                .icon {
                    opacity: 1;
                    filter: invert(100%);
                }
            }
            .icon {
                opacity: 0.5;
                height: 24px;
                width: 24px;
                margin: 0 4px 0 -4px;
                flex-shrink: 0;
            }
        }
        .spetsnaz_boxz {
            display: flex;
            flex-wrap: wrap;
            .spetsnaz_box {
                height: 30px;
            }
        }
        .spetsnaz_boxy {
            display: flex;
            flex-direction: column;
            .spetsnaz_box {
                height: 36px;
            }
        }
        .spetsnaz_checker {
            height: 30px;
            width: 30px;
            margin: 8px;
            border: 1px solid @Neptune;
            box-sizing: border-box;
            svg {
                margin: 2px;
                fill: @Moon;
            }
        }
    }

    .icon_left {
        background-image: url(../assets/images/ic_keyboard_arrow_left_white_24px.svg);
    }

    .icon_bed {
        background-image: url(../assets/images/icon_bed.svg);
    }

    .icon_bench {
        background-image: url(../assets/images/icon_bench.svg);
    }

    .icon_forest {
        background-image: url(../assets/images/icon_forest.svg);
    }

    .icon_other {
        background-image: url(../assets/images/icon_other.svg);
    }

    .icon_sofa {
        background-image: url(../assets/images/icon_sofa.svg);
    }

    .icon_male {
        background-image: url(../assets/images/icon_male.svg);
    }

    .icon_female {
        background-image: url(../assets/images/icon_female.svg);
    }

    .icon_unknown {
        background-image: url(../assets/images/icon_unknown.svg);
    }
</style>