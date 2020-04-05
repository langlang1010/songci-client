<template>
  <div>
    <b-card
      style="background: rgb(240, 239, 226);"
      class="poetry-card mb-2"
      v-for="(poetry, index) in poetries"
      v-bind:key="index"
    >
      <b-card-title
        ><router-link :to="'/detail/' + poetry.id">
          <a :href="'/detail/' + poetry.id"
            >{{ poetry.title }}▪{{ poetry.name }}</a
          ></router-link
        >
      </b-card-title>
      <b-card-text class="poetry-card-p">
        <p>{{ poetry.author }}</p>
        <small
          ><p v-if="poetry.preface !== 'null'">
            {{ poetry.preface }}
          </p></small
        >
        <p v-for="(con, index) in poetry.content" :key="index">
          {{ con }}
        </p>
      </b-card-text>
    </b-card>
    <div class="overflow-auto">
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        align="center"
      ></b-pagination-nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PoetryWelcome',
  data() {
    return {
      pages: 5,
      currentPage: 1,
      poetries: [],
    }
  },
  watch: {
    currentPage(val) {
      var page = val
      var url = this.$global_msg.host + 'content/page/' + page
      this.axios.get(url).then((response) => {
        let res = response.data
        this.poetries = res.data
      })
      window.scrollTo(0, 0)
    },
  },
  mounted: function () {
    // 首先读通配符
    var page = 1
    if (typeof this.$route.params.pathMatch !== 'undefined') {
      page = this.$route.params.pathMatch
      this.currentPage = page
    }

    // 获得此页数据
    var url = this.$global_msg.host + 'content/page/' + page
    this.axios.get(url).then((response) => {
      let res = response.data
      this.poetries = res.data
    })

    // 获得总共页数
    var countUrl = this.$global_msg.host + 'content/all/size'
    this.axios.get(countUrl).then((response) => {
      let res = response.data
      this.pages = res.data
    })
    window.scrollTo(0, 0)
  },
}
</script>

<style>
.aactive {
  background-color: black;
}
</style>
