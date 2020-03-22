<template>
  <div class="dlkj">
    电力看民生
    <div class="box">
      <div class="pyramid py-1">
        <div class="pyramid__inner">
          <div class="bit bit-1">
            <!-- <span>js</span> -->
          </div>
          <div class="bit bit-2"></div>
          <div class="bit bit-3"></div>
          <div class="bit bit-4">
            <span>10%</span>
          </div>
        </div>
      </div>

      <div class="pyramid py-2">
        <div class="pyramid__inner">
          <div class="bit bit-1">
            <!-- <span>html</span> -->
          </div>
          <div class="bit bit-2"></div>
          <div class="bit bit-3"></div>
          <div class="bit bit-4">
            <span>30%</span>
          </div>
          <div class="bit-5"></div>
        </div>
      </div>

      <div class="pyramid py-2 py-3">
        <div class="pyramid__inner">
          <div class="bit bit-1">
            <!-- <span>css</span> -->
          </div>
          <div class="bit bit-2"></div>
          <div class="bit bit-3"></div>
          <div class="bit bit-4">
            <span>60%</span>
          </div>
          <div class="bit-5"></div>
          <div class="bit-6"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
     file(){
       return this.$refs.input
     }
  },
  methods:{
    btn(){
      this.file.click()
      
      
    },
    btnChange(){
      const a = this.file.files[0]
      console.log(a);
      // 使用window.URL.createObjectURL()得到file数据
      const fileData = window.URL.createObjectURL(a)
      this.$refs.img.src = fileData
    }
  }
}
</script>

<style scoped>
.dlkj {
  transform-style: preserve-3d;
}
.box {
  position: relative;
  width: 500px;
  height: 500px;
  margin: 0 auto;
}
.pyramid {
  width: 200px;
  height: 200px;
  margin: 3em auto -2rem;
  position: absolute;
  left: 50%;
  perspective-origin: center -75%;
}
.pyramid__inner {
  transform-style: preserve-3d;
  transform: translateZ(-150px) translateX(-70%) rotateY(360deg);
  animation: Anim 15s linear infinite;
}
@keyframes Anim {
  0% { transform: translateZ(-150px) translateX(-75%) rotateY(0deg); }
  50% { transform: translateZ(-150px) translateX(75%) rotateY(180deg); }
  100% { transform: translateZ(-150px) translateX(-75%) rotateY(360deg); }
} 
.bit {
  position: absolute;
  height: 0;
  border-right: 100px solid transparent;
  border-left: 100px solid transparent;
  opacity: .92;
}
.py-1 {
  /* transform: scale(.485) translateX(4rem) translateY(11.25rem); */
  -webkit-transform: scale(.485);
          transform: scale(.485);
  -webkit-perspective: 5000px;
          perspective: 5000px;
  z-index: 3;
  
  top: 0;
}
.py-2 {
 /*  transform: scale(.72) translateX(1.5rem) translateY(1.25rem); */
  -webkit-transform: scale(.72);
          transform: scale(.72);
  -webkit-perspective: 2900px;
          perspective: 2900px;
  z-index: 2;
  
  top: 140px;
}

.py-3 {
  -webkit-transform: scale(1.2);
          transform: scale(1.2);
  -webkit-perspective: 1000px;
          perspective: 1000px;
  z-index: 1;
  
  top: 340px;
}
.py-1 .bit {
  width: 0px;
}

.py-1 .bit-1 {
  border-bottom: 200px solid #9d492c;
}

.py-1 .bit-2,
.py-1 .bit-3,
.py-1 .bit-4 {
  border-bottom: 200px solid #c87154;
}
.py-1  .bit-1 {
  -webkit-transform: rotateX(30deg) translateZ(57px);
          transform: rotateX(30deg) translateZ(57px);  
}

.py-1  .bit-2 {
  -webkit-transform: rotateX(-30deg) translateZ(-57px);
          transform: rotateX(-30deg) translateZ(-57px);    
}

.py-1  .bit-3 {
  -webkit-transform: rotateZ(-30deg) rotateY(-90deg) translateZ(-57px);
          transform: rotateZ(-30deg) rotateY(-90deg) translateZ(-57px);
}

