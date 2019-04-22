<template>
  <div @click="clickHandle" class="container">
   <p>面试信息</p>
   <ul>
     <li>
       <label for="">公司名称</label>
       <input type="text" placeholder="请输入公司名称">
     </li>
     <li>
       <label for="">公司电话</label>
       <input type="number" placeholder="请输入面试联系人电话">
     </li>
     <li>
       <label for="">面试时间</label>
       <picker
          mode="multiSelector"
          >
          <view class="date">
            {{dateShow}}
          </view>
       </picker>
     </li>
     <li>
       <label for="">面试地址</label>
       <input type="text" disabled placeholder="请选择面试地址" @tap="goSearch">
     </li>
   </ul>
   <p>备注信息</p>
   <textarea type="text" placeholder="备注信息(可选，100个字以内)"></textarea>
   <button>确认</button>
  </div>
</template>

<script>


export default {
  data () {
    return {
       
    }
  },

  components: {
  },

  methods: {
    //去搜索地址页面
    goSearch(){
      wx.navigateTo({
        url:'/pages/search/main'
      })
    }
  },

  computed:{

  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.container{
  font-size: 30rpx;
}
p {
  font-size: 34rpx;
  padding: 15rpx 0 15rpx 30rpx;
  background: #f6f6f6;
}
ul {
  border-top: 1rpx solid #eee;
  border-bottom: 1rpx solid #eee;
  background: #fff;
}
li {
  width: 100%;
  height: 88rpx;
  padding-left: 30rpx;
  box-sizing: border-box;
  border-bottom: 1rpx solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
li:last-child {
  border: none;
}
li label {
  color: #666;
  width: 170rpx;
 }
input,
picker {
  flex: 1;
  color: #333;
  height: 88rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 30rpx;
  box-sizing: border-box;
}
textarea {
  width: 690rpx;
  height: 200rpx;
  margin: 30rpx;
  padding: 10rpx;
  box-sizing: border-box;
  border: 1rpx solid #c0c0c0;
  border-radius: 5rpx;
  font-size: 30rpx;
  color: #333;
}
button.disabled {
  background: #999;
}
.date {
  width: 100%;
  line-height: 88rpx;
}
</style>
