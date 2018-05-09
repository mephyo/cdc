<template>
    <div class="settings-wrapper" lang="zh-cn">
        <button @click="clearCache">清除缓存</button>
        <p>如果《喜欢过的照片》相册为空却依然在首页上显示，点击这里清除缓存。</p>
        <p>这种情况非常罕见，一般是由于版本更新的遗毒所致。</p>
        <p>这么做会清空《喜欢过的照片》相册，您可能需要重新载入首页来获得正确的显示。</p>
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