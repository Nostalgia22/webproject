<template>
  <div style="height: 600px;background-color: #f3f7f9;">
    <div v-show="loginshow" id="login-zon" >
      <div class="login-ps" >账号登录</div>
      <div class="div-user" ><input v-model="user" type="text" placeholder="请输入你的账号" /> </div>
      <div class="div-pwds" ><input v-model="pwd" type="password" placeholder="请输入你的密码" /> </div>
      <div id="">
        <button @click="gethelle"  class="butt-btn" type="button">登录</button>
      </div>
    </div>
    <div  v-show="loginani" id="login-alert-sh">
      <span>登录成功</span>
    </div>
    <div v-show="loginani1" id="login-alert-sh1-z">
      <span>账号或密码错误</span>
    </div>
  </div>
</template>

<script>
//import router from '../router'
const axios = require('axios')
export default{
  //name:'login',
  data(){
    return{
      user:'',
      pwd:'',
      loginshow:true,
      loginani:false,
      loginani1:false
    }
  },
  methods:{
    btnloginerr(){
      this.loginani1 = true
      setTimeout(()=>{
        this.loginani1 = false
      },1200)
    },
    btnlogin(){
      this.loginshow = false
      this.loginani = true
      //console.log(this.user);
      this.$store.commit('altername',this.user)
      this.$store.commit('stalogshos');
      setTimeout(()=>{
        this.$router.push({name:'HelloWorld'});
      },1200)
      },
      gethelle(){
        axios.get('../static/login/login.txt').then(
        (data)=>{
          //console.log(data);
          for(let items of data.data.login){
           // console.log(items);
           // console.log(this.user+"--"+items.username+"--"+this.pwd+"--"+items.userpwd)
            if(this.user==items.username&&this.pwd==items.userpwd){
              //console.log("成功")
              //this.loginshow = false
              //this.loginani = true
              //this.$store.commit('altername',this.user);
              //
              //setTimeout(()=>{
                //router.push({name:'HelloWorld'});
                this.btnlogin();
              //},2000)
            }else{
              this.btnloginerr();
            }
          }
        }
        ).catch(function(err){
          console.log(err)
        })
      }
      /*axios.get('../static/login/login.txt').then(
      (data)=>{
        console.log(data);
        for(let items of data.data.login){
          console.log(items);
          console.log(this.user+"--"+items.username+"--"+this.pwd+"--"+items.userpwd)
          if(this.user==items.username&&this.pwd==items.userpwd){
            console.log("成功")
            //this.loginshow = false
            //this.loginani = true
            this.$store.commit('altername',this.user);
            //
            setTimeout(()=>{
              //router.push({name:'HelloWorld'});
              this.tiaoz();
            },2000)
          }
        }
      }
      ).catch(function(err){
        console.log(err)
      })
    },tiaoz(){
      this.$router.push({name:'HelloWorld'});
    }*/
  }
}
//console.log(this)
</script>

<style>
  #login-alert-sh1-z{
    width: 140px;
    height: 30px;
    background-color: #4381FD;
    position: absolute;
    top: 400px;
    left:900px;
    border-radius: 10px;
    animation:loginani 1.5s, 100ms;
    animation-fill-mode: forwards;
  }

  #login-alert-sh1-z span{
    font-size: 18px;
    color: #FFFFFF;
    position: relative;
    left: 5px;
    top: 2px;
  }
  #login-alert-sh{
    width: 100px;
    height: 30px;
    background-color: #4381FD;
    position: absolute;
    top: 400px;
    left:900px;
    border-radius: 10px;
    animation:loginani 1.5s, 100ms;
    animation-fill-mode: forwards;
  }
  @keyframes loginani{
    from{opacity: 0;}
    50%{opacity: 1;}
    to{transform: translateY(-100px);opacity: 0;}
  }
  #login-alert-sh span{
    font-size: 18px;
    color: #FFFFFF;
    position: relative;
    left: 12px;
    top: 2px;
  }
  .butt-btn:hover{
    background-color: #51adfd;
  }
  .butt-btn{
    position: relative;
    top: 170px;
    left: 80px;
    width: 340px;
    height: 40px;
    font-size: 18px;
    border-radius: 7px;
    background-color: #4382FF;
    border: #000000 0px solid;
    outline-color:#4382FF;
    transition: 0.4s;
  }
  .div-pwds input{
    width: 340px;
    height: 40px;
    font-size: 18px;
    border-radius: 7px;

    border: #a3a3a3 1px solid;
    outline-color:#4382FF;
  }
  .div-pwds{
    width: 340px;
    height: 40px;
    background-color: ;
    position: relative;
    top: 100px;
    left: 80px;
    border-radius: 7px;
  }
  .div-user input{
    width: 340px;
    height: 40px;
    font-size: 18px;
    border-radius: 7px;
    border: #a3a3a3 1px solid;
    outline-color:#4382FF;
  }
  .div-user{
    background-color: ;
    width: 440px;
    height: 40px;
    position: relative;
    top: 70px;
    left: 80px;
  }
  .login-ps{
    font-size: 30px;
    font-weight: 300;
    position: relative;
    left: 37%;
    top: 30px;
  }
  #login-zon{
    background-color: #FFFFFF;
    width: 500px;
    height: 400px;
    position: relative;
    top: 100px;
    left: 690px;
    box-shadow:0 2px 20px 0px #dfdfdf;
  }
</style>
