<template>
  <div>
    <b-card style="background: rgb(240, 239, 226);" class="mb-2">
      <b-card-title><a href="#">词牌名</a></b-card-title>
      <b-card-text class="poetry-card-p">
        <div>
          <b-row>
            <b-col
              v-for="(title, index) in titles"
              v-bind:key="index"
              cols="6"
              md="3"
            >
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
</template>

<script>
export default {
  name: 'PoetryTitles',
  data() {
    return {
      titles: [],
    }
  },
  mounted: function () {
    var url = this.$global_msg.host + 'content/all/title'
    this.axios.get(url).then((response) => {
      let res = response.data
      this.titles = res.data
    })
    window.scrollTo(0, 0)
  },
}
</script>

<style></style>
