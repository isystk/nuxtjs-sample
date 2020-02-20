import blog from './modules/blog'
import blogData from "../static/data/blog.json";

export const modules = {
  blog
}

export const state = () => ({
  blogs: []
})

export const mutations = {
  setBlogList(state, blogs) {
    state.blogs = blogs
  }
}

export const getters = {
}

export const actions = {
  // サーバー起動時にデータを取得する場合
  async nuxtServerInit({ commit }, context) {
    let blogs;
    blogs = context.isStatic ? blogData : await context.app.$axios.$get("./data/blog.json");
    commit("setBlogList", blogs);
  }
}
