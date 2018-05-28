<template>
    <div class="contracts-wrapper" lang="zh-cn">
        <contracts-stepper :steps="steps" :currentStep="currentStep"></contracts-stepper>
        <transition-group name="slide" mode="out-in">
            <section class="contract-section" v-if="currentStep===1" key="1">
                <div class="contract-passcode">
                    <p>请输入验证码</p>
                    <input type="number" class="passcode-input" v-model="stepDataOne.passcode" @keyup.enter="chkStep1">
                </div>
                <div class="contract-button" @click="chkStep1">{{stepDataOne.btnLabel}}</div>
            </section>
            <section class="contract-section" v-if="currentStep===2" key="2">
                <p>欢迎回来，{{model.name}}。</p>
                <p>这是你之前选择的拍摄尺度：</p>
                <blockquote v-if="this.model.phyLimit == '1'">内衣</blockquote>
                <blockquote v-if="this.model.phyLimit == '2'">半裸</blockquote>
                <blockquote v-if="this.model.phyLimit == '3'">全裸然而不露点</blockquote>
                <blockquote v-if="this.model.phyLimit == '4'">全裸并露点</blockquote>
                <p>这是你之前选择的发布限制：</p>
                <blockquote v-if="this.model.copyright == '1'">禁止在任何地方发布</blockquote>
                <blockquote v-if="this.model.copyright == '2'">可以在我的网站发布不露脸的照片</blockquote>
                <blockquote v-if="this.model.copyright == '3'">可以在我的网站发布所有照片</blockquote>
                <blockquote v-if="this.model.copyright == '4'">可以在我的网站和其他平台发布不露脸的照片</blockquote>
                <blockquote v-if="this.model.copyright == '5'">可以在我的网站和其他平台发布所有照片</blockquote>
                <p>以上信息正确且有效吗？</p>
                <div class="contract-button" @click="currentStep = 3">是的</div>
                <div class="contract-button-secondary" @click="secondChance">{{stepDataTwo.btnLabel}}</div>
            </section>
            <section class="contract-section" v-if="currentStep===3" key="3">
                <p>这是协议中附加的内容，不会包含在正式合同中，点击下一步表示你已同意。</p>
                <p>为了上去显得专业而严禁，下文中的“摄影师”=我，“模特”=你。</p>
                <blockquote>所拍摄的照片版权归摄影师和模特共同所有，摄影师在本网站和其他平台，以及与第三方的私人通讯中仅能够发布没有明显身份辨识度的照片，任何时候如模特认为已发布的照片不妥，可以无条件要求摄影师撤下，摄影师必须执行。</blockquote>
                <blockquote>模特在公开平台发布照片时，在可能的情况下有义务提供摄影师的推广链接，包括豆瓣主页和微信号，然而，
                    <em>请不要通过公开途径提供本网站的链接，通过通讯工具分享是允许的，但是请只分享给值得信任的人。</em>
                </blockquote>
                <blockquote>如果拍摄完成后出现意外导致照片无法交付，摄影师必须支付这次拍摄全部的第三方费用。</blockquote>
                <blockquote>如果今后有任何社交接触，对于此次拍摄活动，摄影师和模特有义务保密。</blockquote>
                <blockquote>假设拍摄过程没有任何不快的经历，照片顺利交付。在今后任何时间，模特禁止将所拍的照片用作对摄影师有负面作用的证据。</blockquote>
                <div class="contract-button" @click="currentStep = 4">下一步</div>
            </section>
            <section class="contract-section" v-if="currentStep===4" key="4">
                <p>这是可供打印的合同版本，请确认合同内容后签名。</p>
                <article class="contract-wrapper">
                    <h1>拍摄合同</h1>
                    <p>经双⽅方协商达成以下协议:</p>
                    <ol>
                        <li>甲⽅作为⼄方的⼈体摄影师，有拍摄⼄方的权利，并享有拍摄作品的著作权。</li>
                        <li>甲⽅只有经过⼄方同意后才能将所拍摄作品(以单张为单位)⽤于发表。</li>
                        <li>甲⽅只能将所拍摄作品用于非商业用途。</li>
                        <li>甲⽅需保护⼄方的肖像权和隐私权，未经乙方同意不得随意透露乙方的有关资料。</li>
                        <li>在拍摄过程中产生的第三方费用由双⽅商议后支付。</li>
                    </ol>
                    <p class="contract-sign-line">甲方签名：</p>
                    <p class="contract-sign-line">⼄方签名：</p>
                </article>
                <p>请在下方签名：</p>
                <VueSignaturePad height="200px" :options="padOptions" saveType="image/svg+xml" ref="signaturePad" />
                <div class="contract-button" @click="chkStep4">下一步</div>
                <div class="contract-button-secondary" @click="resign">撤销一笔</div>
            </section>
            <section class="contract-section" v-if="currentStep===5" key="5">
                <p>这是最终的合同。</p>
                <article class="contract-wrapper">
                    <h1>拍摄合同</h1>
                    <p>经双⽅方协商达成以下协议:</p>
                    <ol>
                        <li>甲⽅作为⼄方的⼈体摄影师，有拍摄⼄方的权利，并享有拍摄作品的著作权。</li>
                        <li>甲⽅只有经过⼄方同意后才能将所拍摄作品(以单张为单位)⽤于发表。</li>
                        <li>甲⽅只能将所拍摄作品用于非商业用途。</li>
                        <li>甲⽅需保护⼄方的肖像权和隐私权，未经乙方同意不得随意透露乙方的有关资料。</li>
                        <li>在拍摄过程中产生的第三方费用由双⽅商议后支付。</li>
                    </ol>
                    <p class="contract-sign-line">甲方签名：
                        <img class="sign-img" :src="mySign.data" alt="甲方签名">
                    </p>
                    <p class="contract-sign-line">⼄方签名：
                        <img class="sign-img" :src="yourSign.data" alt="⼄方签名">
                    </p>
                </article>
                <p>此合同不会保存在服务器上，如需打印请自行保存。</p>
                <p>本流程并不是一次性的，你随时可以再次生成一份合同。</p>
            </section>
        </transition-group>
    </div>
