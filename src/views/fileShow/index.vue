<template>
  <div class="fileShow">
    <el-row>
      <el-col :span="0">
        <div class="pdf">
          <!-- <pdf
            :src="pdfSrc"
            v-for="item in numPages"
            :key="item"
            :page="item"
          ></pdf> -->
          <!-- <iframe ref="iframePDF" class="iframePDF" :src="iframePDFSrc" frameborder="0"  scrolling="no">
            <head>
              <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
            </head>
          </iframe> -->
          <!-- <a :href="iframePDFSrc"></a> -->
        </div>
      </el-col>
      <el-col :span="12">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="文档审核" name="first">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="规则"> </el-table-column>
              <el-table-column prop="name" label="实体"> </el-table-column>
              <el-table-column prop="address" label="业务逻辑" width="400">
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="新增规则" name="second">
            <el-form ref="form" :model="form" label-width="120px" class="form">
              <el-form-item label="规则：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="逻辑：">
                <el-input v-model="form.region"></el-input>
              </el-form-item>
              <div class="buttonGrunp">
                <el-button type="primary" @click="save">保存</el-button>
                <el-button>取消</el-button>
                <!-- <el-button type="primary" @click="load">加载文档</el-button> -->
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
import { getKeyEntries } from "@/api/fileShow";

export default {
  name: "fileShow",
  components: {
    pdf,
  },
  data() {
    return {
      tableData: [{ date: "2012" }],
      pdfSrc: "./static/demo1.pdf",
      numPages: "", //  pdf 文件总页数
      iframePDFSrc: "./static/demo1.pdf#toolbar=0",
      activeName: "first",
      demoFlag: 1,
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
    save() {
      // _getVersion('https://qualtrics-sv.cs111.force.com/services/apexrest/doc/keyentries')().then(res => {
      //   console.log(res)
      // })
      getKeyEntries().then(res => {
        console.log(res)
      })
    },

    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log("submit!");
    },

    // getNumPages(url) {
    //   //  var loadingTask = pdf.createLoadingTask(url, {withCredentials: false});
    //   var loadingTask = pdf.createLoadingTask(url);
    //   loadingTask.promise
    //     .then((pdf) => {
    //       this.pdfSrc = loadingTask;
    //       this.numPages = pdf.numPages;
    //     })
    //     .catch((err) => {
    //       console.error("pdf加载失败");
    //     });
    // },
    // correct() {
    //   const elink = document.createElement("a");
    //   elink.download = this.demoFlag == 1 ? "demo1.doc" : "demo2.doc";
    //   elink.style.display = "none";
    //   elink.href = this.demoFlag == 1 ? './static/demo1.doc' : './static/demo2.doc' + '?response-content-type=application/octet-stream';
    //   document.body.appendChild(elink);
    //   elink.click();
    //   URL.revokeObjectURL(elink.href); // 释放URL 对象
    //   document.body.removeChild(elink);
    // },
    // save() {
    //   setTimeout(() => {
    //     this.$message.success("规则添加成功")
    //     this.form = {}
    //   }, 1000);
    // },
    // load() {
    //   const loading = this.$loading({
    //     lock: true,
    //     text: "Loading",
    //     spinner: "el-icon-loading",
    //     background: "rgba(0, 0, 0, 0.7)",
    //   });
    //   setTimeout(() => {
    //     // this.getNumPages("http://idps2-dmxxg2.test.datagrand.cn/%2Fupload%2Fextract%2F20220602%2Fd10cbbf6-e25d-11ec-b621-02420a016ea2_print.pdf");
    //     // this.getNumPages("https://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf");
    //     this.iframePDFSrc = "./static/demo2.pdf#toolbar=0"
    //     this.demoFlag = 2
    //     loading.close();
    //   }, 2000);
    // },
    // setWord() {
    //   this.iframePDFSrc = "'https://vIEw.officeapps.live.com/op/vIEw.aspx?src=https://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf'"
    // },
  },
};
</script>

<style lang="scss" scoped>
.fileShow {
  .pdf {
    height: calc(100vh - 50px);

    // overflow: auto;
    .iframePDF {
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