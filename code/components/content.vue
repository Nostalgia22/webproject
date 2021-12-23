<template>
<div @mousewheel="fjimganimate" >
			<div id="enter-list-div1-zon-cent">
			<div id="enter-list-div1">
				<img class="enter-img-list1 " v-bind:class="aniimg" :src="imgsrcent1" >
				<div id="enter-list-div1-text1-zon1" v-show="!imgacti" v-bind:class="imgtextv1" >
					<div id="enter-list-div1-text1" >性能更加强大的笔记本</div>
					<div id="enter-list-div1-text2" >采用英特尔12代表压处理器</div>
					<div id="enter-list-div1-text3" ><span>了解详情</span></div>
				</div>
			</div>
				<div id="enter-list-div1-text1-zon2" v-show="imgacti" v-bind:class="imgtextv1" >
					<div id="enter-list-div1-text1" >续航更长的笔记本</div>
					<div id="enter-list-div1-text2" >更大的电池，更低的功耗，长达十个小时续航</div>
					<div id="enter-list-div1-text3" ><span>了解详情</span></div>
				</div>
			</div>
			<div id="cent-left" @click="enterclickdivlef"  ></div>
			<div id="cent-right" @click="enterclickdiv"  ></div>
      <span class="cont-cpxx" >产品信息</span>
      <div id="cent-div-pingt-z" >
        <div  id="cent-pint-img1" @mouseenter="img1mouse" @mouseout="img1mouseout" >
          <img v-bind:class="ninimg1" src="../../static/cent/2.jpg" >
        </div>
        <div id="cent-pint-img2" @mouseenter="img1mouse1" @mouseout="img1mouseout1">
          <img v-bind:class="ninimg2" class="" src="../../static/cent/4.jpg" >
        </div>
        <div id="cent-pint-img3" @mouseenter="img1mouse3" @mouseout="img1mouseout3">
          <img v-bind:class="ninimg4" class=""  src="../../static/cent/3.jpg" >
        </div>
        <div id="cent-pint-img4" @mouseenter="img1mouse2" @mouseout="img1mouseout2">
          <img v-bind:class="ninimg3" class="" src="../../static/cent/1.jpg" >
        </div>
        <div id="" style="display: flex;">
          <div id="cent-pint-img5" @mouseenter="img1mouse4" @mouseout="img1mouseout4">
            <img v-bind:class="ninimg5" class="" src="../../static/cent/8.jpg" >
          </div>
          <div id="cent-pint-img6" @mouseenter="img1mouse5" @mouseout="img1mouseout5">
            <img v-bind:class="ninimg7" src="../../static/cent/9.jpg" >
          </div>
          <div id="cent-pint-img7" @mouseenter="img1mouse6" @mouseout="img1mouseout6">
            <img v-bind:class="ninimg6" src="../../static/cent/13.jpg" >
          </div>
        </div>
      </div>
      <div style="height: 92px;">

      </div>
      <div id="" style="height: 1000px;">
      <img class="fj-img" v-bind:class="fjimganimates" src="../../static/cent/aj8zn-ral4j.jpg" />
      <img  class="cen-bjb-img" src="../../static/cent/cent-png.png" />
      </div>
      <div style="height: 40px;" ><div id="a72ntsc-wz" v-show="zi72"  >72%NTSC全贴合屏幕尽享真彩世界</div></div>
       <div id="wz-canpinfg" >更多产品</div>
       <div id="cont-sp" >
         <conn></conn>
       </div>
		</div>
</template>

