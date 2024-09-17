<template>
  <div class="article-container">
    <el-card
      v-for="(article, index) in articles"
      :key="index"
      class="article-card"
    >
      <div slot="header" class="clearfix article-title">
        <component
          autofocus
          :ref="`input-title-${index}`"
          :is="inputStatus.title"
          @blur="onBlur(comsObj.title)"
          @click="onClick(comsObj.title, index)"
          v-model="article.title"
          >{{ article.title }}</component
        >
        <el-button
          style="display: flex; float: right; margin-top: -5px"
          icon="el-icon-delete"
          @click="deleteItem(article.id, article.title)"
        ></el-button>
      </div>
      <div class="article-body">
        <component
          autofocus
          :ref="`input-description-${index}`"
          :is="inputStatus.description"
          @blur="onBlur(comsObj.description)"
          @click="onClick(comsObj.description, index)"
          v-model="article.description"
          >{{ article.description }}</component
        >
        <el-collapse class="article-collapse" v-model="actives">
          <el-collapse-item :title="article.subTitle" :name="article.id">
            <slot name="content" :articleItem="article"></slot>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="article-footer">
        <slot name="footer" :articleItem="article"> </slot>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    articleData: {
      default: () => [],
      type: Array,
    },
    activeNames: {
      default: () => [],
      type: Array,
    },
  },
  data() {
    return {
      articles: this.articleData,
      actives: this.activeNames,
      currentComponent: 'el-input',
      comsObj: {
        title: 'title',
        description: 'description',
      },
      inputStatus: {
        title: 'span',
        description: 'p',
      },
      inputBaseStatus: {
        title: 'el-input',
        description: 'el-input',
      },
      inputChangeStatus: {
        title: 'span',
        description: 'p',
      },
      currentRef: '',
    };
  },
  watch: {
    'inputStatus.title': {
      handler(val) {
        this.switchInput(val);
      },
    },
    articleData: {
      deep: true,
      immediate: true,
      handler(val) {
        this.articles = val;
      },
    },
  },
  methods: {
    switchInput(val) {
      if (val === 'el-input') {
        this.$refs[this.currentRef][0].focus();
      }
    },
    onClick(target, index) {
      // 这里代码需要有很多要改的；
      this.currentRef = `input-${target}-${index}`;
      this.inputStatus[target] = this.inputBaseStatus[target];
    },
    onBlur(target) {
      this.inputStatus[target] = this.inputChangeStatus[target];
    },
    deleteItem(articleId, articleTitle) {
      this.$confirm(
        `是否删除标题为"${articleTitle}",id为"${articleId}"?`,
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        },
      )
        .then(() => {
          this.$emit('deleteItem', articleId);
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          });
        });
    },
  },
};
</script>

<style scoped>
.article-container {
  margin: 0 auto;
  max-height: 1000px;
  overflow: hidden scroll;
}
.article-card {
  width: 100%;
  min-width: 1000px;
  margin-bottom: 20px;
}
.article-title {
  font-size: 20px;
  font-weight: bold;
}
.article-body {
  padding: 0 10px;
  margin-top: -20px;
  font-size: 14px;
  color: #8a84848c;
}
.article-footer {
  text-align: right;
  padding: 10px;
}
/* .article-container {
  max-width: 800px;
  margin: 20px auto;
} */

.article-collapse {
  margin-bottom: 20px;
}
</style>
