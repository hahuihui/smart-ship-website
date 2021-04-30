<template>
  <div id="newsmedia">
    <div class="container">
        <h3>新闻媒体</h3>
        <p style="color:#b2b2b2">News Media</p><br>
        <a href="http://tv.cztv.com/vplay/979632.html" target="_blank">1.全面推进数字化改革打造“重要窗口”：一艘5G无人船监测西湖水域70项数据</a><br><br><br>
        <a href="http://wap.cztv.com/tv/34/1174837.html?play=1" target="_blank">2.我身边的数字化改革：一个大屏管西湖与西溪！杭州打造“全国数字第一景”</a><br><br><br>
        <a href="http://share.jiaxingren.com/?_hgOutLink=news/NewsDetail&id=730238" target="_blank">3.无人水上“清道夫”来了！助力嘉善西塘建设优美水环境</a><br><br><br>
        <a href="https://zj.zjol.com.cn/news.html?id=1519736&from=groupmessage" target="_blank">4.浙江日报头版|衢州5G“智慧河长”来了 一条“无人船”守护万亩湖</a><br><br><br>
        <a href="https://wap.qz123.com/share/Shares.aspx?guid=cf806b26-4b6f-4d09-bda6-a140b1766f71" target="_blank">5.有礼衢州，公众护水！现场看“智慧河长”无人船如何巡河</a><br><br><br>
        <a href="http://share.rabtv.cn/index.php?_hgOutLink=news/NewsDetail&id=30467" target="_blank">6.稀奇！河里来了一艘无人船，V形“大嘴巴”专吃水面垃圾</a><br><br><br>
        <a href="https://mp.weixin.qq.com/s/EAqDYWPecuA6fbJL4HN6BQ" target="_blank">7.【创新浙江】智汇云江 科创瑞安--2020中国·瑞安第二届“双创”大赛圆满落幕</a><br><br><br>
    </div>
  </div>

</template>

<script>
import { WOW } from 'wowjs';
import config from "../config/config";
export default {
name: "NewsMedia",
  data() {
    return {
      currIndex: 0,
      newsList: []
    };
  },
  mounted() {
    var wow = new WOW();
    wow.init();
    this.handleLogin();
  },
  methods: {}
};

</script>

<style scoped>
  #newsmedia {
    min-height: 564px;

}
  .container{
    text-align:center;
    border:1px solid #000000;
    border-radius:20px;
    justify-content: space-between;
  }

</style>
