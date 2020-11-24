<template>
  <div>
    <h1>work</h1>
    <h1><font color="#f99">{{name}}</font></h1>
    <h1><font color="#aque">{{age}}</font></h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
    };
  },
  mounted() {
    console.log(this.$route);
    //path传参,参数在query里面
    // this.name = this.$route.query.name;
    // this.age = this.$route.query.age;
    
    //name传参,参数在params里面
    this.name = this.$route.params.name;
    this.age = this.$route.params.age;
  },
};
</script>

<style>
</style>