<template>
    <div class="boncka" lang="zh-CN">
        <div class="sigment_control" @click="switchCouple">
            <div class="sigment_control_label" :class="{selected: isCouple===false}">单人</div>
            <div class="sigment_control_label" :class="{selected: isCouple}">多人</div>
        </div>
        <ul class="boncka_list" v-if="!isCouple">
            <spetsnaz v-for="(value, key) in singleModel" :key="key" :q="key" :value="value" :schema="schema" @input="callMe" />
        </ul>
        <ul class="boncka_list" v-else>
            <spetsnaz v-for="(value, key) in doubleModel" :key="key" :q="key" :value="value" :schema="schema" @input="callMe" />
        </ul>
        <div class="submit_button" @click="submitData">{{submitLabel}}</div>
    </div>
</template>

<script>
    import Spetsnaz from "@/components/Spetsnaz";
    export default {
        name: "boncka",
        components: {
            Spetsnaz
        },
        data() {
            return {
                isCouple: false,
                submitLabel: "提交",
                singleModel: {
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
                    style: "myIdea",
                    styleMore: "",
                    emotion: "excellent",
                    pose: "good",
                    limit: "3",
                    copyright: "2",
                    note: "",
                    contract: false
                },
                doubleModel: {
                    call: "",
                    age: "",
                    coupleGender: "couple",
                    coupleGenderMore: "",
                    contact: "",
                    whereToSee: "",
                    company: "soloMan",
                    place: ["hotel"],
                    placeMore: "",
                    time: ["afternoon"],
                    cloth: ["nude", "underwear"],
                    clothMore: "",
                    style: "myIdea",
                    styleMore: "",
                    emotion: "excellent",
                    pose: "good",
                    limit: "3",
                    sex: false,
                    copyright: "2",
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
                            icon: "dawn",
                            id: "dawn",
                            name: "凌晨"
                        }, {
                            icon: "am",
                            id: "morning",
                            name: "上午"
                        },
                        {
                            icon: "pm",
                            id: "afternoon",
                            name: "下午"
                        },
                        {
                            icon: "evening",
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
                    label: "尺度",
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
                            name: "不穿衣服的性冷淡"
                        }
                    ]
                }, {
                    type: "select",
                    label: "版权",
                    model: "copyright",
                    values: [{
                            icon: "banned",
                            id: "1",
                            name: "禁止在任何地方发布"
                        },
                        {
                            icon: "siteprv",
                            id: "2",
                            name: "可以在我的网站发布不露脸的照片"
                        },
                        {
                            icon: "siteall",
                            id: "3",
                            name: "可以在我的网站发布所有照片"
                        },
                        {
                            icon: "universalprv",
                            id: "4",
                            name: "可以在我的网站和其他平台发布不露脸的照片"
                        },
                        {
                            icon: "universalall",
                            id: "5",
                            name: "可以在我的网站和其他平台发布所有照片"
                        }
                    ]
                }, {
                    type: "input",
                    inputType: "text",
                    label: "备注",
                    model: "note",
                    placeholder: "还有什么没有提到的？",
                }, {
                    type: "checkbox",
                    label: "需要签订隐私合同",
                    hint: "自己打印",
                    model: "contract"
                }, {
                    type: "select",
                    label: "性别",
                    model: "coupleGender",
                    values: [{
                            id: "couple",
                            name: "男 + 女"
                        },
                        {
                            id: "les",
                            name: "女 + 女"
                        },
                        {
                            id: "gay",
                            name: "男 + 男"
                        },
                        {
                            id: "triple",
                            name: "两人以上"
                        }
                    ]
                }, {
                    type: "input",
                    inputType: "text",
                    label: "性别的补充说明",
                    model: "coupleGenderMore",
                    placeholder: "情侣/闺蜜/基友",
                }, {
                    type: "select",
                    label: "对摄影师性别的要求",
                    model: "company",
                    values: [{
                        id: "soloMan",
                        name: "希望男性拍摄"
                    }, {
                        id: "soloWoman",
                        name: "希望女性拍摄"
                    }, {
                        id: "team",
                        name: "希望男女搭档"
                    }]
                }, {
                    type: "checkbox",
                    label: "拍摄内容包括性行为",
                    model: "sex"
                }, ]
            }
        },
        methods: {
            switchCouple() {
                this.isCouple = (this.isCouple === true) ? false : true
            },
            submitData() {
                const model = (this.isCouple === true) ? this.doubleModel : this.singleModel
                this.submitLabel = "稍等"
                this.$http.post('newApplier', model).then(res => {
                    this.submitLabel = "提交成功"
                    alert("提交成功")
                    this.$router.push({
                        path: "/"
                    });
                }, res => {
                    alert("FATAL ERROR: 服务器可能挂了")
                    this.submitLabel = "服务器可能挂了"
                })
            },
            callMe(q, value) {
                if (this.isCouple) {
                    this.doubleModel[q] = value
                } else {
                    this.singleModel[q] = value
                }
            }
        }
    }
</script>

<style lang="less">
    .boncka {
        background-color: #fafafa;
        margin: 8px 8px 36px 8px;
        font-size: 0.875em;
        border: 1px solid #fafafa;
    }

    .submit_button {
        text-align: center;
        height: 44px;
        line-height: 44px;
        background-color: #37322d;
        color: #fafafa;
    }

    .sigment_control {
        width: 120px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        box-sizing: border-box;
        border: 1px solid #37322d;
        display: flex;
        justify-content: space-around;
        margin: 8px auto;
        .sigment_control_label {
            flex-grow: 1;
            color: #37322d;
            &.selected {
                color: #fafafa;
                background-color: #37322d;
            }
        }
    }
</style>