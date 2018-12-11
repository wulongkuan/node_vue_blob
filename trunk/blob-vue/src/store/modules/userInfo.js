
const userInfo = {
    state: {
        userInfo:{},
    },
    mutations: {
      SAVE_USERINFO:(state,userInfo)=>{
        state.userInfo=userInfo;
      }
    },
    actions: {
      saveUserInfo: ({ commit }, userInfo) => {
        console.log("userInfo=",userInfo);
        commit('SAVE_USERINFO', userInfo)
      },
    }
  };
  
  export default userInfo;
  