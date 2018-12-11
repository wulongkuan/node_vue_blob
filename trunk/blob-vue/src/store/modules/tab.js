
const tab = {
    state: {
        activeKey:"default",
        containerArray:[],
    },
    mutations: {
      ADD_CHANGE_TAB: (state,nowTab) => {
          let containerArray=JSON.parse(JSON.stringify(state.containerArray));
          console.log("containerArray==",containerArray,nowTab);
          let target=containerArray.filter(item=>item.key==nowTab.key)[0];
          console.log("target==",target);
          if(target){
            state.activeKey=target.key;
          }else{
            containerArray.push(nowTab);
            state.containerArray=containerArray;
            state.activeKey=nowTab.key;
          }
      },
      REMOVE_TAB: (state, key) => {
        let containerArray=JSON.parse(JSON.stringify(state.containerArray));
        let targetIndex;
        containerArray.forEach((item,index)=>{
            if(item.key==key){
                targetIndex=index;
            }
        })
        state.activeKey=containerArray[targetIndex-1].key;
        let target=containerArray.filter(item=>item.key!=key);
        console.log("targetRemove==",target);
        state.containerArray=target;
      },
      CHANGE_ACTIVEKEY: (state,key)=>{
        state.activeKey=key
      }

    },
    actions: {
      addChangeTab: ({ commit },nowTab) => {
        commit('ADD_CHANGE_TAB',nowTab)
      },
      removeTab: ({ commit }, key) => {
        commit('REMOVE_TAB', key)
      },
      changeActiveKey: ({ commit }, key) => {
        commit('CHANGE_ACTIVEKEY', key)
      },
    }
  };
  
  export default tab;
  