<template>
  <div id="content">
    <Row>
      <i-col span="2">&nbsp;</i-col>
      <i-col span="20">
        <Card>
          <div v-for="(item, index) in newsList" :key="index">
            <div class="title-box">
              <p slot="title" >
                {{ item.title }}
              </p>
              <p>
                <a href="#" slot="extra" @click.prevent="returnBackPage">
                  返回
                </a>
              </p>
            </div>
            <p style="text-align:center;">{{  dateFormat("YYYY-mm-dd HH:MM", item.cTime) }}</p>
            <p>{{ item.content }}</p>
          </div>
        </Card>
      </i-col>
      <i-col span="2">&nbsp;</i-col>
    </Row>
  </div>
</template>
<script>
import config from "../config/config";
export default {
  name: "NewsInformationDetail",
  data() {
    return {
      id: null,
      newsList: []
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.handleLogin();
  },
  methods: {
    /** 返回上一页 */
    returnBackPage() {
      this.$router.go(-1);
    },
    handleLogin: function() {
      let _this = this;
      let url = config.ROOT_API_URL + "/web/news_list/";
      this.$axios
        .get(url)
        .then(function(res) {
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
.title-box{
    display: flex;
    justify-content: space-between;
}
#content {
  min-height: 564px;
  padding-top: 10px;
}
</style>
