import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  loading: require('~/assets/images/loading.jpg')
})
