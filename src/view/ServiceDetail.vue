<template>
  <div id="ServiceDetail">
    <div class="banner container-fuild text-center">相关服务</div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3" id="myScrollspy">
          <ul class="nav nav-tabs nav-stacked center-block" id="myNav">
            <p>特色服务</p>
            <li
              :class="item.id==id?'active':''"
              v-for="(item,index) in serviceNavList"
              :key="index"
            >
              <a :href="'#'+item.id">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9 content  wow zoomIn">
          <div class="content-block" v-for="(item,index) in serviceContentList" :key="index">
            <h2 :id="item.id">
              {{item.title}}
              <small>/ {{item.eng_title}}</small>
            </h2>
            <div v-html="item.content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "ServiceDetail",
  data() {
    return {
      id: "section-1",
      serviceNavList: [
        {
          id: "section-1",
          title: "智能识别"
        },
        {
          id: "section-2",
          title: "智能打捞"
        },
        {
          id: "section-3",
          title: "水下探测及测量"
        },
        {
          id: "section-4",
          title: "语音交互"
        },
        {
          id: "section-5",
          title: "综合水质识别系统"
        }
      ],
      serviceContentList: [
        {
          id: "section-1",
          title: "智能识别",
          eng_title: "River intelligent visual recognition Services",
          content:
            "<p>“水智星”具有障碍、航道、行为、垃圾识别、热成像活体识别、落水、游泳识别、非法活动行为识别、跳河自杀报警识别的功能。</p><h3>无人化智能识别高效体现（视频）</h3><p>河道及岸边一网打尽</p>"
        },
        {
          id: "section-2",
          title: "智能打捞",
          eng_title: "Intelligent salvage of floating objects Services",
          content:
            "<p>通过采集路径、规划航线、智能识别、GPS定位、角度计算等多通道技术融合。利用多种不同的打捞装置对水面漂浮垃圾进行智能打捞，实现常态化水面无人保洁，最长续航可达32小时。</p><h3>无锡太湖蓝藻打捞现场（视频）</h3><p>打捞蓝藻含水率在 60%，处于全国领 先水平。 为蓝藻末端处理降 低大量成本</p>"
        },
        {
          id: "section-3",
          title: "水下探测及测量",
          eng_title: "Underwater detection and measurement",
          content:
            "<p>采用多波束探测系统跟测扫声呐系统，将采集的数据通过内业处理，排查分析后由经纬度坐标定位及正射影像图展示暗管、鱼篓等异常物体的精确位置，方便有关部门及时处理和整治。</p>" +
            "<h3>水下探测及测量（视频）</h3>"


        },
        {
          id: "section-4",
          title: "语音交互",
          eng_title: "Voice interaction",
          content:
            "<p>配合智能识别功能对非法行为进行语音警告、语音驱赶、并关联水智星APP向区域河长报警。还可根据需求添加不同语音包，如介绍景区亮点、宣传环保、安全意识、与游客进行语音互动等。</p><h3>侧扫声呐扫测水下地形成像案例（视频）</h3><p>暗管排查、鱼篓排查、障碍物排查、坐标锁定</p>"
        },
        {
          id: "section-5",
          title: "综合水质识别系统",
          eng_title: "Integrated water quality identification system",
          content:
            "<p>水智星无人船搭载多参数水质传感器实施移动式水质检测，对检测出的数据进行经纬度坐标定位并生成年、月、日报表，时间精确到秒。便于查阅、对比、数据分析。相较传统抽样式检测优势在于水样未经过离心，数据量更为庞大，精确时间与精确坐标定位，检测结果通过数据大屏可一目了然。</p>"
        }
      ]
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    var top = document.getElementById(this.id).offsetTop;
    $(window).scrollTop(top + 300);
    $("#myNav").affix({
      offset: {
        top: 300
      }
    });
    var wow = new WOW();
    wow.init();
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
ul.nav-tabs {
  width: 200px;
  margin-top: 40px;
  border-radius: 4px;
  background: #fff;
  z-index: 99999;
  border: 1px solid #474747;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.067);
}
ul.nav-tabs li {
  text-align: center;
  margin: 0;
  border-top: 1px solid #474747;
}
ul.nav-tabs p {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background: #474747;
  margin: 0;
  padding: 10px 0;
}
ul.nav-tabs li:first-child {
  border-top: none;
}
ul.nav-tabs li a {
  margin: 0;
  padding: 8px 16px;
  border-radius: 0;
}
ul.nav-tabs li.active a,
ul.nav-tabs li.active a:hover {
  color: #fff;
  background: #474747;
  border: 1px solid #474747;
}
ul.nav-tabs li:first-child a {
  border-radius: 4px 4px 0 0;
}
ul.nav-tabs li:last-child a {
  border-radius: 0 0 4px 4px;
}
ul.nav-tabs.affix {
  top: 30px;
}
.content-block {
  margin: 50px 0;
}
.content-block > h2 {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
}.pic-1{
   float:left;
 }
.pic-2{
  float:left;
}
</style>
