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
					        <el-button type="primary" v-on:click="getPerBasicInfos">查询</el-button>
              </el-form-item>
              <el-form-item>
					        <el-button type="primary" @click="resetForm('basicInfoForm')">重置</el-button>
				      </el-form-item>
              </td>
            </tr>
          </table>
        </el-form>
    	</el-col>
  <el-table :data="perBasicInfos" highlight-current-row v-loading="listLoading"  style="width: 100%;"  stripe='true'>
      <!-- <el-table-column type="selection" width="55">
			</el-table-column> -->
      <el-table-column prop="type" label="担保业务大类" width="180">
			</el-table-column>
      <el-table-column prop="typedes" label="业务细分" width="180">
			</el-table-column>
      <el-table-column prop="startDate" label="开户日期" width="120" sortable>
			</el-table-column>
			<el-table-column prop="moneyAll" label="担保金额" width="120" sortable>
			</el-table-column>
			<el-table-column prop="moneyType" label="币种" width="120"  sortable>
			</el-table-column>
			<el-table-column prop="endDate" label="到期日期" width="120" sortable>
			</el-table-column>
			<el-table-column prop="fantype" label="反担保方式" width="180" sortable>
			</el-table-column>
      <el-table-column prop="othertype" label="其他还款方式" min-width="100" sortable>
			</el-table-column>
      <el-table-column prop="moenyperc" label="保证金比例" min-width="100" sortable>
			</el-table-column>
      <el-table-column prop="contractNo" label="合同编号" min-width="100" sortable>
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
import {getPerBasicInfoList} from '../../api/personalGuarantee.js'
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
        perBasicInfos:[]
      }
    },
    methods:{
      getPerBasicInfos(){
        let para = {
					page: this.page,
          startDate: this.filters.startDate,
          endDate:this.filters.endDate
				};
        this.listLoading = true;
        // setTimeout(()=>{
        //   this.listLoading = false;
        // },1000)
        getPerBasicInfoList(para).then((res) => {
					this.total = res.data.total;
					this.perBasicInfos = res.data.perBasicInfos;
					this.listLoading = false;
					//NProgress.done();
				});
        
      },
      handleCurrentChange(val) {
				this.page = val;
				this.getPerBasicInfos();
			},
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted() {
			this.getPerBasicInfos();
		}

}
</script>
<style>
  
</style>

