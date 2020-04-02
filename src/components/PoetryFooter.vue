<template>
  <div>
    <!-- <b-navbar type="dark" variant="dark" fixed="bottom"> -->
    <b-navbar type="dark" variant="dark" >
      <b-container>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Copyright © 2020 宋词学习网.</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="http://www.beian.miit.gov.cn/"
              >湘ICP备17012851号</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'PoetryFooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
