<template>
  <div id="monitoring">
    <p>
      水智星无人船搭载多参数水质传感器实施移动式水质检测，对检测出的数据进行经纬度坐标定位并生成年、月、日报表，时间精确到秒。便于查阅、对比、数据分析。相较传统抽样式检测优势在于水样未经过离心，数据量更为庞大，精确时间与精确坐标定位。检测结果通过数据大屏可一目了然。
    </p><br>
    <p>点击图片查看详情：</p>
    <div id="pic">
      <div class="pic-1"><img v-image-preview src="@/assets/img/地点.png" height="250px" align="left" >
      <img v-image-preview src="@/assets/img/时间.png"  height="250px" width="300px" ></div>
      <div class="pic-2"><img v-image-preview src="@/assets/img/综合水质热力图.png"  height="250px" width="300px" align="right"></div>
      <img v-image-preview src="@/assets/img/水质检测走势图.png" height="135px">
    </div>
  </div>

</template>

<script>
export default {
name: "Software_monitoring"
}
</script>

<style scoped>
.pic-1{
  float:left;
}
.pic-2{
  float:left;
}

</style>
