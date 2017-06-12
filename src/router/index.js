import Vue from 'vue'
import Router from 'vue-router'
import totalpages from
 '../page/activeManage/totalpages.vue'
import activeManage from
'../page/activeManage/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 活动管理页
      path: '/activeManage',
      component: totalpages,
      children:[
        {
          path: '',
          component: activeManage
        }
      ]
    }
  ]
})
