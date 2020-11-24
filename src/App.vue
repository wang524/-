<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->

    <!-- <a href="#/">首页</a>
    <a href="#/test">test</a> -->

    <!-- 没有# -->
    <!-- <a href="/">首页</a>
    <a href="/test">test</a> -->

    <!-- 不刷新页面 -->
    <!-- <router-link to="/" exact>首页</router-link>
    <router-link to="/test/456" active-class="gotest">test</router-link>
    <router-link to="/work" active-class="gotest">work</router-link> -->

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
/* .router-link-active {
  color: #f99;
}
.gotest {
  font-weight: 900;
  color: aquamarine;
  font-size: 28px;
} */
.onon {
  background-color: red;
  margin: 5px 8px;
  color: aquamarine;
}
</style>
