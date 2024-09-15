<template>
  <div>
    <h2>适配基础express接口</h2>
    <hr />
    <el-container>
      <article-card :articleData="articleData"></article-card>
    </el-container>
  </div>
</template>
<script>
import ArticleCard from '@/components/common/ArticleCard/index';
import articleData from '@/models/vue/axios/express/articleData';
export default {
  components: { ArticleCard },
  data() {
    return {
      articleData,
    };
  },
};
</script>
