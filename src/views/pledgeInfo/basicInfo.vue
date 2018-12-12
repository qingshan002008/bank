<template>
      <!-- 基本信息段  -->
  <section>
    	<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form ref="basicInfoForm" :model="filters" :inline="true"   >
          <table >
            <tr>
              <td >
                <el-form-item label="合同生效日期"  prop='startDate'>
					        <!-- <el-input v-model="filters.startDate" placeholder="债务人名称"></el-input> -->
                   <el-date-picker
                      v-model="filters.startDate"
                      type="date"
                      placeholder="选择日期"
                      format="yyyy 年 MM 月 dd 日"
                      value-format="yyyy-MM-dd">
                    </el-date-picker>
				        </el-form-item>
              </td>
                <td >
                <el-form-item label="合同到期日期" prop='endDate'>
                   <el-date-picker
                      v-model="filters.endDate"
                      type="date"
                      placeholder="选择日期"
                      format="yyyy 年 MM 月 dd 日"
                      value-format="yyyy-MM-dd">
                    </el-date-picker>
                  </el-form-item>
              </td>
            </tr>
            <tr >
              <td colspan="2" style="text-align:center;">
                <el-form-item>
					        <el-button type="primary" v-on:click="getBasicInfos">查询</el-button>
              </el-form-item>
              <el-form-item>
					        <el-button type="primary" @click="resetForm('basicInfoForm')">重置</el-button>
				      </el-form-item>
              </td>
            </tr>
          </table>
        </el-form>
    	</el-col>
  <el-table :data="basicInfos" highlight-current-row v-loading="listLoading"  style="width: 100%;"  stripe='true'>
      <!-- <el-table-column type="selection" width="55">
			</el-table-column> -->
      <el-table-column prop="type" label="合同类型" width="180">
			</el-table-column>
			<el-table-column prop="money" label="担保金额" width="180" sortable>
			</el-table-column>
			<el-table-column prop="moneyType" label="币种" width="180"  sortable>
			</el-table-column>
			<el-table-column prop="startDate" label="合同生效日期" width="180" sortable>
			</el-table-column>
			<el-table-column prop="endDate" label="合同到期日期" width="180" sortable>
			</el-table-column>
			<el-table-column prop="flag" label="最高担保标志" width="180" sortable>
			</el-table-column>
      <el-table-column prop="state" label="合同状态" min-width="100" sortable>
			</el-table-column>
  </el-table>
  <!--工具条-->
		<el-col :span="24" class="toolbar">
			<!-- <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button> -->
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="10" :total="total" style="float:right;">
			</el-pagination>
		</el-col>
  </section>
</template>
<script>
import {getContractList,getBasicInfoList} from '../../api/pledgeInfo.js'
export default {
    data() {
			return {
        filters:{
          startDate:'',
          endDate:''
        },
        total: 0,
        page: 1,
        listLoading: false,
        basicInfos:[]
      }
    },
    methods:{
      getBasicInfos(){
        let para = {
					page: this.page,
          startDate: this.filters.startDate,
          endDate:this.filters.endDate
				};
        this.listLoading = true;
        // setTimeout(()=>{
        //   this.listLoading = false;
        // },1000)
        getBasicInfoList(para).then((res) => {
					this.total = res.data.total;
					this.basicInfos = res.data.basicInfos;
					this.listLoading = false;
					//NProgress.done();
				});
        
      },
      handleCurrentChange(val) {
				this.page = val;
				this.getBasicInfos();
			},
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted() {
			this.getBasicInfos();
		}

}
</script>
<style>
  
</style>

