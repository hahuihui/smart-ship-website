<template>
  <div id="JobChance">
    <div class="banner container-fuild text-center">工作机会</div>
    <div class="container">
      <div
        class="JobChance-container wow pulse"
        v-for="(item, index) in jobChanceList"
        :key="index"
      >
        <div class="zy-content" v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
import $ from "jquery";
import config from "../config/config";
export default {
  name: "JobChance",
  data() {
    return {
      jobChanceList: [
      ],
      modal: false,
      email: "",
      sendEmail: ""
    };
  },
  mounted() {
    var wow = new WOW();
    wow.init();
    this.handleLogin()
  },
  methods: {
    handleLogin: function() {
      let _this = this;
      let url = config.ROOT_API_URL + "/web/recruitment_list/";
      this.$axios
        .get(url)
        .then(function(res) {
          console.log(res.data.data.list,'111111111111111')
          _this.jobChanceList = res.data.data.list
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banner_2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.JobChance-container {
  margin: 100px;
  padding: 30px;
  transition: all ease 0.5s;
  border: 1px dashed salmon;
}
.JobChance-container h2 {
  color: rgb(255, 102, 19);
  font-weight: bolder;
  text-align: center;
}
.JobChance-container p {
  font-size: 20px;
  color: rgb(255, 102, 19);
  font-weight: 700;
}
.zy-content {
  padding-left: 20px;
  margin-bottom: 10px;
}
.JobChance-container ol {
  list-style-type: decimal;
  padding-left: 30px;
}
.JobChance-container ol > li {
  font-size: 14px;
  line-height: 2.7rem;
}
@media screen and (max-width: 997px) {
  .JobChance-container {
    margin: 20px 0;
    padding: 20px;
    border: 1px dashed salmon;
  }
}
.zy-email {
  color: blue;
  cursor: pointer;
}
</style>
