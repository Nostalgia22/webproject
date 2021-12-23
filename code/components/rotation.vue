<template>
  <div id="" @mousemove="ststeanimgkenter" @mouseout="ststeanimgkout" >
    <div id="lbt-img-div-ccon"  >
    	<div id="lbt-img-div"  @mouseenter="straenter" @mouseout="straenout" v-bind:class="bltmove" >
    		<img class="foto-img"  src="../../static/timg1.jpg" />
    		<img class="foto-img"  src="../../static/timg2.jpg" />
    		<img class="foto-img"  src="../../static/timg3.jpg" />
    		<img class="foto-img"  src="../../static/timg4.jpg" />
    		<img class="foto-img"  src="../../static/timg5.jpg" />
    	</div>
    	<div id="dian" @mouseenter="straenter"   >
    		<span class="span-dian" v-bind:class="cla[0]" @click="spanclick"></span>
    		<span class="span-dian" v-bind:class="cla[1]" @click="spanclick2"></span>
    		<span class="span-dian" v-bind:class="cla[2]" @click="spanclick3"></span>
    		<span class="span-dian" v-bind:class="cla[3]" @click="spanclick4"></span>
    	</div>
      <transition  name="fade" >
      <div id=""  v-show="lejian">
        <div id="rota-div-sjow"  @mouseenter="straenter"  class="lbt-lift-cur" @click="pagerigt" ><img src="../../static/you.png" /> </div>
        <div  @mouseenter="straenter" @click="pageletf" class="lbt-lift-cur1" ><img src="../../static/cur.png" /></div>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import rotarions from '@/components/cententchirtop.vue'
