<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <router-link to="/">
        <b-navbar-brand href="/">宋词学习网</b-navbar-brand>
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/titles">
            <b-nav-item href="/titles">词牌名</b-nav-item>
          </router-link>
          <router-link to="/authors">
            <b-nav-item href="/authors">词人</b-nav-item>
          </router-link>
          <b-nav-item href="#"
            ><b-icon icon="question-circle-fill" aria-hidden="true"></b-icon
          ></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="请输入关键字"
            v-model="search_key"
            @keyup.13="search"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" @click="search"
            >Search</b-button
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'PoetryHeader',
  methods: {
    search: function() {
      // 跳转
      this.$router.push('/content/search/' + this.search_key)
    }
  },
  data() {
    return {
      search_key: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
