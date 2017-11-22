/**
 * Created by Administrator on 2017/11/1.
 */
import * as types from './mutation-types.js'

export default {
  [types.ADD_TRANSITION] (state, {obj}) {
    obj.style.trransition = 'all 0.5s'
    obj.style.webkitTransition = 'all 0.5s'
  },
  [types.REMOVE_TRANSITION] (state, {obj}) {
    obj.style.transition = 'none'
    obj.style.webkitTransition = 'none'
  },
  [types.SET_TRANSLATEX] (state, {obj, offsetX}) {
    obj.style.transform = 'translateX(' + offsetX + 'px)'
    obj.style.webkitTransform = 'translateX(' + offsetX + 'px)'
  },
  [types.SET_PAGE] (state, {obj}) {
    for (let i = 0; i < obj.length; i++) {
      obj[i].className = 'list-item'
    }
    let num = state.index
    obj[num].className = 'now list-item'
  }
}