<script>
  import conn from '@/components/cententchirtop.vue'
  export default{
    name:'conne',
    components:{conn},
    data(){
      return{
        aniimg:'',
        imgsrcent1:'../../static/未标题-1.jpg',
        imgacti:false,
        imgtextv1:'',
        ninimg1:'',
        fjimganimates:0,
        zi72:false,
        ninimg2:'',
        ninimg3:'',
        ninimg4:'',
        ninimg5:'',
        ninimg6:'',
        ninimg7:''
      }
    },
    methods:{
      img1mouse6(){
        //console.log(1)
        this.ninimg6 = "cont-img-ani-vue6"
      },img1mouseout6(){
        //console.log(2)
        this.ninimg6 = "cont-img-ani-vue7"
      },
      img1mouse5(){
        //console.log(1)
        this.ninimg7 = "cont-img-ani-vue6"
      },img1mouseout5(){
        //console.log(2)
        this.ninimg7 = "cont-img-ani-vue7"
      },
      img1mouse4(){
        //console.log(1)
        this.ninimg5 = "cont-img-ani-vue6"
      },img1mouseout4(){
        //console.log(2)
        this.ninimg5 = "cont-img-ani-vue7"
      },
      img1mouse3(){
        //console.log(1)
        this.ninimg4 = "cont-img-ani-vue4"
      },img1mouseout3(){
        //console.log(2)
        this.ninimg4 = "cont-img-ani-vue5"
      },
      img1mouse2(){
        //console.log(1)
        this.ninimg3 = "cont-img-ani-vue2"
      },img1mouseout2(){
        //console.log(2)
        this.ninimg3 = "cont-img-ani-vue3"
      },
      img1mouse1(){
        //console.log(1)
        this.ninimg2 = "cont-img-ani-vue1"
      },img1mouseout1(){
        //console.log(2)
        this.ninimg2 = "cont-img-ani-vue1-out"
      },
      fjimganimate(){
        if(2100< document.documentElement.scrollTop){
          //console.log("成功了")
          this.fjimganimates = "fj-imganimate";
          setTimeout(()=>{
            this.zi72 =true
          },2000)
        }
      },
      img1mouse(){
        //console.log(1)
        this.ninimg1 = "cents-animg1"
      },img1mouseout(){
        //console.log(2)
        this.ninimg1 = "cents-animg1out"
      },
      enterclickdiv(){
      	this.aniimg = ''
      	if(this.imgacti){
      		this.imgsrcent1 = "../../static/未标题-1.jpg"
      		this.aniimg='enter-img-list1ani'
      		this.imgtextv1 = 'enter-img-list1ani2'
      	}else{
      		this.imgsrcent1 = "../../static/未标题-2.jpg"
      		this.aniimg='enter-img-list1ani1'
      		this.imgtextv1 = 'enter-img-list1ani2'
      	}
      	this.imgacti= !this.imgacti;
      },
      enterclickdivlef(){
      	this.aniimg = ''
      	if(this.imgacti){
      		this.imgsrcent1 = "../../static/未标题-1.jpg"
      		this.aniimg='enter-img-list1ani-1'
      		this.imgtextv1 = 'enter-img-list1ani2-1'
      	}else{
      		this.imgsrcent1 = "../../static/未标题-2.jpg"
      		this.aniimg='enter-img-list1ani1-1'
      		this.imgtextv1 = 'enter-img-list1ani2-1'
      	}
      	this.imgacti= !this.imgacti;
      }
    }
  }
</script>

<style>
  #cont-sp{
    position: relative;
    bottom: 130px;
  }
  .cont-img-ani-vue7{
    animation:namekets8 0.5s, 100ms  ease;
    animation-fill-mode: forwards;
  }
  @keyframes namekets8{
    from{height: 390px;}
    to{height: 330px;}
  }

  .cont-img-ani-vue6{
    animation:namekets7 1s, 100ms  ease;
    animation-fill-mode: forwards;
  }
  @keyframes namekets7{
    from{height: 330px;}
    to{height: 390px;}
  }


  .cont-img-ani-vue5{
    animation:namekets6 0.5s, 100ms  ease;
    animation-fill-mode: forwards;
  }
  @keyframes namekets6{
    from{height: 303%;}
    to{height: 280%;}
  }

  .cont-img-ani-vue4{
    animation:namekets5 1s, 100ms  ease;
    animation-fill-mode: forwards;
  }
  @keyframes namekets5{
    from{height: 280%;}
    to{height: 303%;}
  }

  .cont-img-ani-vue3{
    animation:namekets4 0.5s, 100ms  ease;
    animation-fill-mode: forwards;
  }
  @keyframes namekets4{
    from{height: 133%;}
    to{height: 100%;}
  }

  .cont-img-ani-vue2{
    animation:namekets3 1s, 100ms  ease;
    animation-fill-mode: forwards;
  }
  @keyframes namekets3{
    from{height: 100%;}
    to{height: 133%;}
  }

  .cont-img-ani-vue1-out{
    animation:namekets1 0.5s, 100ms  ease;
    animation-fill-mode: forwards;
  }
  @keyframes namekets1{
    from{height: 130%;transform: translateX(-100px);}
    to{height: 122%;}
  }
  .cont-img-ani-vue1{
    animation:namekets 1s, 100ms  ease;
    animation-fill-mode: forwards;
  }
  @keyframes namekets{
    from{height: 122%;}
    to{height: 130%;transform: translateX(-100px);}
  }
  #wz-canpinfg{
    font-size: 35px;
    position: relative;
    left: 830px;
    bottom: 220px;
  }
