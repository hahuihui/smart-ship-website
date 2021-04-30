<template>
  <div id="NewsInformation">
    <div class="container">
      <div class="container text-center">
        <h3>新闻动态</h3>
        <p style="color:#b2b2b2">Company News</p>
      </div>
      <div class="nav container text-center">
        <a
          href="javascript:;"
          @click="currIndex = 0"
          :class="currIndex == 0 ? 'active' : ''"
          >公司新闻</a
        >
        <!-- <a
          href="javascript:;"
          @click="currIndex = 1"
          :class="currIndex == 1 ? 'active' : ''"
          >行业动态</a
        > -->
      </div>
      <ul class="news-container container-fuild" v-if="currIndex == 0">
        <li
          v-for="(item, index) in newsList"
          :key="index"
          class="wow fadeIn"
          @click="toNewDetail(item)"
        >
          <div class="content">
            <p>{{ item.title }}</p>
            <img :src="item.coverImg" class="content-img" />
          </div>
          <div class="time">
            <p style="font-size:16px">
              {{ dateFormat("YYYY-mm-dd HH:MM", item.cTime) }}
            </p>
          </div>
          <div class="circle">
            <img src="../assets/img/circle.png" />
            <i class="line center-block"></i>
          </div>
        </li>
      </ul>
      <!-- <ul class="news-container container-fuild" v-if="currIndex == 1">
        <li
          v-for="(item, index) in industryTrendsList"
          :key="index"
          class="wow fadeIn"
          @click="toNewDetail(item)"
        >
          <div class="content">
            <p>{{ item.title }}</p>
            <p>{{ item.introduce }}</p>
          </div>
          <div class="time">
            <p>{{ item.date }}</p>
            <span>{{ item.year }}</span>
          </div>
          <div class="circle">
            <img src="../assets/img/circle.png" />
            <i class="line center-block"></i>
          </div>
        </li>
      </ul> -->
      <div class="contaianer-fuild text-center more">
        <i class="glyphicon glyphicon-th"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
import config from "../config/config";
export default {
  name: "NewsInformation",
  data() {
    return {
      currIndex: 0,
      newsList: []
      //   industryTrendsList: [
      //     {
      //       id: "001",
      //       title: "震惊！某某公司竟然研发了xxx科技系统！",
      //       introduce: "大家快乐围观啊。",
      //       date: "07-22",
      //       year: "2020"
      //     }
      //   ]
    };
  },
  mounted() {
    var wow = new WOW();
    wow.init();
    this.handleLogin();
  },
  methods: {
    /** 前往新闻详情页面 */
    toNewDetail(item) {
      let route = {
        name: "newsinformationdetail",
        params: {
          id: item.id
        }
      };
      this.$router.push(route);
    },
    handleLogin: function() {
      let _this = this;
      let url = config.ROOT_API_URL + "/web/news_list/";
      this.$axios
        .get(url)
        .then(function(res) {
          console.log(res.data.data.list, "111111111111111");
          _this.newsList = res.data.data.list;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 时间选择
    dateFormat(fmt, date) {
      let ret = "";
      date = new Date(date);
      const opt = {
        "Y+": date.getFullYear().toString(), // 年
        "m+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "H+": date.getHours().toString(), // 时
        "M+": date.getMinutes().toString(), // 分
        "S+": date.getSeconds().toString() // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
      };
      for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
          fmt = fmt.replace(
            ret[1],
            ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
          );
        }
      }
      return fmt;
    }
  }
};
</script>
<style scoped>
#NewsInformation {
  min-height: 564px;
}
.nav {
  margin: 20px 0;
}
.nav > a {
  display: inline-block;
  text-decoration: none;
  width: 120px;
  height: 45px;
  line-height: 45px;
  color: #333;
  border: 1px solid #333;
}
.nav > a.active {
  color: #1e73be;
  border-color: #1e73be;
}
.nav > a:hover {
  color: #1e73be;
  border-color: #1e73be;
}
.news-container {
  overflow: hidden;
  margin-bottom: 0;
}
.news-container > li {
  width: 55.6%;
  height: 120px;
  float: left;
  color: #333;
  text-align: right;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
}
.news-container > li:hover {
  color: #1e73be;
  border: 1px solid #1e73be;
  cursor: pointer;
}
.news-container > li:nth-of-type(2n) {
  float: right;
  text-align: left;
}
.news-container > li > .content {
  width: 60%;
  float: left;
  padding: 15px 0;
}
.news-container > li > .content > p {
  margin-right: 15px;
  font-size: 16px;
}
.news-container > li > .time {
  width: 20%;
  float: left;
  padding: 10px 0;
}
.news-container > li > .time > p {
  font-size: 30px;
  margin: 5px 0;
}
.news-container > li > .circle {
  width: 20%;
  height: 100%;
  float: left;
  position: relative;
}
.news-container > li > .circle > img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 20px;
  height: 20px;
}
.news-container > li > .circle > i {
  display: block;
  width: 1px;
  height: 100%;
  background: #707070;
}
.news-container > li:nth-of-type(2n) > .content {
  float: right;
}
.news-container > li:nth-of-type(2n) > .time {
  float: right;
}
.news-container > li:nth-of-type(2n) > .circle {
  float: right;
}
.news-container > li:nth-of-type(1) > .circle > i {
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}
.more {
  font-size: 25px;
  color: #707070;
}
.more > i {
  cursor: pointer;
}
.content-img {
  width: 50px;
  height: 50px;
  /* float: right; */
  margin-left: 160px;
}
@media screen and (max-width: 767px) {
  .news-container > li {
    width: 100%;
  }
  .news-container > li > .content {
    width: 70%;
    text-align: left;
    float: right;
  }
  .news-container > li > .time {
    /* width: 30%; */
    text-align: left;
    float: right;
  }
  .news-container > li > .circle {
    display: none;
  }
}
</style>
