import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import work from '@/components/work'
import page from '@/view/page'
import login from '@/view/login'
import register from '@/view/register'
import data from '@/components/data'
import sort from '@/view/sort'
import count from '@/view/count'
import commodity from '@/view/commodity'

//路由嵌套
const User = {
  template: `<div><h1>我是user父组件<router-view/></h1></div>`
}
const oneSon = {
  template: `<div><h1><font color="red">我是user的大儿子<router-view/></font></h1></div>`
}
const twoSon = {
  template: `<div><h1><font color="green">你是user的二儿子</font></h1></div>`
}
const onegreadSon = {
  template: `<div><h1><font color="greenyellow">这是user的大孙子</font></h1></div>`
}
const twogreadSon = {
  template: `<div><h1><font color="#f99">这是user的二孙子</font></h1></div>`
}

const notFound = {
  template: `<div><h1><font color="red">404,NotFound</font></h1></div>`
}

Vue.use(Router)

let router = new Router({
  mode: "history",
  linkExactActiveClass: "onon",   //设置统一激活样式
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/login'
    },
    {
      path: '/test/:id',
      name: 'test',
      component: test
    },
    {
      path: '/work',
      name: 'work',
      component: work
    },
    {
      path: '/page',
      name: 'page',
      component: page
    },
    {
      path: '/sort',
      name: 'sort',
      component: sort
    },
    {
      path: '/count',
      name: 'count',
      component: count
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/data',
      name: 'data',
      component: data
    },
    {
      path: '/commodity',
      name: 'commodity',
      component: commodity
    },
    {
      //路由嵌套
      path: '/user',
      name: 'user',
      component: User,
      children: [
        {
          path: '/oneSon',
          name: 'oneSon',
          component: oneSon,
          children: [
            {
              path: '/onegreadSon',
              name: 'onegreadSon',
              component: onegreadSon,
            },
            {
              path: 'twogreadSon',
              name: 'twogreadSon',
              component: twogreadSon,
            },
          ]
        },
        {
          path: 'twoSon',
          name: 'twoSon',
          component: twoSon,
        },
      ]
    },
    {
      //路由重定向
      path: "*",
      component: notFound
      // redirect: (to) => {
      //   // console.log(to.path);
      //   if (to.path === "/aaa") {
      //     return "/test/789"
      //   } else if (to.path === "/bbb") {
      //     return "/work"
      //   } else {
      //     return "/"
      //   }
      // }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(to);
  if (to.path === "/login") {
    next();
  } else {
    let token = localStorage.getItem("userToken");
    if (token == null || token == "") {
      next("/login");
    } else {
      next();
    }
  }
})

export default router;

