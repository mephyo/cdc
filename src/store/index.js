import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

Vue.http.options.root = 'https://camera-dev-cavallo.herokuapp.com/'
Vue.http.options.emulateJSON = true;

export default new Vuex.Store({
    state: {
        showPrivate: false,
        hackMode: false,
        gallery: [],
        nowGalleryIndex: 0,
        nowGallery: {},
        nowPhotoIndex: 0,
        nowPhoto: {}
    },
    mutations: {
        getMeOut: function (state) {
            state.showPrivate = true
        },
        hackModeEnabled: function (state) {
            state.hackMode = true
        },
        setGallery: function (state, gallery) {
            state.gallery = gallery
        },
        addFavourite: function (state, favourites) {
            if (state.gallery[0].codeName === "favourites") {
                state.gallery[0] = favourites
            } else {
                state.gallery.unshift(favourites)
            }
        },
        removeFavourite: function (state) {
            state.gallery.shift()
        },
        changeGallery: function (state, galleryId) {
            const galleryIndex = state.gallery.map(gallery => gallery.codeName).indexOf(galleryId)
            state.nowGalleryIndex = galleryIndex
            state.nowGallery = state.gallery[galleryIndex]
        }
    },
    actions: {
        getGallery: function (context) {
            const url = "/static/json/gallery.json"

            return new Promise((resolve, reject) => {
                Vue.http.get(url).then(response => {
                    const prefix = response.body.prefix
                    let gallery = response.body.gallery.reverse()
                    gallery.forEach(g => {
                        g.cover = []
                        g.photos = []
                        for (let index = 0; index < g.coverIds.length; index++) {
                            const coverId = g.coverIds[index];
                            g.cover.push(prefix + g.codeName + "-" + coverId + ".jpg")
                        }
                        for (let index = 1; index <= g.photoIds; index++) {
                            const photo = {
                                src: prefix + g.codeName + "-" + index + ".jpg",
                                codeName: g.codeName + "-" + index
                            }
                            g.photos.push(photo)
                        }
                    });

                    context.commit("setGallery", gallery)
                    resolve()
                }, response => {
                    console.error("FATAL ERROR: cannot load gallery, it's been totally fucked.")
                });
            })
        },
        newViewer: function (context, viewerInfo) {
            Vue.http.post('newViewer', {
                model: viewerInfo.model,
                viewTimes: viewerInfo.viewTimes,
                lastLocation: viewerInfo.lastLocation,
                navigator: viewerInfo.navigator
            })
        },
        newLocation: function (context, position) {
            Vue.http.post('newLocation', {
                position: position
            })
        }
    }
})