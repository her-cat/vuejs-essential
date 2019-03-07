import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '../router'
import * as moreActions from './actions'

Vue.use(Vuex)

const state = {
  // 用户信息，初始值从本地 localStorage 获取
  user: ls.getItem('user'),
  // 添加 auth 来保存当前用户的登录状态
  auth: ls.getItem('auth'),
  // 所有文章状态
  articles: ls.getItem('articles')
}

const mutations = {
  UPDATE_USER(state, user) {
    // 改变 user 的值
    state.user = user
    // 将改变后的值存入 localStorage
    ls.setItem('user', user)
  },
  // 添加 UPDATE_AUTH 来更改当前用户的登录状态
  UPDATE_AUTH(state, auth) {
    state.auth = auth;
    ls.setItem('auth', auth);
  },
  // 更改所有文章的事件类型
  UPDATE_ARTICLES(state, articles) {
    state.articles = articles
    ls.setItem('articles', articles)
  }
}

const actions = {
  login({ commit }, user) {
    // 登录时有传用户信息，就更新下用户信息
    if (user) commit('UPDATE_USER', user)
    // 更新当前用的登录状态为已登录
    commit('UPDATE_AUTH', true)
    // 跳转到首页
    router.push('/')
  },
  logout({ commit }) {
    commit('UPDATE_AUTH', false)
    router.push({ name: 'Home', params: { logout: true } })
  },
  updateUser({ state, commit }, user) {
    const stateUser = state.user
    if (stateUser && typeof stateUser === 'object') {
      user = { ...stateUser, ...user }
    }

    commit('UPDATE_USER', user)
  },
  // 使用对象展开运算符混入 moreActions
  ...moreActions
}

const getters = {
  getArticleById: (state) => (id) => {
    let articles = state.articles

    if (Array.isArray(articles)) {
      articles = articles.filter(article => parseInt(id) === parseInt(article.articleId))
      return articles.length ? articles[0] : null
    } else {
      return null
    }
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
