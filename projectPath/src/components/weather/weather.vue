<template>
    <div class="weather">
      <x-header :right-options="{showMore:true}" @on-click-more="showMenus = true">{{msg}}</x-header>


      <!--底部弹出选择-->
      <div v-transfer-dom>
        <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
      </div>

      <!--折线图-->
      <v-chart :data="data">
        <v-scale x type="timeCat" mask="DD" :tick-count="data.length" />
        <v-scale y :min="0" alias="日均温度" :tick-count="5" />
        <v-point
          :style="{
          stroke: '#fff',
          lineWidth: 1
        }"
          shape="smooth" />
        <v-line shape="smooth" />
      </v-chart>

      <!--饼状百分比-->
      <div class="vux-circle-demo">
        <br>
        <div style="width:150px;height:150px;">
          <x-circle
            :percent="percent"
            :stroke-width="5"
            stroke-color="#04BE02">
            <span>{{ percent }}%</span>
          </x-circle>
        </div>

        <div class="circle-demo-range">
          <range v-model="percent" :min="0" :max="100"></range>
        </div>

        <div style="width:150px;height:150px;">
          <x-circle
            :percent="percent"
            :stroke-width="5"
            stroke-color="#04BE02"
            anticlockwise>
            <span>{{ percent }}%</span>
          </x-circle>
        </div>
        <!--<h4>{{ $t('anticlockwise') }}</h4>-->
        <br>
      </div>
    </div>
</template>
<i18n>
  anticlockwise:
  zh-CN: 逆时针
</i18n>
<script>
  import { XHeader, Actionsheet, TransferDom, VChart, VLine, VPoint, VScale, VTooltip, XCircle, Range, Icon} from 'vux'
    export default {
      directives: {
        TransferDom
      },
      name: "weather",
      components:{
          XHeader,
          Actionsheet,
          TransferDom,
          VChart,
          VLine,
          VPoint,
          VScale,
          VTooltip,
          XCircle,
          Range,
          Icon
      },
      data(){
        return{
          msg:'天气预报',
          showMenus:false,
          menus: {
            menu1: '拍照',
            menu2: '从相片中选择'
          },
          percent: 50,
          data: [
            { time: '2016-08-08 00:00:00', tem: 10 },
            { time: '2016-08-08 00:10:00', tem: 22 },
            { time: '2016-08-08 00:30:00', tem: 20 },
            { time: '2016-08-09 00:35:00', tem: 26 },
            { time: '2016-08-09 01:00:00', tem: 20 },
            { time: '2016-08-09 01:20:00', tem: 26 },
            { time: '2016-08-10 01:40:00', tem: 28 },
            { time: '2016-08-10 02:00:00', tem: 20 },
            { time: '2016-08-10 02:20:00', tem: 18 }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
