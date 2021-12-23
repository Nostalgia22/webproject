<template>
  <div id="">
    <div id="chir-div1-title-z1">
      <div @mouseenter="stopenter" @mouseout="stopout" id="chir-div1-title-zon" class="chid-boxs">
        <div id="chir-div1">
          <img class="sto-img1" src="../../static/h/5.png" >
        </div>
        <div id="chir-div1-title1">Notebook </div>
        <div id="chir-div1-title2">全新一代处理器</div>
        <div v-bind:class="lannblak" class="" id="chir-div1-title3"><span>4399元</span></div>
      </div>
      <div style="width: 20px;"></div>
      <div @mouseenter="stopenter1" @mouseout="stopout1" id="chir-div1-title-zon">
        <div id="chir-div1">
         <img  class="sto-img1" src="../../static/VIcsJ7dX4vAgJ1APpNKGTLVSm-2113.w520.jpg" >
        </div>
        <div id="chir-div1-title1">平板电脑</div>
        <div id="chir-div1-title2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高通870</div>
        <div v-bind:class="lannblak1" id="chir-div1-title3"><span>2399元</span></div>
      </div>
      <div style="width: 20px;"></div>
      <div @mouseenter="stopenter2" @mouseout="stopout2" id="chir-div1-title-zon">
        <div id="chir-div1">
          <img  class="sto-img1" src="../../static/iN8yH6dHqTudKJprCLUkXVa12-6448.w520.jpg" >
        </div>
        <div id="chir-div1-title1">&nbsp;一体机</div>
        <div id="chir-div1-title2">桌面级处理器</div>
        <div v-bind:class="lannblak2" id="chir-div1-title3"><span>8399元</span></div>
      </div>
      <div style="width: 20px;"></div>
      <div @mouseenter="stopenter3" @mouseout="stopout3" id="chir-div1-title-zon">
        <div id="chir-div1">
          <img  class="sto-img1" src="../../static/VRFLMZ3WAGPP5AwKZQpTP9L2v-1129.w520.jpg" >
        </div>
        <div id="chir-div1-title1">便携式电脑</div>
        <div id="chir-div1-title2">可以当便携屏</div>
        <div v-bind:class="lannblak3" id="chir-div1-title3"><span>3399元</span></div>
      </div>
    </div>

    <div id="chir-div1-title-z2">
      <div @mouseenter="stopenter4" @mouseout="stopout4" id="chir-div1-title-zon">
        <div id="chir-div1">
          <img  class="sto-img1" src="../../static/iODmXPjgVl4zYChgFMxQS5Pun-8359.w520.jpg" >
        </div>
        <div id="chir-div1-title1">轻薄本</div>
        <div id="chir-div1-title2">轻至1.2kg</div>
        <div v-bind:class="lannblak4" id="chir-div1-title3"><span>4399元</span></div>
      </div>
      <div style="width: 20px;"></div>
      <div @mouseenter="stopenter5" @mouseout="stopout5" id="chir-div1-title-zon">
        <div id="chir-div1">
          <img  class="sto-img2" src="../../static/coms1.png" >
        </div>
        <div id="chir-div1-title1">商务本</div>
        <div id="chir-div1-title2">更好做工</div>
        <div v-bind:class="lannblak5" id="chir-div1-title3"><span>4399元</span></div>
      </div>
      <div style="width: 20px;"></div>
      <div @mouseenter="stopenter6" @mouseout="stopout6" id="chir-div1-title-zon">
        <div id="chir-div1">
          <img  class="sto-img1" src="../../static/cur2.jpg" >
        </div>
        <div id="chir-div1-title4">Game Computer</div>
        <div id="chir-div1-title2-z">更强的散热更强的性能</div>
        <div v-bind:class="lannblak6" id="chir-div1-title3"><span>4399元</span></div>
      </div>
      <div style="width: 20px;"></div>
      <div @mouseenter="stopenter7" @mouseout="stopout7" id="chir-div1-title-zon">
        <div id="chir-div1">
          <img  class="sto-img1" src="../../static/cur3.jpg" >
        </div>
        <div id="chir-div1-title4">Almighty Computer</div>
        <div id="chir-div1-title2-z">谁说鱼和熊掌不可兼得？
