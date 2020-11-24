<template>
  <div>
      <div class="box">
            <el-button type="success" @click="add()">加</el-button>
            <span>{{num}}</span>
            <el-button type="danger" @click="eve()">减</el-button>
      </div>
  </div>
</template>

<script>
    export default {
        // data() {
        //     return {
        //         num: this.$store.state.num
        //     }
        // },

        // computed:用来监听自己定义的变量,该变量不在data里面定义声明，里面的变量是一个方法
        computed: {
            num() {
                return this.$store.state.num
            }
        },
        methods: {
            add(num) {
                // this.num++;
                // this.$store.commit提交vuex里面的store的muntations的方法
                this.$store.commit("increment", num);
            },
            eve(num) {
                // this.num--;
                this.$store.commit("mincrement", num);
            }
        }
    }
</script>

<style>
    .box {
        width: 300px;
        margin: 100px auto;
    }
</style>