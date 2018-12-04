<template>
  <div id="tree" >
    <el-container>
     <el-aside width="400px"  >
       <el-scrollbar style="height:100%" wrapClass="scrollbar-class"  class="treeData" >
          <el-tree :data="treeData" :props="defaultProps"
              show-checkbox 
              node-key="id"
              :expand-on-click-node="true"
              :render-content="renderContent" highlight-current check-on-click-node ></el-tree> 
        </el-scrollbar>  
      </el-aside>
      <el-main ref="main">
       <!-- <div class="queryContent">
          <div class="queryOperate">
             <el-button type="primary" @click='deleteData'>删除</el-button>
            <el-button type="primary" @click="addData">增加下级机构</el-button> 
          </div>
          <div class="queryTable">
              <el-table v-loading="loading" ref="multipleTable" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange" border :height="tableHeight">
              <el-table-column type="selection" width="55">
              </el-table-column>
              <el-table-column :label="head.text" v-for="(head,key) in header" :key="key" :show-overflow-tooltip="true" :render-header="renderHeader">
                <template slot-scope="scope">{{ head.key2 ? tableData[scope.$index][head.key][head.key2] : tableData[scope.$index][head.key] }}</template>
              </el-table-column>
            </el-table> 
          </div>
        </div> -->
      </el-main>  
      <add-organization :parentorgId="parentorgId" :orgLevel="orgLevel" :parentOrgSeq="parentOrgSeq" :orgTypeDict="orgTypeDict"></add-organization>
     </el-container>
  </div>
</template>
<script>

export default {
  name:'orgtree',
  data() {
    return {
      treeData: [
        {
          id: 1,
          label: '全省汇总',
          children: [{
          id: 4,
          label: '济南市',
          children: [{
          id: 9,
          label: '历城区'
          }, {
          id: 10,
          label: '天桥市'
          }]
          } , {
          id: 2,
          label: '青岛',
          children: [{
          id: 5,
          label: '一区'
          }, {
          id: 6,
          label: '二区'
          }]
          }]
          }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
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
      tableData: [

      ],
      selected: [],
      loading: true,
      props: {
        label: 'text',
        children: 'children',
        isLeaf: 'leaf'
      },
      query: {},
      header: [
        { text: '机构名称', key: 'text' },
        { text: '机构ID', key: 'id' },
        { text: '机构编号', key: 'attributes', key2: 'orgcode' },
        { text: '机构等级', key: 'attributes', key2: 'orglevel' },
        { text: '机构电话', key: 'attributes', key2: 'orgTel' },
        { text: '机构地址', key: 'attributes', key2: 'address' },
        { text: '父机构编号', key: 'attributes', key2: 'parentorgid' }
      ],
      multipleSelection: [],
      parentorgName: '',
      parentorgId: '',
      orgLevel: 1,
      parentOrgSeq: '.',
      orgTypeDict: [],
      tableHeight: 0
    }
  },
  methods:{

    
  }
}
</script>
<style lang="scss">
#tree {
  height: 100%;
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
        width: 400px;
        ul {
          padding: 0 !important;
          margin: 0 !important;
        }
        .el-scrollbar__view {
          width: 400px;
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
          background: #f5f7fa;
          color: #606a66;
        }
        .el-table__header-wrapper {
          .el-table__header {
            th.is-leaf {
              background: #f5f7fa;
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

