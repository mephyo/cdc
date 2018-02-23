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
            let url = "/static/json/gallery.json"

            if (process.env.NODE_ENV === 'development') {
                url = '/static/json/galerie.json'
            }

            return new Promise((resolve, reject) => {
                Vue.http.get(url).then(response => {
                    context.commit("setGallery", response.body.gallery.reverse())
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
                lastLocation: viewerInfo.lastLocation
            })
        },
        newLocation: function (context, position) {
            Vue.http.post('newLocation', {
                position: position
            })
        }
    }
})