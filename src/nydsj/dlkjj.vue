<template>
  <div class="dlkjj">
    <p>我的</p>
    <div class="section3">
      <div class="u_fr">
        <div class="ui_base u_p3d">
          <div class="base u_p3d">
            <div class="ball_base" v-for="(i,index) in shu" :key="index">
              <div class="ball"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      shu:13
    }
  },
  computed:{
    tr(){
      return 25
    }
  }
};
</script>

<style scoped>
.dlkjj {
  position: relative;
}
.ball{
  width: 40px;
  height: 40px;
  background: red;
  border-radius: 50%;
}
.setion3{
   width: 1000px;
    height: 680px;
    margin: 40px auto 0px;
}
.u_p3d {
    transform-style: preserve-3d;
}
.section3 .base {
    transform: rotateX(80deg) rotateY(-10deg);
    position: relative;
    width: 350px;
    height: 350px;
    backface-visibility: hidden;
    top: -38px;
    left: 40px;
}
.section3 .ball_base {
    transform-origin: 225px 0px;
    position: absolute;
    top: 175px;
    left: -50px;
    width: 225px;
    height: 127px
}
.ball_base{
  transform: rotateX(-90deg) translateY(-70px)
}
</style>