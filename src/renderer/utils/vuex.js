import store from '@/store'

export default {
  /**
   * @description : 因为createSharedMutations的原因，不能在vuex里调用window
   * @param {String} themeName
   * @result : themeName => vuex、document
   */  
  changeThemeName(themeName) {
    window.document.documentElement.setAttribute('data-themeName', themeName)
    store.dispatch('changeThemeName', themeName)
  },
}