</div>
        <div v-bind:class="lannblak7" id="chir-div1-title3"><span>4399元</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        lannblak:'',
        lannblak1:'',
        lannblak2:'',
        lannblak3:'',
        lannblak4:'',
        lannblak5:'',
        lannblak6:'',
        lannblak7:''
      }
    },
    methods:{
      stopenter(){
        this.lannblak = 'chir-div1-title3-ani'
      },stopout(){
        this.lannblak = 'chir-div1-title3-ani1'
      }, stopenter1(){
        this.lannblak1 = 'chir-div1-title3-ani'
      },stopout1(){
        this.lannblak1 = 'chir-div1-title3-ani1'
      }, stopenter2(){
        this.lannblak2 = 'chir-div1-title3-ani'
      },stopout2(){
        this.lannblak2 = 'chir-div1-title3-ani1'
      }, stopenter3(){
        this.lannblak3 = 'chir-div1-title3-ani'
      },stopout3(){
        this.lannblak3 = 'chir-div1-title3-ani1'
      }, stopenter4(){
        this.lannblak4 = 'chir-div1-title3-ani'
      },stopout4(){
        this.lannblak4 = 'chir-div1-title3-ani1'
      }, stopenter5(){
        this.lannblak5 = 'chir-div1-title3-ani'
      },stopout5(){
        this.lannblak5 = 'chir-div1-title3-ani1'
      }, stopenter6(){
        this.lannblak6 = 'chir-div1-title3-ani'
      },stopout6(){
        this.lannblak6 = 'chir-div1-title3-ani1'
      }, stopenter7(){
        this.lannblak7 = 'chir-div1-title3-ani'
      },stopout7(){
        this.lannblak7 = 'chir-div1-title3-ani1'
      }
    }
  }
</script>

<style>
  .chir-div1-title3-ani1{
    animation:anible1 0.5s, 100ms;
    animation-fill-mode: forwards;
  }
  @keyframes anible1{
    from{background-color: #4382FF;}
    to{background-color: #000000;}
  }
  .chir-div1-title3-ani{
    animation:anible 0.5s, 100ms;
    animation-fill-mode: forwards;
  }
  @keyframes anible{
    from{}
    to{background-color: #4382FF;}
  }
  .sto-img2{
    width: 440px;
    position: relative;
    right: 80px;
    top: 30px;
  }
  .sto-img1{
    height: 290px;
  }
  .chid-boxs{

  }
  #chir-div1-title-z2{
    display: flex;
    position: relative;
    top: 100px;
  }
  #chir-div1-title-z1{
    display: flex;
  }
  #chir-div1-title-zon{
    position: relative;
    left: 330px;
    background-color: #f3f3f3;
    width: 290px;
    height: 410px;
    box-shadow: 0 5px 20px silver;
    cursor: pointer;
  }
  #chir-div1-title3{
    position: relative;
    width: 100px;
    height: 30px;
    background-color: #000000;
    top: 20px;
    left: 90px;
    border-radius: 20px;
  }
  #chir-div1-title3 span{
    position: relative;
    top: 4px;
    left: 20px;
    width: 100px;
    height: 30px;
    color: #FFFFFF;
    border-radius: 20px;
  }
  #chir-div1-title2{
    position: relative;
    top: 10px;
    left: 90px;
    font-size: 16px;
    font-weight: 540;
  }
  #chir-div1-title2-z{
    position: relative;
    top: 10px;
    left: 60px;
    font-size: 16px;
    font-weight: 540;
  }
  #chir-div1-title1{
    position: relative;
    top: 10px;
    left: 90px;
    font-size: 25px;
    font-weight: 540;
  }
  #chir-div1-title4{
    position: relative;
    top: 10px;
    left: 30px;
    font-size: 25px;
    font-weight: 540;
  }
  #chir-div1{
    width: 290px;
    height: 290px;
    background-color: #ffffff;

  }
</style>
