<template>
  <div>
  <div style="height: 384px;" >
  <rotarions></rotarions>
  </div>
  <div id="hello-canp1">笔记本推荐</div>
  <div>
    <div id="rotations-sts-foto" @mousemove="imgmoumove" @mouseout="imgmousout">
      <div class="hello-text-note" >Notebook Computer</div>
      <h4 class="hello-text-note-h4" >优雅的轻薄本，颜值担当</h4>
      <img  v-bind:class="imgactive" class="hello-img-1" src="../../static/coms1.png">
      <div id="hello-imgbot-text">
        <div id="">
          了解更多
        </div>
      </div>
    </div>
  </div>
  <div id="hello-tuij-1" >
    <div id="rotations-sts-foto1" @mousemove="imgmoumove2" @mouseout="imgmousout2">
      <div class="hello-text-note" >Game Computer</div>
      <h4 class="hello-text-note-h4" >更强的散热更强的性能</h4>
      <img  v-bind:class="imgactive2" class="hello-img-2" src="../../static/imgcomp2.png" >
      <div id="hello-imgbot-text1">
        <div id="">
          了解更多
        </div>
      </div>
    </div>
  </div>
  <div id="hello-tuij-2" >
    <div id="rotations-sts-foto2" @mousemove="imgmoumove3" @mouseout="imgmousout3">
      <div class="hello-text-note" >Almighty Computer</div>
      <h4 class="hello-text-note-h4" >谁说鱼和熊掌不可兼得？</h4>
      <img  v-bind:class="imgactive3" class="hello-img-3" src="../../static/imgcomp3.png" >
      <div id="hello-imgbot-text">
        <div id="">
          了解更多
        </div>
      </div>
    </div>
  </div>
  <div id="" style="height: 450px;" >

  </div>
  <div id="hello-canp">
    电脑产品分类
  </div>
  <div id="hello-span-con">
    <div  id="hello-con-kui1">
    <div id="hello-kuai1" @mousemove="mouseover" @mouseout="mouseouts" v-bind:class="active" >
      <div id="hello-kuai1-text">
        <div id="hello-kuai1-text-txt">轻薄笔记本电脑</div>
      </div>
      <div>
        <ul class="hello-kuai1-ul" >
          <li class="hello-kuai1-ul-li" v-for="p in qingbao" >
            <div id="hello-kuai1-ul-h1" >{{p.text}}</div><br />
            <div id="hello-kuai1-ul-h1-te">{{p.text1}}</div>
          </li>
        </ul>
      </div>
    </div>
    </div>
    <div id="hello-con-kui1">
    <div id="hello-kuai2" @mousemove="mouseover1" @mouseout="mouseouts1" v-bind:class="active1">
      <div id="hello-kuai1-text">
        <div id="hello-kuai1-text-txt">游戏笔记本电脑</div>
      </div>
      <div>
        <ul class="hello-kuai1-ul" >
          <li class="hello-kuai1-ul-li" v-for="p in qingbao1" >
            <div id="hello-kuai1-ul-h1" >{{p.text}}</div><br />
            <div id="hello-kuai1-ul-h1-te">{{p.text1}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div id="hello-con-kui1">
        <div id="hello-kuai3" @mousemove="mouseover2" @mouseout="mouseouts2" v-bind:class="active2" >
          <div id="hello-kuai1-text">
            <div id="hello-kuai1-text-txt">全能笔记本电脑</div>
          </div>
          <div>
            <ul class="hello-kuai1-ul" >
              <li class="hello-kuai1-ul-li" v-for="p in qingbao2" >
                <div id="hello-kuai1-ul-h1" >{{p.text}}</div><br />
                <div id="hello-kuai1-ul-h1-te">{{p.text1}}</div>
              </li>
            </ul>
          </div>
        </div>
    </div>
    </div>
    <div id="hello-con-kui1">
        <div id="hello-kuai4" @mousemove="mouseover3" @mouseout="mouseouts3" v-bind:class="active3">
          <div id="hello-kuai1-text">
            <div id="hello-kuai1-text-txt">商务笔记本电脑</div>
          </div>
          <div>
            <ul class="hello-kuai1-ul" >
              <li class="hello-kuai1-ul-li" v-for="p in qingbao3" >
                <div id="hello-kuai1-ul-h1" >{{p.text}}</div><br />
                <div id="hello-kuai1-ul-h1-te">{{p.text1}}</div>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </div>
  <div style="height: 230px;"></div>
  <div id="hello-canp-3-t">
    生产力的提升
  </div>
  <div id="hello-tree-img-div-con-kuian">
    <div class="hello-tree-img-z" >
      <div class="hello-img" >
        <img src="../../static/treezon.jpg"  v-bind:class="[activeimgs1,postiw]" class="assets-hello-img-fong" >
      </div>
    </div>
    <div @mouseenter="imgmovetree1" @mouseleave="imgmovetreeout1" class="hello-bottimg-kuia1"  >
      <div v-bind:class="kaibiankaerd" id="hello-bottimg-kuia1-text1">
        1
      </div>
      <div id="hello-bottimg-kuia1-text2" >
        不需要电源也能释放全部性能
      </div>
    </div>
    <div @mouseenter="imgmovetree2" @mouseleave="imgmovetreeout2" class="hello-bottimg-kuia2">
    <div v-bind:class="kaibiankaerd2" id="hello-bottimg-kuia1-text1">
      2
    </div>
    <div id="hello-bottimg-kuia1-text2" >
      高性能散热风扇
    </div>
    </div>
    <div @mouseenter="imgmovetree3" @mouseleave="imgmovetreeout3" class="hello-bottimg-kuia3">
    <div v-bind:class="kaibiankaerd3" id="hello-bottimg-kuia1-text1">
      3
    </div>
    <div id="hello-bottimg-kuia1-text2" >
      更好的屏幕支持手势的触控板
    </div>
    </div>
  </div>
  <div id="" style="height: 50px;">

  </div>
  </div>
</template>

<script>

import rotarions from '@/components/rotation.vue'
export default{
  name:'rorarions',
  components:{
    rotarions
  },
  data(){
    return{
      qingbao:[
        { text:"外观",text1:"机身一体成型,看起来既精致又漂亮" },
        { text:"续航能力",text1:"因为轻薄本的优势就是便携性" },
        { text:"屏幕显示效果",text1:"带来更为出色的视觉冲击力" },
        ],
      qingbao1:[
        { text:"独显",text1:"独立显卡对于游戏性能至关重要" },
        { text:"性能",text1:"因为散热优势他有着更强的性能" },
        { text:"屏幕刷新率",text1:"屏幕刷新率带来更为出色的视觉效果" },
        ],
      qingbao2:[
        { text:"性能",text1:"在轻薄本之上，不在卡顿" },
        { text:"重量",text1:"也控制的恰到好处" },
        { text:"软件",text1:"能到应对大型应用" },
        ],
      qingbao3:[
        { text:"外观",text1:"稳重的外观" },
        { text:"安全",text1:"良好的安全性、稳定的运行" },
        { text:"人性化",text1:"更好的售后服务" },
        ],

      active:'',
      active1:'',
      active2:'',
      active3:'',
      imgactive:'',
      imgactive2:'',
      imgactive3:'',
      activeimgs1:'',
      helloimgindex:0,
      postiw:'',
      kaibiankaerd:'',
      kaibiankaerd2:'',
      kaibiankaerd3:''
    }
  },
  methods:{
    mouseover(){
      //console.log(1);
      this.active = "actives"
    },
    mouseouts(){
       this.active = ""
    }, mouseover1(){
      //console.log(1);
      this.active1 = "actives"
    },
    mouseouts1(){
       this.active1 = ""
    }, mouseover2(){
      //console.log(1);
      this.active2 = "actives"
    },
    mouseouts2(){
       this.active2 = ""
    }, mouseover3(){
      //console.log(1);
      this.active3 = "actives"
    },
    mouseouts3(){
       this.active3 = ""
    },
    imgmoumove(){
      this.imgactive = "active-img"
    },
    imgmousout(){
      this.imgactive = ""
    },imgmoumove2(){
      this.imgactive2 = "active-img"
    },
    imgmousout2(){
      this.imgactive2 = ""
    },imgmoumove3(){
      this.imgactive3 = "active-img"
    },
    imgmousout3(){
      this.imgactive3 = ""
    },imgmovetree1(){//最初
      this.kaibiankaerd = 'active-kaiipian-xuan1'
      if(this.helloimgindex == 2){
        this.activeimgs1 = 'hello-img-ani0';
      }else if(this.helloimgindex == 3){
        this.activeimgs1 = 'hello-img-ani3';
      }
      this.helloimgindex=1;
    },imgmovetreeout1(){
      this.kaibiankaerd = 'active-kaiipian-xuan1out'
    },imgmovetree2(){
      this.kaibiankaerd2 = 'active-kaiipian-xuan1'
      if(this.helloimgindex == 1){
        this.activeimgs1 = 'hello-img-ani1';
      }else if(this.helloimgindex == 3){
        this.activeimgs1 = 'hello-img-ani4';
      }
      this.helloimgindex=2;
    },imgmovetree3(){
      this.kaibiankaerd3 = 'active-kaiipian-xuan1'
      //this.activeimgs1 = '';
      if(this.helloimgindex == 2){
        this.activeimgs1 = 'hello-img-ani2';
      }else if(this.helloimgindex == 1){
        this.activeimgs1 = 'hello-img-ani5';
      }
      this.helloimgindex=3;
    },imgmovetreeout2(){
      this.kaibiankaerd2 = 'active-kaiipian-xuan1out'
    },imgmovetreeout3(){
      this.kaibiankaerd3 = 'active-kaiipian-xuan1out'
    }
  }

}
</script>

<style>
  .active-kaiipian-xuan1out{
    animation: nameactive-1out .3s, 100ms;
    animation-fill-mode: forwards;
  }
  @keyframes nameactive-1out{
    from{color: #4381FD;}
    to{color: #bababa;}
  }
  .active-kaiipian-xuan1{
    animation: nameactive-1 .3s, 100ms;
    animation-fill-mode: forwards;
  }
  @keyframes nameactive-1{
    from{}
    to{color: #4381FD;}
  }
  #hello-bottimg-kuia1-text1{
    font-size: 46px;
    position: relative;
    top: 55px;
    left: 30px;
    color: #bababa;
  }
  #hello-bottimg-kuia1-text2{
    font-size: 20px;
    position: relative;
    left: 120px;
    top: 10px;
  }
  .hello-img-ani5{
    animation: hellol5 0.5s;

    animation-fill-mode: forwards;
    position: relative;
  }
  @keyframes hellol5{
    from{transform: translateX(0px);}
    to{transform: translateX(-1600px);}
  }
  .hello-img-ani4{
    animation: hellol4 0.5s;

    animation-fill-mode: forwards;
    position: relative;
  }
  @keyframes hellol4{
    from{transform: translateX(-1600px);}
    to{transform: translateX(-800px);}
  }
  .hello-img-ani3{
    animation: hellol3 0.5s;

    animation-fill-mode: forwards;
    position: relative;
  }
  @keyframes hellol3{
    from{transform: translateX(-1600px);}
    to{transform: translateX(0px);}
  }
  .hello-img-ani0{
    animation: niimgwid 0.5s;

    animation-fill-mode: forwards;
    position: relative;
  }
  @keyframes niimgwid{
    from{transform: translateX(-800px);}
    to{transform: translateX(0px);}
  }
  .assets-hello-img-fong{
    position: relative;
    right: 10px;
  }
  .hello-img-ani1{
    animation: imgwid 0.5s;
    animation-fill-mode: forwards;
    position: relative;
  }
  @keyframes imgwid{
    from{transform: translateX(0);}
    to{transform: translate3d(-800px,0,0);}
  }
  .hello-img-ani2{
    animation: imgwids1 0.5s;
    animation-fill-mode: forwards;
  }
  @keyframes imgwids1{
    from{transform: translateX(-800px);}
    to{transform: translateX(-1600px);}
  }
.hello-bottimg-kuia1{
  background-color: #f3f3f3;
  width: 440px;
  height: 160px;
  position: relative;
  left: 1100px;
  bottom: 500px;
  transition: all 0.6s ease;
}
.hello-bottimg-kuia2{
  background-color: #f3f3f3;
  width: 440px;
  height: 160px;
  position: relative;
  left: 1100px;
  bottom: 492px;
}
.hello-bottimg-kuia3{
  background-color: #f3f3f3;
  width: 440px;
  height: 160px;
  position: relative;
  left: 1100px;
  bottom: 483px;
}

  .hello-img img{
    width: px;
    height: 500px;
  }
  .hello-img{
    background-color: #ffaa00;
    width: 800px;
    height: 500px;
    display: flex;

  }
  .hello-tree-img-z{
    background-color: #55FFFF;
    width: 790px;
    height: 500px;
    position: relative;
    left: 300px;
    overflow: hidden;
    border-radius: 5px;
  }
  #hello-tree-img-div-con-kuian{
    background-color: ;
    width: 100%;
    height: 700px;
    position: relative;
    top: 80px;
  }
  #hello-canp-3-t{
    position: relative;
    top:0px;
    left: 42%;
    font-weight: 80;
    font-size:40px;
  }
  #hello-imgbot-text1{
    position: relative;
    bottom: 330px;
    left: 53px;
    width: 100px;
    height: 40px;
    background-color: #4381FD;
    border-radius: 22px;
  }