</template>

<script>
    import ContractsStepper from "@/components/ContractsStepper";

    export default {
        name: "Contracts",
        components: {
            ContractsStepper
        },
        data() {
            return {
                steps: [{
                    order: 1,
                    label: "验证"
                }, {
                    order: 2,
                    label: "确认现有条件"
                }, {
                    order: 3,
                    label: "附加条件"
                }, {
                    order: 4,
                    label: "预览与签名"
                }, {
                    order: 5,
                    label: "完成"
                }],
                currentStep: 1,
                model: {
                    name: "",
                    copyright: "",
                    phyLimit: ""
                },
                stepDataOne: {
                    passcode: "",
                    btnLabel: "下一步"
                },
                stepDataTwo: {
                    btnLabel: "我要重新选择"
                },
                padOptions: {
                    backgroundColor: '#ffffff',
                },
                yourSign: "",
                mySign: {
                    isEmpty: false,
                    data: "data:image/png;base64,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"
                },
                date: {
                    year: (new Date()).getFullYear(),
                    month: (new Date()).getMonth() + 1,
                    date: (new Date()).getDate()
                }
            }
        },
        computed: {
            contracts() {
                return this.$store.state.contracts
            }
        },
        methods: {
            chkStep1() {
                if (this.contracts[this.stepDataOne.passcode]) {
                    this.model = this.contracts[this.stepDataOne.passcode]
                    this.currentStep = 2
                } else {
                    this.stepDataOne.btnLabel = "验证码错误"
                    setTimeout(() => {
                        this.stepDataOne.btnLabel = "下一步"
                        this.stepDataOne.passcode = ""
                    }, 1000);
                }
            },
            secondChance() {
                // let answer = confirm("请在我也想拍页面重新填写资料并提交，等待至少48小时直到您的合同重新（人工）生成，现在前往填写吗？")
                // if (answer == true) {
                //     this.$router.push({
                //         path: "/apply"
                //     });
                // } else {
                //     this.stepDataTwo.btnLabel = "我还要重新选择"
                // }
                alert("目前还不能重新选择。")
            },
            chkStep4() {
                const sign = this.$refs.signaturePad.saveSignature();
                if (sign.isEmpty === true) {
                    alert("签名不能为空。")
                } else {
                    this.yourSign = sign
                    this.currentStep = 5
                    window.scrollTo(0, 0)
                }
            },
            resign(){
                this.$refs.signaturePad.undoSignature()
            }
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .contract-section {
        margin: 0 8px 8px 8px;
        padding: 16px;
        color: @Moon;
        background-color: @Arcturus;
        border-radius: 8px;
        position: absolute;
        top: 56px;
        left: 0;
        right: 0;
        box-shadow: @BigShadow;
        p {
            text-indent: 2em;
        }
    }

    .contract-button {
        text-align: center;
        height: 44px;
        line-height: 44px;
        border-radius: 4px;
        background-color: @Moon;
        color: @Arcturus;
        margin-top: 32px;
        user-select: none;
    }

    .contract-button-secondary {
        text-align: center;
        height: 44px;
        line-height: 44px;
        border-radius: 4px;
        background-color: white;
        border: 1px solid #ccc;
        color: @Moon;
        margin-top: 16px;
        user-select: none;
    }

    .contract-passcode {
        text-align: center;
        p {
            font-size: 1em;
            text-indent: 0;
        }
        .passcode-input {
            font-size: 1em;
            text-align: center;
            outline: none;
            border-radius: 0;
            border: 0;
            border-radius: 4px;
            background-color: white;
            display: block;
            margin: 16px auto;
            width: 200px;
            box-sizing: border-box;
            height: 40px;
            line-height: 40px;
            color: @Moon;
            &:focus {
                box-shadow: @SmallShadow;
            }
        }
    }

    blockquote {
        margin: 8px 0;
        padding: 8px;
        text-indent: 2em;
        background-color: white;
        border-radius: 4px;
        font-size: 0.75em;
        color: #666;
    }

    .contract-wrapper {
        background-color: white;
        color: black;
        margin: 16px -24px;
        padding: 16px;
        text-indent: 0;
        ol {
            list-style-type: decimal;
            margin-left: 2em;
            margin-bottom: 2em;
        }
        li {
            line-height: 2;
            margin-bottom: 1em;
        }
        h1 {
            font-size: 1.5em;
            font-weight: 600;
            text-align: center;
        }
        p {
            font-size: 1em;
            text-indent: 0;
            line-height: 2;
            margin-bottom: 1em;
        }
        .contract-sign-line {
            text-align: right;
            .sign-img {
                display: inline-block;
                height: 2em;
                width: auto;
            }
        }
    }
</style>