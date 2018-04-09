<template>
<div class="Home">
  <div class="banner">
 <img src="../assets/banner.jpg">
 </div>
<div class="about">
<div class="tu">
     <img src="../assets/2.jpg">
     <img src="../assets/3.jpg">
     <img src="../assets/4.jpg">
     <img src="../assets/5.jpg">
</div>
<div class="cd">
<One a="4"></One>
<One a="5"></One>
<One a="6"></One>
</div>


</div>
<Two></Two>

</div>


</template>

<script>
import One from '@/components/One.vue'
import Two from '@/components/Two.vue'
export default {
  name: 'Home',
  components: {
    One,
    Two
  },
   created(){
            this.$http.post('http://localhost:3000',{abc:this.a},{emulateJSON:true}).then(e=>this.arr=e.body)
        },
         data(){
            return {
                arr:[]
            }
        },

}
</script>
<style>
  .banner{
      width:1300px;
      margin:0 auto;
  }
.banner img{
    width:100%;
    height:100%;
}

</style>