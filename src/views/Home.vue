<template>
  <div>
     测试
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      
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
        // console.log(res);
        this.list = res.data;
      });
    },
    erwei() {
      // var a = {
      //   captcha_str: "24243234"
      // };
      // this.$siAxios({
      //   methods: "post",
      //   url: "/api/restapi/eus/v3/captchas",
      //   data: {
      //     captcha_str: "18255163281"
      //   }
      // }).then(res => {
      //   console.log(res);
      // });

      axios.post("/api/restapi/eus/v3/captchas", {
          captcha_str: "24243234"
        })
        .then(res => {
          console.log('res');
        })
    },
    enter(id) {
      this.getList(id);
    }
  },
  created() {
    this.get();
    this.erwei();
  },
  mounted() {
    let a = window.sessionStorage.getItem("name");
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