<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
        </div>
        <dl>
            <dt>Lingerie</dt>
            <dd>I wanna be sexy enough without my significant other murdering me.</dd>
            <dt>Artistic Nude</dt>
            <dd>This could either be used in fashion where maybe a boob or two shows. Or an image shadowed or in black and white.</dd>
            <dt>Erotic Nude</dt>
            <dd>I'll stand there butt naked and say cheese.</dd>
            <dt>Adult Nude</dt>
            <dd>I'm a stripper looking to make extra cash.</dd>
        </dl>
        <div class="submit_button" @click="submitData">提交</div>
    </div>
</template>

<script>
    import VueFormGenerator from "vue-form-generator/dist/vfg-core.js";
    import "vue-form-generator/dist/vfg-core.css";

    export default {
        name: "Agent",
        components: {
            "vue-form-generator": VueFormGenerator.component
        },
        data() {
            return {
                model: {
                    call: "",
                    age: "",
                    gender: "female",
                    contact: "wechat",
                    email: "",
                    wechat: "",
                    qq: "",
                    imessage: "",
                    telegram: "",
                    whereToSee: "",
                    place: ["hotel"],
                    placeMore: "",
                    style: "myIdea",
                    styleMore: "",
                    cloth: ["nude", "underwear"],
                    clothMore: "",
                    limit: "3",
                    copyright: "2",
                    contract: false
                },
                schema: {
                    fields: [{
                        type: "input",
                        inputType: "text",
                        label: "称呼",
                        model: "call",
                        required: true,
                        placeholder: "不一定是真实姓名",
                        validator: VueFormGenerator.validators.string
                    }, {
                        type: "input",
                        inputType: "number",
                        label: "年龄",
                        model: "age",
                        min: 14,
                        max: 100,
                        placeholder: "可不填",
                        validator: VueFormGenerator.validators.number
                    }, {
                        type: "select",
                        label: "性别",
                        model: "gender",
                        required: true,
                        values: function () {
                            return [{
                                    id: "female",
                                    name: "女"
                                },
                                {
                                    id: "male",
                                    name: "男"
                                },
                                {
                                    id: "futa",
                                    name: "女装大佬"
                                }
                            ]
                        }
                    }, {
                        type: "select",
                        label: "联系方式",
                        model: "contact",
                        required: true,
                        values: function () {
                            return [{
                                    id: "email",
                                    name: "邮件"
                                },
                                {
                                    id: "wechat",
                                    name: "微信"
                                },
                                {
                                    id: "qq",
                                    name: "QQ"
                                },
                                {
                                    id: "imessage",
                                    name: "iMessage"
                                },
                                {
                                    id: "telegram",
                                    name: "Telegram"
                                }
                            ]
                        }
                    }, {
                        type: "input",
                        inputType: "email",
                        label: "邮件",
                        model: "email",
                        placeholder: "邮件地址",
                        validator: VueFormGenerator.validators.email,
                        visible: function (model) {
                            return model && model.contact === "email";
                        }
                    }, {
                        type: "input",
                        inputType: "text",
                        label: "微信",
                        model: "wechat",
                        placeholder: "微信账号",
                        visible: function (model) {
                            return model && model.contact === "wechat";
                        }
                    }, {
                        type: "input",
                        inputType: "text",
                        label: "QQ",
                        model: "qq",
                        placeholder: "QQ 账号",
                        visible: function (model) {
                            return model && model.contact === "qq";
                        }
                    }, {
                        type: "input",
                        inputType: "text",
                        label: "iMessage",
                        model: "imessage",
                        placeholder: "iMessage 账号",
                        visible: function (model) {
                            return model && model.contact === "imessage";
                        }
                    }, {
                        type: "input",
                        inputType: "text",
                        label: "Telegram",
                        model: "telegram",
                        placeholder: "Telegram 账号",
                        visible: function (model) {
                            return model && model.contact === "telegram";
                        }
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
                        multi: true,
                        required: true,
                        multiSelect: true,
                        values: [{
                                value: "outdoor",
                                name: "野外"
                            },
                            {
                                value: "public",
                                name: "公共场所"
                            },
                            {
                                value: "hotel",
                                name: "酒店"
                            },
                            {
                                value: "home",
                                name: "住处"
                            },
                            {
                                value: "other",
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
                        type: "select",
                        label: "拍摄风格",
                        model: "style",
                        required: true,
                        values: function () {
                            return [{
                                id: "myIdea",
                                name: "我有特别的想法"
                            }, {
                                id: "yourIdea",
                                name: "按你的一贯的风格来"
                            }]
                        }
                    }, {
                        type: "input",
                        inputType: "text",
                        label: "拍摄风格的补充说明",
                        model: "styleMore",
                        placeholder: "你有什么特别的想法？",
                        visible: function (model) {
                            return model && model.style === "myIdea";
                        }
                    }, {
                        type: "checklist",
                        label: "服装",
                        model: "cloth",
                        multi: true,
                        required: true,
                        multiSelect: true,
                        values: [{
                                value: "nude",
                                name: "裸体"
                            },
                            {
                                value: "underwear",
                                name: "内衣"
                            },
                            {
                                value: "other",
                                name: "其他"
                            }
                        ]
                    }, {
                        type: "input",
                        inputType: "text",
                        label: "服装的补充说明",
                        model: "clothMore",
                        placeholder: "你有什么特别的服装？",
                        visible: function (model) {
                            return model && model.cloth.includes("other");
                        }
                    }, {
                        type: "select",
                        label: "尺度",
                        model: "limit",
                        required: true,
                        hint: "See tips at bottom of this page",
                        values: function () {
                            return [{
                                    id: "4",
                                    name: "Adult Nude"
                                },
                                {
                                    id: "3",
                                    name: "Erotic Nude"
                                },
                                {
                                    id: "2",
                                    name: "Artistic Nude"
                                },
                                {
                                    id: "1",
                                    name: "Lingerie"
                                }
                            ]
                        }
                    }, {
                        type: "select",
                        label: "版权",
                        model: "copyright",
                        required: true,
                        values: function () {
                            return [{
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
                        }
                    }, {
                        type: "checkbox",
                        label: "需要签订合同",
                        model: "contract"
                    }]
                },

                formOptions: {
                    validateAfterLoad: false,
                    validateAfterChanged: true
                }
            }
        },
        methods: {
            submitData() {
                if (this.model.name === "") {
                    return
                }
                this.$http.post('newApplier', this.model).then(res => {
                    alert("提交成功")
                    this.$router.push({
                        path: "/"
                    });
                }, res => {
                    alert("FATAL ERROR")
                })
            }
        }
    }
</script>

<style lang="less">
    fieldset {
        border: 0;
        margin: 0;
        padding: 4px 4px 0;
    }

    .panel {
        margin: 8px 8px 38px;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #fff;
        overflow: hidden;
    }

    .panel-body {
        padding: 4px 4px 0;
    }

    .field-checklist .wrapper {
        width: 100%;
    }

    .field-wrap {
        margin-top: 4px;
    }

    .submit_button {
        display: block;
        height: 44px;
        line-height: 44px;
        text-align: center;
        background-color: #0080ff;
        color: #fff;
    }

    dl {
        margin: 0 4px 4px;
        font-size: 0.75em;
        background-color: #ddd;
        padding: 4px;
        border-radius: 4px;
        dt {
            font-weight: 600;
            color: #333;
            &:after {
                content: ":"
            }
        }
        dd {
            color: #666;
            margin: 4px;
        }
    }
</style>