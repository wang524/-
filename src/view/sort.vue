<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 70%; margin: 30px auto"
    >
      <el-table-column type="index" label="序号" width="180"></el-table-column>
      <el-table-column prop="name" label="名称" width="180">
        <template slot-scope="scope">
          <div>
            <p class="sort">{{scope.row.name}}</p>
          </div>
        </template> </el-table-column>
      <el-table-column prop="icon" label="图片" width="240">
        <template slot-scope="scope">
          <div>
            <img :src="scope.row.icon" alt="" style="width: 160px; height: 70px; margin: auto; display: block" />
          </div>
        </template>
      </el-table-column>
      <el-table-column class="date" prop="sort" label="分类" width="180">
      </el-table-column>
      <el-table-column class="date" prop="createDate" label="日期" width="360">
        <template slot-scope="scope">
          <div>
            <p class="sort">{{scope.row.createDate}}</p>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div>
            <el-button type="success" @click="goto(scope.row.name)">进入频道</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          bannerList: [],
          tableData: [],
      };
    },
    mounted() {
      this.getdata();
    },
    methods: {
      getdata() {
        this.$http.get("/api/w/website/findGoodsTypeList").then(res => {
            // console.log(res);
            this.tableData = res.data.data;
        })
      },
      goto(val) {
        // console.log(val);
        this.$router.push({
          name: "commodity",
          params: {
            name: val
          }
        })
      }
    }
  };
</script>

<style>
  .sort {
    font-size: 26px;
    font-weight: bold;
    color: #67C23A;
  }
</style>