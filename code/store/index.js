import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {}
const mutations = {
  altername(ss,yy){
    //console.log(ss,yy);
    this.state.userName = yy;
  },
  stalogshos(){
    this.state.stalogsh = false
  }
}
const state = {
  userName:'测试'
  ,
  stalogsh:true
}

export default new Vuex.Store({
  actions,
  mutations,
  state
})
