<template>
  <div>
    <PoetryHeader />
    <div class="poetry-content" style="padding-bottom: 180px;">
      <b-container>
        <div class="row">
          <div class="col-md-8 order-md-1">
            <b-card style="background: rgb(240,239,226)" class="mb-2">
              <b-card-title><a href="#">词牌名</a></b-card-title>
              <b-card-text class="poetry-card-p">
                <div>
                  <b-row >
                    <b-col v-for="title in titles" v-bind:key="title"
                          cols="6" md="3">
                      <router-link :to="'/content/title/' + title">
                        <a class="tag-link" :href="'/content/title/' + title">{{
                          title
                        }}</a></router-link
                      >
                    </b-col>
                  </b-row>
                </div>
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
  name: 'PoetryTitles',
  components: {
    PoetryHeader,
    PoetrySidebar,
    PoetryFooter
  },
  data() {
    return {
      titles: []
    }
  },
  mounted: function() {
    var url = this.$global_msg.host + 'content/all/title'
    this.axios.get(url).then(response => {
      let res = response.data
      this.titles = res.data
    })
    window.scrollTo(0, 0)
  }
}
</script>

<style></style>
