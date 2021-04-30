<template>
    <div id="Software" class="container">
        <div class="row">
            <div id="left" class="col-md-4 col-xs-12">
                <ul class="left-container wow bounceInLeft">
                    <p>软件产品</p>
                    <li v-for="(item,index) in softwareList" :key="index" :class="item.id==id?'active':''" @click="switchTab(item)">
                        {{item.name}}
                    </li>
                </ul>
            </div>
            <div id="right" class="col-md-8 col-xs-12  wow bounceInRight">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
    name: 'Software',
    data(){
        return{
            id: '001',
            softwareList: [
                {
                    id: '001',
                    path: '/software/software_cleaning',
                    name: '智能化水面保洁'
                },
                // {
                //     id: '002',
                //     path: '/software/smartTown',
                //     name: '河长制管理系统'
                // },
                // {
                //     id: '003',
                //     path: '/software/xitong',
                //     name: '水质管理系统'
                // },
                // {
                //     id: '004',
                //     path: '/software/bigData',
                //     name: '智能识别'
                // },
                {
                    id: '002',
                    path: '/software/software_monitoring',
                    name: '综合水质监测'
                },
                {
                    id: '003',
                    path: '/software/software_3D',
                    name: '水下3D扫描'
                },
                // {
                //     id: '007',
                //     path: '/software/smartTown',
                //     name: '暗管排查'
                // }
                {
                  id: '004',
                  path: '/software/software_cruise',
                  name: '智能巡河'
                },
            ]
        }
    },
    mounted() {
        var wow = new WOW();
        wow.init();
    },
    methods: {
        /** 切换tab */
        switchTab(item) {
            this.id = item.id
            let route = {
                path: item.path,
                params: {}
            }
            this.$router.push(route)
        }
    }
}
</script>
<style scoped>
#left{
    margin: 50px 0;
}
.container {
    min-height: 570px;
}
.left-container{
    width: 60%;
    margin: 0 auto;
    border: 1px solid #474747;
    border-radius: 5px;
}
.left-container>p{
    text-align: center;
    line-height: 45px;
    padding: 0;
    margin: 0;
    background: #474747;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
}
.left-container>li {
    text-align: center;
    height: 38px;
    line-height: 38px;
    margin: 0;
    border-top: 1px solid #474747;
    cursor: pointer;
}
.left-container>li>a{
    text-decoration: none;
}
.left-container>li.active,
.left-container>li.active:hover{
    background: #928989;
}
#right{
    padding: 50px 0;
}
@media screen and (max-width: 768px){
    #right{
        padding: 15px;
    }
}
</style>

