import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile:{
      userID:'null',
      img:'../../assets/logo.png',
      username:'ภูบดี_กลิ่นโอชา',
    }
  },
  getters:{
    getProfile:state=>{
      return state.profile
    },
    getUserID:state=>{
      return state.profile.userID
    }
  },
  mutations: {
    Login(state){
      state.profile.userID = "NotNull"
    }
  },
  actions: {
    LoginLine(context){
      context.commit('Login')
    }
  },
  modules: {
  }
})
