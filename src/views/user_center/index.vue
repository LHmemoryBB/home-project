<template>
  <div class="page_user my_home" id="user_address">
    <div class="warp">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-12 col-md-3">
            <div class="card_menu">
              <!-- 左侧边栏 -->
              <list_admin_menu_user></list_admin_menu_user>
            </div>
          </div>
          <div class="col-12 col-md-9">
            <div class="card_addres pl-2">
              <div class="warp">
                <div class="container-fluid">
                  <el-row>
                    <div>欢迎来到2个人中心</div>
                  </el-row>
                  <el-row>
                    <el-col
                      v-if="
                        user_group == '管理员' ||
                        $check_figure('/attraction_reservation/table')
                      "
                      :span="8"
                    >
                      <div class="card chart">
                        <newLineChart
                          v-if="
                            line_obj_attraction_reservation.values.length > 0
                          "
                          id="line_obj_attraction_reservation"
                          :vm="line_obj_attraction_reservation"
                          :title="'景点预约统计'"
                        >
                        </newLineChart>
                        <div
                          v-if="!line_obj_attraction_reservation.values.length"
                        >
                          景点预约没有符合条件的数据
                        </div>
                      </div>
                    </el-col>
                    <el-col
                      v-if="
                        user_group == '管理员' ||
                        $check_figure('/homestay_reservation/table')
                      "
                      :span="8"
                    >
                      <div class="card chart">
                        <stackedHorizontalBarChart
                          v-if="bar_obj_homestay_reservation.values.length > 0"
                          id="bar_obj_homestay_reservation"
                          :vm="bar_obj_homestay_reservation"
                          :title="'民宿预约统计'"
                        >
                        </stackedHorizontalBarChart>
                        <div v-if="!bar_obj_homestay_reservation.values.length">
                          民宿预约没有符合条件的数据
                        </div>
                      </div>
                    </el-col>
                    <el-col
                      v-if="
                        user_group == '管理员' ||
                        $check_figure('/product_exchange/table')
                      "
                      :span="8"
                    >
                      <div class="card chart">
                        <newBarChart
                          v-if="bar_obj_product_exchange.values.length > 0"
                          id="bar_obj_product_exchange"
                          :vm="bar_obj_product_exchange"
                          :title="'商品兑换统计'"
                        >
                        </newBarChart>
                        <div v-if="!bar_obj_product_exchange.values.length">
                          商品兑换没有符合条件的数据
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import list_admin_menu_user from "@/components/diy/list_admin_menu_user.vue";
import newBarChart from "@/components/charts/new_bar_chart";
import newLineChart from "@/components/charts/new_line_chart";
import stackedHorizontalBarChart from "@/components/charts/stacked_horizontal_bar_chart";
export default {
  data() {
    return {
      line_obj_attraction_reservation: {
        names: [],
        xAxis: [],
        values: [],
      },
      bar_obj_homestay_reservation: {
        names: [],
        xAxis: [],
        values: [],
      },
      bar_obj_product_exchange: {
        names: [],
        xAxis: [],
        values: [],
      },
    };
  },
  mounted() {},
  methods: {
    async get_nickname(list, flag) {
      if (flag) {
        for (let i = 0; i < list.length; i++) {
          await this.$get(
            "~/api/user/get_obj?user_id=" + list[i],
            null,
            (json) => {
              if (json.result) {
                list[i] = json.result.obj.nickname;
              }
            }
          );
        }
      } else {
        for (let i = 0; i < list.length; i++) {
          await this.$get(
            "~/api/user/get_obj?user_id=" + list[i].name,
            null,
            (json) => {
              if (json.result) {
                list[i].name = json.result.obj.nickname;
              }
            }
          );
        }
      }
    },
    // 获取景点预约统计图
    async get_list_attraction_reservation() {
      let group_by_value = "attraction_name";
      let data = {};
      let flag = false;
      let user_group = this.$store.state.user.user_group;
      let user_id = this.$store.state.user.user_id;
      if (user_group != "管理员") {
        let sqlwhere = "(";
        if (user_group == "普通用户") {
          sqlwhere += "regular_users = " + user_id + " or ";
        }
        if (sqlwhere.length > 1) {
          sqlwhere = sqlwhere.substr(0, sqlwhere.length - 4);
          sqlwhere += ")";
          data.sqlwhere = sqlwhere;
        }
      }
      await this.$get(
        "~/api/attraction_reservation/get_list?groupby=" + group_by_value,
        data,
        (json) => {
          if (json.result) {
            let list = json.result.list;
            let name_list = [];
            for (let i = 0; i < list.length; i++) {
              name_list.push(list[i].attraction_name);
            }
            this.line_obj_attraction_reservation.names = name_list;
            this.get_list_attraction_reservation_sub("attraction_name", flag);
          }
        }
      );
    },
    async get_list_attraction_reservation_sub(v1, names_flag) {
      let data = {};
      let flag = false;
      let user_group = this.$store.state.user.user_group;
      let user_id = this.$store.state.user.user_id;
      if (user_group != "管理员") {
        let sqlwhere = "(";
        if (user_group == "普通用户") {
          sqlwhere += "regular_users = " + user_id + " or ";
        }
        if (sqlwhere.length > 1) {
          sqlwhere = sqlwhere.substr(0, sqlwhere.length - 4);
          sqlwhere += ")";
          data.sqlwhere = sqlwhere;
        }
      }
      await this.$get(
        "~/api/attraction_reservation/get_list?groupby=appointment_time",
        data,
        (json) => {
          if (json.result) {
            let list = json.result.list;
            let xAxis_list = [];
            for (let i = 0; i < list.length; i++) {
              xAxis_list.push(
                this.$toTime(list[i].appointment_time, "yyyy-MM-dd")
              );
            }
            this.line_obj_attraction_reservation.xAxis = xAxis_list;
            this.get_list_attraction_reservation_sub_sub(
              v1,
              "appointment_time",
              names_flag,
              flag
            );
          }
        }
      );
    },
    async get_list_attraction_reservation_sub_sub(
      v1,
      v2,
      names_flag,
      xAxis_flag
    ) {
      let data_str = '{"' + v1 + '":"","' + v2 + '":""}';
      let data = JSON.parse(data_str);
      let user_group = this.$store.state.user.user_group;
      let user_id = this.$store.state.user.user_id;
      if (user_group != "管理员") {
        let sqlwhere = "(";
        if (user_group == "普通用户") {
          sqlwhere += "regular_users = " + user_id + " or ";
        }
        if (sqlwhere.length > 1) {
          sqlwhere = sqlwhere.substr(0, sqlwhere.length - 4);
          sqlwhere += ")";
          data.sqlwhere = sqlwhere;
        }
      }
      for (
        let i = 0;
        i < this.line_obj_attraction_reservation.xAxis.length;
        i++
      ) {
        let list = [];
        for (
          let j = 0;
          j < this.line_obj_attraction_reservation.names.length;
          j++
        ) {
          data[v2] = this.line_obj_attraction_reservation.xAxis[i];
          data[v1] = this.line_obj_attraction_reservation.names[j];
          await this.$get(
            "~/api/attraction_reservation/sum?field=number_of_reservations",
            data,
            (json) => {
              if (json.result) {
                list[j] = json.result;
              } else {
                list[j] = 0;
              }
            }
          );
        }
        this.line_obj_attraction_reservation.values.push(list);
      }
      if (names_flag) {
        this.get_nickname(this.line_obj_attraction_reservation.names, true);
      }
      if (xAxis_flag) {
        this.get_nickname(this.line_obj_attraction_reservation.xAxis, true);
      }
    },
    // 获取民宿预约统计图
    async get_list_homestay_reservation() {
      let name_list = [];
      let query_str = "";
      let group_by_value = "homestay_room_type";
      let flag = false;
      let date_flag = "其他";
      name_list.push("预约数量");
      query_str = query_str + "appointment_quantity" + ",";
      this.bar_obj_homestay_reservation.names = name_list;
      query_str = query_str.substr(0, query_str.length - 1);
      let data = {};
      let user_group = this.$store.state.user.user_group;
      let user_id = this.$store.state.user.user_id;
      if (user_group != "管理员") {
        let sqlwhere = "(";
        if (user_group == "普通用户") {
          sqlwhere += "regular_users = " + user_id + " or ";
        }
        if (sqlwhere.length > 1) {
          sqlwhere = sqlwhere.substr(0, sqlwhere.length - 4);
          sqlwhere += ")";
          data.sqlwhere = sqlwhere;
        }
      }
      await this.$get(
        "~/api/homestay_reservation/bar_group?field=" +
          query_str +
          "&groupby=" +
          group_by_value,
        data,
        (json) => {
          if (json.result) {
            let xAxis = [];
            let values = [];
            json.result.list.map((o) => {
              if (date_flag === "日期") {
                xAxis.push(this.$toTime(o[0], "yyyy-MM-dd"));
              } else if (date_flag === "时间") {
                xAxis.push(this.$toTime(o[0], "hh:mm:ss"));
              } else if (date_flag === "日长") {
                xAxis.push(this.$toTime(o[0], "yyyy-MM-dd hh:mm:ss"));
              } else {
                xAxis.push(o[0]);
              }
              values.push(o.splice(1));
            });
            this.bar_obj_homestay_reservation.xAxis = xAxis;
            this.bar_obj_homestay_reservation.values = values;
          }
          if (flag) {
            this.get_nickname(this.bar_obj_homestay_reservation.xAxis, true);
          }
        }
      );
    },
    // 获取商品兑换统计图
    async get_list_product_exchange() {
      let name_list = [];
      let query_str = "";
      let group_by_value = "product_type";
      let flag = false;
      let date_flag = "其他";
      name_list.push("兑换数量");
      query_str = query_str + "exchange_quantity" + ",";
      this.bar_obj_product_exchange.names = name_list;
      query_str = query_str.substr(0, query_str.length - 1);
      let data = {};
      let user_group = this.$store.state.user.user_group;
      let user_id = this.$store.state.user.user_id;
      if (user_group != "管理员") {
        let sqlwhere = "(";
        if (user_group == "普通用户") {
          sqlwhere += "regular_users = " + user_id + " or ";
        }
        if (sqlwhere.length > 1) {
          sqlwhere = sqlwhere.substr(0, sqlwhere.length - 4);
          sqlwhere += ")";
          data.sqlwhere = sqlwhere;
        }
      }
      await this.$get(
        "~/api/product_exchange/bar_group?field=" +
          query_str +
          "&groupby=" +
          group_by_value,
        data,
        (json) => {
          if (json.result) {
            let xAxis = [];
            let values = [];
            json.result.list.map((o) => {
              if (date_flag === "日期") {
                xAxis.push(this.$toTime(o[0], "yyyy-MM-dd"));
              } else if (date_flag === "时间") {
                xAxis.push(this.$toTime(o[0], "hh:mm:ss"));
              } else if (date_flag === "日长") {
                xAxis.push(this.$toTime(o[0], "yyyy-MM-dd hh:mm:ss"));
              } else {
                xAxis.push(o[0]);
              }
              values.push(o.splice(1));
            });
            this.bar_obj_product_exchange.xAxis = xAxis;
            this.bar_obj_product_exchange.values = values;
          }
          if (flag) {
            this.get_nickname(this.bar_obj_product_exchange.xAxis, true);
          }
        }
      );
    },
  },
  created() {
    // 执行景点预约数据获取
    this.get_list_attraction_reservation();
    // 执行民宿预约数据获取
    this.get_list_homestay_reservation();
    // 执行商品兑换数据获取
    this.get_list_product_exchange();
  },
  components: {
    newBarChart,
    newLineChart,
    stackedHorizontalBarChart,
    list_admin_menu_user,
  },
};
</script>

<style scoped>
.container {
  min-height: 800px;
}
</style>
