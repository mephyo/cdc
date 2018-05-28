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
                    console.warn('FATAL ERROR: GPS fail, actually there is no GPS.')
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
                    console.warn('FATAL ERROR: GPS fail, we are lost!')
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

<style lang="less">
    @import "../style/variables.less";
    .apply_wrapper {
        text-align: center;
        .apply_button {
            display: block;
            text-align: center;
            margin: 16px auto;
            height: 30px;
            line-height: 30px;
            border-radius: 15px;
            width: 120px;
            font-size: 0.875em;
            font-weight: 500;
            color: @Europa;
            background: @Rivendell;
            background-size: 200% 200%;
            &.apply_crazy {
                animation: DaNang 1s ease infinite;
            }
        }
        .apply_content {
            text-align: center;
            margin: 16px 4px;
            background: @Rivendell;
            background-size: 200% 200%;
            animation: DaNang 1s ease infinite;
            overflow: hidden;
            border-radius: 4px;
            .apply_content_inner {
                margin: 1px;
                padding: 8px;
                background-color: @Moon;
                border-radius: 3px;
            }
        }
    }
</style>