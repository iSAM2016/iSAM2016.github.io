<style lang = "sass">
  

.breadcrumb {
    padding: 0px 15px;
  }
      

     
  
</style>
<template>
   <ol class="breadcrumb">
  <li>
    <a href="#">Home</a>
  </li>
  <li>
    <a href="#">2013</a>
  </li>
  <li class="active">十一月</li>
</ol>

</template>
<script>

/*import FersonalInfor from './personalInforTitle.vue'
import MyDataBox from './data.vue'*/

  /*export default {
    components: { 
        personalInfor:FersonalInfor,
        myDataBox: MyDataBox
          },
    ready() {
        this.$http.get('http://localhost:8888/time')
          .then(function(ret) {
            this.totalTime = ret.data.time;
          })
          .then(function(err) {
            console.log(err);
          })
    },
    data () {
      return {
        totalTime: 0
      }
    },
    events: {
      timeUpdate (timeEntry) {
        console.log(timeEntry);
        this.totalTime += parseFloat(timeEntry.totalTime)
      },
      deleteTime (timeEntry) {
        this.totalTime -= parseFloat(timeEntry.totalTime)
      }
    }
  }*/
</script>
