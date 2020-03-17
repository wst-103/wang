<template>
  <div class="dlkjj">
      企业复产复工
      <div class="xia" style="width:150px">
      <p style="background:red;">下拉</p>
      <div class="a">zzzz</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: [
        // require("@/assets/背水.jpg"),
        // require("@/assets/大海.jpg"),
        // require("@/assets/城市.jpg"),
        // require("@/assets/桥.jpg")
      ],
      pic: [],
      number: 1,
      timer:null,
    };
  },
  mounted() {
    this.pic.push(this.img.slice(0, 1));
    this.time();
  },
  methods: {
    time() {
      this.timer = setInterval(this.right, 2000);
      // console.log("sda");
    },
    left() {
      if (this.number == 0) {
        this.number = 3;
      } else {
        this.number = this.number - 1;
      }
    },
    right() {
      if (this.number == 3) {
        this.number = 0;
      } else {
        this.number = this.number + 1;
      }
    },
    enter(){
       clearInterval(this.timer)
    },
    leave(){
      this.time()
    }
  }
};
</script>

<style scoped>
.a{
  width: 50px;
  height: 100px;
  border: 1px solid black;
  display: none;
  transition: all 0.5s;
}
.xia:hover .a {
  display: block;
  color: aqua;
}
</style>