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
        onlyForLisa: false,
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
        lisaIsWatching: function (state) {
            state.onlyForLisa = true
        },
        hackModeEnabled: function (state) {
            state.hackMode = true
        },
        setGallery: function (state, gallery) {
            state.gallery = gallery.body.gallery.reverse()
        },
        changeGallery: function (state, galleryId) {
            const galleryIndex = state.gallery.map(gallery => gallery.codeName).indexOf(galleryId)
            state.nowGalleryIndex = galleryIndex
            state.nowGallery = state.gallery[galleryIndex]
        },
        changePhoto: function (state, photoId) {
            const photoIndex = state.nowGallery.photos.map(photo => photo.codeName).indexOf(photoId)
            state.nowPhotoIndex = photoIndex
            state.nowPhoto = state.nowGallery.photos[photoIndex]
        },
    },
    actions: {
        getGallery: function (context) {
            const url = "getGallery"
            // const url = "getGalerie"

            return new Promise((resolve, reject) => {
                Vue.http.get(url).then(response => {
                    context.commit("setGallery", response)
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