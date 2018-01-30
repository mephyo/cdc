<template>
    <div class="boncka" lang="zh-CN">
        <ul class="boncka_list">
            <spetsnaz v-for="(value, key) in model" :key="key" :q="key" :value="value" :schema="schema" @input="callMe" />
        </ul>
        <div class="submit_button" @click="submitData">提交</div>
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
                model: {
                    call: "",
                    age: "",
                    gender: "female",
                    contact: "",
                    whereToSee: "",
                    place: ["hotel"],
                    placeMore: "",
                    time: ["afternoon"],
                    style: "myIdea",
                    styleMore: "",
                    cloth: ["nude", "underwear"],
                    clothMore: "",
                    emotion: "excellent",
                    pose: "good",
                    limit: "3",
                    copyright: "2",
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
                    min: 14,
                    max: 100,
                    placeholder: "可不填",
                }, {
                    type: "select",
                    label: "性别",
                    model: "gender",
                    values: [{
                            id: "female",
                            name: "女"
                        },
                        {
                            id: "male",
                            name: "男"
                        },
                        {
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
                            name: "野外"
                        },
                        {
                            id: "public",
                            name: "公共场所"
                        },
                        {
                            id: "hotel",
                            name: "酒店"
                        },
                        {
                            id: "home",
                            name: "住处"
                        },
                        {
                            id: "other",
                            name: "其他"
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
                        name: "按你的一贯的风格来"
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
                    hint: "选3是要加钱的",
                    values: [{
                            id: "4",
                            name: "A片那种"
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
                    required: true,
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
                    type: "checkbox",
                    label: "需要签订隐私合同（自己打印）",
                    model: "contract"
                }]
            }
        },
        methods: {
            submitData() {
                this.$http.post('newApplier', this.model).then(res => {
                    alert("提交成功")
                    this.$router.push({
                        path: "/"
                    });
                }, res => {
                    alert("FATAL ERROR")
                })
            },
            callMe(q, value) {
                this.model[q] = value
            }
        }
    }
</script>

<style lang="less">
    .boncka {
        background-color: #fafafa;
        margin: 8px 8px 36px 8px;
        font-size: 0.875em;
    }
    .submit_button {
        text-align: center;
        height: 44px;
        line-height: 44px;
        background-color: #0080ff;
        color: #fff;
    }
</style>