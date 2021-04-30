<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <img src="@/assets/img/logo_black1.png" alt="logo图" />
    </div>
    <p class="title">{{ config.name }}</p>
    <p class="address_tel_fax">
      <span>地址：{{ config.address }}</span>
      <span>Tel：{{ config.phone }}</span>
      <span>Fax：{{ config.tel }}</span>
    </p>
    <p class="email_wx">
      <span>邮箱：{{ config.email }}</span>
      <span>公司微信号：{{ config.wechat }}</span>
    </p>
    <!-- <p class="copy">
      Copyright &copy; 2020 - 2022 {{ config.keepOnRecordIcp }}
      {{ config.name }}
    </p> -->
  </div>
</template>
<script>
// import config from "../config/config";
export default {
  name: "Footer",
  data() {
    return {
      config: {
        title: "翌明科技",

        /** 公司名称 */
        name: "浙江翌明科技有限公司",
        /** 公司微信 */
        wechat: "GZWjhsmart",
        /** 公司邮箱 */
        email: "feipeng8108@vip.163.com",
        /** 公司手机 */
        phone: "15600039777",
        /** 公司电话 */
        tel: "0577-63775981",
        /** 公司地址 */
        address: "浙江省瑞安市南滨街道八达路88号",
        /** 备案号 */
        keepOnRecordIcp: "沪ICP备18041627号",

        /** 百度地图相关信息 */
        BDMapInfo: {
          longitude: 120.617074,
          latitude: 27.716009,
          title: "翌明科技有限公司",
          address: "浙江省瑞安市南滨街道八达路88号"
        }
      }
    };
  },
  mounted(){
  },
  methods: {
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #474747;
  overflow: hidden;
  text-align: center;
}
.logo {
  width: 250px;
  height: 125px;
  margin: 50px auto 20px;
}
.logo img{
  width: 250px;
  height: 125px;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {
    font-size: 12px;
  }
  .copy {
    font-size: 12px;
    margin: 30px 0 10px;
  }
}
</style>
