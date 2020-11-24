<template>
  <div>
    <div class="box">
      <div class="kuang">
        <div class="top">请注册</div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-tooltip
            class="item"
            effect="dark"
            content="4-16位数字或字母"
            placement="top"
          >
            <el-form-item label="username" prop="username">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
          </el-tooltip>

          <el-tooltip
            class="item"
            effect="dark"
            content="字母开头,6-18位,只能包含字母、数字和下划线"
            placement="top"
          >
            <el-form-item label="password" prop="password">
              <el-input v-model="ruleForm.password"></el-input>
            </el-form-item>
          </el-tooltip>

          <el-form-item label="phone" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>

          <el-form-item label="email" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>

          <el-form-item style="margin-top: 50px">
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即注册</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button type="primary" plain @click="login()">去登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          {
            pattern: /^[a-zA-Z0-9_-]{4,16}$/,
            message: "用户名格式错误",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            pattern: /^[a-zA-Z]\w{5,17}$/,
            message: "密码格式错误",
            trigger: "blur",
          },
        ],
        phone: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          {
            pattern: /^1[34578]\d{9}$/,
            message: "手机号格式错误",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          {
            pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
            message: "邮箱格式错误",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {
    // this.$refs.box.style.color = "#f99";
    //   console.log(this.$refs.box)
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log(this.ruleForm.username)
          this.$http
            .post("/gogo/users/register", {
              username: this.ruleForm.username,
              password: this.ruleForm.password,
              phone: this.ruleForm.phone,
              email: this.ruleForm.email,
            })
            .then((res) => {
              // console.log(res);
              if (res.data.code === 0) {
                this.$message.warning("该用户已注册，请登录!");
              } else {
                this.$message.success("注册成功");
                this.$router.push({
                  path: "login",
                });
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    login() {
      this.$router.push({
        path: "login",
      });
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 100%;
  height: 900px;
  background-image: url("../assets/haha.jpg");
  background-size: 100% 100%;
  position: relative;
  .kuang {
    width: 50%;
    height: 500px;
    margin: auto;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba($color: #fff, $alpha: 0.9);
    .top {
      width: 100%;
      height: 100px;
      margin-bottom: 50px;
      border-radius: 10px 10px 0 0;
      background-color: rgba($color: #777165, $alpha: 0.7);
      text-align: center;
      line-height: 100px;
      color: #fff;
      font-size: 40px;
      letter-spacing: 50px;
    }
    .demo-ruleForm {
      width: 50%;
      margin: auto;
    }
  }
}
</style>