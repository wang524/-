<template>
  <div>
    <el-carousel height="500px" style="margin: 30px auto; width: 70%">
      <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <img :src="item.img" alt="" width="100%" height="100%">
      </el-carousel-item>
    </el-carousel>
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 70%; margin: 30px auto"
    >
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="photo" label="图片" width="180">
        <template slot-scope="scope">
          <div>
            <img :src="scope.row.photo" alt="" width="100" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
        bannerList: [],
      tableData: [
        {
          date: "2016-05-02",
          photo: require("../assets/001.png"),
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          photo: require("../assets/002.png"),
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          photo: require("../assets/003.png"),
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          photo: require("../assets/004.png"),
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  mounted() {
      this.$http.get("/api/w/website/bannerList").then(res => {
        //   console.log(res.data.data);
          this.bannerList = res.data.data;
      })
  },
};
</script>

<style>
</style>