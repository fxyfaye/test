const state = {
  list:[],
  current: {
      company:"厦门之夏",
      phone:"18210426902",
      address:'',
      description:''
  }
}
const mutations = {
  updateState(state,payload) {
      state.current = {...state.current,...payload}
  }
}
const actions = {
  submit(state, payload){
    //promise判断何时异步请求结束
    return new Promise((resolve,reject)=>{
      //没有接口状态下模拟接口请求的事件
      setTimeout(function(){
        resolve();
      },5000)
    })
  }
}
export default{
  namespaced:true,
  state,
  mutations,
  actions
}