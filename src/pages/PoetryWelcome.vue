<template>
  <div>
    <PoetryHeader />
    <div class="poetry-content" style="padding-bottom: 180px;">
      <b-container>
        <div class="row">
          <div class="col-md-8 order-md-1">
            <b-card
              style="background: rgb(240,239,226)"
              class="poetry-card mb-2"
              v-for="poetry in poetries"
              v-bind:key="poetry.id"
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
                <p>{{ poetry.content[0] }}</p>
                <p>{{ poetry.content[1] }}</p>
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
          <div class="col-md-4 order-md-2 mb-4">
            <PoetrySidebar />
          </div>
        </div>
      </b-container>
    </div>
    <PoetryFooter />
  </div>
</template>

<script>
import PoetryHeader from '../components/PoetryHearder.vue'
import PoetrySidebar from '../components/PoetrySidebar.vue'
import PoetryFooter from '../components/PoetryFooter.vue'

export default {
  name: 'PoetryWelcome',
  components: {
    PoetryHeader,
    PoetrySidebar,
    PoetryFooter
  },
  data() {
    return {
      pages: 5,
      currentPage: 1,
      poetries: []
    }
  },
  watch: {
    currentPage(val) {
      var page = val
      var url = this.$global_msg.host + 'content/page/' + page
      this.axios.get(url).then(response => {
        let res = response.data
        this.poetries = res.data
      })
      window.scrollTo(0, 0)
    }
  },
  mounted: function() {
    // 首先读通配符
    var page = 1
    if (typeof this.$route.params.pathMatch !== 'undefined') {
      page = this.$route.params.pathMatch
      this.currentPage = page
    }

    // 获得此页数据
    var url = this.$global_msg.host + 'content/page/' + page
    this.axios.get(url).then(response => {
      let res = response.data
      this.poetries = res.data
    })

    // 获得总共页数
    var countUrl = this.$global_msg.host + 'content/all/size'
    this.axios.get(countUrl).then(response => {
      let res = response.data
      this.pages = res.data
    })
    window.scrollTo(0, 0)
  }
}
</script>

<style>
.aactive {
  background-color: black;
}
</style>
