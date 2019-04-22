<template>
  <div class="container">
    <header class="header">
      <span>北京</span>
      <input type="text" placeholder="请输入面试地址">
    </header>
  </div>
</template>

<script>


export default {
  components: {
   
  },

  data () {
    return {
    
    }
  },

  created () {
    
  }
}
</script>

<style scoped>
.header {
  height: 88rpx;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.header span {
  width: 26%;
  text-align: center;
  box-sizing: border-box;
  border-right: 1px solid #eee;
}
.header input {
  padding: 0 20rpx;
}
</style>
