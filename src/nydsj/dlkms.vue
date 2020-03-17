<template>
  <div class="dlkjj">
      电力看民生
      <button @click="btn">点击</button>
      <input type="file" hidden ref="input" @change="btnChange">
      <img ref="img" src="" alt="">
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

</style>