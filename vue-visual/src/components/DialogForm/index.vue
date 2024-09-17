<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :title="baseStatic.dialogTitle"
    @close="handleClose"
  >
    <el-form
      :model="formModel"
      ref="formRef"
      :label-width="baseStatic.labelWidth"
    >
      <el-form-item
        class="form-item-default"
        v-for="(item, index) in formData"
        :key="index"
        :label="item.label"
        :placeholder="`请输入${item.label}`"
      >
        <el-input
          v-if="item.type === 'input'"
          v-model="formModel[item.key]"
        ></el-input>
        <el-input
          type="textarea"
          v-if="item.type === 'textarea'"
          v-model="formModel[item.key]"
        ></el-input>
        <prism-editor
          class="my-editor prims-editor"
          v-if="item.type === 'prism'"
          v-model="formModel[item.key]"
          :highlight="() => $highlight(formModel[item.key], $languages)"
          :options="editorOptions"
          line-numbers
        ></prism-editor>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="handleSubmit">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { editorOptions } from '@/components/common/Prismjs';

export default {
  props: {
    baseStatic: {
      type: Object,
      default: () => {
        return {
          dialogTitle: '添加文章',
          labelWidth: '100px',
        };
      },
    },
    baseModel: {
      type: Object,
      default: () => {},
    },
    baseData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dialogVisible: false,
      formModel: this.baseModel,
      formData: this.baseData,
      staticData: this.baseStatic,
      editorOptions,
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          this.$emit('onConfirmArticleDialog', this.formModel);
          this.dialogVisible = false;
        } else {
          console.error('表单验证失败');
          return false;
        }
      });
    },
    handleClose() {
      this.$emit('input', false);
      this.$emit('close');
    },
  },
};
</script>
<style scoped>
.form-item-default {
  width: 650px;
}
.el-form-item__label {
  text-align: left !important;
}
.el-form-item__label::after {
  content: ':';
}
.prims-editor {
  width: 98%;
}
</style>
