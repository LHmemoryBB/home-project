<template>
  <el-main class="bg table_wrap">
    <el-form
      label-position="right"
      :model="query"
      class="form p_4"
      label-width="120"
    >
      <el-row class="rows row1">
        <el-col :xs="24" :sm="24" :lg="8" class="el_form_search_wrap">
          <el-form-item label="景点名称">
            <el-input v-model="query.attraction_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8" class="el_form_search_wrap">
          <el-form-item label="景点城市">
            <el-input v-model="query.attraction_cities"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8" class="el_form_search_wrap">
          <el-form-item label="景点地址">
            <el-input v-model="query.attraction_address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8" class="el_form_search_wrap">
          <el-form-item label="用户姓名">
            <el-input v-model="query.user_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8" class="el_form_search_wrap">
          <el-form-item label="支付状态">
            <el-select v-model="query.pay_state">
              <el-option value="">全部</el-option>
              <el-option value="未支付">未支付</el-option>
              <el-option value="已支付">已支付</el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="rows row2">
        <el-col :xs="24" :sm="24" :lg="24" class="search_btn_wrap search_btns">
          <el-col
            :xs="24"
            :sm="10"
            :lg="8"
            class="search_btn_1 search_btn_wrap_1 btns"
          >
            <el-button type="primary" @click="search()" class="search_btn_find"
              >查询</el-button
            >
            <el-button
              @click="reset()"
              style="margin-right: 74px"
              class="search_btn_reset"
              >重置</el-button
            >

            <el-button
              v-if="
                user_group == '管理员' ||
                $check_action('/attraction_reservation/table', 'add') ||
                $check_action('/attraction_reservation/view', 'add')
              "
              @click="$router.push('./view?')"
              class="add"
              >添加</el-button
            >

            <el-button
              v-if="
                user_group == '管理员' ||
                $check_action('/attraction_reservation/table', 'del') ||
                $check_action('/attraction_reservation/view', 'del')
              "
              class="search_btn_del"
              type="danger"
              @click="delInfo()"
              >删除</el-button
            >
          </el-col>
        </el-col>
      </el-row>
    </el-form>
    <el-table
      :data="list"
      @selection-change="selectionChange"
      @sort-change="$sortChange"
      style="width: 100%"
      id="dataTable"
    >
      <el-table-column fixed type="selection" tooltip-effect="dark" width="55">
      </el-table-column>
      <el-table-column
        prop="attraction_name"
        @sort-change="$sortChange"
        label="景点名称"
        v-if="user_group == '管理员' || $check_field('get', 'attraction_name')"
        min-width="200"
      >
      </el-table-column>
      <el-table-column
        prop="attraction_cities"
        @sort-change="$sortChange"
        label="景点城市"
        v-if="
          user_group == '管理员' || $check_field('get', 'attraction_cities')
        "
        min-width="200"
      >
      </el-table-column>
      <el-table-column
        prop="attraction_address"
        @sort-change="$sortChange"
        label="景点地址"
        v-if="
          user_group == '管理员' || $check_field('get', 'attraction_address')
        "
        min-width="200"
      >
      </el-table-column>
      <el-table-column
        prop="admission_price"
        @sort-change="$sortChange"
        label="门票价格"
        v-if="user_group == '管理员' || $check_field('get', 'admission_price')"
        min-width="200"
      >
      </el-table-column>
      <el-table-column
        prop="opening_hours"
        @sort-change="$sortChange"
        label="开放时间"
        v-if="user_group == '管理员' || $check_field('get', 'opening_hours')"
        min-width="200"
      >
      </el-table-column>
      <el-table-column
        prop="appointment_points"
        @sort-change="$sortChange"
        label="预约积分"
        v-if="
          user_group == '管理员' || $check_field('get', 'appointment_points')
        "
        min-width="200"
      >
      </el-table-column>
      <el-table-column
        prop="regular_users"
        @sort-change="$sortChange"
        label="普通用户"
        v-if="user_group == '管理员' || $check_field('get', 'regular_users')"
        min-width="200"
      >
        <template slot-scope="scope">
          {{ get_user_regular_users(scope.row["regular_users"]) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="user_name"
        @sort-change="$sortChange"
        label="用户姓名"
        v-if="user_group == '管理员' || $check_field('get', 'user_name')"
        min-width="200"
      >
      </el-table-column>
      <el-table-column
        prop="number_of_reservations"
        @sort-change="$sortChange"
        label="预约人数"
        v-if="
          user_group == '管理员' ||
          $check_field('get', 'number_of_reservations')
        "
        min-width="200"
      >
      </el-table-column>
      <el-table-column
        prop="time_period"
        @sort-change="$sortChange"
        label="预约时间段"
        v-if="
          user_group == '管理员' ||
          $check_field('get', 'number_of_reservations')
        "
        min-width="200"
      >
      </el-table-column>
      <el-table-column
        prop="appointment_time"
        @sort-change="$sortChange"
        label="预约时间"
        v-if="user_group == '管理员' || $check_field('get', 'appointment_time')"
        min-width="200"
      >
        <template slot-scope="scope">
          {{ $toTime(scope.row["appointment_time"], "yyyy-MM-dd") }}
        </template>
      </el-table-column>
      <el-table-column
        prop="appointment_amount"
        @sort-change="$sortChange"
        label="预约金额"
        v-if="
          user_group == '管理员' || $check_field('get', 'appointment_amount')
        "
        min-width="200"
      >
      </el-table-column>
      <el-table-column
        prop="obtainable_points"
        @sort-change="$sortChange"
        label="可得积分"
        v-if="
          user_group == '管理员' || $check_field('get', 'obtainable_points')
        "
        min-width="200"
      >
      </el-table-column>

      <el-table-column label="支付状态" prop="pay_state"> </el-table-column>

      <el-table-column
        sortable
        prop="create_time"
        label="创建时间"
        min-width="200"
      >
        <template slot-scope="scope">
          {{ $toTime(scope.row["create_time"], "yyyy-MM-dd hh:mm:ss") }}
        </template>
      </el-table-column>

      <el-table-column
        sortable
        prop="update_time"
        label="更新时间"
        min-width="200"
      >
        <template slot-scope="scope">
          {{ $toTime(scope.row["update_time"], "yyyy-MM-dd hh:mm:ss") }}
        </template>
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        min-width="120"
        v-if="
          user_group == '管理员' ||
          $check_action('/attraction_reservation/table', 'set') ||
          $check_action('/attraction_reservation/view', 'set') ||
          $check_action('/attraction_reservation/view', 'get') ||
          $check_action('/申请退票/table', 'add') ||
          $check_action('/申请退票/view', 'add')
        "
      >
        <template slot-scope="scope">
          <router-link
            class="el-button el-button--small is-plain el-button--success"
            style="margin: 5px !important"
            v-if="
              user_group == '管理员' ||
              $check_action('/attraction_reservation/table', 'set') ||
              $check_action('/attraction_reservation/view', 'set') ||
              $check_action('/attraction_reservation/view', 'get')
            "
            :to="'./view?' + field + '=' + scope.row[field]"
            size="small"
          >
            <span>详情</span>
          </router-link>
          <!--跨表按钮-->
          <el-button
            class="el-button el-button--small is-plain el-button--default"
            style="margin: 5px !important"
            size="small"
            @click="
              to_table(scope.row, '/tourist_attraction_ticket_refund/view')
            "
            v-if="
              user_group == '管理员' ||
              $check_action('/tourist_attraction_ticket_refund/table', 'add') ||
              $check_action('/tourist_attraction_ticket_refund/view', 'add')
            "
          >
            <span>申请退票</span>
          </el-button>
          <el-button
            class="el-button el-button--small is-plain el-button--default"
            style="margin: 5px !important"
            size="small"
            @click="openPayModal(scope.row)"
            v-if="
              scope.row.pay_state === '未支付' &&
              (user_group == '管理员' ||
                $check_pay('/attraction_reservation/table'))
            "
          >
            <span>支付</span>
          </el-button>
          <el-button
            class="el-button el-button--small is-plain el-button--default"
            style="margin: 5px !important"
            size="small"
            @click="openQrcodeModal(scope.row)"
          >
            <span>二维码</span>
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页器 -->
    <div class="mt text_center">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="query.page"
        :page-sizes="[7, 10, 30, 100]"
        :page-size="query.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="count"
      >
      </el-pagination>
    </div>
    <!-- /分页器 -->

    <el-dialog title="沙箱支付" :visible.sync="payModalVisible" width="500px">
      <div style="width: 80%; margin: 0 auto">
        <div style="width: 60%; margin: 30px auto">
          <el-image style="width: 100%" :src="pay_qrcode">
            <div slot="error" class="image-slot">
              <img
                src="../../../public/img/error.png"
                style="width: 90px; height: 90px"
              />
            </div>
          </el-image>
        </div>
        <div style="width: 80%; margin: 0 auto">
          <div
            style="
              width: 100%;
              background-color: #409eff;
              color: white;
              font-size: 14px;
              text-align: center;
              line-height: 40px;
              cursor: pointer;
            "
            @click="submitPay()"
          >
            确认支付
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog title="凭此二维码入场" :visible.sync="showQrcode" width="500px">
      <div></div>
      <div v-if="showQrcode" class="qr-code" ref="qrCodeUrl" style="width: 100%;display: flex;justify-content: center;"></div>
    </el-dialog>

    <div class="modal_wrap" v-if="showModal">
      <div class="modal_box">
        <!-- <div class="modal_box_close" @click="closeModal">X</div> -->
        <p class="modal_box_title">重要提醒</p>
        <p class="modal_box_text">当前有数据达到预警值！</p>
        <div class="btn_box">
          <span @click="closeModal">取消</span>
          <span @click="closeModal">确定</span>
        </div>
      </div>
    </div>
  </el-main>
</template>
<script>
import mixin from "@/mixins/page.js";
import QRCode from 'qrcodejs2'

export default {
  mixins: [mixin],
  data() {
    return {
      // 弹框
      showModal: false,
      // 获取数据地址
      url_get_list: "~/api/attraction_reservation/get_list?like=0",
      url_del: "~/api/attraction_reservation/del?",

      // 字段ID
      field: "attraction_reservation_id",
      qrValue:'',
      // 查询
      query: {
        size: 7,
        page: 1,
        attraction_name: "",
        attraction_cities: "",
        attraction_address: "",
        user_name: "",
        pay_state: "",
        login_time: "",
        create_time: "",
        orderby: `create_time desc`,
      },

      // 数据
      list: [],
      payModalVisible: false,
      showQrcode: false,
      pay_obj: {
        id: "",
      },
      pay_qrcode: "",
      // 用户列表
      list_user_regular_users: [],
    };
  },
  methods: {
    // 关闭弹框
    closeModal() {
      this.showModal = false;
    },

    get_list_before(param) {
      var user_group = this.$store.state.user.user_group;
      if (user_group != "管理员") {
        let sqlwhere = "(";
        if (user_group == "普通用户") {
          sqlwhere +=
            "regular_users = " + this.$store.state.user.user_id + " or ";
        }
        if (sqlwhere.length > 1) {
          sqlwhere = sqlwhere.substr(0, sqlwhere.length - 4);
          sqlwhere += ")";
          param["sqlwhere"] = sqlwhere;
        }
      }
      return param;
    },

    /**
     * 获取普通用户用户列表
     */
    async get_list_user_regular_users() {
      var json = await this.$get("~/api/user/get_list?user_group=普通用户");
      if (json.result && json.result.list) {
        this.list_user_regular_users = json.result.list;
      } else if (json.error) {
        console.error(json.error);
      }
    },

    get_user_regular_users(id) {
      var obj = this.list_user_regular_users.getObj({ user_id: id });
      var ret = "";
      if (obj) {
        ret = obj.nickname + "-" + obj.username;
        // if(obj.nickname){
        // 	ret = obj.nickname;
        // }
        // else{
        // 	ret = obj.username;
        // }
      }
      return ret;
    },
    openPayModal(v) {

      this.pay_obj.id = v.attraction_reservation_id;
      let goods_name = v.attraction_name;
      let pay_money = v.appointment_amount;

      window.open(
        "http://localhost:5000/api/attraction_reservation/pay?subject=" +
          goods_name +
          "&traceNo=" +
          v.attraction_reservation_id +
          "&totalAmount=" +
          pay_money
      );
      this.$message.success("请求支付宝成功");
    },
    openQrcodeModal(row){
      this.showQrcode = true
      setTimeout(()=>{
        let qrCode = new QRCode(this.$refs.qrCodeUrl, {
        text: `${row.attraction_address}`, // 二维码的内容
        width: 300,
        height: 300,
        colorDark: '#000',
        colorLight: '#fff',
        correctLevel: QRCode.CorrectLevel.H
      })
      qrCode._el.title = ''
      },400)
      
    },
    submitPay() {
      let _this = this;
      let url = this.$toUrl(
        this.query,
        "~/api/attraction_reservation/set?attraction_reservation_id=" +
          this.pay_obj.id
      );
      let param = { pay_state: "已支付" };
      this.$post(url, param, function (json, status) {
        console.log("提交结果：", json);
        if (json.result) {
          _this.$toast("支付成功！", "success");
          _this.payModalVisible = false;
          _this.get_list();
        } else if (json.error) {
          _this.$toast(json.error.message, "danger");
        }
      });
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
  created() {
    this.get_list_user_regular_users();
  },
};
</script>

<style type="text/css">
.bg {
  background: white;
}

.form.p_4 {
  padding: 1rem;
}

.form .el-input {
  width: initial;
}

.mt {
  margin-top: 1rem;
}

.text_center {
  text-align: center;
}

.float-right {
  float: right;
}

.modal_wrap {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999999999;
}

.modal_wrap .modal_box {
  width: 400px;
  height: 200px;
  background: url("../../assets/modal_bg.jpg") no-repeat center;
  background-size: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -100px;
  border-radius: 10px;
}

.modal_wrap .modal_box .modal_box_close {
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.modal_wrap .modal_box .modal_box_title {
  text-align: center;
  font-size: 18px;
  margin: 16px auto;
  color: #fff;
  border-bottom: 1px solid rgba(117, 116, 116, 0.5);
  padding-bottom: 16px;
  width: 356px;
}

.modal_wrap .modal_box .modal_box_text {
  text-align: center;
  font-size: 15px;
  color: #fff;
  margin-top: 25px;
}

.modal_wrap .modal_box .btn_box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 42px;
}

.modal_wrap .modal_box .btn_box span {
  display: inline-block;
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
  cursor: pointer;
  color: #fff;
}

.modal_wrap .modal_box .btn_box span:nth-child(2) {
  background: #409eff;
  color: #fff;
  border-color: #409eff;
  margin-left: 15px;
}
</style>
