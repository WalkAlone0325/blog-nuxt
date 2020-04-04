import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c5197754 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _a6af1ec0 = () => interopDefault(import('..\\pages\\archives\\index.vue' /* webpackChunkName: "pages_archives_index" */))
const _fa2b25e6 = () => interopDefault(import('..\\pages\\article\\index.vue' /* webpackChunkName: "pages_article_index" */))
const _043f2e72 = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages_home_index" */))
const _3d270477 = () => interopDefault(import('..\\pages\\link\\index.vue' /* webpackChunkName: "pages_link_index" */))
const _63fc69ec = () => interopDefault(import('..\\pages\\project\\index.vue' /* webpackChunkName: "pages_project_index" */))
const _6058a600 = () => interopDefault(import('..\\pages\\record\\index.vue' /* webpackChunkName: "pages_record_index" */))
const _005a4eb5 = () => interopDefault(import('..\\pages\\article\\_id.vue' /* webpackChunkName: "pages_article__id" */))
const _17905171 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _c5197754,
    name: "about"
  }, {
    path: "/archives",
    component: _a6af1ec0,
    name: "archives"
  }, {
    path: "/article",
    component: _fa2b25e6,
    name: "article"
  }, {
    path: "/home",
    component: _043f2e72,
    name: "home"
  }, {
    path: "/link",
    component: _3d270477,
    name: "link"
  }, {
    path: "/project",
    component: _63fc69ec,
    name: "project"
  }, {
    path: "/record",
    component: _6058a600,
    name: "record"
  }, {
    path: "/article/:id",
    component: _005a4eb5,
    name: "article-id"
  }, {
    path: "/",
    component: _17905171,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
