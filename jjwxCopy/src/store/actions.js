/**
 * Created by Administrator on 2017/11/1.
 */
import * as types from './mutation-types.js'

export const slidePage = ({state, commit}, {obj, sobj}) => {
  obj.addEventListener('touchstart', function (e) {
    state.startX = e.touches[0].clientX
  })
  obj.addEventListener('touchmove', function (e) {
    state.moveX = e.touches[0].clientX
    state.distanceX = state.moveX - state.startX
    let offsetX = -state.index * state.offsetWidth + state.distanceX
    state.isMove = true
    if (state.index === 0 && state.distanceX > 0) {} else if (state.index === 6 && state.distanceX < 0) {} else {
      commit(types.REMOVE_TRANSITION, {obj})
      commit(types.SET_TRANSLATEX, {obj, offsetX})
    }
  })
  obj.addEventListener('touchend', function (e) {
    if (Math.abs(state.distanceX) > state.offsetWidth / 3 && state.isMove) {
      if (state.distanceX > 0) {
        if (state.index === 0) {
          state.index = 0
        } else {
          state.index--
        }
      } else {
        if (state.index === 6) {
          state.index = 6
        } else {
          state.index++
        }
      }
    }
    let offsetX = -state.index * state.offsetWidth
    commit(types.ADD_TRANSITION, {obj})
    commit(types.SET_TRANSLATEX, {obj, offsetX})
    commit(types.SET_PAGE, {obj: sobj})
  })
  state.startX = 0
  state.moveX = 0
  state.distanceX = 0
  state.isMove = false
}

export const clickChange = ({state, commit}, {obj, sobj, num}) => {
  state.index = num
  let offsetX = -state.index * state.offsetWidth
  let lis = sobj.children
  commit(types.REMOVE_TRANSITION, {obj})
  commit(types.SET_TRANSLATEX, {obj, offsetX})
  commit(types.SET_PAGE, {obj: lis})
}
