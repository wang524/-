<template>
  <div>
    <el-table :data="sortList" border style="width: 70%; margin: 30px auto">
      <el-table-column type="index" label="序号" width="70"></el-table-column>
      <el-table-column
        prop="category_name"
        label="分类"
        width="150"
      ></el-table-column>
      <el-table-column prop="pict_url" label="图片" width="240">
        <template slot-scope="scope">
          <div>
            <img
              :src="scope.row.pict_url"
              alt=""
              style="width: 160px; height: 70px; margin: auto; display: block"
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="zk_final_price"
        label="价格"
        width="100"
      ></el-table-column>
      <el-table-column prop="nick" label="店铺" width="150"></el-table-column>
      <el-table-column prop="short_title" label="名字" width="180">
        <template slot-scope="scope">
          <div>
            <p class="name">{{ scope.row.short_title }}</p>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="provcity"
        label="地址"
        width="100"
      ></el-table-column>
      <el-table-column prop="coupon_info" label="满减" width="130">
        <template slot-scope="scope">
          <div>
            <p style="color: #f99">
              {{ scope.row.coupon_info ? scope.row.coupon_info : "暂无满减" }}
            </p>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div>
            <el-button type="primary" v-if="scope.row.coupon_share_url">
              <a :href="scope.row.coupon_share_url">领券</a>
            </el-button>
            <el-button v-else>无券</el-button>
            <el-button type="success">
              <a :href="scope.row.url">详情</a>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="totleNum"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      totleNum: 0,
      name: "",
      sortList: [],
    };
  },
  mounted() {
    this.name = this.$route.params.name;
    if (this.name) {
      this.getdata(this.name, this.currentPage);
    }
    // console.log(this.$route.params.name);
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.getdata(this.name, this.currentPage);
    },
    getdata(val, page) {
      this.$http
        .get("/api/w/website/findGoodsList", {
          params: {
            info: this.$route.params.name,
            pageNo: 1,
          },
        })
        .then((res) => {
        //   console.log(res);
          this.sortList = res.data.data.tbk_dg_material_optional_response.result_list.map_data;
            this.totleNum = res.data.data.tbk_dg_material_optional_response.total_results
        });
    },
  },
};
</script>

<style>
a {
  color: #fff;
  text-decoration: none;
}
.name {
  font-size: 18px;
}
.block {
    margin: 0 auto;
}
</style>