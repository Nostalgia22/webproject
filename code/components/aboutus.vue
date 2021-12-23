<template>
  <div id="about-bo">
    <div id="about-img-div">
      <img class="about-img" src="../../static/xps1.jpg" >
    </div>
    <div id="aboout-tobar">
      <div id="about-a1-div1" @click="abiodiv1" >
        <router-link class="about-a1" to="/aboutus/one" >关于公司</router-link>
        <div class="" v-bind:class="aboucli" >

        </div>
      </div>
      <div id="about-a1-div2" @click="abiodiv2">
        <router-link class="about-a2" to="/aboutus/tow" >联系我们</router-link>
        <div class="" v-bind:class="aboucli1">

        </div>
      </div>
      <div id="about-a1-div3" @click="abiodiv3">
        <router-link class="about-a3" to="/aboutus/tree" >加入我们</router-link>
        <div class="" v-bind:class="aboucli2">

        </div>
      </div>
    </div>
    <router-view></router-view>
    <div id="" style="height: 50px;">

    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        aboucli:'',
        aboucli1:'',
        aboucli2:''
      }
    },
    methods:{
      abiodiv1(){
        this.aboucli = "about-divt1";
        this.aboucli1 = "";
        this.aboucli2 = "";
      },abiodiv2(){
        this.aboucli = "";
        this.aboucli1 = "about-divt1";
        this.aboucli2 = "";
      },abiodiv3(){
        this.aboucli = "";
        this.aboucli1 = "";
        this.aboucli2 = "about-divt1";
      }
    }
  }
</script>

<style>
  #about-bo{
   background-color: #f7f7f7;
  }
  .about-divt1{
    width: 66px;
    height: 3px;
    background-color: #0000ff;
    position: relative;
    top: 24px;
    right: ;
    border-radius: 40px;
  }
  #about-a1-div1{
    position: relative;
    left: 560px;
    height: 53px;
    width: 68px;
  }
  #about-a1-div2{
    position: relative;
    left: 580px;
    height: 53px;
    width: 68px;
  }
  #about-a1-div3{
    position: relative;
    left: 600px;
    height: 53px;
    width: 68px;
  }
  .about-a1{
    text-decoration: none;
    color: #5f6464;
    position: relative;
    top: 15px;
  }
  .about-a2{
    text-decoration: none;
    color: #5f6464;
    position: relative;
    top: 15px;
  }
  .about-a3{
    text-decoration: none;
    color: #5f6464;
    position: relative;
    top: 15px;
  }
#aboout-tobar{
  padding: 0;
  margin: 0;
  background-color: #ffffff;
  height: 53px;
  display: flex;
  position: relative;
  bottom: 4px;
}
</style>
