<template>
  <div class="home">
    <x-header :left-options="{showBack: false}">vux test</x-header>
    <router-view class="body-main"></router-view>
    <tabbar class="bottom-bar">
      <tabbar-item selected link="wechat">
        <img slot="icon" src="./assets/wechat.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot link="news">
        <img slot="icon" src="./assets/news.png">
        <span slot="label">news</span>
      </tabbar-item>
      <tabbar-item link="">
        <img slot="icon" src="./assets/msg.png">
        <span slot="label">message</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="./assets/导航.png">
        <span slot="label">导航</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
  import {XHeader,Tabbar, TabbarItem} from 'vux'
  export default {
    name:'App',
    components: {
      XHeader,
      Tabbar,
      TabbarItem
    }
  }
</script>
<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>
