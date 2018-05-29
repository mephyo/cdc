<template>
    <div class="contracts-wrapper" lang="zh-cn">
        <contracts-stepper :steps="steps" :currentStep="currentStep"></contracts-stepper>
        <transition-group name="slide" mode="out-in">
            <section class="contract-section" v-if="currentStep===1" key="1">
                <p style="text-align: center">请输入验证码</p>
                <input type="tel" pattern="[0-9]*" class="passcode-input" v-model="stepDataOne.passcode" @keyup.enter="chkStep1">
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
                <p>为了上去显得专业而严谨，下文中的“摄影师”=我，“模特”=你。</p>
                <blockquote>所拍摄的照片版权归摄影师和模特共同所有，摄影师在本网站和其他平台，以及与第三方的私人通讯中仅能够发布没有明显身份辨识度的照片，任何时候如模特认为已发布的照片不妥，可以无条件要求摄影师撤下，摄影师必须执行。</blockquote>
                <blockquote>模特在公开平台发布照片时，提供摄影师的推广链接不是必须的，然而，
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
                <p>请在下方输入身份证号码：</p>
                <input type="tel" pattern="[0-9]*" class="id-input" v-model="stepDataFour.idNum">
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
                    <p class="contract-sign-line">
                        <span>甲方签名：</span>
                        <img class="sign-img" src="static/images/a-nice-sign.svg" alt="甲方签名">
                    </p>
                    <p class="contract-sign-line">甲方身份证号码：320503199109272512</p>
                    <p class="contract-sign-line">
                        <span>⼄方签名：</span>
                        <img class="sign-img" :src="stepDataFour.yourSign.data" alt="⼄方签名">
                    </p>
                    <p class="contract-sign-line">⼄方身份证号码：{{stepDataFour.idNum}}</p>
                    <p class="contract-sign-line">{{date.year}}年{{date.month}}月{{date.date}}日</p>
                </article>
                <p>合同不会保存在服务器上，请自行保存。</p>
                <p>此页面已经为打印排版优化，在浏览器里打印时，除合同以外的内容不会被输出。</p>
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
                stepDataFour: {
                    yourSign: "",
                    idNum: ""
                },
                padOptions: {
                    backgroundColor: '#ffffff',
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
                // let answer = window.confirm("请在我也想拍页面重新填写资料并提交，等待至少48小时直到您的合同重新（人工）生成，现在前往填写吗？")
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

                if (sign.isEmpty === true && !this.stepDataFour.idNum.length) {
                    alert("请吧。")
                } else if (!this.stepDataFour.idNum.length) {
                    alert("身份证号码不能为空。")
                } else if (sign.isEmpty === true) {
                    alert("签名不能为空。")
                } else {
                    this.stepDataFour.yourSign = sign
                    this.currentStep = 5
                    setTimeout(() => {
                        window.scrollTo(0, 0)
                    }, 500);
                    this.$store.dispatch("newContract", {
                        passcode: this.stepDataOne.passcode,
                        sign: this.stepDataFour.yourSign.data,
                        idNum: this.stepDataFour.idNum
                    })
                }
            },
            resign() {
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

    .id-input {
        font-size: 0.875em;
        text-align: center;
        outline: none;
        border-radius: 0;
        border: 0;
        border-radius: 4px;
        background-color: white;
        display: block;
        margin: 16px auto;
        box-sizing: border-box;
        height: 30px;
        line-height: 30px;
        width: 100%;
        color: @Moon;
        &:focus {
            box-shadow: @SmallShadow;
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
        font-family: serif;
        ol {
            list-style: decimal;
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
            font-family: sans-serif;
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
                vertical-align: middle;
                height: 2em;
                width: auto;
            }
        }
    }

    @media print {
        .contract-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 4;
            padding: 1.5cm;
            margin: 0;
            font-size: 14pt;
        }
    }
</style>