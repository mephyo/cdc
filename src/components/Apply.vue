<template>
    <div class="apply_wrapper">
        <a class="apply_button apply_yellow" v-if="!haveApply" @click="wishYouWereHere" :class="{'apply_crazy': haveClicked}">
            <span v-if="!haveClicked">
                <template v-if="inSinglePage">点我</template>
                <template v-else>我也想拍</template>
            </span>
            <span v-else>…稍等…</span>
        </a>
        <div class="apply_content" v-if="haveApply">
            <div class="apply_content_inner">
                <p>谢谢你喜欢我的照片，我也很想拍你哦。</p>
                <template v-if="haveLocation">
                    <p v-if="ourDistance < 200">我可以来你的城市找你拍照。</p>
                    <p v-else>我可以给你拍照，但是你必须来苏州找我。</p>
                </template>
            </div>
        </div>
        <a class="apply_button apply_blue" v-if="haveApply" @click="goApply">来拍照吧</a>
    </div>
</template>

<script>
    export default {
        name: "Apply",
        data() {
            return {
                haveClicked: false,
                haveApply: false,
                haveLocation: false,
                ourDistance: NaN
            }
        },
        computed: {
            inSinglePage() {
                const position = this.$route.path
                if (position === '/apply') {
                    return true
                } else {
                    return false
                }
            }
        },
        methods: {
            wishYouWereHere() {
                let that = this
                that.haveClicked = true

                function scrollBottom() {
                    document.body.scrollTop = document.body.scrollHeight;
                }

                function animiIsGreat() {
                    setTimeout(() => {
                        that.haveApply = true;
                        scrollBottom();
                    }, 2000);
                }
                if (!navigator.geolocation) {
                    animiIsGreat()
                    console.log('您的浏览器不支持地理位置')
                    return;
                }
                const myLocation = {
                    latitude: 31.330824,
                    longitude: 120.643594
                }

                function getDistance(lon1, lat1, lon2, lat2) {
                    if (typeof (Number.prototype.toRad) === "undefined") {
                        Number.prototype.toRad = function () {
                            return this * Math.PI / 180;
                        }
                    }
                    let R = 6371;
                    let dLat = (lat2 - lat1).toRad();
                    let dLon = (lon2 - lon1).toRad();
                    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                        Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
                        Math.sin(dLon / 2) * Math.sin(dLon / 2);
                    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    let d = R * c;
                    that.ourDistance = d
                    animiIsGreat()
                }

                function geoSuccess(position) {
                    const yourLocation = {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    };
                    getDistance(yourLocation.lon, yourLocation.lat, myLocation.longitude, myLocation.latitude)
                    that.haveLocation = true
                    localStorage.setItem("lastLocation", JSON.stringify(yourLocation))
                    that.$store.dispatch("newLocation", JSON.stringify(yourLocation))
                }

                function geoError() {
                    animiIsGreat()
                    console.log('无法获取您的位置')
                    return;
                }
                navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
            },
            goApply() {
                this.$router.push({
                    path: "/Apply"
                });
            }
        }
    };
</script>