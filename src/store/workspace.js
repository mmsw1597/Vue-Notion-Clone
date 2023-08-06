import router from '~/routes'

export default {
  namespaced: true,
  state() {
    return {
      workspaces: [],
      currentWorkspace: {}
    }
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    async createWorkspace({ dispatch }, payload = { parentId: null }) {
      const { parentId } = payload
      const workspace = await _request({
        method: 'POST',
        body: JSON.stringify({
          title: '',
          parent: parentId
        })
      })
      await dispatch('readWorkspaces')
      router.push({
        name: 'Workspace',
        params: {
          id: workspace.id
        }
      })
    },
    async readWorkspaces({ commit, dispatch }) {
      const workspaces = await _request({
        method: 'GET',
      })
      commit('assignState', {
        workspaces
      })
      if (!workspaces.length) {
        await dispatch('createWorkspace')
      }
    },
    async readWorkspace({ commit }, payload) {
      const { id } = payload
      try {
        const workspace = await _request({
          id,
          method: 'GET'
        })
        commit('assignState', {
          currentWorkspace: workspace
        })
      } catch (error) {
        router.push('/error')
      }
    },
    async updateWorkspace({ dispatch }, payload) {
      const { id, title, content } = payload
      await _request({
        id,
        method: 'PUT',
        body: JSON.stringify({
          title,
          content
        })
      })
      dispatch('readWorkspaces')
    },
    async deleteWorkspace({ state, dispatch }, payload) {
      const { id } = payload
      await _request({
        id,
        method: 'DELETE',
      })
      await dispatch('readWorkspaces')
      if (id === parseInt(router.currentRoute.value.params.id, 10)) {
        router.push({
          name: 'Workspace',
          params: {
            id: state.workspaces[0].id
          }
        })
      }
    }
  }
}

async function _request(options) {
  const { id = '' } = options
  return await fetch(`https://kdt-frontend.programmers.co.kr/documents/${id}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'x-username': 'gunwoo1597'
    },      
  }).then(res => res.json())
}