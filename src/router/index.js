import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import config from '@/config'
const title = config.title

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/view/HomePage'], resolve),
          meta: {
            title: title + '-首页'
          }
        }, {
          path: '/software',
          name: 'software',
          component: resolve => require(['@/view/Software'], resolve),
          meta: {
            title: title + '-软件产品'
          },
          children: [
            {
              path: '/software',
              redirect: '/software/cleaning'
            },
            {
              path: '/software/software_3D',
              name: 'software',
              component: resolve => require(['@/view/software_3D'], resolve),
              meta: {
                title: '解决方案丨水下3D扫描'
              }
            },
            {
              path: '/software/Software_cleaning',
              name: 'software',
              component: resolve => require(['@/view/Software_cleaning'], resolve),
              meta: {
                title: '解决方案丨智能化水面保洁'
              }
            },
            {
              path: '/software/Software_monitoring',
              name: 'software',
              component: resolve => require(['@/view/Software_monitoring'], resolve),
              meta: {
                title: '解决方案丨综合水质检测'
              }
            },
            {
              path: '/software/Software_cruise',
              name: 'software',
              component: resolve => require(['@/view/Software_cruise'], resolve),
              meta: {
                title: '解决方案丨智能巡河'
              }
            },
            // {
            //   path: '/software/smartTown',
            //   name: 'software',
            //   component: resolve => require(['@/view/Software_smartTown'], resolve),
            //   meta: {
            //     title: '软件产品丨河长制管理后台'
            //   }
            // },
            // {
            //   path: '/software/bigData',
            //   name: 'software',
            //   component: resolve => require(['@/view/Software_bigData'], resolve),
            //   meta: {
            //     title: '软件产品丨数据大屏'
            //   }
            // },
            // {
            //   path: '/software/xitong',
            //   name: 'software',
            //   component: resolve => require(['@/view/Software_xitong'], resolve),
            //   meta: {
            //     title: '软件产品丨清道夫水质管理系统'
            //   }
            // }
          ]
        }, {
          path: '/service',
          name: 'service',
          component: resolve => require(['@/view/Service'], resolve),
          meta: {
            title: title + '-相关服务'
          }
        }, {
          path: '/newsinformation',
          name: 'newsinformation',
          component: resolve => require(['@/view/NewsInformation'], resolve),
          meta: {
            title: title + '-新闻动态'
          }
        }, {
          path: '/newsinformationdetail',
          name: 'newsinformationdetail',
          component: resolve => require(['@/view/NewsInformationDetail'], resolve),
          meta: {
            title: title + '-新闻详情'
          }
        }, {
          path: '/companyintroduction',
          name: 'companyintroduction',
          component: resolve => require(['@/view/CompanyIntroduction'], resolve),
          meta: {
            title: title + '-公司介绍'
          }
        }, {
          path: '/jobchance',
          name: 'jobchance',
          component: resolve => require(['@/view/JobChance'], resolve),
          meta: {
            title: title + '-工作机会'
          }
        }, {
          path: '/contactus',
          name: 'contactus',
          component: resolve => require(['@/view/ContactUs'], resolve),
          meta: {
            title: title + '-联系我们'
          }
        },
        {
          path: '/servicedetail',
          name: 'servicedetail',
          component: resolve => require(['@/view/ServiceDetail'],resolve),
          meta: {
            title: title + '-相关服务'
          }
        },
        {
          path: '/CompanyStructure',
          name: 'CompanyStructure',
          component: resolve => require(['@/view/CompanyStructure'], resolve),
          meta: {
            title: title + '-公司架构'
          }
        },
        {
          path: '/CompanyHonor',
          name: 'CompanyHonor',
          component: resolve => require(['@/view/CompanyHonor'], resolve),
          meta: {
            title: title + '-公司荣誉'
          }
        },
        {
          path: '/NewsMedia',
          name: 'NewsMedia',
          component: resolve => require(['@/view/NewsMedia'], resolve),
          meta: {
            title: title + '-媒体关注'
          }
        },
        {
          path: '/jingdian',
          name: 'jingdian',
          component: resolve => require(['@/view/jingdian'], resolve),
          meta: {
            title: title + '-案例'
          }
        },
        {
          path: '/NewPropaganda',
          name: 'NewPropaganda',
          component: resolve => require(['@/view/NewPropaganda'], resolve),
          meta: {
            title: title + '-公司宣传'
          }
        },

      ]
    }
  ]
})
