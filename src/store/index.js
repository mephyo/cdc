import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

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
            // const url = '/static/Gallery.json'
            const url = '/static/Galerie.json'

            return new Promise((resolve, reject) => {
                Vue.http.get(url).then(response => {
                    context.commit("setGallery", response)
                    resolve()
                }, response => {
                    console.error("I'm totally fucked.")
                });
            })
        },
    }
})