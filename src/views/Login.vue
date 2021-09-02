<template>
    <div class="loginForm" >
        <Tips :tips="tips"></Tips>
        <div class="welcome-title">
            欢迎使用Edox!!!
        </div>
        <div>
            <label class="login-label user-name">用户名：</label>
            <input class="input-normal" v-model="userInfo.username" type="text" placeholder="username" autocomplete="off" id="username" name="username"  minlength="4" maxlength="16"/>
            <span class="c-red" ></span>
        </div>
        <div>
            <label class="login-label user-pwd">密码：</label>
            <input class="input-normal" v-model="userInfo.password" type="password" placeholder="password" autocomplete="off" id="password" name="password"  minlength="6" maxlength="16" />
            <span class="c-red" ></span>
        </div>
        <div>
            <div id="loginForm" class="btn login-btn"  v-on:click="submit">登录</div>
        </div>
    </div>

</template>

<script>
  import Tips from '../components/tips.vue'
  export default {
    name: 'Login',
    components: { Tips },
    data(){
      return {
        tips: {},
        title: "上古有大能者 以日为食 以月为饮",
        userInfo: {
          username: "",
          password: ""
        }
      }
    },methods:{
      submit(){

      }
    }
  }
</script>

<style scoped lang="less">
    html,body{
        background: #ececec;
        .loginForm{
            background: #fff;
            padding:20px;
            border-radius: 5px;
            width:80%;
            min-height: 40px;
            height: auto;
            margin:100px auto;
            .welcome-title{
                color:#fff;
                background: #ff7f36;
                padding:5px 10px;
                margin-bottom:20px;
            }
            .input-normal{
                display: block;
                width:100%;
            }
            .login-btn{
                position: relative;
                width:60px;
                height: auto;
                text-align: center;
                margin:10px auto;
            }
            .login-label{
                display: inline-block;
                font-size:16px;
                padding:5px 0;
                color:#333;
            }
        }
    }

</style>
