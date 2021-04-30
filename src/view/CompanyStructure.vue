<template>

  <div id="CompanyStructure">
    <div class="banner container-fuild text-center">关于我们</div>
    <div class="container">
      <div class="row CompanyStructure-container">
        <img class="img-responsive center-block" src="@/assets/img/structure.png">
      </div>
    </div>
  </div>

</template>

<script>
import { WOW } from 'wowjs';
export default {
  name: "CompanyStructure",
  data(){
    return{

    }
  },
  mounted(){
    var wow = new WOW();
    wow.init();
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
.row{
  margin-right: 0;
  margin-left: 0;
}
.CompanyStructure-container{
  padding: 100px 0;
  color: #808080;
  transition: all ease 0.5s;
}
@media screen and (max-width: 997px){
  .CompanyStructure-container{
    padding: 10px 0;
    color: #808080;
  }
}
</style>
