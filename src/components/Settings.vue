<template>
    <div class="settings-wrapper">
        <dl>
            <dt lang="zh-cn">如果《喜欢过的照片》相册为空却依然在首页上显示，点击这里清除缓存。</dt>
            <dd>
                <button>Clear Cache</button>
            </dd>
            <dd lang="zh-cn">这么做会清空《喜欢过的照片》相册，您可能需要刷新首页来获得正确的显示。</dd>
        </dl>
    </div>
</template>

<script>
    export default {
        name: "Settings",
        methods: {
            clearCache() {
                localStorage.removeItem("likedPhotos")
            }
        }
    }
</script>

<style lang="less">
    dl,
    dt,
    dd {
        margin: 0;
        padding: 0;
    }
</style>