<template>
  <div id="tree" >
    <el-container>
     <el-aside width="300px"  >
       <el-scrollbar style="height:100%" wrapClass="scrollbar-class"  class="treeData" >
          <el-tree :data="treeData" :props="defaultProps" :expand-on-click-node="false"
          @node-click="onclikeTreeNode" ref='tree'
               ></el-tree> 
        </el-scrollbar>  
      </el-aside>
      <el-main ref="main">
       <div class="queryContent">
          <div class="queryOperate">
             <el-button type="primary" @click='deleteData'>删除</el-button>
            <el-button type="primary" @click="addData">增加下级机构</el-button> 
          </div>
          <div class="queryTable">
              <el-table  :data="tableData" style="width: 100%"  >
              <el-table-column type="selection" >
              </el-table-column>
              <el-table-column prop="orgid" label="ID" ></el-table-column>
              <el-table-column prop="orgname" label="机构名称" ></el-table-column>
              <el-table-column prop="orgcode" label="机构编号"></el-table-column>
              <el-table-column prop="orglevl" label="机构等级" ></el-table-column>
              <el-table-column prop="orgphone" label="机构电话" ></el-table-column>
              <el-table-column prop="orgaddr" label="机构地址" ></el-table-column>
              <el-table-column prop="orgpar" label="父机构编号"></el-table-column>
              
            </el-table> 
          </div>
        </div>
      </el-main>   
      <!--新增界面-->
		<el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false">
			<el-form :model="addForm" label-width="80px" :rules="addFormRules"  :inline="true" ref="addForm">
				<el-form-item label="机构名称" prop="name">
					<el-input v-model="addForm.orgname" style="width:200px"  ></el-input>
				</el-form-item>
        <el-form-item label="机构编码" >
					<el-input v-model="addForm.orgcode" style="width:200px"  ></el-input>
				</el-form-item>
				<el-form-item label="机构等级">
						<el-input v-model="addForm.orglevl" style="width:200px"  ></el-input>
				</el-form-item>
				<el-form-item label="机构电话">
					<el-input v-model="addForm.orgphone" style="width:200px"></el-input>
				</el-form-item>
				<el-form-item label="父机构编">
					<el-input v-model="addForm.orgpar" style="width:460px"></el-input>
				</el-form-item>
				<el-form-item label="机构地址">
					<el-input type="textarea" v-model="addForm.orgaddr" style="width:460px"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="Loading">提交</el-button>
			</div>
		</el-dialog>
     </el-container>
  </div>
