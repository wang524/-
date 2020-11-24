<template>
<div>
    <div class="box">
        <el-button type="success" plain @click="chuanzhi">向父组件传值</el-button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            aa: "王新阳去捉新郭帅忘记风利于"
        }
    },
    methods: {
        chuanzhi() {
            this.$emit("zhichange", this.aa)
        }
    }
}
</script>

<style lang="scss">
    .box {
        width: 50%;
        height: 200px;
        background-color: antiquewhite;
        margin: auto;
        text-align: center;
    }
</style>