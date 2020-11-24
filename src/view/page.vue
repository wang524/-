<template>
  <div>
    <top :dataList="navList" />
    <div class="box">
      <i class="el-icon-grape putao"></i>
      <i class="el-icon-sugar putao"></i>
      <i class="el-icon-ice-cream-round putao"></i>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" circle>警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
      <h1>{{zhi}}</h1>
    </div>
    <bottom @zhichange="getdata($event)" />
  </div>
</template>

<script>
import top from "../components/top";
import bottom from "../components/bottom";
export default {
  components: {
    top,
    bottom,
  },
  data() {
    return {
      zhi: "",
      navList: [
        {name: "导航一", age: 12},
        {name: "导航二", age: 12},
        {name: "导航三", age: 12},
        {name: "导航四", age: 12},
        {name: "导航五", age: 12},
      ]
    }
  },
  methods: { 
    //父向子传值（属性传值） page.vue向top.vue
    //子向父传值（事件传值[this.$emit("自定义事件名"， 向父组件传的内容)]）   bottom.vue向page.vue
    getdata(val) {
      // console.log(val);
      this.zhi = val;
    }
  }
};
</script>

<style scoped lang="scss">
.box {
  width: 80%;
  height: 300px;
  background-color: aquamarine;
  margin: auto;
  .putao {
    font-size: 200px;
    color: purple;
  }
}
</style>