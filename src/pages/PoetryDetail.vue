<template>
  <div>
    <PoetryHeader />
    <div class="poetry-content" style="padding-bottom: 180px;">
      <b-container>
        <div class="row">
          <div class="col-md-8 order-md-1">
            <b-card style="background: rgb(240,239,226)" class="mb-2">
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
                <p>{{ poetry.content[0] }}</p>
                <p>{{ poetry.content[1] }}</p>
              </b-card-text>
            </b-card>
            <b-card style="background: rgb(240,239,226)" class="mb-2">
              <b-card-title><a href="#">注解</a></b-card-title>
              <b-card-text class="poetry-card-p">
                <strong>译文</strong>
                <p
                  v-for="explanation in supplement.explanations"
                  v-bind:key="explanation"
                >
                  <small> {{ explanation }} </small>
                </p>
                <strong>注释</strong>
                <p v-for="note in supplement.notes" v-bind:key="note">
                  <small> {{ note }} </small>
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
    <PoetryFooter msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import PoetryHeader from '../components/PoetryHearder.vue'
import PoetrySidebar from '../components/PoetrySidebar.vue'
import PoetryFooter from '../components/PoetryFooter.vue'

export default {
  name: 'PoetryDetail',
  components: {
    PoetryHeader,
    PoetrySidebar,
    PoetryFooter
  },
  data() {
    return {
      poetry: {},
      supplement: {
        explanations: [],
        notes: []
      }
    }
  },
  watch: {
    $route: function() {
      this.loadData()
      this.$refs.box.scrollTop = 0
    }
  },
  methods: {
    loadData() {
      const id = this.$route.params.pathMatch
      var url = this.$global_msg.host + 'content/id/' + id
      this.axios.get(url).then(response => {
        let res = response.data
        this.poetry = res.data
      })

      var url2 = this.$global_msg.host + 'supplement/id/' + id
      this.axios.get(url2).then(response => {
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
    }
  },

  mounted: function() {
    this.loadData()
  }
}
</script>

<style></style>
