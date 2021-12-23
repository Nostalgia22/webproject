<template>
  <div id="roots">
    <hr class="bot-hr-1">
    <div id="bott-kuai" >
      <div id="bot-lie1">
      </div>
      <div id="bot-lie2">
        <div id="bot-lie2-ul">
          <div id="bot-lie2-ul-h" >关于我们</div>
          <ul>
            <li v-for="items in botojs" >
              {{items.tests}}
            </li>
          </ul>
        </div>
      </div>
      <div id="bot-lie3">
       <div id="bot-lie2-ul">
         <div id="bot-lie2-ul-h" >传送门</div>
         <ul>
           <li v-for="items in botojs1" >
             {{items.tests}}
           </li>
         </ul>
       </div>
      </div>
      <div id="bot-lie4">
       <div id="bot-lie2-ul">
         <div id="bot-lie2-ul-h" >友情链接</div>
         <ul>
           <li v-for="items in botojs2" >
             {{items.tests}}
           </li>
         </ul>
       </div>
      </div>
      <div id="bot-lie5">
       <div id="bot-lie2-ul">
         <div id="bot-lie2-ul-h" >联系方式</div>
         <ul>
           <li v-for="items in botojs3" >
             {{items.tests}}
           </li>
         </ul>
       </div>
      </div>
    </div>
    <hr class="bot-hr-2" >
    <div id="buts" >Copyright © 2021-2022 电脑商城</div>
    <ul id="ulareas" >
      <li><router-link to="/"  class="bott-a" >首页</router-link> </li>
      <li><router-link to="/content" class="bott-a">产品</router-link></li>
      <li><router-link to="/lbt" class="bott-a">新闻页</router-link></li>
      <li><router-link to="/"class="bott-a">关于我们</router-link>&nbsp;&nbsp;&nbsp;</li>
      <li><router-link to="/"class="bott-a">留言</router-link></li>
      <li><router-link to="/"class="bott-a">更多</router-link></li>
    </ul>

  </div>
</template>

<script>
  export default{
    data(){
      return{
        botojs:[
          { tests:'介绍' },
          { tests:'历程' },
          { tests:'加入' },
          { tests:'理想' },
          { tests:'动态' }
        ],
        botojs1:[
          { tests:'首页' },
          { tests:'产品' },
          { tests:'百度' },
          { tests:'bilibili' },
          { tests:'' },
          { tests:'更多' }
        ],
        botojs2:[
          { tests:'协议' },
          { tests:'帮助' },
          { tests:'合作' },
          { tests:'' },
          { tests:'' },
          { tests:'' }
        ],
        botojs3:[
          { tests:'微信' },
          { tests:'' },
          { tests:'' },
          { tests:'' },
          { tests:'' },
          { tests:'' }
        ]
      }
    }
  }
</script>

<style>
.bot-hr-1{
   width: 95%;
}
.bot-hr-2{
  width: 95%;
  position: relative;
  top: 10px;
}
#bot-lie2-ul-h{
  font-weight: 500;
  position: relative;
  left: 30px;
  top: 30px;
  font-size: 20px;
}
#bott-kuai{
  background-color: #ffffff;
  width: 100%;
  height: 230px;
  display: flex;
}
#bott-kuai ul{
  position: relative;
  top: 30px;
  list-style: none;
  right: 10px;
  font-weight: 300;
  font-size: 18px;
}
#bot-lie1{
width: 350px;
height: 300px;
background-color: #ffffff;
}
#bot-lie2{
width: 300px;
height: 300px;
background-color: #ffffff;
}
#bot-lie3{
width: 300px;
height: 300px;
background-color: #ffffff;
}
#bot-lie4{
width: 300px;
height: 300px;
background-color: #ffffff;
}
#bot-lie5{
width: 300px;
height: 300px;
background-color: #ffffff;
}
  .bott-a{
    color: #7f7f7f;
    text-decoration: none;
  }
  #roots{
    height: 60px;
    width: 100%;
  }
  #ulareas{
    display: flex;
    list-style: none;
    margin: 0;
  }
  #ulareas li{
    position: relative;
    left: 42%;
    width: 80px;
    bottom: 10px;
  }
  #buts{
    position: relative;
    top: 12px;
    left: 25%;
    bottom:30px;
    color: #7f7f7f;
  }
</style>
