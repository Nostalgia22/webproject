<template>
  <div id="root" >
     <div id="stat-back-co"></div>
    <img id="log" src="../../static/finclip_nav_logo_color.9eb24c8b.png" height="50px" />
    <div id="wz" >电脑商城
       </div>
    <div id="area">
      <ul id="ularea" >

        <div id="stas-a-div1" @mousemove="stamousmoveadd" @mouseout="stamouseoput" ><li><router-link to="/"  class="sta-a" >首页</router-link> </li><div class="sta-div-tiao" v-bind:class="tiao" ></div> </div>
        <div id="stas-a-div1" @mousemove="stamousmoveadd1" @mouseout="stamouseoput1" ><li><router-link to="/content" class="sta-a">产品</router-link></li><div class="sta-div-tiao" v-bind:class="tiao1" ></div></div>
        <div id="stas-a-div1" @mousemove="stamousmoveadd2" @mouseout="stamouseoput2" ><li><router-link to="/lbt" class="sta-a">新闻页</router-link></li><div class="sta-div-tiao1" v-bind:class="tiao2" ></div></div>
        <div id="stas-a-div1" @mousemove="stamousmoveadd3" @mouseout="stamouseoput3" ><li><router-link to="/aboutus/one"class="sta-a">关于我们</router-link>&nbsp;&nbsp;&nbsp;</li><div class="sta-div-tiao2" v-bind:class="tiao3" ></div></div>
        <div id="stas-a-div1" @mousemove="stamousmoveadd4" @mouseout="stamouseoput4" ><li><router-link to="/lamessage" class="sta-a">留言</router-link></li><div class="sta-div-tiao" v-bind:class="tiao4" ></div></div>
        <div id="stas-a-div1" @click="clicktanc"  @mousemove="stamousmoveadd5" @mouseout="stamouseoput5" ><li><a class="sta-a" href="#" >更多</a></li><div class="sta-div-tiao" v-bind:class="tiao5" ></div></div>
      </ul>
      <div id="sta-login" v-show="$store.state.stalogsh" ><router-link id="stas-a-div-login" to="/logins"  >登录</router-link> </div>
      <div id="sta-login2" v-show="!$store.state.stalogsh" >欢迎,{{$store.state.userName}}</div>
    </div>

    <transition name="fade1" >
    <div  v-if="tancsht" id="sta-ding-div" v-bind:class="tanch" >
      <div id="" class="sta-ani-ani-1" >
      <div id="sta-blu-but">
      </div>
      <div id="stas-text-1" @mousemove="stamousmoveadd6" @mouseout="stamouseoput6" v-bind:class="tiao6" ><div class="sta-clsaa-tex-d" ><span class="sta-ding-dian-1" ></span>&nbsp;&nbsp;在线帮助 </div> </div>
      <div id="stas-text-2" @mousemove="stamousmoveadd7" @mouseout="stamouseoput7" v-bind:class="tiao7" ><div class="sta-clsaa-tex-d" ><span class="sta-ding-dian-1" ></span>&nbsp;&nbsp;敬请期待 </div> </div>
      </div>
    </div>
     </transition>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        tiao:'',
        tiao1:'',
        tiao2:'',
        tiao3:'',
        tiao4:'',
        tiao5:'',
        tanch:'',
        tancsht:false,
        tiao6:'',
        tiao7:''

      }
    },
    methods:{
      stamousmoveadd(){
        this.tiao = 'tiao-active';
      }, stamousmoveadd1(){
        this.tiao1 = 'tiao-active';
      }, stamousmoveadd2(){
        this.tiao2 = 'tiao-active1';
      }, stamousmoveadd3(){
        this.tiao3 = 'tiao-active2';
      }, stamousmoveadd4(){
        this.tiao4 = 'tiao-active';
      },stamousmoveadd5(){
        this.tiao5 = 'tiao-active';
      },
      stamouseoput(){
        this.tiao = '';
      },stamouseoput1(){
        this.tiao1 = '';
      },stamouseoput2(){
        this.tiao2 = '';
      },stamouseoput3(){
        this.tiao3 = '';
      },stamouseoput4(){
        this.tiao4 = '';
      },stamouseoput5(){
        this.tiao5 = '';
      },clicktanc(){
        if(this.tanch == 'sta-ding-div-ani'){
          this.tanch = 'sta-ding-div-ani-file'
        }else{
          this.tanch = 'sta-ding-div-ani';
        }
        if(this.tancsht){
          this.tancsht=false
        }else{
        this.tancsht = !this.tancsht;
        }
      },stamousmoveadd6(){
        this.tiao6 = 'active-text-1';
      },stamousmoveadd7(){
        this.tiao7 = 'active-text-1';
      },stamouseoput6(){
        this.tiao6 = 'active-text-1-out';
        setTimeout(()=>{this.tiao6=''},800);
      },stamouseoput7(){
        this.tiao7 = 'active-text-1-out';
        setTimeout(()=>{this.tiao7=''},800);
      }
    }
  }
</script>

