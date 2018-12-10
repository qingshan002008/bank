<template>
  <div id="addOrganization">
    <el-dialog title="新增信息" :visible.sync="$store.state.operate.addOrganization" width="45%" :close-on-click-modal="false">
      <el-form :model="dialogForm" ref="dialogForm" label-width="100px" label-position="right" :rules="rules">
        <el-form-item label="机构编号:" prop="orgcode">
          <el-input v-model="dialogForm.orgcode" clearable></el-input>
        </el-form-item>
        <el-form-item label="机构ID:" prop="orgid">
          <el-input v-model="dialogForm.orgid" clearable @change="changeOrgSeq"></el-input>
        </el-form-item>
        <el-form-item label="级别:" prop="orglevel">
          <el-input v-model="orgLevel" clearable :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="机构名称:" prop="orgname">
          <el-input v-model="dialogForm.orgname" clearable></el-input>
        </el-form-item>
        <el-form-item label="层级序号:" prop="orgseq">
          <el-input v-model="dialogForm.orgseq" clearable :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="机构类型" prop="isBranch">
          <el-select v-model="dialogForm.isBranch" :placeholder="selectPlaceholder" clearable>
            <el-option v-for="item in orgTypeDict" :key="item.id" :label="item.text" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="父机构编号:">
          <el-input v-model="parentorgId" clearable :disabled="true"></el-input>
        </el-form-item>
      </el-form>
      <div class="btn">
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button @click="cancel">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  inject: ['reload'],
  data() {
    return {
      rules: {
        orgid: [{ required: true, message: '请填写机构ID', trigger: 'change' }],
        orgcode: [{ required: true, message: '请填写机构编号', trigger: 'change' }],
        orgname: [{ required: true, message: '请填写机构名称', trigger: 'change' }]
      },
      dialogForm: {},
      selectPlaceholder: '---请选择---'
    }
  },
  props: {
    parentorgId: {
      type: String
    },
    orgLevel: {
      type: Number
    },
    parentOrgSeq: {
      type: String
    },
    orgTypeDict: {
      type: Array
    }
  },
  // methods: {
  //   ...mapActions(['addOrganization']),
  //   changeOrgSeq() {
  //     if (this.dialogForm.orgid == '') {
  //       this.$set(this.dialogForm, 'orgseq', '')
  //     } else {
  //       this.$set(this.dialogForm, 'orgseq', this.parentOrgSeq + this.dialogForm.orgid + '.')
  //     }
  //   },
  //   // 取消
  //   cancel() {
  //     this.addOrganization()
  //   },
  //   // 保存
  //   onSubmit() {
  //     this.$set(this.dialogForm, 'parentorgid', this.parentorgId)
  //     this.$set(this.dialogForm, 'orglevel', this.orgLevel)
  //     addData(this.dialogForm).then(res => {
  //       if (res.status == 200) {
  //         this.addOrganization()
  //         this.$message({
  //           type: 'success',
  //           message: '添加成功'
  //         })
  //         this.reload()
  //       }
  //     })
  //   }
  // }
}
</script>
<style lang='scss'>
#addOrganization {
  .el-dialog {
    .el-dialog__header {
      background: #1f2229;
      padding: 0;
      line-height: 50px;
      padding-left: 20px;
      .el-dialog__title {
        color: #fff;
      }
    }
    .el-dialog__body {
      .el-form {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        .el-form-item {
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .el-form-item__content {
            margin-left: 0 !important;
          }
          .el-form-item__label {
            line-height: 1;
          }
        }
      }
      .el-form-item {
        margin-bottom: 15px;
      }
      .el-form-item__content {
        .el-input {
          width: 200px !important;
        }
      }
      .el-form-item__inner {
        width: 200px !important;
      }
      .btn {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>