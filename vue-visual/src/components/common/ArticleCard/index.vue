<template>
  <div class="article-container">
    <el-card
      v-for="(article, index) in articles"
      :key="index"
      class="article-card"
    >
      <div slot="header" class="clearfix article-title">
        <span>{{ article.title }}</span>
        <el-button
          style="display: flex; float: right; margin-top: -5px"
          @click="deleteItem(article.id)"
          >×</el-button
        >
      </div>
      <div class="article-body">
        <p>{{ article.description }}</p>
        <el-collapse class="article-collapse" v-model="actives">
          <el-collapse-item :title="article.subTitle" :name="article.id">
            <p>{{ article.mainContent }}</p>
            <slot name="content" :articleItem="article">123</slot>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="article-footer">
        <slot name="footer" :articleItem="article">
          <!-- <el-button @click="$emit('btnTest')">插槽按钮</el-button> -->
        </slot>
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
    };
  },
  watch: {
    articleData: {
      deep: true,
      immediate: true,
      handler(val) {
        this.articles = val;
      },
    },
  },
  methods: {
    deleteItem(articleId) {
      console.log(this.actives);

      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
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
