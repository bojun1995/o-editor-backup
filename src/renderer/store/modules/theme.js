const state = {
	themeName: 'matrix',
}

const mutations = {
  CHANGE_DATA_THEME(state, themeName) {
    state.themeName = themeName
  }
}

const actions = {
  changeThemeName({ commit }, themeName) {
    commit('CHANGE_DATA_THEME', themeName)
  }
}

export default {
	state,
	mutations,
	actions,
}
