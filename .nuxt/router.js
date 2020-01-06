import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cce345a4 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _fc0eee70 = () => interopDefault(import('..\\pages\\archives\\index.vue' /* webpackChunkName: "pages_archives_index" */))
const _36baa036 = () => interopDefault(import('..\\pages\\article\\index.vue' /* webpackChunkName: "pages_article_index" */))
const _4e719a9a = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages_home_index" */))
const _f14d1ec2 = () => interopDefault(import('..\\pages\\link\\index.vue' /* webpackChunkName: "pages_link_index" */))
const _2fba0de2 = () => interopDefault(import('..\\pages\\project\\index.vue' /* webpackChunkName: "pages_project_index" */))
const _30beafb0 = () => interopDefault(import('..\\pages\\record\\index.vue' /* webpackChunkName: "pages_record_index" */))
const _071530e6 = () => interopDefault(import('..\\pages\\article\\_id.vue' /* webpackChunkName: "pages_article__id" */))
const _3b1e08ce = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _cce345a4,
    name: "about"
  }, {
    path: "/archives",
    component: _fc0eee70,
    name: "archives"
  }, {
    path: "/article",
    component: _36baa036,
    name: "article"
  }, {
    path: "/home",
    component: _4e719a9a,
    name: "home"
  }, {
    path: "/link",
    component: _f14d1ec2,
    name: "link"
  }, {
    path: "/project",
    component: _2fba0de2,
    name: "project"
  }, {
    path: "/record",
    component: _30beafb0,
    name: "record"
  }, {
    path: "/article/:id",
    component: _071530e6,
    name: "article-id"
  }, {
    path: "/",
    component: _3b1e08ce,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
