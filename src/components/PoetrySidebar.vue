<template>
  <div>
    <div class="all-tags">
      <b-card header="标签" header-tag="header">
        <div>
          <b-row>
            <b-col cols="3"
                    md="3" v-for="(tag, index) in tags" v-bind:key="index">
              <router-link :to="'/content/search/' + tag">
                <a class="tag-link" :href="'/content/search/' + tag">{{
                  tag
                }}</a></router-link
              >
            </b-col>
          </b-row>
        </div>
      </b-card>
    </div>
    <div class="all-tags">
      <b-card header="今日推荐" header-tag="header">
        <div>
          <router-link :to="'/detail/' + advice.id">
            <b-link :href="'/detail/' + advice.id" class="tag-link"
              >{{ advice.title }}▪{{ advice.name }}
              <sub>{{ advice.author }}</sub></b-link
            >
          </router-link>
        </div>
      </b-card>
    </div>
    <div class="all-tags">
      <b-card header="词人" header-tag="header">
        <div>
          <b-row>
            <b-col
              cols="3"
              md="3"
              v-for="(author, index) in authors"
              v-bind:key="index"
            >
              <router-link :to="'/content/search/' + author">
                <a class="tag-link" :href="'/content/search/' + author">{{
                  author
                }}</a></router-link
              >
            </b-col>
          </b-row>
        </div>
      </b-card>
    </div>
    <div class="all-tags">
      <b-card header="词牌名" header-tag="header">
        <div>
          <b-row>
            <b-col cols="3"
                    md="3" v-for="(title, index) in titles" v-bind:key="index">
              <router-link :to="'/content/title/' + title">
                <a class="tag-link" :href="'/content/title/' + title">{{
                  title
                }}</a></router-link
              >
            </b-col>
          </b-row>
        </div>
      </b-card>
    </div>
    <div class="all-tags">
      <b-card header="关注我">
        <div class="text-center">
          <img src="../assets/wechat.jpg" style="width:50%" />
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PoetrySidebar',
  data() {
    return {
      authors: ['柳永', '苏轼', '李清照', '秦观'],
      titles: ['蝶恋花', '清平乐', '菩萨蛮', '江城子'],
      advice: {},
      tags: ['春', '夏', '秋', '冬']
    }
  },
  mounted: function() {
    var url = this.$global_msg.host + 'content/advice'
    this.axios.get(url).then(response => {
      let res = response.data
      this.advice = res.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tag-link {
  color: rgb(0, 8, 117);
  padding-top: 8px;
}
.all-tags {
  padding-top: 12px;
}
</style>
