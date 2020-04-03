## 项目文档
推荐同时访问网站 [https://smileyan.cn/songci/](https://smileyan.cn/songci/) 并结合以下内容了解整个项目。

### 项目结构
* src
  * `assets` 存放图片，包括logo和微信公众号二维码。
  * `components` 组件。
    * `PoetryFooter.vue` 所有页面的 Footer 
    * `PoetryHearder.vue` 所有页面的 Header 
    * `PoetrySidebar.vue` 所有页面中间部分的 Sidebar
  * `pages` 具体的页面，每个页面都有对应的路由地址
    * `PoetryAuthors.vue` 此页面展示所有的作者名称
    * `PoetryDetail.vue` 此页面展示某一首宋词的详细部分
    * `PoetryOneTitle.vue` 此页面展示某一个词牌名下的所有宋词
    * `PoetryPersonal.vue` 此页面展示某一个词人的所有宋词
    * `PoetrySearch.vue` 此页面展示满足搜索条件的所有宋词
    * `PoetryTitles.vue` 此页面展示所有的词牌名
    * `PoetryWelcome.vue` index页面，展示前N首宋词，并提供翻页功能
  * `App.vue` 整个项目显示层的入口，由此进入路由页面
  * `global.js` 存放全局变量，这里只存储了服务端的地址
  * `main.js` Vue项目的main.js，配置全局用到的框架，比如 bootstrapVue, axio, router 等
  * `router.js` 配置项目的路由，即建立外界访问路径与 `pages` 中的页面的对应关系。
  
### axios 的使用
所有的页面都用到了 `axios`，用来从服务端获得数据。下面以 `PoetryWelcome` 页面为例。
* 需要获得此页数据
  ```js
  // url 是服务器端接口的地址，page = 1
  var url = this.$global_msg.host + 'content/page/' + page
  // 通过axios对象的get方法，获得数据，并在回调函数中写相应处理
  this.axios.get(url).then(response => {
      // 读取数据，存储到 this.poetries 
      let res = response.data
      this.poetries = res.data
  })
  ```
* 需要获得总页数，方法类似上面的

### 通配符(*)的使用
比如说需要访问宋词 somebody 的宋词列表，这个项目中总共有98位词人，很显然不可能配置98个路由来一一对应。

所以这里可以考虑使用通配符*，对应的 url 为 `/content/person/*`，然后对应的 `component` 为 `PoetryPersonal`，并在这个组件中编写读取统配符然后根据通配符到服务端查找需要的数据。

具体的解析通配符的代码如下：
  ```js
  this.$route.params.pathMatch
  ```

### watch 的使用
对于同一个组件，如果通配符不同，不需要重新跳转，只需要再次获取一次数据即可，比如说 
* 先访清平乐词牌名的所有词列表 [https://smileyan.cn/songci/#/content/title/清平乐](https://smileyan.cn/songci/#/content/title/%E6%B8%85%E5%B9%B3%E4%B9%90) 
* 再访问蝶恋花词牌名的所有词列表 [https://smileyan.cn/songci/#/content/title/蝶恋花](https://smileyan.cn/songci/#/content/title/%E8%9D%B6%E6%81%8B%E8%8A%B1)

对于这种情况(只有通配符改变)，需要监听通配符的变化进行相应的处理(重新加载数据)。

具体代码如下：
  ```js
  watch: {
    $route: function() {
      this.loadData()
    }
  },
  ```

### 滑轮置顶
为了更好的用户体验，每次重新获得数据并渲染完成后，需要把页面中的滑轮置顶。核心代码如下：
  ```js
  window.scrollTo(0, 0)
  ```
  
### router-link 标签的使用
如果直接使用 a 标签，可能会带来诸多问题，跳转到的链接并不是目标链接，

比如说 如果直接写 `a :href="'/detail/2"`，对应的 `localhost:8080/detail/2`，

需要在 a 标签外层加上  \<router-link> ，对应的就是 `localhost:8080/#/detail/2`




