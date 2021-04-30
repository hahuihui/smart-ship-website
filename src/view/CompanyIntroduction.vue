<template>
    <div id="CompanyIntroduction">
        <div class="banner container-fuild text-center">关于我们</div>
        <div class="container">
            <div class="row CompanyIntroduction-container">
                <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
                    <img class="img-responsive center-block" src="@/assets/img/about_img.png">
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <h3>浙江翌明智慧科技有限公司</h3>
                    <p class=".text-justify">&emsp;&emsp;浙江翌明智慧科技有限公司成立于 2017 年，是国内领先的人工智能“水 域保洁+数字化治理”整体方案提供商。公司耗资 3 亿，联合多家国内权威机 构，不断创新突破多项核心技术，基于数十项发明专利技术研发了“AI+水面 保洁”智能系统，以满足市场多方面服务需求。</p>
                    <p>
                      &emsp;&emsp;公司历经多年的自主研发，产品不断迭代，以人工智能保洁船——“水 智星”为核心产品载体，基于人机混合智能理论体系和“脑+端”基本思想， 融合了人工智能和人类群体智能，将 5G、物联网、边缘计算和指挥调度技术 相结合，最终实现了具备自主驾驶、人机协同驾驶、遥控驾驶三种工作模式， 通过和指挥中心、智能移动端 APP 相融合，可完成自主巡河、远程在线巡河、 自主作业、人机协同作业等多项任务。同时，通过综合应用数据挖掘、大数 据分析、异构感知数据深度融合等技术，不仅实现了水质探测、污染防控、 夜间安防、非法识别、河道标高预警、航道监控、水面垃圾实时识别及垃圾 智能化打捞，还可以实现趋势预测、突发事件预判，以达到及时预警、综合 防控的目的。“水智星”的出现，让智能科技代替人力手工，从水面到水底 全方位、多维度实现水域系统化治理。
                    </p>
                    <p>
                      &emsp;&emsp;公司以智能化的产品为基础，打造出多样化、定制化、个性化的多种合 作方式，多年来深受政府各级管理部门的喜爱。截止到目前为止，已与全国 50 多个地级市、200 多个县区达成了深度合作，其中包括北京颐和园、杭州 西湖、苏州金鸡湖、天鹅湖、江苏无锡天湖及浙江绍兴灵芝梅山江、浙江嘉 善西塘、浙江衢州、浙江温州平阳等地。
                    </p>
                    <p>
                      &emsp;&emsp;深根水域环境治理五年，公司于 2021 年初将总部搬迁至杭州滨江。自此 公司形成了研发和智能运营在杭州，生产在温州的格局。在未来三年，公司 将斥资 5 亿，致力于改善中国水域环境，为实现健康、生态的中国水域环境 而不断努力。
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
    name: 'CompanyIntroduction',
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
.CompanyIntroduction-container{
    padding: 100px 0;
    color: #808080;
    transition: all ease 0.5s;
}
.CompanyIntroduction-container>div>p{
    font-size: 14px;
    line-height: 2.5rem;
}
@media screen and (max-width: 997px){
    .CompanyIntroduction-container{
    padding: 10px 0;
    color: #808080;
}
}
</style>

