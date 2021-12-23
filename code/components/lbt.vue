<template>
<div id="lbt-zong" >
  <hr id="btn3-hr0">
  <div id="lbt-news-text">
    新闻
  </div>
  <hr class="btn-hr1">
  <div id="lbt-nr">
    <span class="lbt-times" >
      2021年
    </span>
    <div id="lbt-kuai1">
      <hr class="lbt-yi1" >
      <div>
        <div id="lbt-tiemti" >2021年12月16日</div>
        <div id="lbt-biti">后续12代酷睿i5：砍掉全部小核心</div>
        <div id="lbt-neirte">首先，小核这东西对很多人就没有存在的必要，你说我就玩玩英雄联盟这样的小游戏，要什么小核？所以Intel决定，i5-12600开始往下，12代酷睿都只有大核心，不再有小核心，i5、i3、奔腾系列全部如此。扔掉小核的意思。这样以来，12代酷睿还可以推出无核显低电压无小核超频版。</div>
      </div>
      <div id="lbt-img-div1"><img class="lbt-imgs" src="../../static/news1.jpg"/> </div>
    </div>

    <div id="lbt-kuai1">
      <hr class="lbt-yi1" >
      <div>
        <div id="lbt-tiemti" >2021年12月12日</div>
        <div id="lbt-biti">HDMI 2.1：下一个虚标重灾区</div>
        <div id="lbt-neirte">现在HDMI 版本只有1.4和2.1了，HDMI官方已经把使用TMDS协议的2.0版本当成了HDMI 2.1的一个子集。

不知道是不是用户现在都关注HDMI 2.1接口，导致协会成员的HDMI 2.0产品不好卖了？

毕竟HDMI 2.1芯片还是非常贵的。下图中，天龙1700H功放中使用的松下MN864788 HDMI 2.1芯片，批量价格也要20多美元一块，如果用HDMI 2.0芯片，成本要低很多。</div>
      </div>
      <div id="lbt-img-div1"><img class="lbt-imgs" src="../../static/hdmi.jpg"/> </div>
    </div>

    <div id="lbt-kuai1">
      <hr class="lbt-yi1" >
      <div>
        <div id="lbt-tiemti" >2021年12月6日</div>
        <div id="lbt-biti">锐龙6000系列APU即将发布</div>
        <div id="lbt-neirte">据最新消息称，AMD将在下个月推出新一代“Rembrandt”锐龙6000系列APU处理器，集成Zen 3 GPU和RDNA 2 GPU，性能上可以超过GTX 1050 Ti。和此前沿用多年的Vega iGPU对比，RNDA 2有着极为显著的性能提升，而根据网友曝光，该APU的早期3D Mark Time Spy图形基准测试得分达到了2700分。</div>
      </div>
      <div id="lbt-img-div1"><img class="lbt-imgs" src="../../static/GPU.png"/> </div>
    </div>

    <div id="lbt-kuai1">
      <hr class="lbt-yi1" >
      <div>
        <div id="lbt-tiemti" >2021年11月24日</div>
        <div id="lbt-biti">Intel亲口确认：12代酷睿高性能移动版已发货</div>
        <div id="lbt-neirte">Intel 12代酷睿正在迅速铺开，除了更多桌面型号，很多玩家对移动版也非常期待，游戏本、轻薄本正等待一场新的变革。
Intel执行副总裁、客户端事业部总经理Gregory M Bryant今天通过推特确认，Alder Lake-P 12代酷睿高性能移动版正在发货给客户。</div>
      </div>
      <div id="lbt-img-div1"><img class="lbt-imgs" src="../../static/cpu.jpg"/> </div>
    </div>
  </div>
  <div id="sdlf-div"><span>了解更多</span> </div>
</div>
</template>

<script>
  export default {

  }
</script>

<style>
  #sdlf-div span{
    position: relative;
    top: 3px;
    left: 12px;
  }
  #sdlf-div{
    border: #000000 1px solid;
    height: 30px;
    width: 100px;
    position: relative;
    top: 450px;
    left: 900px;
    border-radius: 20px;
  }
  #lbt-kuai1{
    background-color: #;
    height: 230px;
  }
  #lbt-img-div1{
    background-color: #8A2BE2;
    overflow: hidden;
    width: 260px;
    height: 170px;
    border-radius: 20px;
    position: relative;
    left: 940px;
    bottom: 60px;
  }
  .lbt-imgs{
    width: 260px;
    height: 180px;
  }
  #lbt-tiemti{
    position: relative;
    top: 50px;
    font-size: 14px;
  }
  #lbt-biti{
    position: relative;
    top: 70px;
    font-size: 22px;
    font-weight: 700;
  }
  #lbt-neirte{
    position: relative;
    top: 90px;
    width: 800px;
    font-size: 16px;
  }
.lbt-yi1{
  position: relative;
  top: 30px;
}
.lbt-times{
  font-size: 22px;
  font-weight: 700;
  position: relative;
  left: px;
}
#lbt-nr{
  position: relative;
  top: 190px;
  left: 340px;
  height: 800px;
  width: 1200px;
  background-color: #;
}
#btn3-hr0{
position: relative;
top: 0;
padding: 0;
margin: 0;
border-top:1px solid #dadada;
}
.btn-hr1{
  width: 99%;
  position: relative;
  top: 150px;
  background-color: #5F6464;
}
#lbt-news-text{
  font-size: 48px;
  font-weight: 500;
  position: relative;
  left: 900px;
  top: 110px;
}
#lbt-zong{
  background-color: #;
  height: 1400px;
}
</style>
