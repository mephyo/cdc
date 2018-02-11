<template>
    <div class="apply_wrapper" lang="zh-CN">
        <a class="apply_button apply_yellow" v-if="!haveApply" @click="wishYouWereHere" :class="{'apply_crazy': haveClicked}">
            <span v-if="!haveClicked">我也想拍</span>
            <span v-else>…稍等…</span>
        </a>
        <div class="apply_content" v-if="haveApply">
            <div class="apply_content_inner">
                <p>谢谢你喜欢我的照片，我也很想拍你哦。</p>
                <template v-if="haveLocation">
                    <p v-if="ourDistance < 50">我们之间的距离近到不可思议，请务必马上来找我拍照。</p>
                    <p v-else-if="ourDistance < 200">我们之间的距离很近，我可以来找你拍照。</p>
                    <p v-else>我可以给你拍照，但是你必须来苏州找我。</p>
                </template>
                <div class="show_introduction" v-if="!showIntroduction" @click="showIntroduction = true">
                    <span>在与我联系之前，或许你可以先了解一下我</span>
                </div>
                <introduction v-else></introduction>
            </div>
        </div>
        <a class="apply_button apply_blue" v-if="haveApply" @click="goApply">来拍照吧</a>
    </div>
</template>

<script>
    import Introduction from "@/components/Introduction";
    export default {
        name: "Apply",
        components: {
            Introduction
        },
        data() {
            return {
                showIntroduction: false,
                haveClicked: false,
                haveApply: false,
                haveLocation: false,
                ourDistance: NaN
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
                    console.warn('您的浏览器不支持地理位置')
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
                    console.warn('无法获取您的位置')
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