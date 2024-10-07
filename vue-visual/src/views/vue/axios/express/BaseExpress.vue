<template>
  <div>
    <h2>适配基础express接口</h2>
    <div class="head-btn">
      <el-button @click="addArticleItem">新增文章</el-button>
    </div>
    <hr />
    <el-container>
      <article-card
        :articleData="articleData"
        :activeNames="[0, 1]"
        @deleteItem="onDeleteItem"
      >
        <template v-slot:content="scope">
          <prism-editor
            class="my-editor"
            v-model="scope.articleItem.code"
            :highlight="() => $highlight(scope.articleItem.code, $languages)"
            :options="editorOptions"
            line-numbers
          ></prism-editor>
          <div class="btns-box">
            <el-button @click="exectCode(scope.articleItem.code)"
              >执行代码</el-button
            >
            <el-button @click="init">重置</el-button>
          </div>
        </template>
        <template v-slot:footer="scope">
          <el-button @click="saveCode(scope.articleItem)">保存</el-button>
        </template>
      </article-card>
    </el-container>
    <dialog-form
      ref="dialogForm"
      :baseModel="dialogBaseModel"
      :baseData="dialogBaseData"
      @onConfirmArticleDialog="onConfirmArticleDialog"
    ></dialog-form>
  </div>
</template>
<script>
import ArticleCard from '@/components/common/ArticleCard/index';
import DialogForm from '@/components/DialogForm/index.vue';
import { editorOptions } from '@/components/common/Prismjs';
import {
  dialogBaseModel,
  dialogBaseData,
} from '@/views/vue/axios/express/models/articleData';
import {
  getBaseCode,
  createArticleItem,
  deleteArticleItem,
  updateArticleItem,
} from '@/api/vue/expressApi';
export default {
  components: { ArticleCard, DialogForm },
  data() {
    return {
      dialogBaseModel,
      dialogBaseData,
      articleData: [],
      baseStatic: {},
      editorOptions,
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      getBaseCode()
        .then((res) => {
          if (res) {
            this.articleData = res;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    highlighter(code) {
      return this.$highlight(code, this.$languages);
    },
    // 添加文章item；
    addArticleItem() {
      this.$confirm(`是否手动添加文章内容?`, '添加文章方式', {
        confirmButtonText: '手动添加文章内容',
        cancelButtonText: '添加默认内容',
        type: 'warning',
      })
        .then(() => {
          this.$refs.dialogForm.dialogVisible = true;
        })
        .catch(() => {
          createArticleItem().then((res) => {
            if (res) {
              this.$message.success('创建成功!');
              this.init();
            }
          });
        });
    },
    onDeleteItem(id) {
      deleteArticleItem(id).then((res) => {
        if (res) {
          this.$message.success('删除成功！');
          this.init();
        }
      });
    },
    exectCode(code) {
      try {
        const res = eval(code);
        console.log(res);
      } catch (err) {
        console.error('代码执行错误', err);
      }
    },
    saveCode(data) {
      updateArticleItem(data).then((res) => {
        if (res) {
          this.$message.success('修改成功！');
          this.init();
        }
      });
    },
    onConfirmArticleDialog(form) {
      createArticleItem(form).then((res) => {
        if (res) {
          this.$message.success('创建成功！');
          this.init();
        }
      });
    },
  },
};
</script>

<style>
.my-editor {
  background: #2d2d2d;
  color: #ccc;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}
.my-editor .prism-editor__textarea {
  white-space: pre-wrap;
  outline: none;
}
.btns-box {
  margin: 10px 0 10px 0;
  float: right;
}
.head-btn {
  margin-right: 15px;
  display: flex;
  flex-direction: row-reverse;
}
</style>