<style>
a:hover{
  color: #00A1D6;
}
#sta-login2{
position: relative;
left: 1200px;
bottom: 55px;
}
#stas-a-div-login{
position: relative;
top: 2px;
left: 22px;
text-decoration: none;
font-size: 18px;
}
#sta-login{
  width: 80px;
  height: 30px;
  background-color: #;
  position: relative;
  left: 1100px;
  bottom: 63px;
  border-radius: 22px;
  border: 1px #4382FF solid;
}
#stat-back-co{
  position: relative;
background-color: #FFFFFF;
height: 70px;
width: 1903px;
z-index: 10;
}
  .fade1-enter-active{
  	transition:  all 0.5s cubic-bezier(0.3,0.5,0.4,1.0);
  }
  .fade1-leave-active{
  	transition: all .5s cubic-bezier(0.3,0.5,0.4,1.0);
  }
  .fade1-enter {
  	transform: translatey(-210px);
  	opacity: ;
  }
  .fade1-leave-to{
  	transform: translatey(-210px);
  	opacity: ;
  }
.sta-ani-ani-1{
  transition: all 1s;
  opacity: 0;
}
.sta-ani-ani-1{
  opacity: 1;
}
.active-text-1{
  animation: namesa 1s;
  background-color: #4382ff;
  color: #FFFFFF;
}
@keyframes namesa{
  from{background-color: #FFFFFF;}
  to{background-color: #4382ff;}
}
.active-text-1-out{
  animation: namesa1 1s;
  background-color: #FFFFFF;
}
@keyframes namesa1{
  from{background-color: #4382ff;}
  to{background-color: #FFFFFF;}
}
  #stas-text-2{
    width: 180px;
    height: 60px;
    border-radius: 5px;
    position: relative;
    top: 0px;
    left: 55%;
    font-size: 20px;
  }
.sta-clsaa-tex-d{
  position: relative;
  top: 15px;
  left: 38px;
}
#stas-text-1{
  width: 180px;
  height: 60px;
  border-radius: 5px;
  position: relative;
  top: 60px;
  left: 35%;
  font-size: 20px;
  transition: all 0.6;
}
.sta-ding-dian-1{
  background-color: #ffaa00;
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 20px;
}
.sta-ding-dian-2 {
  background-color: #55ffff;
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 20px;
}
.sta-ding-hr{
  background-color: #4381FD;
}
#sta-blu-but{
  background-color: #4381FD;
  height: 5px;
  position: relative;
  top:205px ;
}
.sta-ding-div-ani-file{
  background-color: #FFFFFF;
  animation: 0.6s ease;
}
@keyframes staears{
  from{height: 210px;}
  to{height: 0px;}
}
.sta-ding-div-ani{
  background-color: #FFFFFF;
  animation: 0.6s ease;
}
#sta-ding-div{
  width: 100%;
  height: 210px;
  position: absolute;
  top: 70px;
  z-index: 2;
  border-top:  1px solid #cbcbcb;

}
@keyframes staear{
  from{height: 0px;}
  to{height: 210px;}
}
.tiao-active{
  background-color: #4381fd;
  width: 100px;
  scaley:(10px);
  animation: ani 0.8s, 100ms;
  opacity: 1;
}
.tiao-active1{
  background-color: #4381fd;
  width: 100px;
  scaley:(10px);
  animation: ani0 0.8s, 100ms;
  opacity: 1;
}
@keyframes ani0{
  from{width: 0px;}
  to{width: 65px;}
}
@keyframes ani{
  from{width: 0px;}
  to{width: 48px;}
}
.tiao-active2{
  background-color: #4381fd;
  width: 100px;
  scaley:(10px);
  animation: ani01 0.8s, 100ms;
  opacity: 1;
}
@keyframes ani01{
  from{width: 0px;}
  to{width: 80px;}
}
.sta-div-tiao{
  text-align: center;
  position: relative;
  top: 14px;
  left: 52px;
  width: 48px;
  height: 3px;
  transition: all 0.6s;
  border-radius: 20px;
}
.sta-div-tiao1{
  text-align: center;
  position: relative;
  top: 14px;
  left: 40px;
  width: 65px;
  height: 3px;
  transition: all 0.6s;
  border-radius: 20px;
}
.sta-div-tiao2{
  text-align: center;
  position: relative;
  top: 14px;
  left: 25px;
  width: 80px;
  height: 3px;
  transition: all 0.6s;
  border-radius: 20px;
}
#stas-a-div1{
background-color: #FFFFFF;
height: 43px;
text-align: center;
}
.sta-a{
  text-decoration: none;
  color: black;
  font-weight: 500;
}
#root{
  background-color: #ffffff;
  height: 70px;
}
#log{
  height: 35px;
  position: absolute;
  top: 18px;
  left: 180px;
  z-index: 10;
}
#wz{
  font-size: 30px;
  position: absolute;
  top: 17px;
  left: 370px;
  color: #4381fd;
  z-index: 10;
}
#area{
  position: absolute;
  left: 550px;
  top: 10px;
  z-index: 10;
}
#ularea{
  display: flex;
  list-style: none;
}
#ularea li{
  width:150px;
  font-size: 19px;
}
</style>
