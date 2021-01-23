import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _60771d3a = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _21320c73 = () => interopDefault(import('..\\pages\\archives\\index.vue' /* webpackChunkName: "pages_archives_index" */))
const _65a48ada = () => interopDefault(import('..\\pages\\article\\index.vue' /* webpackChunkName: "pages_article_index" */))
const _fc84a876 = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages_home_index" */))
const _8ab4fc6c = () => interopDefault(import('..\\pages\\link\\index.vue' /* webpackChunkName: "pages_link_index" */))
const _9e882e52 = () => interopDefault(import('..\\pages\\project\\index.vue' /* webpackChunkName: "pages_project_index" */))
const _782d1a93 = () => interopDefault(import('..\\pages\\record\\index.vue' /* webpackChunkName: "pages_record_index" */))
const _32ab7bc2 = () => interopDefault(import('..\\pages\\article\\_id.vue' /* webpackChunkName: "pages_article__id" */))
const _807fedf8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _60771d3a,
    name: "about"
  }, {
    path: "/archives",
    component: _21320c73,
    name: "archives"
  }, {
    path: "/article",
    component: _65a48ada,
    name: "article"
  }, {
    path: "/home",
    component: _fc84a876,
    name: "home"
  }, {
    path: "/link",
    component: _8ab4fc6c,
    name: "link"
  }, {
    path: "/project",
    component: _9e882e52,
    name: "project"
  }, {
    path: "/record",
    component: _782d1a93,
    name: "record"
  }, {
    path: "/article/:id",
    component: _32ab7bc2,
    name: "article-id"
  }, {
    path: "/",
    component: _807fedf8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
