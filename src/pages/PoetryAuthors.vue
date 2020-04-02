<template>
  <div>
    <PoetryHeader />
    <div class="poetry-content" style="padding-bottom: 180px;">
      <b-container>
        <div class="row">
          <div class="col-md-8 order-md-1">
            <b-card style="background: rgb(240,239,226)" class="mb-2">
              <b-card-title><a href="#">词人</a></b-card-title>
              <div>
                <b-row>
                  <b-col
                    v-for="(author, index) in authors"
                    v-bind:key="index"
                    cols="6"
                    md="3"
                  >
                    <router-link :to="'/content/person/' + author">
                      <a class="tag-link" :href="'/content/person/' + author">{{
                        author
                      }}</a></router-link
                    >
                  </b-col>
                </b-row>
              </div>
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
  name: 'PoetryDetail',
  components: {
    PoetryHeader,
    PoetrySidebar,
    PoetryFooter
  },
  data() {
    return {
      authors: []
    }
  },
  mounted: function() {
    var url = this.$global_msg.host + 'content/all/author'
    this.axios.get(url).then(response => {
      let res = response.data
      this.authors = res.data
    })
    window.scrollTo(0, 0)
  }
}
</script>

<style>
.typecont {
  clear: both;
  margin-top: 5px;
  border-bottom: 1px solid #dad9d1;
  overflow: hidden;
  padding-bottom: 15px;
  float: left;
  width: 630px;
  margin-left: 20px;
}
.tag-link {
  color: rgb(0, 8, 117);
}
</style>
