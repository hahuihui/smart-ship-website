<template>
  <div id="ContactUs">
    <div class="banner container-fuild text-center">联系我们</div>
    <div class="container">
      <div class="container-fuild ContactUs-container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label for="name" class="col-sm-2 control-label zy-required"
                  >姓名</label
                >
                <div class="col-sm-10 col-xs-12">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="请输入名字"
                    v-model="form.name"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="col-sm-2 control-label">邮箱</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="请输入邮箱"
                    v-model="form.email"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="phone" class="col-sm-2 control-label zy-required"
                  >电话</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    placeholder="请输入电话"
                    v-model="form.phone"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="content" class="col-sm-2 control-label zy-required"
                  >内容</label
                >
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    id="content"
                    rows="8"
                    placeholder="请输入内容"
                    v-model="form.content"
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button
                    type="submit"
                    class="btn btn-default btn-block"
                    @click="subContent"
                  >
                    提交
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <div id="map" class="wow zoomIn"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
import BMap from "BMap";
import config from "@/config";
import configs from "../config/config";
export default {
  name: "ContactUs",
  data() {
    return {
      BDMapInfo: config.BDMapInfo,
      form: {
        name: null,
        phone: null,
        emial: null,
        content: null
      }
    };
  },
  mounted() {
    var map = new BMap.Map("map"); // 创建地图实例
    var point = new BMap.Point(
      this.BDMapInfo.longitude,
      this.BDMapInfo.latitude
    ); // 创建点坐标
    map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    var opts = {
      width: 50, // 信息窗口宽度
      height: 10, // 信息窗口高度
      title: this.BDMapInfo.title // 信息窗口标题
    };
    var infoWindow = new BMap.InfoWindow(this.BDMapInfo.address, opts); // 创建信息窗口对象
    map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
    var wow = new WOW();
    wow.init();
  },
  methods: {
    /** 验证内容 */
    validContent() {
      if (!this.form.name) {
        this.$Message.error("请输入姓名");
        return false;
      }
      if (!this.form.phone) {
        this.$Message.error("请输入联系电话");
        return false;
      }
      if (!this.form.content) {
        this.$Message.error("请输入内容");
        return false;
      }
      return true;
    },
    /** 提交内容 */
    subContent() {
      if (this.validContent()) {
        let url = configs.ROOT_API_URL + "/admin/contact_us/";
        this.$http
          .post(url, {
            name: this.form.name,
            mobile: this.form.phone,
            email: this.form.email,
            content: this.form.content
          })
          .then(() => {
            this.form.name = '',
            this.form.phone = '',
            this.form.email = '',
            this.form.content = '',
            this.$Message.success("感谢您的提交，我们会尽快与您联系");
          });
      }
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
  background-image: url("../assets/img/banner_1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.ContactUs-container {
  padding: 80px 0;
  transition: all ease 0.5s;
  box-sizing: border-box;
}
#map {
  width: 100%;
  height: 365px;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
@media screen and (max-width: 997px) {
  .ContactUs-container {
    padding: 20px 0;
  }
}
.zy-required:before {
  content: "*";
  color: red;
}
</style>
