/**
 * Created by Administrator on 2017/11/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import * as actions from './actions.js'
import bookstore from './modules/bookstore.js'
import book from './modules/book.js'
import classify from './modules/classify.js'

Vue.use(Vuex)

const state = {
  startX: 0,
  moveX: 0,
  distanceX: 0,
  isMove: false,
  offsetWidth: 100,
  index: 0,
  boolean: true
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    bookstore,
    book,
    classify
  }
})
