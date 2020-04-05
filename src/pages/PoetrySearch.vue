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
  </div>
</template>

<script>
export default {
  name: 'PoetrySearch',
  data() {
    return {
      poetries: [],
      query: '',
    }
  },
  methods: {
    loadData() {
      // 首先读通配符,获得query
      if (typeof this.$route.params.pathMatch !== 'undefined') {
        this.query = this.$route.params.pathMatch
      }
      var url = this.$global_msg.host + 'content/search/' + this.query
      this.axios.get(url).then((response) => {
        let res = response.data
        this.poetries = res.data
      })
      window.scrollTo(0, 0)
    },
  },
  watch: {
    $route: function () {
      this.loadData()
    },
  },
  mounted: function () {
    this.loadData()
  },
}
</script>

<style>
.aactive {
  background-color: black;
}
</style>