#a72ntsc-wz{
    font-size: 40px;
    position: relative;
    bottom: 300px;
    left: 630px;
    animation:ntsc1 1.5s, 100ms ease;
    animation-fill-mode: forwards;
  }
  @keyframes ntsc1{
    from{}
    to{transform: translateY(-200px);}
  }
  .cen-bjb-img{
    position: absolute;
    top: 2400px;
    left: 550px;
    z-index: 0;
    width: 800px;
  }
  .fj-img{
    position: relative;
    left: px;
    height: 100%;
    z-index: 1;
  }
  .fj-imganimate{
    animation:fj-ani 3s ease;
    animation-fill-mode: forwards;
  }
  @keyframes fj-ani{
    from{height:100%;}
    40%{opacity: 1;}
    80%{opacity: 0;}
    70%{z-index:1}
    100%{height:31%;transform: translateY(+800px);transform: translatex(+560px);opacity:;z-index:0}
  }
  .cont-cpxx{
    font-size: 36px;
    font-weight: 500;
    position: relative;
    left: 880px;
    top: 89px;
  }
  #cent-pint-img7 img{
    height: 330px;
  }
  #cent-pint-img7{
    position: relative;
    background-color: #23527C;
    width: 420px;
    height: 330px;
    position: relative;
    bottom: 840px;
    left: 70px;
    overflow: hidden;
  }
  #cent-pint-img6 img{
    height: 330px;
  }
  #cent-pint-img6{
    position: relative;
    background-color: #23527C;
    width: 450px;
    height: 330px;
    position: relative;
    bottom: 840px;
    left: 40px;
     overflow: hidden;
  }
  #cent-pint-img5 img{
    height: 330px;
  }
  #cent-pint-img5{
    position: relative;
    background-color: blueviolet;
    width: 450px;
    height: 330px;
    position: relative;
    bottom: 840px;
    left: 10px;
     overflow: hidden;
  }
  #cent-pint-img4 img{
    height: 100%0..0.;
    position: relative;

  }
  #cent-pint-img4{
    background-color: #;
    width: 450px;
    height: 450px;
    position: relative;
    bottom: 870px;
    left: 10px;
    overflow: hidden;
  }
  #cent-pint-img3 img{
    position: relative;
    bottom: 500px;
  }
  #cent-pint-img3{
    background-color: #;
    width: 900px;
    height: 450px;
    position: relative;
    bottom: 420px;
    left: 490px;
    overflow: hidden;
  }
  #cent-pint-img2 img{
    position: relative;
    height: 122%;
    bottom: 80px;
    right: 230px;
  }
  #cent-pint-img2{
    background-color: #;
    width: 450px;
    height: 450px;
    position: relative;
    left: 940px;
    bottom: 450px;
    overflow: hidden;
  }
  #cent-pint-img1 img{
    position: relative;
    bottom: 190px;
    height: 145%;
  }
  .cents-animg1out{
   animation:contenimg1out 0.5s, 100ms ease;
   animation-fill-mode: forwards;
  }
  @keyframes contenimg1out{
    from{height: 160%;}
    to{height: 145%;}
  }
  .cents-animg1{
   animation:contenimg1 1s, 100ms ease;
   animation-fill-mode: forwards;
  }
  @keyframes contenimg1{
    from{height: 145%;}
    to{height: 160%;}
  }
  #cent-pint-img1{
    background-color: #;
    width: 900px;
    height: 450px;
    position: relative;
    left: 10px;
    overflow: hidden;
    text-align: center;
  }
  #cent-div-pingt-z{
    height: 1600px;
    width: 1400px;
    background-color: #;
    position: relative;
    top: 200px;
    left: 240px;
  }
  .enter-img-list1{
  	position: relative;
  }
  #enter-list-div1-text1{
  	font-size: 34px;
  	font-weight: 600;
  }
  #enter-list-div1-text2{
  	font-size: 15px;
  	position: relative;
  	top: 20px;
  	width: 400px;
  }
  #enter-list-div1-text1-zon1{
  	position: relative;
  	left: 150px;
  	bottom:390px;
  }
  #enter-list-div1-text3{
  	position: relative;
  	top: 40px;
  	background-color: #00A1D6;
  	width: 100px;
  	height: 33px;
  	border-radius: 22px;
  }
  #enter-list-div1-text3 span{
  	position: relative;
  	top: 5px;
  	left: 12px;
  	color: aliceblue;
  	font-weight: 500;
  }

  #enter-list-div1-text1-zon2{
  	position: absolute;
  	top: 220px;
  	left: 1100px;
  }
  .enter-img-list1ani{
  	animation: centerani1 .25s, 100ms;
  }
  @keyframes centerani1{
  	from{transform: translateX(+30px);opacity: ;}
  	to{transform: translateX(0px);}
  }
  .enter-img-list1ani1{
  	animation: centerani2 .25s, 100ms;
  }
  @keyframes centerani2{
  	from{transform: translateX(+30px);opacity: ;}
  	to{transform: translateX(0px);}
  }

  .enter-img-list1ani2{
  	animation: centerani3 .5s, 100ms;
  }
  @keyframes centerani3{
  	from{transform: translateX(+40px);opacity: ;}
  	to{transform: translateX(0px);}
  }
  #enter-list-div1{

  }
  #cent-left{
  	position: relative;
  	width: 100px;
  	height: 100px;
  	background:url(../../static/you.png);
  	position: absolute;
  	top: 300px;
  	left: 123px;
  	background-repeat: no-repeat;
    cursor: pointer;
  }
  #cent-right{
  	position: relative;
  	width: 100px;
  	height: 100px;
  	background:url(../../static/cur.png);
  	position: absolute;
  	left: 1740px;
  	top: 300px;
  	background-repeat: no-repeat;
    cursor: pointer;
  }

  .enter-img-list1ani-1{
  	animation: centerani1-1 .25s, 100ms;
  }
  @keyframes centerani1-1{
  	from{transform: translateX(-30px);opacity: ;}
  	to{transform: translateX(0px);}
  }
  .enter-img-list1ani1-1{
  	animation: centerani2-1 .25s, 100ms;
  }
  @keyframes centerani2-1{
  	from{transform: translateX(-30px);opacity: ;}
  	to{transform: translateX(0px);}
  }

  .enter-img-list1ani2-1{
  	animation: centerani3-1 .5s, 100ms;
  }
  @keyframes centerani3-1{
  	from{transform: translateX(-40px);opacity: ;}
  	to{transform: translateX(0px);}
  }
  #enter-list-div1-zon-cent{
  	background-color: #f2f2f2;
  	position: relative;
  	width: 1600px;
  	height: 600px;
  	left: 150px;
  	overflow: hidden;
  }
  .img{
  	background-color: #dbe4f3;
  }
  #t1{
  	background-color: #f9f2fa;
  	height:171px ;
  	text-align: center;
  }
  #t2{
  	font-size: 30px;
  	font-weight: 540;
  	position: relative;
  	bottom: 5px;
  }
  #t3{
  	font-size: 20px;
  }
  #tp1{
  	width: 290px;
  	height: 460px;
  	background-color: #ffffff;
  	word-spacing: 5px;
  	text-align: center;
  	position: relative;
  }
  #tp2{
  	width: 290px;
  	height: 460px;
  	background-color: #ffffff;
  	word-spacing: 5px;
  	text-align: center;
  	position: relative;
  	left: 30px;
  }
  #tp1-1{
  	font-weight: 600;
  	color: #ffffff;
  	position: relative;
  	right: 100px;
  	bottom: 12px;
  }
  #tp3{
  	width: 290px;
  	height: 460px;
  	background-color: #ffffff;
  	word-spacing: 5px;
  	text-align: center;
  	position: relative;
  	left: 60px;
  }
  #tp4{
  	width: 290px;
  	height: 460px;
  	background-color: #ffffff;
  	word-spacing: 5px;
  	text-align: center;
  	position: relative;
  	left: 90px;
  }
  #tp5{
  	width: 290px;
  	height: 460px;
  	background-color: #ffffff;
  	word-spacing: 5px;
  	text-align: center;

  	position: relative;
  }
  #tp6{
  	width: 290px;
  	height: 460px;
  	background-color: #ffffff;
  	word-spacing: 5px;
  	text-align: center;
  	position: relative;
  	left: 30px;
  }
  #tp7{
  	width: 290px;
  	height: 460px;
  	background-color: #ffffff;
  	word-spacing: 5px;
  	text-align: center;
  	position: relative;
  	left: 60px;
  }
  #tp8{
  	width: 290px;
  	height: 460px;
  	background-color: #ffffff;
  	word-spacing: 5px;
  	text-align: center;
  	position: relative;
  	left: 90px;
  }
  #botom1{
  	background-color: #FFFFFF;
  	width: 1208px;
  	height: 450px;
  	position: relative;
  	top: 50px;
  	left: 98px;
  }
  #tp10{
  	position: relative;
  	bottom: 40px;
  	left: 600px;
  }
  #wz1{
  	font-size: 50px;
  	position: absolute;
  	top: 60px;
  	left: 170px;
  }
  #wz2{
  	font-size: 40px;
  	position: absolute;
  	top: 120px;
  	left: 200px;
  }
  #wz3{
  	font-size: 20px;
  	position: absolute;
  	top: 220px;
  	left: 180px;
  }
  .tpd{
  	position: absolute;
  	top: 180px;
  	left: 200px;
  }
  #tp-lie-z{
  	width: 1203px;
  	display: flex;
  	position: relative;
  	left: 300px;
  }
  #tp-lie-z1{
  	width: 1203px;
  	display: flex;
  	position: relative;
  	left: 300px;
  }
</style>
