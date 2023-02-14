<template>
  <div>
    <h4>新闻列表管理</h4>

    <el-form inline>
      <el-form-item>
        <el-input v-model="title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="content" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add">添加</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="list" border stripe>
      <el-table-column prop="img_url" label="图片">
        <template #default="scope">
          <el-image
            :src="scope.row.img_url"
            fit="contain"
            style="height: 50px"
          />
        </template>
      </el-table-column>
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="content" label="内容" width="700" />
      <el-table-column prop="add_time" label="创建时间" />
      <el-table-column prop="operate" label="操作">
        <template #default="scope">
          <el-button type="danger" @click="remove(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <footer style="margin-top: 50px; text-align: right">
      <el-button type="primary" :disabled="pageNum <= 1" @click="prevPage"
        >上一页</el-button
      >
      <el-button
        type="primary"
        :disabled="pageNum >= totalPage"
        @click="nextPage"
        >下一页</el-button
      >
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import axios from "axios";
export default defineComponent({
  setup() {
    const data = reactive({
      title: "",
      content: "",
      pageNum: 1,
      pageSize: 10,
      totalPage: 0,
      list: [],
    });

    const methods = {
      getNewsList() {
        axios
          .get("/api/get/news", {
            params: {
              pageNum: data.pageNum,
              pageSize: data.pageSize,
            },
          })
          .then((res) => {
            data.list = res.data.list;
            data.totalPage = res.data.totalPage;
          });
      },
      nextPage() {
        data.pageNum += 1;
        methods.getNewsList();
      },
      prevPage() {
        data.pageNum -= 1;
        methods.getNewsList();
      },
      add() {
        axios
          .post("/api/add/news", {
            title: data.title,
            content: data.content,
          })
          .then((res) => {
            console.log(res.data);
          });
      },
      remove(id: number) {
        axios
          .post("/api/delete/news", {
            id,
          })
          .then((res) => {
            console.log(res);
          });
      },
    };

    onMounted(() => {
      methods.getNewsList();
    });
    return {
      ...toRefs(data),
      ...methods,
    };
  },
});
</script>

<style scoped></style>
