<template>
  <div id="app">
    <PoetryHeader />
    <div class="poetry-content" style="padding-bottom: 30px;">
      <b-container>
        <div class="row">
          <div class="col-md-8 order-md-1">
            <router-view></router-view>
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
import PoetryHeader from './components/PoetryHearder.vue'
import PoetrySidebar from './components/PoetrySidebar.vue'
import PoetryFooter from './components/PoetryFooter.vue'

export default {
  name: 'App',
  components: {
    PoetryHeader,
    PoetrySidebar,
    PoetryFooter,
  },
}
</script>

<style>
.poetry-content {
  padding-top: 18px;
}
.poetry-card-p p {
  padding-top: 3px;
  margin-bottom: 0px;
}
</style>
