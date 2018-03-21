<template>
    <div class="apply_form" lang="zh-CN">
        <ul>
            <apply-spetsnaz v-for="(value, key) in model" :key="key" :q="key" :value="value" :schema="schema" @input="callMe" />
        </ul>
        <div class="submit_button" @click="submitData">{{submitLabel}}</div>
    </div>
</template>

<script>
    import ApplySpetsnaz from "@/components/ApplySpetsnaz";
    export default {
        name: "ApplyForm",
        components: {
            ApplySpetsnaz
        },
        data() {
            return {
                submitLabel: "提交",
                model: {
                    call: "",
                    age: "",
                    gender: "female",
                    contact: "",
                    whereToSee: "",
                    place: ["hotel"],
                    placeMore: "",
                    time: ["afternoon"],
                    cloth: ["nude", "underwear"],
                    clothMore: "",
                    costume: "",
                    style: "myIdea",
                    styleMore: "",
                    emotion: "excellent",
                    pose: "good",
                    phyLimit: "4",
                    limit: "3",
                    copyright: "2",
                    special: "",
                    note: "",
                    contract: false
                },
                schema: [{
                    type: "input",
                    inputType: "text",
                    label: "称呼",
                    model: "call",
                    placeholder: "不一定是真实姓名",
                }, {
                    type: "input",
                    inputType: "number",
                    label: "年龄",
                    model: "age",
                    placeholder: "可不填",
                }, {
                    type: "select",
                    label: "性别",
                    model: "gender",
                    values: [{
                            icon: "female",
                            id: "female",
                            name: "女"
                        },
                        {
                            icon: "male",
                            id: "male",
                            name: "男"
                        },
                        {
                            icon: "unknown",
                            id: "futa",
                            name: "保密"
                        }
                    ]
                }, {
                    type: "input",
                    inputType: "text",
                    label: "联系方式",
                    model: "contact",
                    placeholder: "通讯工具 | 用户名"
                }, {
                    type: "input",
                    inputType: "text",
                    label: "可以看到你照片的地方",
                    model: "whereToSee",
                    placeholder: "平台 | 用户名",
                }, {
                    type: "checklist",
                    label: "拍摄地点",
                    model: "place",
                    values: [{
                            id: "outdoor",
                            name: "室外",
                            icon: "forest"
                        },
                        {
                            id: "public",
                            name: "公共场所",
                            icon: "bench"
                        },
                        {
                            id: "hotel",
                            name: "酒店",
                            icon: "bed"
                        },
                        {
                            id: "home",
                            name: "住处",
                            icon: "sofa"
                        },
                        {
                            id: "other",
                            name: "其他",
                            icon: "other"
                        }
                    ]
                }, {
                    type: "input",
                    inputType: "text",
                    label: "拍摄地点的补充说明",
                    model: "placeMore",
                    placeholder: "你有什么特别的地点？",
                }, {
                    type: "checklist",
                    label: "拍摄时间",
                    model: "time",
                    values: [{
                            id: "dawn",
                            name: "凌晨"
                        }, {
                            id: "morning",
                            name: "上午"
                        },
                        {
                            id: "afternoon",
                            name: "下午"
                        },
                        {
                            id: "evening",
                            name: "晚上"
                        }
                    ]
                }, {
                    type: "select",
                    label: "拍摄风格",
                    model: "style",
                    values: [{
                        id: "myIdea",
                        name: "我有特别的想法"
                    }, {
                        id: "yourIdea",
                        name: "全部按你的风格来"
                    }]
                }, {
                    type: "input",
                    inputType: "text",
                    label: "拍摄风格的补充说明",
                    model: "styleMore",
                    placeholder: "你有什么特别的想法？"
                }, {
                    type: "checklist",
                    label: "服装",
                    model: "cloth",
                    values: [{
                            id: "nude",
                            name: "裸体"
                        },
                        {
                            id: "underwear",
                            name: "内衣"
                        },
                        {
                            id: "casual",
                            name: "常服"
                        },
                        {
                            id: "other",
                            name: "其他"
                        }
                    ]
                }, {
                    type: "input",
                    inputType: "text",
                    label: "服装的补充说明",
                    model: "clothMore",
                    placeholder: "你有什么特别的服装？"
                }, {
                    type: "input",
                    inputType: "text",
                    label: "道具",
                    model: "costume",
                    placeholder: "蜡烛，纱，丝袜之类的"
                }, {
                    type: "select",
                    label: "你拍照时的表情",
                    model: "emotion",
                    values: [{
                            id: "excellent",
                            name: "我很会做表情"
                        },
                        {
                            id: "good",
                            name: "我拍照只有一种表情"
                        },
                        {
                            id: "poor",
                            name: "我不会做表情"
                        },
                        {
                            id: "none",
                            name: "我不拍脸"
                        }
                    ]
                }, {
                    type: "select",
                    label: "你拍照时的姿势",
                    model: "pose",
                    values: [{
                            id: "excellent",
                            name: "我很会摆 pose"
                        },
                        {
                            id: "good",
                            name: "我会一点"
                        },
                        {
                            id: "poor",
                            name: "请教教我"
                        }
                    ]
                }, {
                    type: "select",
                    label: "物理尺度",
                    model: "phyLimit",
                    values: [{
                            id: "4",
                            name: "全裸并露点"
                        },
                        {
                            id: "3",
                            name: "全裸然而不露点"
                        },
                        {
                            id: "2",
                            name: "半裸"
                        },
                        {
                            id: "1",
                            name: "内衣"
                        }
                    ]
                }, {
                    type: "select",
                    label: "心理尺度",
                    model: "limit",
                    values: [{
                            id: "4",
                            name: "色情又变态"
                        },
                        {
                            id: "3",
                            name: "有欲望但不色情"
                        },
                        {
                            id: "2",
                            name: "没有欲望的美好肉体"
                        },
                        {
                            id: "1",
                            name: "性冷淡"
                        }
                    ]
                }, {
                    type: "select",
                    label: "版权",
                    model: "copyright",
                    values: [{
                            id: "1",
                            name: "禁止在任何地方发布"
                        },
                        {
                            id: "2",
                            name: "可以在我的网站发布不露脸的照片"
                        },
                        {
                            id: "3",
                            name: "可以在我的网站发布所有照片"
                        },
                        {
                            id: "4",
                            name: "可以在我的网站和其他平台发布不露脸的照片"
                        },
                        {
                            id: "5",
                            name: "可以在我的网站和其他平台发布所有照片"
                        }
                    ]
                }, {
                    type: "input",
                    inputType: "text",
                    label: "特殊要求",
                    model: "special",
                    placeholder: "例：我要和我的宠物一起拍照！",
                }, {
                    type: "input",
                    inputType: "text",
                    label: "备注",
                    model: "note",
                    placeholder: "还有什么没有提到的？",
                }, {
                    type: "checkbox",
                    label: "需要纸质合同",
                    hint: "自己打印",
                    model: "contract"
                }]
            }
        },
        methods: {
            submitData() {
                this.submitLabel = "稍等"
                this.$http.post('newApplier', this.model).then(res => {
                    this.submitLabel = "提交成功"
                    alert("提交成功")
                    this.$router.push({
                        path: "/"
                    });
                }, res => {
                    alert("服务器发生了一个严重错误")
                    this.submitLabel = "Don't Panic!"
                })
            },
            callMe(q, value) {
                this.model[q] = value
            }
        },
        mounted() {
            window.scrollTo(0, 0)
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .apply_form {
        background-color: #fafafa;
        margin: 8px 8px 36px 8px;
        font-size: 0.875em;
        border: 1px solid @Arcturus;
        .submit_button {
            text-align: center;
            height: 44px;
            line-height: 44px;
            background-color: @Moon;
            color: @Arcturus;
        }
    }
</style>