<template>
	<el-upload
			class="upload"
			ref="upload"
			action="https://jsonplaceholder.typicode.com/posts/"
			:on-preview="handlePreview"
			:on-remove="handleRemove"
			:before-remove="beforeRemove"
			 multiple
			:limit="3"
			:on-exceed="handleExceed"
			:file-list="fileList">
	<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
	<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</template>
<script>
  export default {
    data() {
      return {
        fileList: []
      };
    },
    methods: {
	 submitUpload() {
		this.$confirm(`确定上传文件吗？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error'
      })
        .then(() => {
          this.$refs.upload.submit();
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>
<style>
	.upload {
        padding: 10px 0;
      }
</style>
