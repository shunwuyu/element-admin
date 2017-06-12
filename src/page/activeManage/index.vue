<template lang="html">
  <div class="allActive">
    <el-row class="head">
      <el-col :span="18"
       style="padding:20px 0;background:#33CCCC;">
        <el-col :span="8">
          {{totalActiveNum}}<br/>
          <span>活动总数</span>
        </el-col>
        <el-col :span="8">
          {{totalActiveNum}}<br/>
          <span>报名总数</span>
        </el-col>
        <el-col :span="8" style="border:none">
          {{auditNum}}<br>
          <span>待审核</span>
        </el-col>
      </el-col>
    </el-row>
    <el-card class="box-card">
      <h3>活动列表</h3>
      <el-row
      :gutter="20" style="padding:20px 0;"
      type="flex" align="middle">
        <el-col
        style="width:160px;text-align: center;"
        :span="5">
          已选择{{activeNum}}个活动
        </el-col>
        <el-col :span="5" style="width:140px;">
          <el-select
           v-model="currentType"
           placeholder="请选择活动分类">
            <el-option
             v-for="type in types" :value="type">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="13">
          <el-button :plain="true"
          @click.native="handleRemove"
           type="danger">删除</el-button>
         <el-button :plain="true"
         @click.native="handleMoveToTop"
          type="info">置顶</el-button>
        <el-button :plain="true"
        @click.native="handleCopy"
         type="info">复制</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    handleRemove() {

    },
    handleCopy() {},
    handleMoveToTop() {}
  },
  data() {
    return {
      currentType: '全部',
      totalActiveNum: 3,
      auditNum: 15,
      types: ['全部','测试活动','免费活动','收费活动']
    };
  }
}
</script>

<style lang="css">
.allActive > .head > .el-col > .el-col {
    padding: 20px 0;
    border-right: solid 1px #fff;
  }
  .allActive .head {
    text-align: center;
    color: #fff;
    font-size: 30px;
    margin-bottom: 50px;
  }
  .allActive .head span {
    font-size: 16px;
  }
</style>
