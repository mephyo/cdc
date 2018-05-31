<template>
    <div class="copyright-wrapper">
        <img src="../assets/images/badge-copyright.svg" alt="badge" class="copyright-badge">
        <h1>Copyright & Licence</h1>
        <p>All Rights Reserved, {{year}} Camera del Cavallo.</p>
        <p></p>
        <div lang="zh-cn">
            <p>不要把图片用于个人观赏之外的其他目的。</p>
            <p>如果你下载了图片，不要把图片发送给他人。</p>
            <p>如果你是通过图片的 EXIF 信息来到这个网站，请确保图片是从通过合法途径得到的。</p>
            <p>如果你想要购买照片的版权，请联系我。</p>
            <p>
                <em>hergloves@gmail.com</em>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Copyright",
        data() {
            return {
                year: (new Date()).getFullYear()
            }
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .copyright-wrapper {
        margin: 0 8px 8px 8px;
        padding: 16px;
        color: @Moon;
        background-color: @Arcturus;
        position: relative;
    }

    .copyright-badge {
        height: 160px;
        width: 160px;
    }
</style>