import { RootState, Blog } from "../../types";

export const state = {
  blogs: []
}

const getters = {
  getPostDetail: (state) => (id) => {
    return state.blogs.find(blog => blog.id+'' === id+'');
  }
}

const mutations = {
  setBlogList(state, blogs) {
    state.blogs = blogs;
  }
}

const actions = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
