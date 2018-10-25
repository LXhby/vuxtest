<template>
    <div class="houche">
      <x-header>{{msg}}</x-header>
    </div>
</template>

<script>
  import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
  export default {
    name: "huoche",
    components:{
      XHeader
    },
    data(){
      return{
        msg:'火车票查询'
      }
    }

  }
</script>

<style scoped>

</style>