.py-1  .bit-4 {
  -webkit-transform:  rotateZ(30deg) rotateY(90deg) translateZ(-57px);
          transform:  rotateZ(30deg) rotateY(90deg) translateZ(-57px);
}
/* ================ */
.py-2 .bit {
  width: 140px;
  border-right: 75px solid transparent;
  border-left: 75px solid transparent;
}
.py-2 .bit-2,
.py-2 .bit-3,
.py-2 .bit-4 {
  border-bottom: 150px solid #ffad3e;
}
.py-2  .bit-1 {
  -webkit-transform: rotateX(30deg) translateZ(122px);
          transform: rotateX(30deg) translateZ(122px);  
}

.py-2  .bit-2 {
  -webkit-transform: rotateX(-30deg) translateZ(-122px);
          transform: rotateX(-30deg) translateZ(-122px);    
}

.py-2  .bit-3 {
  -webkit-transform: rotateZ(-30deg) rotateY(-90deg) translateZ(-122px);
          transform: rotateZ(-30deg) rotateY(-90deg) translateZ(-122px);
}

.py-2  .bit-4 {
  -webkit-transform:  rotateZ(30deg) rotateY(90deg) translateZ(-122px);
          transform:  rotateZ(30deg) rotateY(90deg) translateZ(-122px);
}

.py-2 .bit-5 {
  position: absolute;
  background: #fe8c1c;
  width: 140px;
  height: 140px;
  z-index: 10;
  -webkit-transform: rotateX(90deg) translateX(75px) translateY(0px) translateZ(121px);
          transform: rotateX(90deg) translateX(75px) translateY(0px) translateZ(121px);
}
/* --------------------- */
.py-3 .bit {
  width: 200px;
  border-right: 75px solid transparent;
  border-left: 75px solid transparent;
}

.py-3 .bit-1 {
  border-bottom: 150px solid #00908a;
}
.py-3 .bit-2,
.py-3 .bit-3,
.py-3 .bit-4 {
  border-bottom: 150px solid #00b3ac;
}
.py-3  .bit-1 {
  -webkit-transform: rotateX(30deg) translateZ(158px);
          transform: rotateX(30deg) translateZ(158px);  
}

.py-3  .bit-2 {
  -webkit-transform: rotateX(-30deg) translateZ(-158px);
          transform: rotateX(-30deg) translateZ(-158px);    
}

.py-3  .bit-3 {
  -webkit-transform: rotateZ(-30deg) rotateY(-90deg) translateZ(-158px);
          transform: rotateZ(-30deg) rotateY(-90deg) translateZ(-158px);
}

.py-3  .bit-4 {
  -webkit-transform:  rotateZ(30deg) rotateY(90deg) translateZ(-158px);
          transform:  rotateZ(30deg) rotateY(90deg) translateZ(-158px);
}
.py-3 .bit-5 {
  position: absolute;
  background: #00908a;
  width: 200px;
  height: 200px;
  z-index: 10;
  -webkit-transform: rotateX(90deg) translateX(75px) translateY(0px) translateZ(169px);
          transform: rotateX(90deg) translateX(75px) translateY(0px) translateZ(169px);
}
.py-3 .bit-6 {
  position: absolute;
    background: rgba(51, 51, 51, .01);
    opacity: 1;
    width: 355px;
    height: 355px;
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.17), inset 0px 0px 65px rgba(0, 0, 0, 0.17);
    z-index: 10;
    -webkit-transform: rotateX(90deg) translateX(0px) translateY(0px) translateZ(107px);
            transform: rotateX(90deg) translateX(0px) translateY(0px) translateZ(107px);
}
span {
  display: block;
  width: 100%;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 3rem;
  -webkit-transform: rotateY(180deg) translateY(100%);
          transform: rotateY(180deg) translateY(100%);
}

.bit-1 span {
  -webkit-transform: rotateY(0deg) translateY(100%);
          transform: rotateY(0deg) translateY(100%);
}

.py-1 span {
  line-height: 5rem;
  -webkit-transform: rotateY(180deg) translateY(100%) translateX(-2.5rem);
          transform: rotateY(180deg) translateY(100%) translateX(-2.5rem);
}
.py-1 .bit-1 span {
  -webkit-transform: rotateY(0deg) translateY(100%) translateX(-.5rem);
          transform: rotateY(0deg) translateY(100%) translateX(-.5rem);
}
</style>