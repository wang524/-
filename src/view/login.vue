<template>
  <div>
    <div class="log">
        <div class="kuang">
            <div class="top">请登录</div>
            <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-tooltip class="item" effect="dark" content="4-16位数字或字母" placement="top">
                    <el-form-item label="username" prop="username">
                        <el-input v-model="ruleForm.username"></el-input>
                    </el-form-item>
                </el-tooltip>

                <el-tooltip class="item" effect="dark" content="字母开头,6-18位,只能包含字母、数字和下划线" placement="top">
                    <el-form-item label="password" prop="password">
                        <el-input v-model="ruleForm.password"></el-input>
                    </el-form-item>
                </el-tooltip>

                <el-form-item style="margin-top: 100px">
                    <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                    <el-button type="primary" plain @click="register()">去注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from "vuex"
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
          phone: "",
          email: "",
        },
        rules: {
          username: [
            { required: true, message: "用户名不能为空", trigger: "blur" },
            {
              pattern: /^[a-zA-Z0-9_-]{4,16}$/,   //4-16位数字或字母
              message: "用户名格式错误",
              trigger: "blur",
            },
          ],
          password: [
            { required: true, message: "密码不能为空", trigger: "blur" },
            {
              pattern: /^[a-zA-Z]\w{5,17}$/,    //以字母开头，长度在6~18之间，只能包含字母、数字和下划线
              message: "密码格式错误",
              trigger: "blur",
            },
          ],
        },
        loginForm: {
          username: "",
          password: ""
        }
      };
    },
    mounted() {
      // this.$refs.box.style.color = "#f99";
      //   console.log(this.$refs.box)
    },
    methods: {
      ...mapMutations({
        changeLogin: "changeLogin"
      }),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post("/gogo/users/log", {
              username: this.ruleForm.username,
              password: this.ruleForm.password,
            }).then(res => {
              // console.log(res);
              if(res.data.code === -3) {
                this.$message.warning("用户名不存在，请先注册");
              } else if (res.data.code === -2) {
                this.$message.error("密码错误");
              } else {
                this.$message.success("登陆成功");
                localStorage.setItem("userToken", res.data.token);
              }
            })
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      register() {
          this.$router.push({
              path: "register"
          })
      }
    },
  };
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }
    .log {
        width: 100%;
        height: 900px;
        background-image: url("../assets/haha.jpg");
        background-size: 100% 100%;
        position: relative;
        .kuang {
            width: 50%;
            height: 500px;
            margin: auto;
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 10px;
            transform: translate(-50%, -50%);
            background-color: rgba($color: #fff, $alpha: 0.9);
            .top {
                width: 100%;
                height: 100px;
                margin-bottom: 100px;
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