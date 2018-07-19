import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

Vue.http.options.root = 'https://camera-dev-cavallo.herokuapp.com/'
Vue.http.options.emulateJSON = true;

export default new Vuex.Store({
    state: {
        gallery: [],
        nowGallery: {},
    },
    mutations: {
        setGallery(state, gallery) {
            state.gallery = gallery
        },
        changeGallery(state, galleryId) {
            const galleryIndex = state.gallery.map(gallery => gallery.codeName).indexOf(galleryId)
            state.nowGallery = state.gallery[galleryIndex]
        },
    },
    actions: {
        getGallery(context) {
            let url = "/static/json/gallery.json"
            if (process.env.NODE_ENV === 'development') {
                url = "/static/json/galerie.json"
            }

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
                    console.error("FATAL ERROR")
                });
            })
        },
        newViewer(viewerInfo) {

            // Jump out in DEV ENV
            if (process.env.NODE_ENV === 'development') {
                return
            }

            Vue.http.post('newViewer', {
                model: viewerInfo.model,
                viewTimes: viewerInfo.viewTimes,
                lastLocation: viewerInfo.lastLocation,
                navigator: viewerInfo.navigator
            })
        },
        newLocation(context, position) {
            Vue.http.post('newLocation', {
                position: position
            })
        }
    }
})