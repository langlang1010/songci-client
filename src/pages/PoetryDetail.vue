<template>
  <div>
    <b-card style="background: rgb(240, 239, 226);" class="mb-2">
      <b-card-title>
        <a href="#">{{ poetry.title }}▪{{ poetry.name }}</a>
      </b-card-title>
      <b-card-text class="poetry-card-p">
        <p>
          <router-link :to="'/content/person/' + poetry.author">
            <a :href="'/content/person/' + poetry.author">
              {{ poetry.author }}</a
            >
          </router-link>
        </p>

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
    <b-card style="background: rgb(240, 239, 226);" class="mb-2">
      <b-card-title><a href="#">注解</a></b-card-title>
      <b-card-text class="poetry-card-p">
        <strong>译文</strong>
        <p
          v-for="(explanation, index) in supplement.explanations"
          v-bind:key="index"
        >
          <small> {{ explanation }} </small>
        </p>
        <strong>注释</strong>
        <p v-for="(note, index) in supplement.notes" v-bind:key="index">
          <small> {{ note }} </small>
        </p>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'PoetryDetail',
  data() {
    return {
      poetry: {},
      supplement: {
        explanations: [],
        notes: [],
      },
    }
  },
  watch: {
    $route: function () {
      this.loadData()
    },
  },
  methods: {
    loadData() {
      const id = this.$route.params.pathMatch
      var url = this.$global_msg.host + 'content/id/' + id
      this.axios.get(url).then((response) => {
        let res = response.data
        this.poetry = res.data
      })

      var url2 = this.$global_msg.host + 'supplement/id/' + id
      this.axios.get(url2).then((response) => {
        let res = response.data

        var temp = res.data.explanation
        if (temp !== null && temp !== 'None') {
          temp = temp.replace('p', '').replace('译文', '')
          this.supplement.explanations = temp.split('br')
        }
        var temp2 = res.data.note
        if (temp2 !== null && temp2 !== 'None') {
          temp2 = temp2.replace('p', '').replace('注释', '')
          this.supplement.notes = temp2.split('br')
        }
      })
      window.scrollTo(0, 0)
    },
  },

  mounted: function () {
    this.loadData()
  },
}
</script>

<style></style>
