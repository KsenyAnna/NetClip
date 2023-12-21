import Vue from 'vue'
import Vuex from 'vuex'

import newsCard from './newsCard'
import smallCards from './smallCards'
import mediumBlock from './mediumBlock'
import menuFooter from './menuFooter'
import socialIcons from './socialIcons'
import headerProfile from './headerProfile'
import cardDirection from './cardDirection'
import title from './title'
import reviews from './reviews'
import articles from './articles'
import videos from './videos'
import tabs from './tabs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    newsCard,
    smallCards,
    mediumBlock,
    menuFooter,
    socialIcons,
    headerProfile,
    cardDirection,
    title,
    reviews,
    articles,
    videos,
    tabs,
  }
})
