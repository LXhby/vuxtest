<template>
  <div>
    <swiper :aspect-ratio="300/800" auto loop dots-position="center">
      <swiper-item class="swiper-demo-img" v-for="(item, index) in list" :key="index"><img :src="item"></swiper-item>
    </swiper>
    <grid :show-lr-borders="true">
      <grid-item :label="item.name" v-for="(item,index) in gridlist" :key="index" :link="item.link">
        <img slot="icon" :src="item.picurl">
      </grid-item>
    </grid>
  </div>
</template>

<script>

import {Swiper,
  SwiperItem, Grid, GridItem} from 'vux'
export default {
  name:'index',
  components: {
    Swiper,
    SwiperItem,
    Grid, GridItem
  },
  data() {
    return {
      list: [
        'http://img0.imgtn.bdimg.com/it/u=3765469673,3563682869&fm=15&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=1824072590,826263800&fm=26&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=2976337650,1081862048&fm=26&gp=0.jpg'
      ],
      gridlist: [
        {
          name: '天气预报',
          picurl: '/src/assets/images/tianqi.png',
          link: 'weather'
        },
        {
          name: '快递查询',
          picurl: '/src/assets/images/kuaidi.png',
          link: 'kuaidi'
        },
        {
          name: '图片预览',
          picurl: '/src/assets/images/pic.png',
          link: 'pic'
        },
        {
          name: '火车票查询',
          picurl: '/src/assets/images/huoche.png',
          link: '/huoche'
        }
      ]

    }
  }
}
</script>

<style>

</style>
