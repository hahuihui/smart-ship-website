<template>
  <div id="companyhonor">
    <div class="banner container-fuild text-center">关于我们</div>
    <div class="container text-center">
      <h3>我们的荣誉</h3>
      <p style="color:#b2b2b2">Patent Qualification Honors</p>
    </div>
    <div class="container">
      <div class="companyhonor-container row">
        <div class="companyhonor-item col-xs-12 col-sm-6 col-md-3 wow slideInUp"
             v-for="(item,index) in companyhonorList" :key="index" @click="companyhonorClick(item.id)">
          <div class="companyhonor-item-wrapper">
            <div class="companyhonor-item-top">
              <h4>{{item.title}}</h4>
              <i></i>
              <p>{{item.eng_title}}</p>
            </div>
            <div class="companyhonor-item-img">
              <img :src="item.img" alt="证书">
            </div>
            <div class="companyhonor-item-border"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
  name: 'CompanyHonor',
  data(){
    return{
      companyhonorList: [
        {
          id: 'section-1',
          title: 'ISO9000等三份证书',
          eng_title: 'ISO9000 and other three certificates',
          img: require('@/assets/img/companyhonor1.png'),

        },{
          id: 'section-2',
          title: '船舶货物运输舱结构',
          eng_title: 'The cabin structure',
          img: require('@/assets/img/companyhonor2.png')
        },{
          id: 'section-3',
          title: '船舶货物运输舱结构及其卸料方法',
          eng_title: 'Cabin structure and discharging method',
          img: require('@/assets/img/companyhonor3.png')
        },{
          id: 'section-4',
          title: '荣誉证书',
          eng_title: 'Honorary certificate',
          img: require('@/assets/img/companyhonor4.png')
        },{
          id: 'section-5',
          title: '多形态安全救生船',
          eng_title: 'Multi-form safety boat',
          img: require('@/assets/img/companyhonor5.png')
        },{
          id: 'section-6',
          title: '环保型塑料回收加工破碎装置',
          eng_title: 'Processing and crushing plant',
          img: require('@/assets/img/companyhonor6.png')
        },{
          id: 'section-7',
          title: '对不同厚度风叶进行清洁的清洁组件',
          eng_title: 'Clean the component',
          img: require('@/assets/img/companyhonor7.png')
        },{
          id: 'section-8',
          title: '污水处理用水渣分离装置',
          eng_title: 'Water and slag separation plant',
          img: require('@/assets/img/companyhonor8.png')
        }
      ]
    }
  },
  mounted(){
    var wow = new WOW();
    wow.init();
  },
  methods:{
    ServiceClick(id){
      this.$router.push({
        name: 'servicedetail',
        params: {
          id: id
        }
      })
    }
  }
}
</script>
<style scoped>
.banner{
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url('../assets/img/banner1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.companyhonor-container{
  padding: 30px 50px;
}
.companyhonor-item{
  margin-bottom: 50px;
}
.companyhonor-item-wrapper{
  cursor: pointer;
  background: rgba(244,244,244,1);
  overflow: hidden;
  position: relative;
}
.companyhonor-item-top{
  width: 100%;
  height: 120px;
  padding: 30px;
  text-align: center;
}
.companyhonor-item-top>i{
  display: inline-block;
  width: 25px;
  height: 2px;
  background: #28f;
}
.companyhonor-item-top>p{
  color: #b2b2b2;
  opacity: 0;
  transform: translateY(10px);
  transition: all .5s ease;
}
.companyhonor-item-img{
  width: 100%;
  overflow: hidden;
}
.companyhonor-item-img img{
  width: 100%;
  transition: all 0.5s ease;
}
.companyhonor-item-border{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 9999999;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  border: 1px solid #000;
  opacity: 0;
}
.companyhonor-item-wrapper:hover .companyhonor-item-top > i{
  opacity: 0;
}
.companyhonor-item-wrapper:hover .companyhonor-item-top > p{
  opacity: 1;
  transform: translateY(-10px);
}
.companyhonor-item-wrapper:hover .companyhonor-item-img > img{
  transform: scale(1.1,1.1);
}
.companyhonor-item-wrapper:hover > .companyhonor-item-border{
  opacity: 1;
  width: 90%;
  height: 90%;
}
</style>

