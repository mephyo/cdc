import Vue from 'vue'
import Vuex from 'vuex'
import Gallery from '../../static/Gallery'
// import Gallery from '../../static/Galerie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gallery: Gallery.gallery.reverse(),
    nowGalleryIndex: 0,
    nowGallery: {},
    nowPhotoIndex: 0,
    nowPhoto: {}
  },
  mutations: {
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
  }
})
