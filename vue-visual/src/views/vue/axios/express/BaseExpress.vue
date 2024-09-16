<template>
  <div>
    <h2>适配基础express接口</h2>
    <div class="head-btn">
      <el-button @click="addArticleItem">添加模块</el-button>
    </div>
    <hr />
    <el-container>
      <article-card
        :articleData="articleData"
        @btnTest="btnTest"
        :activeNames="[0, 1]"
        @deleteItem="onDeleteItem"
      >
        <template v-slot:content="scope">
          <prism-editor
            class="my-editor"
            v-model="scope.articleItem.code"
            :highlight="highlighter"
            :options="editorOptions"
            line-numbers
          ></prism-editor>
          <div class="btns-box">
            <el-button @click="exectCode(scope.articleItem.code)"
              >执行代码</el-button
            >
            <el-button @click="getBaseCode">重置</el-button>
          </div>
        </template>
        <template v-slot:footer="scope">
          <el-button @click="saveCode(scope.articleItem)">保存</el-button>
        </template>
      </article-card>
    </el-container>
  </div>
</template>
<script>
import ArticleCard from '@/components/common/ArticleCard/index';
// import articleData from '@/views/vue/axios/express/models/articleData.js';
import {
  getBaseCode,
  createArticleItem,
  deleteArticleItem,
  updateArticleItem,
} from '@/api/vue/expressApi';
export default {
  components: { ArticleCard },
  data() {
    return {
      articleData: [],
      editorOptions: {
        enableBasicAutocompletion: true, //启用基本自动完成
        enableSnippets: true, // 启用代码段
        enableLiveAutocompletion: true, //启用实时自动完成
        tabSize: 2, //标签大小
        fontSize: 14, //设置字号
        showPrintMargin: false, //去除编辑器里的竖线
      },
    };
  },
  created() {
    this.getBaseCode();
  },
  methods: {
    getBaseCode() {
      getBaseCode().then((res) => {
        if (res) {
          this.articleData = res;
        }
      });
    },
    btnTest() {
      console.log(this.articleData);
    },
    highlighter(code) {
      return this.$highlight(code, this.$languages);
    },
    // 添加文章item；
    addArticleItem() {
      createArticleItem().then((res) => {
        if (res) {
          this.$message.success('创建成功!');
          this.getBaseCode();
        }
      });
    },
    onDeleteItem(id) {
      deleteArticleItem(id).then((res) => {
        if (res) {
          this.$message.success('删除成功！');
          this.getBaseCode();
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
          this.getBaseCode();
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
