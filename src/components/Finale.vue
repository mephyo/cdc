<template>
    <footer class="finale" lang="zh-CN">
        <div class="apply-wrapper">
            <div class="apply-btn" @click="goApply">
                <span>拍摄</span>
                <span>申请</span>
            </div>
        </div>
        <div class="copyright-wrapper">
            <h1>Copyright & Licence</h1>
            <p>All Rights Reserved, {{year}} Camera del Cavallo.</p>
            <p></p>
            <div>
                <p>不要把图片用于个人观赏之外的其他目的。</p>
                <p>如果你下载了图片，不要把图片发送给他人。</p>
                <p>如果你是通过图片的 EXIF 信息来到这个网站，请确保图片是从通过合法途径得到的。</p>
                <p>如果你想要购买照片的版权，请联系我。</p>
                <p>
                    <em>hergloves@gmail.com</em>
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Finale",
        data() {
            return {
                year: (new Date()).getFullYear()
            }
        },
        methods: {
            goApply() {
                this.$router.push({
                    path: "/Apply"
                });
            }
        }
    };
</script>

<style lang="less">
    @import "../style/variables.less";
    .finale {
        display: flex;
        padding: 16px;
        background-color: @Black0;
        color: @White0;
    }

    .apply-wrapper {
        padding-right: 16px;
        flex-grow: 0;
        flex-shrink: 0;
        .apply-btn {
            width: 40px;
            height: 40px;
            text-align: center;
            font-size: 0.75em;
            border: 1px solid @White0;
            border-radius: 3px;
            .inner-middle;
            flex-direction: column;
            cursor: pointer;
            user-select: none;
        }
    }

    .copyright-wrapper {
        flex-grow: 1;
        font-size: 0.75em;
        text-align: left;
        h1 {
            margin-bottom: 0.5em;
        }
    }
</style>