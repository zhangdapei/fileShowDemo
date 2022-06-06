<template>
  <div class="fileShow">
    <el-row>
      <el-col :span="12">
        <div class="pdf">
          <!-- <pdf
            :src="pdfSrc"
            v-for="item in numPages"
            :key="item"
            :page="item"
          ></pdf> -->
          <iframe class="iframePDF" :src="iframePDFSrc" frameborder="0"></iframe>
        </div>
      </el-col>
      <el-col :span="12">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="文档修正" name="first">
            <el-form ref="form" :model="form" label-width="120px" class="form">
              <el-form-item label="关键字：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="修正：">
                <el-input v-model="form.region"></el-input>
              </el-form-item>
              <div class="buttonGrunp">
                <el-button type="primary" @click="save">保存</el-button>
              </div>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="新增规则" name="second">
            <el-form ref="form" :model="form" label-width="120px" class="form">
              <el-form-item label="关键字：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="业务规则模板：">
                <el-input v-model="form.region"></el-input>
              </el-form-item>
              <div class="buttonGrunp">
                <el-button type="primary" @click="save">保存</el-button>
              </div>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import pdf from "vue-pdf";
export default {
  name: "fileShow",
  components: {
    pdf,
  },
  data() {
    return {
      pdfSrc: "https://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",
      numPages: "", //  pdf 文件总页数
      iframePDFSrc:"https://idps2-dmxxg2.test.datagrand.cn/%2Fupload%2Fextract%2F20220602%2Fd10cbbf6-e25d-11ec-b621-02420a016ea2_print.pdf#toolbar=0",
      activeName: "first",
      form: {
        name: "",
        region: "",
      },
    };
  },
  mounted() {
    // this.getNumPages(this.pdfSrc);
  },
  methods: {
    getNumPages(url) {
      debugger
      //  var loadingTask = pdf.createLoadingTask(url, {withCredentials: false});
      var loadingTask = pdf.createLoadingTask(url);
      loadingTask.promise
        .then((pdf) => {
          debugger;
          this.pdfSrc = loadingTask;
          this.numPages = pdf.numPages;
        })
        .catch((err) => {
          console.error("pdf加载失败");
        });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log("submit!");
    },
    save() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        // this.getNumPages("http://idps2-dmxxg2.test.datagrand.cn/%2Fupload%2Fextract%2F20220602%2Fd10cbbf6-e25d-11ec-b621-02420a016ea2_print.pdf");
        // this.getNumPages("https://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf");
        this.iframePDFSrc = "https://idps2-dmxxg2.test.datagrand.cn/%2Fupload%2Fextract%2F20220602%2Fd10cbbf6-e25d-11ec-b621-02420a016ea2_print.pdf"
        loading.close();
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.fileShow {
  .pdf {
    height: calc(100vh - 50px);
    // overflow: auto;
    .iframePDF{
      width: 100%;
      height: 100%;
    }
  }
  .form {
    padding-top: 50px;
    width: 80%;
    margin: 0 auto;
    .buttonGrunp {
      text-align: center;
    }
  }
}
</style>