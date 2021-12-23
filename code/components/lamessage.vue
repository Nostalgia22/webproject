<template>
  <div id="mess-div-z">
    <div id="mess-show-f">
      <!--<div id="">
        <div id="mess-name">
          名字
        </div>
        <div id="mess-nr">
          呢绒呢绒呢绒呢绒呢绒呢绒呢绒呢绒
        </div>
        <div id="mess-time">
          时间:2021-12-16
        </div>
        <div id="mess-hr">
          <hr >
        </div>
      </div>-->

      <div id="" v-html="htmlly1"></div>
      <div id="" v-html="htmlly2"></div>
      <div id="" v-html="htmlly3"></div>
      <div id="" v-html="htmlly4"></div>
      <div id="" v-html="htmlly5"></div>
      <div v-show="loginani"  id="login-alert-shs1">
        <span>请登录</span>
      </div>
    </div>

    <div id="mess-left">
      <span>留言板</span>
    </div>
    <div id="mess-liu">
      <textarea v-model="textr" placeholder="留下你的建议" v-bind:class="fus" class="" @focus="fuss" @blur="buers" rows="3" cols="75"></textarea>
      <button class="mess-btn" type="button" @click="tijiao" >提交留言</button>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        fus:'mess-texr',
        htmlly1:'',
        htmlly2:'',
        htmlly3:'',
        htmlly4:'',
        htmlly5:'',
        textr:'',
        loginani:false
      }
    },
    methods:{
      fuss(){
        this.fus = "mess-texr1"
      },
      buers(){
        this.fus = "mess-texr"
      },
      tijiao(){
        //console.log(this.$store.state.userName);
        if(this.$store.state.userName == "测试"){
          //console.log("请登录")
           this.loginani = true
          setTimeout(()=>{this.loginani = false},1500)
        }else{
          if(this.htmlly1 == ""){
            //console.log(1)
            this.htmlly1 = "<div id=\"\"><div id=\"mess-name\">"+this.$store.state.userName+"</div><div id=\"mess-nr\">"+this.textr+"</div><div id=\"mess-time\">时间:  "+this.gettimes()+"</div><div id=\"mess-hr\"><hr ></div>"
            //this.gettimes();
          }else if(this.htmlly2 == ""){
              this.htmlly2 = "<div id=\"\"><div id=\"mess-name\">"+this.$store.state.userName+"</div><div id=\"mess-nr\">"+this.textr+"</div><div id=\"mess-time\">时间:  "+this.gettimes()+"</div><div id=\"mess-hr\"><hr ></div>"
          }else if(this.htmlly3 == ""){
           this.htmlly3 = "<div id=\"\"><div id=\"mess-name\">"+this.$store.state.userName+"</div><div id=\"mess-nr\">"+this.textr+"</div><div id=\"mess-time\">时间:  "+this.gettimes()+"</div><div id=\"mess-hr\"><hr ></div>"
          }else if(this.htmlly4 == ""){
           this.htmlly4 = "<div id=\"\"><div id=\"mess-name\">"+this.$store.state.userName+"</div><div id=\"mess-nr\">"+this.textr+"</div><div id=\"mess-time\">时间:  "+this.gettimes()+"</div><div id=\"mess-hr\"><hr ></div>"
          }else if(this.htmlly5 == ""){
           this.htmlly5 = "<div id=\"\"><div id=\"mess-name\">"+this.$store.state.userName+"</div><div id=\"mess-nr\">"+this.textr+"</div><div id=\"mess-time\">时间:  "+this.gettimes()+"</div><div id=\"mess-hr\"><hr ></div>"
          }
        }
      },
      gettimes(){
        var d=new Date();
        var year=d.getFullYear()  //获取年
        var month=d.getMonth()+1;  //获取月
        var day=d.getDay()    //获取日
        var days=d.getDate() //获取日期
        var hour=d.getHours()   //获取小时
        var minute=d.getMinutes()  //获取分钟
        var second=d.getSeconds()   //获取秒

        if(month<10) month="0"+month
        if(days<10) days="0"+days
        if(hour<10) hour="0"+hour
        if(minute<10) minute="0"+minute
        if(second<10) second="0"+second
        var Tools=document.getElementById("Main")
        var da=year+"-"+month+"-"+days+" "+hour+":"+minute+":"+second
        return da
      }

    }
  }
</script>

<style>
  #login-alert-shs1{
    width: 100px;
    height: 30px;
    background-color: #4381FD;
    position: relative;
    left: 400px;
    top: 250px;
    border-radius: 10px;
    animation:loginani 1.5s, 100ms;
    animation-fill-mode: forwards;
  }
  @keyframes loginani{
    from{opacity: 0;}
    50%{opacity: 1;}
    to{transform: translateY(-100px);opacity: 0;}
  }
  #login-alert-shs1 span{
    font-size: 18px;
    color: #FFFFFF;
    position: relative;
    left: 18px;
    top: 2px;
  }
  #mess-hr{
    width: 97%;
    position: relative;
    left: 10px;
  }
  #mess-time{
    padding: 10px 10px 10px 10px;
  }
  #mess-nr{
    position: relative;
    padding: 30px 10px 15px 10px;
  }
  #mess-name{
    font-size: 20px;
    position: relative;
    top: 10px;
    left:10px;
    font-weight: 500;
    color: #6d757a;
  }
  .mess-btn{
    width: 100px;
    height: 63px;
    background-color: #4381FD;
    position: relative;
    bottom: 38px;
    left: 3px;
    border-radius: 8px;
    border: 1px solid #4381FD;
    font-size: 15px;
    color: #FFFFFF;
    transition: 0.4s;
  }

  .mess-btn:hover{
    background-color: #4db7fd;
  }
  .mess-texr1{
    position: relative;
    bottom: 10px;
    left: 3px;
    font-size: 20px;
    padding: 5px 10px;
    height: 55px;
    resize: none;
    border-radius: 10px;
    border: 1px solid #e5e9ef;
    outline-color: #00a1d6;
    background-color: #FFFFFF;
  }
  .mess-texr{
    position: relative;
     bottom: 10px;
    left: 3px;
    font-size: 20px;
    padding: 5px 10px;
    height: 55px;
    resize: none;
    border-radius: 10px;
    border: 1px solid #e5e9ef;
    outline-color: #00a1d6;
    background-color: #f4f5f7;
  }
  #mess-liu{
    position: relative;
    width: 900px;
    height: 80px;
    background-color: #;
    left: 500px;
    bottom: 60px;
  }
  #mess-left span{
    font-size: 30px;
    font-weight: 300;
    position: relative;
    top: 10px;
    left: 60px;
  }
  #mess-left{
    width: 200px;
    height: 80px;
    background-color: #ffFFFF;
    position: absolute;
    top: 80px;
    left: 290px;
  }
  #mess-show-f{
    width: 900px;
    height: 830px;
    background-color: #FFFFFF;
    position: relative;
    top: 10px;
    left: 500px;
  }
  #mess-div-z{
    background-color: #edf2f6;
    height: 850px;
  }
</style>
