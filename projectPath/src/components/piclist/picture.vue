<template>
    <div class="picture">
      <x-header>{{msg}}</x-header>

      <!--图片列表-->
      <div class="img-list">
        <ul class="pic-list">
          <li v-for="(item,index) in picList" :key="index" class="clearFix">
            <a href="">
              <div class="img-show fl">
                <img v-lazy="item.url" alt="">
                <span>{{item.title}}</span>
              </div>
              <div class="img-detail fr">
                <p>{{item.date | convertTime("YYYY年－MM月-DD日")}}</p>
                <span>阅读量：{{item.views}}</span>
                  <rater :value="item.like" :max="6" active-color="#04BE02" class="rate"></rater>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import { XHeader, Rater,Loading} from 'vux'

    export default {
    name:'picture',
      components:{
        XHeader,
        Rater,
        Loading
      },
      data(){
        return{
          msg:'图文列表',
          picList:[],
          like:2
        }
      },
      created(){
        this.$http.get('picture')
          .then(res=>{
            this.picList = res.data;
          })
      }

    }
</script>

<style scoped>
>>> .rate{
  display: block !important;
}
</style>
