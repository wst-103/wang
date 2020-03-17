<template>
  <div class="dlkjj">电力看产业
    <p v-for="(i,index) in list" :key="index">{{i}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["王法", "贺莹", "张雪莉", "郭萍萍"],
      list:[],
      timer:null,
      a:0
    };
  },
  methods:{
    change(){
      this.list.push(this.arr[0]);
       var len = this.arr.length;
        console.log(len);
        console.log(this.list)
      this.timer = setInterval(()=>{
        this.list = []
        this.list.push(this.arr[this.a]);
        if(this.a < 3){
           this.a = this.a+1
          //  console.log(this.a);
        }else{
          this.a = 0
          console.log(this.a);
        }
      },3000)
    },
  },
  created(){
    this.change()
  }
};
</script>

<style scoped>
</style>