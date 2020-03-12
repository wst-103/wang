<template>
  <div>
    <div v-for="(i,index) in list" :key="index">
      <p @mouseenter="enter(i.appId)">{{i.appName}}</p>
    </div>
    <div class="a">
      <p></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: null,
      listData: null
    };
  },
  methods: {
    get() {
      this.$siAxios({
        methods: "get",
        url: "http://www.restcloud.cn:8080/restcloud/rest/market/apps?jd"
      }).then(res => {
        // console.log(res);
        this.list = res.data;
      });
    },
    getList(id) {
      this.$siAxios({
        methods: "get",
        url:
          "http://www.restcloud.cn:8080/restcloud/rest/market/apps/categorys?appId=" +
          id
      }).then(res => {
        console.log(res);
        this.list = res.data;
      });
    },
    enter(id) {
      this.getList(id);
    }
  },
  created() {
    this.get();
  },
  mounted(){
    let a = window.sessionStorage.getItem("name")
  }
};
</script>

<style scoped>
p {
  margin: 10px;
  width: 90px;
}
.a {
  width: 300px;
  height: 200px;
  border: 1px solid black;
}
</style>