#hello-imgbot-text1 div{
  color: #FFFFFF;
  position: relative;
  left: 18px;
  top: 9px;
}
.hello-img-2{
  width: 480px;
  position: relative;
  left: 900px;
  bottom: 150px;
  transition: 0.5s all;
}
.hello-img-3{
  position: relative;
  left: 900px;
  bottom: 120px;
  transition: 0.5s all;
}
.active-img{
  transform: translateY(-30px);
}
#hello-imgbot-text{
  position: relative;
  bottom: 280px;
  left: 53px;
  width: 100px;
  height: 40px;
  background-color: #4381FD;
  border-radius: 22px;
}
#hello-imgbot-text div{
  color: #FFFFFF;
  position: relative;
  left: 18px;
  top: 9px;
}
.hello-img-1{
  position: relative;
  left: 700px;
  bottom: 120px;
  transition: 0.5s all;
}
.hello-text-note{
    font-size: 40px;
    position: relative;
    top: 30px;
    left: 50px;
}
.hello-text-note-h4{
  position: relative;
  top: 10px;
  left: 52px;
}
#rotations-sts-foto{
  width: 1400px;
  height: 350px;
  background-color: #f0f0f0;
  border-radius: 20px;
  position: relative;
  top: 140px;
  left: 270px;
}
#rotations-sts-foto1{
  width: 1400px;
  height: 350px;
  background-color: #f0f0f0;
  border-radius: 20px;
  position: relative;
  top: 300px;
  left: 270px;
}
#rotations-sts-foto2{
  width: 1400px;
  height: 350px;
  background-color: #f0f0f0;
  border-radius: 20px;
  position: relative;
  top: 400px;
  left: 270px;
}
.actives{
  transform: translatey(-30px);

}
#hello-canp{
  position: relative;
  top: 78px;
  left: 42%;
  font-weight: 80;
  font-size:40px;
}
#hello-canp1{
  position: relative;
  top: 78px;
  left: 44%;
  font-weight: 80;
  font-size:40px;
}
#hello-kuai1{
  background-color: #ffffff;
  width: 282px;
  height: 360px;
  box-shadow: 0 2px 20px 0 rgb(89 135 212 / 20%);
  position: relative;
  top: 0px;
  left: 330px;
  transition: all 0.7s;
}
#hello-kuai2{
  background-color: #ffffff;
  width: 282px;
  height: 360px;
  box-shadow: 0 2px 20px 0 rgb(89 135 212 / 20%);
  position: relative;
  top: 0px;
  left: 340px;
  transition: all 0.7s;
}
#hello-kuai3{
  background-color: #ffffff;
  width: 282px;
  height: 360px;
  box-shadow: 0 2px 20px 0 rgb(89 135 212 / 20%);
  position: relative;
  bottom: 360px;
  left: 650px;
  transition: all 0.7s;
}
#hello-kuai4{
  background-color: #ffffff;
  width: 282px;
  height: 360px;
  box-shadow: 0 2px 20px 0 rgb(89 135 212 / 20%);
  position: relative;
  top: 0px;
  left: 660px;
  transition: all 0.7s;
}
#hello-kuai1-text{
  background-color: #4381FD;
  font-size: 18px;
  font-family: '微软雅黑';
  font-weight: 600;
  color: #ffffff;
  height: 60px;
  border-radius: 5px;
}
#hello-kuai1-text-txt{
position: relative;
top: 19px;
left: 80px;

}
.hello-kuai1-ul{
position: relative;
top: ;
left: 10px;
bottom: 10px;
}
#hello-kuai1-ul-h1{
font-size:16px;
font-weight: 500;
}
#hello-kuai1-ul-h1-te{
  font-size: 14px;
  font-weight: 300;
}
.hello-kuai1-ul-li{
  padding-top: 20px;
}
#hello-span-con{
  position: relative;
  top: 150px;
  display: flex;
  width: 1200px;
  height: 360px;
}
#hello-con-kui1{
  width: 300px;
}
</style>