</template>
<script>
import { getOrganizationTrees, deleteData } from '@/api/api'
import addOrganization from './addOrganization.vue'
export default {
  name:'orgtree',
  data() {
    return {
      treeData: [
        {
          id: 1,
          name: '全省汇总',
          children: [{
          id: 4,
          name: '济南市',
          children: [{
              id: 9,
              name: '山东济南历城区***'
              }, {
              id: 10,
              name: '山东济南历城区***'
              }]
          } , {
          id: 2,
          name: '青岛市',
          children: [{
              id: 5,
              name: '青岛市****区'
              }, {
              id: 6,
              name: '青岛市****区'
              },
              {
              id: 6,
              name: '青岛市****区'
              },
              {
              id: 6,
              name: '青岛市****区'
              }
          ]
          }]
          }
      ],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      header: [
        { text: '机构名称', key: 'text' },
        { text: '机构ID', key: 'id' },
        { text: '机构编号', key: 'attributes', key2: 'orgcode' },
        { text: '机构等级', key: 'attributes', key2: 'orglevel' },
        { text: '机构电话', key: 'attributes', key2: 'orgTel' },
        { text: '机构地址', key: 'attributes', key2: 'address' },
        { text: '父机构编号', key: 'attributes', key2: 'parentorgid' }
      ],
      tableData:[],
      tableData1:[
         {
            orgid:'1',
            orgname:'山东济南历城区***',
            orgcode:'901000010',
            orglevl:'1',
            orgphone:'826445641',
            orgaddr:'山东济南历城区***',
            orgpar:'222'
          },
           {
            orgid:'1',
            orgname:'青岛市****区***',
            orgcode:'901000010',
            orglevl:'1',
            orgphone:'826445641',
            orgaddr:'青岛市****区******',
            orgpar:'222'
          }
      ],
      tableData2: [
          {
            orgid:'1',
            orgname:'山东济南历城区***',
            orgcode:'901000010',
            orglevl:'1',
            orgphone:'826445641',
            orgaddr:'山东济南历城区***',
            orgpar:'222'
          },
           {
            orgid:'2',
            orgname:'山东济南历城区***',
            orgcode:'901000010',
            orglevl:'1',
            orgphone:'826445641',
            orgaddr:'山东济南历城区***',
            orgpar:'222'
          },
           {
            orgid:'3',
            orgname:'山东济南历城区***',
            orgcode:'901000010',
            orglevl:'1',
            orgphone:'826445641',
            orgaddr:'山东济南历城区',
            orgpar:'222'
          }

      ],
      tableData3: [
          {
            orgid:'1',
            orgname:'青岛市****区***',
            orgcode:'901000010',
            orglevl:'1',
            orgphone:'826445641',
            orgaddr:'青岛市****区******',
            orgpar:'222'
          },
           {
            orgid:'2',
            orgname:'青岛市****区******',
            orgcode:'901000010',
            orglevl:'1',
            orgphone:'826445641',
            orgaddr:'青岛市****区******',
            orgpar:'222'
          },
           {
            orgid:'3',
            orgname:'青岛市****区******',
            orgcode:'901000010',
            orglevl:'1',
            orgphone:'826445641',
            orgaddr:'青岛市****区***',
            orgpar:'222'
          }

      ],
      selected: [],
      loading: true,
      props: {
        label: 'text',
        children: 'children',
        isLeaf: 'leaf'
      },
      query: {},
      multipleSelection: [],
      parentorgName: '',
      parentorgId: '',
      orgLevel: 1,
      parentOrgSeq: '.',
      orgTypeDict: [],
      tableHeight: '50px',
              
        addFormVisible: false,//新增界面是否显示
				addLoading: true,
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//新增界面数据
				addForm: {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				}
    }
  },
  methods: {
  //  ...mapActions(['addOrganization']),
    // 获取参数字典
    getCombotrees() {
      new Promise((resolve, reject) => {
        getCombotrees('AIM_ORGTYPE')
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      }).then(res => {
        if (res.status == 200) {
          res.data.forEach(ele => {
            if (ele.id == 'AIM_ORGTYPE') {
              this.orgTypeDict = ele.children
            }
          })
        }
      })
    },
    // 渲染提示框
    // renderHeader(h, { column }) {
    //   return (
    //     <el-tooltip effect='dark' content={column.label} placement='top'>
    //       <span>{column.label}</span>
    //     </el-tooltip>
    //   )
    // },
    // 选择数据
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    getCurrentNode(data) {
      this.parentorgId = data.id
      this.parentorgName = data.text
      if (data.level != undefined) {
        this.orgLevel = data.level + 1
        this.parentOrgSeq = '.' + data.id + '.'
      } else if (data.attributes != undefined) {
        this.orgLevel = data.attributes.orglevel + 1
        this.parentOrgSeq = data.attributes.orgseq
      }
      getOrganizationTrees(data.id).then(res => {
        if (res.status == 200) {
          this.loading = false
          this.tableData = res.data
        }
      })
    },
    // 懒加载机构树
    loadNode(node, resolve) {
      getOrganizationTrees().then(res => {
        if (res.status == 200) {
          this.treeData = res.data
          this.loading = false
          if (node.level == 0) {
            this.tableData = res.data[0].children
            return resolve([
              {
                text: res.data[0].text,
                id: res.data[0].id,
                level: 1
              }
            ])
          }
          if (node.level == 1) {
            return resolve(this.treeData[0].children)
          }
          if (node.level > 1) {
            getOrganizationTrees(node.data.id).then(res => {
              if (res.status == 200) {
                return resolve(res.data)
              }
            })
          }
        }
      })
    },
    // 增加下级机构
    addData() {
      
      if (!this.parentorgName && !this.parentorgId) {
        this.parentorgName = this.treeData[0].text
        this.parentorgId = this.treeData[0].id
        this.orgLevel = 2
        this.parentOrgSeq = '.' + this.treeData[0].id + '.'
      }
      this.$confirm(`确定在本机构增加下级机构吗？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error'
      })
        .then(() => {
          this.addFormVisible = true ;
        //  this.addOrganization()
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
    },
    // 删除机构
    deleteData() {
      if (this.multipleSelection.length == 0) {
        this.$notify({
          title: '编辑提示',
          message: '请选择至少一条数据删除',
          type: 'error',
          position: 'bottom-right',
          duration: 1000
        })
      } else {
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        })
          .then(() => {
            var orgids = []
            this.multipleSelection.forEach((item, index) => {
              orgids.push(item.id)
            })
            deleteData(orgids.join(',')).then(res => {
              if (res.status == 200) {
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                })
                this.reload()
              }
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
      }
    },
    onclikeTreeNode:function(data){
      if(data.id == 1){
          this.tableData = this.tableData1 ;
      }else 
      if(data.id == 2){
        this.tableData = this.tableData3 ;
      }else if(data.id == 4){
        this.tableData = this.tableData2;
      }  
    }
  },
  created: function () {
    // `this` 指向 vm 实例
    this.tableData = this.tableData1
    } , 
  
  components: { addOrganization }
}
</script>
<style lang="scss">
#tree {
  height: 650px;
  margin: 15px;
  background: #fff;
  padding: 15px;
  .el-container {
    height: 100%;
    .el-scrollbar {
      .scrollbar-class {
        overflow-x: hidden;
      }
    }
    .el-aside {
      overflow-x: hidden;
      box-sizing: border-box;
      border-right: 4px solid #edf1f2;
      .treeData {
        width: 300px;
        ul {
          padding: 0 !important;
          margin: 0 !important;
        }
        .el-scrollbar__view {
          width: 300px;
          li {
            padding: 5px 5px;
            box-sizing: border-box;
          }
        }
      }
    }
    /* .halo-tree {
      .tree-node-el {
        background: #edf1f2 !important;
      }
    } */
    .el-main {
      height: 100%;
      width: 100%;
      //查询样式
      .queryBox {
        border-bottom: 1px solid #ededed;
        .el-form {
          display: flex;
          flex-wrap: wrap;
          .el-form-item {
            margin-bottom: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            .el-form-item__label {
              line-height: 1;
            }
          }
          .btn {
            .el-form-item__content {
              padding-left: 30px;
            }
          }
        }
      }
      .queryOperate {
        padding: 10px 0;
        .el-button + .el-button {
          margin-left: 14px;
        }
      }
      //表格数据
      .queryTable {
        .el-table--border th.gutter:last-of-type {
          background: rgb(243, 234, 234);
          color: #606a66;
        }
        .el-table__header-wrapper {
          .el-table__header {
            th.is-leaf {
              background: #fff;
              color: #606a66;
            }
          }
        }
        .cell {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .el-checkbox {
            display: flex !important;
            justify-content: center;
          }
        }
        .page {
          padding-top: 15px;
          .el-pager {
            li.active {
              background: #1a90e5;
              color: #fff;
              border-radius: 8px;
            }
            .number {
              color: #606a66;
            }
          }
        }
      }
    }
  }
}
</style>

