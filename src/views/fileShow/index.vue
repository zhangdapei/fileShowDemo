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
      <el-col :span="24">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="文档审核" name="first">
            <el-table :data="tableData" style="width: 100%" v-if="keyEntries.values">
              <el-table-column prop="rules" label="规则" align="center">
              </el-table-column>
              <el-table-column  label="实体" align="center">
                <template slot-scope="scope">
                  {{keyEntries.values[0].entries[scope.row.rules] }}
                </template>
              </el-table-column>
              <el-table-column
                prop="logic"
                label="业务逻辑"
                align="center"
                width="400"
              >
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="新增规则" name="second">
            <el-form ref="form" :model="form" label-width="120px" class="form">
              <el-form-item label="规则：">
                <!-- <el-input v-model="form.rules"></el-input> -->
                <el-select v-model="form.rules" placeholder="请选择" style="width:100%">
                  <el-option
                    v-for="item in keyEntries.entities"
                    :key="item"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="逻辑：">
                <el-input v-model="form.logic"></el-input>
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
import { getKeyEntries, setKeyEntries,getKeyEntriesList } from "@/api/fileShow";

export default {
  name: "fileShow",
  components: {
    pdf,
  },
  data() {
    return {
      tableData: [],
      pdfSrc: "./static/demo1.pdf",
      numPages: "", //  pdf 文件总页数
      iframePDFSrc: "./static/demo1.pdf#toolbar=0",
      activeName: "first",
      demoFlag: 1,
      keyEntries:{},
      form: {
        rules: "",
        logic: "",
      },
    };
  },
  mounted() {
    // this.getNumPages(this.pdfSrc);
    this.getData();
    this.getlist()
  },
  methods: {
    getlist(){
      getKeyEntriesList().then((res) => {
        this.tableData = res
      });
    },
    save() {
      // _getVersion('https://qualtrics-sv.cs111.force.com/services/apexrest/doc/keyentries')().then(res => {
      //   console.log(res)
      // })
      setKeyEntries(this.form).then((res) => {
        console.log(res)
        this.form = {}
        this.$message.success("规则保存成功")
        this.getlist()
      });
    },
    getData() {
      getKeyEntries().then((res) => {
        this.keyEntries = JSON.parse(res).result
        console.log(this.keyEntries);
      });
      // this.tableData = [
      //   {
      //     rules: "租赁年限", //规则
      //     logic: "租赁年限大于五年", //逻辑
      //   },
      //   {
      //     rules: "1", //规则
      //     logic: "3", //逻辑
      //   },
      // ];
    },
    handleClick(tab, event) {
      // console.log(tab, event);
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
    padding-top: 40px;
    width: 50%;
    margin: 0 auto;
    .buttonGrunp {
      text-align: center;
    }
  }
}
</style>