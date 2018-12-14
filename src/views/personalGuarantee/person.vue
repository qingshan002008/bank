<template>
      <!-- 在保责任信息  -->
  <section>
    	<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form ref="basicInfoForm" :model="filters" :inline="true"   >
          <table >
            <tr>
              <td >
               <el-form-item label="账户状态" prop='accState'>
                    <el-select v-model="filters.accState" placeholder="账户状态">
                    <el-option
                      v-for="item in accStates"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  </el-form-item>
              </td>
                <td >
               <el-form-item label="五级分类" prop='level'>
                    <el-select v-model="filters.level" placeholder="五级分类">
                    <el-option
                      v-for="item in levels"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  </el-form-item>
              </td>
            </tr>
            <tr >
              <td colspan="2" style="text-align:center;">
                <el-form-item>
					        <el-button type="primary" v-on:click="getPersons">查询</el-button>
              </el-form-item>
              <el-form-item>
					        <el-button type="primary" @click="resetForm('basicInfoForm')">重置</el-button>
				      </el-form-item>
              </td>
            </tr>
          </table>
        </el-form>
    	</el-col>
  <el-table :data="persons" highlight-current-row v-loading="listLoading"  style="width: 100%;"  stripe='true'>
      <!-- <el-table-column type="selection" width="55">
			</el-table-column> -->
      <el-table-column prop="accState" label="账户状态" width="180">
			</el-table-column>
			<el-table-column prop="moneyAll" label="在保余额" width="180" sortable>
			</el-table-column>
			<el-table-column prop="infoData" label="余额变化日期" width="180"  sortable>
			</el-table-column>
			<el-table-column prop="level" label="五级分类" width="180" sortable>
			</el-table-column>
			<el-table-column prop="levelDate" label="五级分类认定日期" width="180" sortable>
			</el-table-column>
			<el-table-column prop="flag" label="代偿(垫款)标志" width="180" sortable>
			</el-table-column>
      <el-table-column prop="closeDate" label="账户关闭日期" min-width="100" sortable>
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
import {getPersonsList} from '../../api/personalGuarantee.js'
export default {
    data() {
			return {
        filters:{
          accState:'',
          level:''
        },
        total: 0,
        page: 1,
        listLoading: false,
        persons:[],
        accStates:[
          {value:'正常',label:'正常'},
          {value:'关闭',label:'关闭'}
        ],
        levels:[
          {value:'正常',label:'正常'},
          {value:'关注  ',label:'关注'},
          {value:'次级',label:'次级'},
          {value:'可疑',label:'可疑'},
          {value:'损失',label:'损失'}
        ]

      }
    },
    methods:{
      getPersons(){
        let para = {
					page: this.page,
          accState: this.filters.accState,
          level:this.filters.level
				};
        this.listLoading = true;
        // setTimeout(()=>{
        //   this.listLoading = false;
        // },1000)
        getPersonsList(para).then((res) => {
					this.total = res.data.total;
					this.persons = res.data.persons;
					this.listLoading = false;
					//NProgress.done();
				});
        
      },
      handleCurrentChange(val) {
				this.page = val;
				this.getPersons();
			},
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted() {
			this.getPersons();
		}

}
</script>
<style>
  
</style>

