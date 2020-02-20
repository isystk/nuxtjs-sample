import { RootState, Blog } from "../../types";

export const state = {
  blogs: []
}

const getters = {
  getPostDetail: (state: RootState) => (id: number) => {
    return state.blogs.find(blog => blog.id+'' === id+'');
  }
}

const mutations = {
  setBlogList(state: RootState, blogs: Blog[]) {
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