export default{
  data(){
    return{
      bltmove:'',
      indexx:0,
      cla:['lan','','',''],
      tims:1,
      lejian:false
    }
  },
  mounted(){
    this.xhmovessy();
  },
  methods:{
    pagerigt(){
    	if(this.indexx == 1){
    		this.bltmove = 'foto-img-ani2-right2'
    		this.cla[1] = ''
    		this.cla[2] = ''
    		this.cla[3] = 'lan'
    		this.cla[0] = ''
    		this.indexx = 4
    	}else if(this.indexx == 2){
    		this.bltmove = 'foto-img-ani-right'
    		this.cla[1] = ''
    		this.cla[2] = ''
    		this.cla[3] = ''
    		this.cla[0] = 'lan'
    		this.indexx --
    	}else if(this.indexx == 3){
    		this.bltmove = 'foto-img-ani1-right1'
    		this.cla[1] = 'lan'
    		this.cla[2] = ''
    		this.cla[3] = ''
    		this.cla[0] = ''
    		this.indexx --
    	}else if(this.indexx == 4){
    		this.bltmove = 'foto-img-ani3-right3'
    		this.cla[1] = ''
    		this.cla[2] = 'lan'
    		this.cla[3] = ''
    		this.cla[0] = ''
    		this.indexx --
    	}
    },
    pageletf(){
    	if(this.indexx == 1){
    		this.bltmove = 'foto-img-ani-left'
    		this.cla[1] = 'lan'
    		this.cla[2] = ''
    		this.cla[3] = ''
    		this.cla[0] = ''
    		this.indexx ++
    	}else if(this.indexx == 2){
    		this.bltmove = 'foto-img-ani1-left'
    		this.cla[1] = ''
    		this.cla[2] = 'lan'
    		this.cla[3] = ''
    		this.cla[0] = ''
    		this.indexx ++
    	}else if(this.indexx == 3){
    		this.bltmove = 'foto-img-ani2-left'
    		this.cla[1] = ''
    		this.cla[2] = ''
    		this.cla[3] = 'lan'
    		this.cla[0] = ''
    		this.indexx ++
    	}else if(this.indexx == 4){
    		this.bltmove = 'foto-img-ani3-left'
    		this.cla[1] = ''
    		this.cla[2] = ''
    		this.cla[3] = ''
    		this.cla[0] = 'lan'
    		//setTimeout(()=>{
    		//	if(this.indexx == 4){
    		//		this.bltmove = 'foto-img-ani4'
    		//	}
    		//},2000)
    		this.indexx =1
    	}
    },
    spanclick(){
    	if(this.indexx == 2){
    	this.bltmove = 'foto-img-ani-right'
    	this.indexx --
    	}else if(this.indexx == 3){
    	this.bltmove = 'foto-img-ani3-span2'
    	this.indexx -=2
    	}else if(this.indexx == 4){
    	this.bltmove = 'foto-img-ani3-span2-2'
    	this.indexx -=3
    	}
    	this.cla[1] = ''
    	this.cla[2] = ''
    	this.cla[3] = ''
    	this.cla[0] = 'lan'
    },spanclick2(){
    	console.log(2);
    	if(this.indexx == 1){
    		this.bltmove = 'foto-img-ani-left'
    		this.indexx ++
    	}else if(this.indexx == 3){
    	this.bltmove = 'foto-img-ani1-right1'
    	this.indexx --
    	}else if(this.indexx == 4){
    	this.bltmove = 'foto-img-ani3-span2-1'
    	this.indexx -=2
    	}
    	this.cla[1] = 'lan'
    	this.cla[2] = ''
    	this.cla[3] = ''
    	this.cla[0] = ''
    },spanclick3(){
    	//console.log(3);
    	if(this.indexx == 2){
    		this.bltmove = 'foto-img-ani1-left'
    		this.indexx ++
    	}else if(this.indexx == 1){
    		this.bltmove = 'foto-img-ani3-span3-1'
    		this.indexx +=2
    	}else if(this.indexx == 4){
    		this.bltmove = 'foto-img-ani3-right3'
    		this.indexx --
    	}
    	this.cla[1] = ''
    	this.cla[2] = 'lan'
    	this.cla[3] = ''
    	this.cla[0] = ''
    },spanclick4(){
    	if(this.indexx == 3){
    		this.bltmove = 'foto-img-ani2-left'
    		this.indexx ++
    	}else if(this.indexx == 1){
    		this.bltmove = 'foto-img-ani3-span4-1'
    		this.indexx +=3
    	}else if(this.indexx == 2){
    		this.bltmove = 'foto-img-ani3-span5-1'
    		this.indexx +=2
    	}
    	this.cla[1] = ''
    	this.cla[2] = ''
    	this.cla[3] = 'lan'
    	this.cla[0] = ''
    },
    ststeanimgkenter(){
    	this.lejian = true;
    },
    ststeanimgkout(){
    	this.lejian = false;
    },
    straenter(){
    	this.tims = 0
    },straenout(){
    	this.tims = 1
    	//setTimeout(()=>{
    		//this.lejian = false;
    	//},1000)
    },
    xhmovessy(){
    	this.indexx ++;
    	setInterval(()=>{
    		if(this.tims == 1){
    			if(this.indexx == 1){
    				this.bltmove = 'foto-img-ani'
    				this.cla[1] = 'lan'
    				this.cla[2] = ''
    				this.cla[3] = ''
    				this.cla[0] = ''
    				this.indexx ++
    			}else if(this.indexx == 2){
    				this.bltmove = 'foto-img-ani1'
    				this.cla[1] = ''
    				this.cla[2] = 'lan'
    				this.cla[3] = ''
    				this.cla[0] = ''
    				this.indexx ++
    			}else if(this.indexx == 3){
    				this.bltmove = 'foto-img-ani2'
    				this.cla[1] = ''
    				this.cla[2] = ''
    				this.cla[3] = 'lan'
    				this.cla[0] = ''
    				this.indexx ++
    			}else if(this.indexx == 4){
    				this.bltmove = 'foto-img-ani3'
    				this.cla[1] = ''
    				this.cla[2] = ''
    				this.cla[3] = ''
    				this.cla[0] = 'lan'
    				setTimeout(()=>{
    				this.bltmove = 'foto-img-ani4'
    				},2000)
    				this.indexx =1
    			}
    		}
    	},6000)
    }
  }
}
</script>

<style>
.fade-enter-active{
  transition:  all 0.8s cubic-bezier(0.3,0.5,0.4,1.0);
}
.fade-leave-active{
  transition: all 0.8s cubic-bezier(0.3,0.5,0.4,1.0);
}
.fade-enter {
  transform: translatex();
  opacity: 0;
}
.fade-leave-to{
  transform: translatex();
  opacity: 0;
}
#rota-div-sjow{
  transition: all ease 2s;
}
#lbt-img-div{
	display: flex;
}
.foto-img{
  width: 1903px;
  height: 400px;

}
#lbt-img-div-ccon{
  background-color: #FFFFFF;
  height:400px;
  width: 1920px;
  overflow: hidden;
}
.foto-img-ani{
  animation: lbtfides1 2s ease;
  animation-fill-mode: forwards
}
@keyframes lbtfides1{
  from{}
  to{transform: translateX(-1903px);}
}
.foto-img-ani1{
  animation: lbtfides2 2s ease;
  animation-fill-mode: forwards
}
@keyframes lbtfides2{
  from{transform: translateX(-1903px);}
  to{transform: translateX(-3806px);}
}
.foto-img-ani2{
  animation: lbtfides3 2s ease;
  animation-fill-mode: forwards
}
@keyframes lbtfides3{
  from{transform: translateX(-3806px);}
  to{transform: translateX(-5707px);}
}
.foto-img-ani3{
  animation: lbtfides4 2s ease;
  animation-fill-mode: forwards
}
@keyframes lbtfides4{
  from{transform: translateX(-5707px);}
  to{transform: translateX(-7612px);}
}
.foto-img-ani4{
  position: relative;
  left: 0px;
}
#dian{
  position: absolute;
  top: 490px;
  left: 45%;
}
.span-dian{
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: #ffffff;
  border-radius: 20px;
  z-index: 100;
  margin: 10px;
  cursor: pointer;
  position: relative;
  bottom: 60px;
}
.lan{
  background-color: #4381fd;
}
.lbt-lift-cur{
  background-color: #000000;
  width: 100px;
  height: 400px;
  position: relative;
  bottom: 400px;
  opacity: 0.2;
}
.lbt-lift-cur img{
  position: relative;
  top:150px;
  left: 20px;
  -webkit-user-select: none;
}
.lbt-lift-cur1{
  background-color: #000000;
  width: 100px;
  height: 400px;
  position: relative;
  left: 1806px;
  bottom:800px;
  opacity: 0.2;
}
.lbt-lift-cur1 img{
  position: relative;
  top:150px;
  left: 30px;
  -webkit-user-select: none;
}

