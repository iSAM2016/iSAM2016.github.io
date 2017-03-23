<style lang= 'sass'>
  #loginContent{
    position: relative;
    width: 36rem;
    top: 6rem;
    margin: 0 auto;
  }
</style>
<template>
  <div id="loginContent">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model.number="ruleForm2.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleSubmit2">提交</el-button>
        <el-button @click="handleReset2">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import  auth from '../../utils/auth.js'
  export default {
       data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
       
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          name: ''
        },

        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit2(ev) {
        let that = this
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
                const name = this.ruleForm2.name
                const pass = this.ruleForm2.pass
                auth.login( name, pass, () =>{

                  this.$router.push({ path: '/'});
                })
         
          } else {
       
           
          }
        });
      }
    }
  }
  


</script>