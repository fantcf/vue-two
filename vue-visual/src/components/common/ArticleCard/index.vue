<template>
  <div class="article-container">
    <el-card
      v-for="(article, index) in articles"
      :key="index"
      class="article-card"
    >
      <div slot="header" class="clearfix article-title">
        <span>{{ article.title }}</span>
      </div>
      <div class="article-body">
        <p>{{ article.description }}</p>
        <el-collapse class="article-collapse">
          <el-collapse-item :title="article.subTitle">
            <p>{{ article.mainContent }}</p>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="article-footer">
        <slot name="footer">
          <el-button>插槽按钮</el-button>
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
  },
  data() {
    return {
      articles: this.articleData,
    };
  },
  methods: {
    readMore(articleId) {
      // 处理阅读更多逻辑，比如跳转到文章详情页面
      console.log('阅读更多:', articleId);
    },
  },
};
</script>

<style scoped>
.article-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.article-card {
  width: 100%;
  min-width: 350px;
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
