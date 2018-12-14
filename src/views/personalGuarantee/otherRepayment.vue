<template>
      <!-- 其他还款人基本信息  -->
  <section>
    	<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form ref="contractForm" :model="filters" :inline="true"   >
          <table >
            <tr>
              <td>
                <el-form-item label="责任人名称"  prop='name'>
					        <el-input v-model="filters.name" placeholder="责任人名称"></el-input>
				        </el-form-item>
              </td>
                <td>
                <el-form-item label="责任人身份类型" prop='cardType'>
                    <el-select v-model="filters.cardType" placeholder="责任人身份类型">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  </el-form-item>
              </td>
              <td>
                <el-form-item label="责任人身份标示号码" prop='cardNo'>
                    <el-input v-model="filters.cardNo" placeholder="债责任人身份标示号码"></el-input>
                  </el-form-item>
              </td>
            </tr>
            <tr >
              <td colspan="3" style="text-align:center;">
                <el-form-item>
					        <el-button type="primary" v-on:click="getOtherRepays">查询</el-button>
              </el-form-item>
              <el-form-item>
					        <el-button type="primary" @click="resetForm('contractForm')">重置</el-button>
				      </el-form-item>
              </td>
            </tr>
          </table>
        </el-form>
    	</el-col>
  <el-table :data="contractMarks" highlight-current-row v-loading="listLoading"  style="width: 100%;"  stripe='true'>
      <!-- <el-table-column type="selection" width="55">
			</el-table-column> -->
      <el-table-column prop="collateralCount" label="责任人个数" width="120"  sortable>
			</el-table-column>
      <el-table-column prop="infoType" label="身份类型" width="120" sortable>
			</el-table-column>
      <el-table-column prop="name" label="债务人名称" min-width="100" sortable>
			</el-table-column>
      <el-table-column prop="cardType" label="证件类型" min-width="100" sortable>
			</el-table-column>
      <el-table-column prop="cardNo" label="证件号码" min-width="100" sortable>
			</el-table-column>
      <el-table-column prop="repaytype" label="责任人类型" width="120">
			</el-table-column>
			<el-table-column prop="moneyAll" label="金额" width="120" sortable>
			</el-table-column>
			<el-table-column prop="contractNo" label="合同编号" width="120"  sortable>
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
import {getOtherRepayList} from '../../api/personalGuarantee.js'
export default {
    data() {
			return {
        filters:{
          name:'',
          cardType:'',
          cardNo:''
        },
        options:[
          {
            value:'身份证',
            label:'身份证'
          },
           {
            value:'户口本',
            label:'户口本'
          },
           {
            value:'警官证',
            label:'警官证'
          }
          
        ],
        total: 0,
        page: 1,
        listLoading: false,
        contractMarks:[]
      }
    },
    methods:{
      getOtherRepays(){
        let para = {
					page: this.page,
          name: this.filters.name,
          cardType:this.filters.cardType,
          cardNo :this.filters.cardNo
				};
        this.listLoading = true;
        // setTimeout(()=>{
        //   this.listLoading = false;
        // },1000)
        getOtherRepayList(para).then((res) => {
					this.total = res.data.total;
					this.contractMarks = res.data.otherRepays;
					this.listLoading = false;
					//NProgress.done();
				});
        
      },
      handleCurrentChange(val) {
				this.page = val;
				this.getOtherRepays();
			},
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted() {
			this.getOtherRepays();
		}

}
</script>
<style>
  
</style>



