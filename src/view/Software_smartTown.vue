<template>
  <div id="smartTown">
    <p>
      主要为数据大屏和水质系统建设的管理后台。重点包括人员管理、信息管理、巡河管理、河道管理，清道夫管理，反馈管理，水质管理，地区级联
    </p>
    <p>
      系统的安全主要包括两部分，即系统运行的安全和信息的安全。系统运行的安全是保证系统正常的运行和防止系统被恶意攻击。信息的安全是保证信息的完整性、保密性。
    </p>
    <p>
      功能管理：首页信息统计 人员管理 信息管理 巡河管理 河道管理 清道夫管理 反馈管理 水质管理 地区级联
    </p>

    <p>
      后台地址：<a href="http://admin.yimingkeji.com/" target="_blank"
        >河长制管理后台</a
      >
    </p>
    <p>
      如果您需要申请使用该系统，请<router-link to="/contactus"
        >联系我们</router-link
      >
    </p>
  </div>
</template>
<script>
export default {
  name: "smartTown",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped></style>