.foto-img-ani-right{
  animation: lbtfides1ri 0.8s ease;
  animation-fill-mode: forwards
}
@keyframes lbtfides1ri{
  from{transform: translateX(-1903px);}
  to{transform: translateX(0px);}
}
.foto-img-ani1-right1{
  animation: lbtfides1ri1 0.8s ease;
  animation-fill-mode: forwards
}
@keyframes lbtfides1ri1{
  from{transform: translateX(-3806px);}
  to{transform: translateX(-1903px);}
}
.foto-img-ani2-right2{
  animation: lbtfides1ri2 0.8s ease;
  animation-fill-mode: forwards
}
@keyframes lbtfides1ri2{
  from{transform: translateX(0px);}
  to{transform: translateX(-5707px);}
}
.foto-img-ani3-right3{
  animation: lbtfides1ri3 0.8s ease;
  animation-fill-mode: forwards
}
@keyframes lbtfides1ri3{

  from{transform: translateX(-5707px);}
  to{transform: translateX(-3806px);}
}
.foto-img-ani4-right4{
  position: relative;
  left: 0px;
}

.foto-img-ani-left{
  animation: lbtfides1  0.8s ease;
  animation-fill-mode: forwards
}
@keyframes lbtfides1{
  from{}
  to{transform: translateX(-1903px);}
}
.foto-img-ani1-left{
  animation: lbtfides2  0.8s ease;
  animation-fill-mode: forwards
}
@keyframes lbtfides2{
  from{transform: translateX(-1903px);}
  to{transform: translateX(-3806px);}
}
.foto-img-ani2-left{
  animation: lbtfides3  0.8s ease;
  animation-fill-mode: forwards
}
@keyframes lbtfides3{
  from{transform: translateX(-3806px);}
  to{transform: translateX(-5707px);}
}
.foto-img-ani3-left{
  animation: lbtfides4  0.8s ease;
  animation-fill-mode: forwards
}
@keyframes lbtfides4{
  from{transform: translateX(-5707px);}
  to{transform: translateX(-7612px);}
}
.foto-img-ani4-left{
  position: relative;
  left: 0px;
}

.foto-img-ani3-span2{
  animation: lbtfides4spa  0.8s ease;
  animation-fill-mode: forwards
}
@keyframes lbtfides4spa{
  from{transform: translateX(-5707px);}
  to{transform: translateX(-0px);}
}
.foto-img-ani3-span2-2{
  animation: lbtfides4spa-2  0.8s ease;
  animation-fill-mode: forwards
}
@keyframes lbtfides4spa-2{
  from{transform: translateX(-7612px);}
  to{transform: translateX(-0px);}
}

.foto-img-ani3-span2-1{
  animation: lbtfides4spa2-1  0.8s ease;
  animation-fill-mode: forwards
}
@keyframes lbtfides4spa2-1{
  from{transform: translateX(-7612px);}
  to{transform: translateX(-1903px);}
}

.foto-img-ani3-span3-1{
  animation: lbtfides4spa3-1  0.8s ease;
  animation-fill-mode: forwards
}
@keyframes lbtfides4spa3-1{
  from{transform: translateX(0px);}
  to{transform: translateX(-3806px);}
}

.foto-img-ani3-span4-1{
  animation: lbtfides4spa4-1  0.8s ease;
  animation-fill-mode: forwards
}
@keyframes lbtfides4spa4-1{
  from{transform: translateX(0px);}
  to{transform: translateX(-5707px);}
}

.foto-img-ani3-span5-1{
  animation: lbtfides4spa5-1  0.8s ease;
  animation-fill-mode: forwards
}
@keyframes lbtfides4spa5-1{
  from{transform: translateX(-1903px);}
  to{transform: translateX(-5707px);}
}
</style>
