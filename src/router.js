import Vue from 'vue'
import Router from 'vue-router'
import PoetryWelcome from './pages/PoetryWelcome'
import PoetryDetail from './pages/PoetryDetail'
import PoetryAuthors from './pages/PoetryAuthors'
import PoetryTitles from './pages/PoetryTitles'
import PoetryPersonal from './pages/PoetryPersonal'
import PoetryOneTitle from './pages/PoetryOneTitle'
import PoetrySearch from './pages/PoetrySearch'

Vue.use(Router);

export default new Router({
  // mode: 'history',  
  routes: [
    {
      path: '/',
      name: 'PoetryWelcome',
      component: PoetryWelcome
    },{
    //   path: '/page/*',
    //   name: 'PoetryWelcome',
    //   component: PoetryWelcome
    // }, {
      path: '/detail/*',
      name: 'PoetryDetail',
      component: PoetryDetail
    }, {
      path: '/authors',
      name: 'PoetryAuthors',
      component: PoetryAuthors
    }, {
      path: '/titles',
      name: 'PoetryTitles',
      component: PoetryTitles
    }, {
      // 词人的个人展
      path: '/content/person/*',
      name: 'PoetryPersonal',
      component: PoetryPersonal
    }, {
      // 相同词牌名
      path: '/content/title/*',
      name: 'PoetryOneTitle',
      component: PoetryOneTitle
    }, {
      // 关键字查询
      path: '/content/search/*',
      name: 'PoetrySearch',
      component: PoetrySearch
    }
  ]
})