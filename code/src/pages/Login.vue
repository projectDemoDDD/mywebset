<template>
    <div class="backgroundContainer">
        <table class="centerTable">
            <tr>
                <td><label class="fontColor">用户名：</label></td>
                <td><input placeholder="请输入用户名" type="text" v-model="userInfo.userName"></td>
            </tr>
            <tr>
                <td><label class="fontColor">密码：</label></td>
                <td><input placeholder="请输入密码" type="password" v-model="userInfo.password"></td>
            </tr>
            <tr>
                <td colspan="2">
                    <div class="loginBtnContainer">
                        <input type="button" @click="login" value="登录" />
                        <input type="button" value="注册" />
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>
  
<script>
export default {
    name: 'Login',
    data(){
        return {
            userInfo:{
                userName:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            this.$router.push('/MainPage')
        }
    }
}
</script>
  
<style scoped>
.backgroundContainer {
    width: 100vw;
    height: 100vh;
    background-image: url('../../img/login.jpg');
    background-size: cover;
    position: relative;
}

.centerTable {
    position: absolute;
    margin: auto auto;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
}

.loginBtnContainer{
    display: flex;
    justify-content:space-between
}

input[type=button]{
    width: 100px;
}

.fontColor{
    color: white;
}
</style>
  