<template>
  <div>
    <h1>test</h1>
    <h2><font color="#f99">参数是:{{road}}</font></h2>
    <button @click="goToWork()">去work</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      road: "",
      name: "qzx",
      age: 20
    }
  },
  mounted() {
    // console.log(this.$route.params.id);
    this.road = this.$route.params.id;
  },
  methods: {
    goToWork() {
      // this.$router.push("/work?name=" + this.name + "&age=" + this.age);

      //path传参，参数在query里面
      // this.$router.push({
      //   path: "/work",
      //   query: {
      //     name: "wxy",
      //     age: 32
      //   }
      // });

      //name传参，参数在params里面
      this.$router.push({
        name: "work",
        params: {
          name: "qzx",
          age: 20
        }
      })
    }
  }
};
</script>

<style>
</style>