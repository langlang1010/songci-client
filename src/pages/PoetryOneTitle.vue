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
              v-for="(poetry, index) in poetries"
              v-bind:key="index"
            >
              <b-card-title>
                <router-link :to="'/detail/' + poetry.id">
                  <a :href="'/detail/' + poetry.id"
                    >{{ poetry.title }}▪{{ poetry.name }}</a
                  >
                </router-link>
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
  name: 'PoetryOneTitle',
  components: {
    PoetryHeader,
    PoetrySidebar,
    PoetryFooter
  },
  data() {
    return {
      poetries: [],
      title: ''
    }
  },
  methods: {
    loadData() {
      if (typeof this.$route.params.pathMatch !== 'undefined') {
        this.title = this.$route.params.pathMatch
      }
      var url = this.$global_msg.host + 'content/title/' + this.title
      this.axios.get(url).then(response => {
        let res = response.data
        this.poetries = res.data
      })
    }
  },
  watch: {
    $route: function() {
      this.loadData()
      window.scrollTo(0, 0)
    }
  },
  mounted: function() {
    this.loadData()
    window.scrollTo(0, 0)
  }
}
</script>

<style>
.aactive {
  background-color: black;
}
</style>
