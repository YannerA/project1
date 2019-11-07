<template>
  <div>
    <!--显示数据-->
      <p>{{jianjie}}</p>
      <el-backtop :bottom="100"></el-backtop>
  </div>
</template>

<script>
export default {
  //接收数据
    props:['jianjie']
}
</script>

<style scoped lang="stylus">
.bottom {
  height: rem(145);
  background: #fff;
  padding: rem(12);
  margin-top: rem(10);

  p {
    line-height: rem(25);
    text-indent: 2em;
    color: #999;
    margin-bottom: #fff;
    letter-spacing: 2px;
  }
}

</style>