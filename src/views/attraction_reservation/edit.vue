<template>
  <div
    class="diy_edit page_attraction_reservation"
    id="attraction_reservation_edit"
  >
    <div class="warp">
      <div class="container">
        <div class="row diy_edit_content_box">
          <div
            v-if="
              $check_field('set', 'attraction_name') ||
              $check_field('add', 'attraction_name') ||
              $check_field('get', 'attraction_name')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 景点名称: </span>
            </div>
            <!-- 文本 -->
            <div class="diy_field diy_text">
              <el-input
                type="text"
                id="form_attraction_name"
                v-model="form['attraction_name']"
                placeholder="请输入景点名称"
                v-if="
                  (form['attraction_name'] &&
                    $check_field('set', 'attraction_name')) ||
                  (!form['attraction_name'] &&
                    $check_field('add', 'attraction_name'))
                "
                :disabled="disabledObj['attraction_name_isDisabled']"
              />
              <span v-else-if="$check_field('get', 'attraction_name')">{{
                form["${obj.name}"]
              }}</span>
            </div>
          </div>
          <div
            v-if="
              $check_field('set', 'attraction_cities') ||
              $check_field('add', 'attraction_cities') ||
              $check_field('get', 'attraction_cities')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 景点城市: </span>
            </div>
            <!-- 文本 -->
            <div class="diy_field diy_text">
              <el-input
                type="text"
                id="form_attraction_cities"
                v-model="form['attraction_cities']"
                placeholder="请输入景点城市"
                v-if="
                  (form['attraction_cities'] &&
                    $check_field('set', 'attraction_cities')) ||
                  (!form['attraction_cities'] &&
                    $check_field('add', 'attraction_cities'))
                "
                :disabled="disabledObj['attraction_cities_isDisabled']"
              />
              <span v-else-if="$check_field('get', 'attraction_cities')">{{
                form["${obj.name}"]
              }}</span>
            </div>
          </div>
          <div
            v-if="
              $check_field('set', 'attraction_address') ||
              $check_field('add', 'attraction_address') ||
              $check_field('get', 'attraction_address')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 景点地址: </span>
            </div>
            <!-- 文本 -->
            <div class="diy_field diy_text">
              <el-input
                type="text"
                id="form_attraction_address"
                v-model="form['attraction_address']"
                placeholder="请输入景点地址"
                v-if="
                  (form['attraction_address'] &&
                    $check_field('set', 'attraction_address')) ||
                  (!form['attraction_address'] &&
                    $check_field('add', 'attraction_address'))
                "
                :disabled="disabledObj['attraction_address_isDisabled']"
              />
              <span v-else-if="$check_field('get', 'attraction_address')">{{
                form["${obj.name}"]
              }}</span>
            </div>
          </div>
          <div
            v-if="
              $check_field('set', 'admission_price') ||
              $check_field('add', 'admission_price') ||
              $check_field('get', 'admission_price')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 门票价格: </span>
            </div>
            <!-- 数字 -->
            <div class="diy_field diy_number">
              <el-input
                type="number"
                id="form_admission_price"
                v-model.number="form['admission_price']"
                placeholder="请输入门票价格"
                v-if="
                  (form['admission_price'] &&
                    $check_field('set', 'admission_price')) ||
                  (!form['admission_price'] &&
                    $check_field('add', 'admission_price'))
                "
                :disabled="disabledObj['admission_price_isDisabled']"
              />
              <span v-else-if="$check_field('get', 'admission_price')">{{
                form["${obj.name}"]
              }}</span>
            </div>
          </div>
          <div
            v-if="
              $check_field('set', 'opening_hours') ||
              $check_field('add', 'opening_hours') ||
              $check_field('get', 'opening_hours')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 开放时间: </span>
            </div>
            <!-- 文本 -->
            <div class="diy_field diy_text">
              <el-input
                type="text"
                id="form_opening_hours"
                v-model="form['opening_hours']"
                placeholder="请输入开放时间"
                v-if="
                  (form['opening_hours'] &&
                    $check_field('set', 'opening_hours')) ||
                  (!form['opening_hours'] &&
                    $check_field('add', 'opening_hours'))
                "
                :disabled="disabledObj['opening_hours_isDisabled']"
              />
              <span v-else-if="$check_field('get', 'opening_hours')">{{
                form["${obj.name}"]
              }}</span>
            </div>
          </div>
          <div
            v-if="
              $check_field('set', 'appointment_points') ||
              $check_field('add', 'appointment_points') ||
              $check_field('get', 'appointment_points')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 预约积分: </span>
            </div>
            <!-- 数字 -->
            <div class="diy_field diy_number">
              <el-input
                type="number"
                id="form_appointment_points"
                v-model.number="form['appointment_points']"
                placeholder="请输入预约积分"
                v-if="
                  (form['appointment_points'] &&
                    $check_field('set', 'appointment_points')) ||
                  (!form['appointment_points'] &&
                    $check_field('add', 'appointment_points'))
                "
                :disabled="disabledObj['appointment_points_isDisabled']"
              />
              <span v-else-if="$check_field('get', 'appointment_points')">{{
                form["${obj.name}"]
              }}</span>
            </div>
          </div>
          <div
            v-if="
              $check_field('set', 'regular_users') ||
              $check_field('add', 'regular_users') ||
              $check_field('get', 'regular_users')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 普通用户: </span>
            </div>
            <div class="diy_field diy_down">
              <el-select
                id="form_regular_users"
                :disabled="disabledObj['regular_users_isDisabled']"
                v-model="form['regular_users']"
                v-if="
                  (form['regular_users'] &&
                    $check_field('set', 'regular_users')) ||
                  (!form['regular_users'] &&
                    $check_field('add', 'regular_users'))
                "
              >
                <el-option
                  v-for="(o, index) in list_user_regular_users"
                  :key="index"
                  :value="o['user_id']"
                  :label="o.nickname"
                >
                  <!-- {{ o["nickname"] + "-" + o["username"] }} -->
                </el-option>
              </el-select>
              <span v-else-if="$check_field('get', 'regular_users')">{{
                form["regular_users"]
              }}</span>
            </div>
          </div>
          <div
            v-if="
              $check_field('set', 'user_name') ||
              $check_field('add', 'user_name') ||
              $check_field('get', 'user_name')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 用户姓名: </span>
            </div>
            <!-- 文本 -->
            <div class="diy_field diy_text">
              <el-input
                type="text"
                id="form_user_name"
                v-model="form['user_name']"
                placeholder="请输入用户姓名"
                v-if="
                  (form['user_name'] && $check_field('set', 'user_name')) ||
                  (!form['user_name'] && $check_field('add', 'user_name'))
                "
                :disabled="disabledObj['user_name_isDisabled']"
              />
              <span v-else-if="$check_field('get', 'user_name')">{{
                form["${obj.name}"]
              }}</span>
            </div>
          </div>
          <div
            v-if="
              $check_field('set', 'number_of_reservations') ||
              $check_field('add', 'number_of_reservations') ||
              $check_field('get', 'number_of_reservations')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 预约人数: </span>
            </div>
            <!-- 数字 -->
            <div class="diy_field diy_number">
              <el-input
                type="number"
                id="form_number_of_reservations"
                v-model.number="form['number_of_reservations']"
                placeholder="请输入预约人数"
                v-if="
                  (form['number_of_reservations'] &&
                    $check_field('set', 'number_of_reservations')) ||
                  (!form['number_of_reservations'] &&
                    $check_field('add', 'number_of_reservations'))
                "
                :disabled="disabledObj['number_of_reservations_isDisabled']"
                @input="set_appointment_amount(), set_obtainable_points()"
              />
              <span v-else-if="$check_field('get', 'number_of_reservations')">{{
                form["${obj.name}"]
              }}</span>
            </div>
          </div>
          <div
            v-if="
              $check_field('set', 'appointment_time') ||
              $check_field('add', 'appointment_time') ||
              $check_field('get', 'appointment_time')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 预约时间: </span>
            </div>
            <!-- 日期 -->
            <div class="diy_field diy_date">
              <el-date-picker
                v-model="form['appointment_time']"
                :disabled="disabledObj['appointment_time_isDisabled']"
                type="date"
                :picker-options="pickerOptions"
                placeholder="请选择预约时间"
                v-if="
                  (form['appointment_time'] &&
                    $check_field('set', 'appointment_time')) ||
                  (!form['appointment_time'] &&
                    $check_field('add', 'appointment_time'))
                "
                @change="handleChange"
              >
              </el-date-picker>
              <!-- <el-input
                type="date"
                :disabled="disabledObj['appointment_time_isDisabled']"
                id="form_appointment_time"
                v-model="form['appointment_time']"
                placeholder="请输入预约时间"
                v-if="
                  (form['appointment_time'] &&
                    $check_field('set', 'appointment_time')) ||
                  (!form['appointment_time'] &&
                    $check_field('add', 'appointment_time'))
                "
              /> -->
              <span v-else-if="$check_field('get', 'appointment_time')">{{
                form["${obj.name}"]
              }}</span>
            </div>
          </div>
          <div
            v-if="
              $check_field('set', 'appointment_amount') ||
              $check_field('add', 'appointment_amount') ||
              $check_field('get', 'appointment_amount')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 预约金额: </span>
            </div>
            <!-- 文本 -->
            <div class="diy_field diy_text">
              <el-input
                type="text"
                id="form_appointment_amount"
                v-model="form['appointment_amount']"
                placeholder="请输入预约金额"
                v-if="
                  (form['appointment_amount'] &&
                    $check_field('set', 'appointment_amount')) ||
                  (!form['appointment_amount'] &&
                    $check_field('add', 'appointment_amount'))
                "
                :disabled="true"
              />
              <span v-else-if="$check_field('get', 'appointment_amount')">{{
                form["${obj.name}"]
              }}</span>
            </div>
          </div>
          <div
            v-if="
              $check_field('set', 'obtainable_points') ||
              $check_field('add', 'obtainable_points') ||
              $check_field('get', 'obtainable_points')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 可得积分: </span>
            </div>
            <!-- 文本 -->
            <div class="diy_field diy_text">
              <el-input
                type="text"
                id="form_obtainable_points"
                v-model="form['obtainable_points']"
                placeholder="请输入可得积分"
                v-if="
                  (form['obtainable_points'] &&
                    $check_field('set', 'obtainable_points')) ||
                  (!form['obtainable_points'] &&
                    $check_field('add', 'obtainable_points'))
                "
                :disabled="true"
              />
              <span v-else-if="$check_field('get', 'obtainable_points')">{{
                form["${obj.name}"]
              }}</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            v-if="
              $check_field('set', 'attraction_name') ||
              $check_field('add', 'attraction_name') ||
              $check_field('get', 'attraction_name')
            "
            class="form-item2"
          >
            <div>
              <span class="text"> 选择预约时间段 </span>
            </div>
            <!-- 文本 -->
            <div class="display_div">
              <div
                v-for="(item, index) in timeObj"
                :key="index"
                :style="{
                  background:
                    activeIndex === index
                      ? '#58b7f2'
                      : item.syrs > 0
                      ? '#eaf7ff'
                      : '#f2f2f2',
                }"
                @click="changeBack(index, item.syrs)"
              >
                <div>时间{{ item.timeSlot }}</div>
                <div>剩余人数{{ item.syrs }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="diy_edit_submit_box row">
          <div class="col-12">
            <div class="btn_box">
              <button class="btn_submit" @click="submit()">提交</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from "@/mixins/page.js";
export default {
  mixins: [mixin],
  components: {},
  data() {
    return {
      url_get_obj: "~/api/attraction_reservation/get_obj?",
      url_add: "~/api/attraction_reservation/add?",
      url_set: "~/api/attraction_reservation/set?",

      // 登录权限
      oauth: {
        signIn: true,
        user_group: [],
      },
      pickerOptions: {
        disabledDate(time) {
          // 获取当前时间
          const now = new Date();

          // 获取今天的时间
          const today = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate()
          );

          // 获取未来7天后的时间
          const futureSevenDays = new Date();
          futureSevenDays.setDate(now.getDate() + 7);

          // 如果时间在今天之前或未来7天之后，则禁用
          return (
            time.getTime() <= today.getTime() ||
            time.getTime() > futureSevenDays.getTime()
          );
        },
      },
      radio1: "",
      // 查询条件
      query: {
        attraction_name: "",
        attraction_cities: "",
        attraction_address: "",
        admission_price: 0,
        opening_hours: "",
        appointment_points: 0,
        regular_users: 0,
        user_name: "",
        number_of_reservations: 0,
        appointment_time: "",
        appointment_amount: "",
        obtainable_points: "",
        attraction_reservation_id: 0,
      },

      obj: {
        attraction_name: "", // 景点名称
        attraction_cities: "", // 景点城市
        attraction_address: "", // 景点地址
        admission_price: 0, // 门票价格
        opening_hours: "", // 开放时间
        appointment_points: 0, // 预约积分
        regular_users: 0, // 普通用户
        user_name: "", // 用户姓名
        number_of_reservations: 0, // 预约人数
        appointment_time: new Date(Date.now() + 86400000)
          .toISOString()
          .split("T")[0],
        appointment_amount: "", // 预约金额
        obtainable_points: "", // 可得积分
        attraction_reservation_id: 0,
        timeObj: {},
      },
      activeIndex: "",
      // 表单字段
      form: {
        attraction_name: "", // 景点名称
        attraction_cities: "", // 景点城市
        attraction_address: "", // 景点地址
        admission_price: 0, // 门票价格
        opening_hours: "", // 开放时间
        appointment_points: 0, // 预约积分
        regular_users: 0, // 普通用户
        user_name: "", // 用户姓名
        number_of_reservations: 0, // 预约人数
        appointment_time: new Date(Date.now() + 86400000)
          .toISOString()
          .split("T")[0],
        appointment_amount: "", // 预约金额
        obtainable_points: "", // 可得积分
        attraction_reservation_id: 0,
        time_obj: {},
      },
      disabledObj: {
        attraction_name_isDisabled: false,
        attraction_cities_isDisabled: false,
        attraction_address_isDisabled: false,
        opening_hours_isDisabled: false,
        regular_users_isDisabled: false,
        user_name_isDisabled: false,
        appointment_time_isDisabled: false,
        appointment_amount_isDisabled: false,
        obtainable_points_isDisabled: false,
      },

      // 用户列表
      list_user_regular_users: [],

      // ID字段
      field: "attraction_reservation_id",
    };
  },
  methods: {
    /**
     * 提交前验证事件
     * @param {Object} 请求参数
     * @return {String} 验证成功返回null, 失败返回错误提示
     */
    submit_check(param) {
      if (!param.appointment_time) {
        return "预约时间不能为空";
      }
      return null;
    },

    /**
     * 获取普通用户用户列表
     */
    async get_list_user_regular_users() {
      // if(this.user_group !== "管理员" && this.form["regular_users"] === 0) {
      //     this.form["regular_users"] = this.user.user_id;
      // }
      var json = await this.$get("~/api/user/get_list?user_group=普通用户");
      if (json.result && json.result.list) {
        this.list_user_regular_users = json.result.list;
      } else if (json.error) {
        console.error(json.error);
      }
    },
    async get_user_session_regular_users() {
      var _this = this;
      var json = await this.$get("~/api/user_group/get_obj?name=普通用户");
      if (json.result && json.result.obj) {
        var source_table = json.result.obj.source_table;
        var user_id = _this.$store.state.user.user_id;
        if (user_id) {
          var url = "~/api/" + source_table + "/get_obj?";
          this.$get(
            url,
            { user_id: _this.$store.state.user.user_id },
            function (res) {
              if (res.result && res.result.obj) {
                var arr = [];
                for (let key in res.result.obj) {
                  arr.push(key);
                }
                var arrForm = [];
                for (let key in _this.form) {
                  arrForm.push(key);
                }
                _this.form["regular_users"] = user_id;
                _this.disabledObj["regular_users" + "_isDisabled"] = true;
                for (var i = 0; i < arr.length; i++) {
                  if (
                    arr[i] !== "examine_state" &&
                    arr[i] !== "examine_reply"
                  ) {
                    for (var j = 0; j < arrForm.length; j++) {
                      if (arr[i] === arrForm[j]) {
                        if (arr[i] !== "regular_users") {
                          _this.form[arrForm[j]] = res.result.obj[arr[i]];
                          _this.disabledObj[arrForm[j] + "_isDisabled"] = true;
                          break;
                        }
                      }
                    }
                  }
                }
              }
            }
          );
        }
      } else if (json.error) {
        console.error(json.error);
      }
    },

    set_appointment_amount() {
      console.log(this.form, "asdasdsa");
      this.form.appointment_amount =
        parseFloat(this.form.admission_price) *
        parseFloat(this.form.number_of_reservations);

      let r = /^\+?[1-9][0-9]*$/; // 正整数
      console.log(
        !r.test(this.form.appointment_amount),
        this.form.number_of_reservations,
        this.form.appointment_amount,
        "number_of_reservations"
      );
      if (this.form.number_of_reservations) {
        this.form.appointment_amount = this.form.appointment_amount.toFixed(2);
      } else {
        this.form.appointment_amount = "0.00";
      }
    },

    set_obtainable_points() {
      this.form.obtainable_points =
        parseFloat(this.form.appointment_points) *
        parseFloat(this.form.number_of_reservations);
      let r = /^\+?[1-9][0-9]*$/; // 正整数
      if (this.form.number_of_reservations) {
        this.form.obtainable_points = this.form.obtainable_points.toFixed(2);
      } else {
        this.form.obtainable_points = "0.00";
      }
    },

    /**
     * 修改文件
     * @param { Object } files 上传文件对象
     * @param { String } str 表单的属性名
     */
    change_file(files, str) {
      var form = new FormData();
      form.append("file", files[0]);
      this.$post("~/api/attraction_reservation/upload?", form, (res) => {
        if (res.result) {
          this.form[str] = res.result.url;
        } else if (res.error) {
          this.$toast(res.error.message);
        }
      });
    },

    handleChange(data) {
      this.form["appointment_time"] = this.$dayJs(data).format(
        "YYYY-MM-DD HH:mm:ss"
      );
    },

    /**
     * 获取对象后获取缓存表单
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_before(param) {
      var form = $.db.get("form");
      // if (form) {
      //   delete(form.examine_state)
      //   delete(form.examine_reply)
      //   this.obj = $.push(this.obj ,form);
      // 	this.form = $.push(this.form ,form);
      // }
      // var arr = []
      // for (let key in form) {
      // 	arr.push(key)
      // }
      // for (var i=0;i<arr.length;i++){
      // 	this.disabledObj[arr[i] + '_isDisabled'] = true
      // }
      if (form) {
        var arr = [];
        for (let key in form) {
          arr.push(key);
        }
        var arrForm = [];
        for (let key in this.form) {
          arrForm.push(key);
        }
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] !== "examine_state" && arr[i] !== "examine_reply") {
            for (var j = 0; j < arrForm.length; j++) {
              if (arrForm[j] === arr[i]) {
                this.form[arrForm[j]] = form[arr[i]];
                this.obj[arrForm[j]] = form[arr[i]];
                this.disabledObj[arrForm[j] + "_isDisabled"] = true;
                break;
              }
            }
          }
        }
      }
      if (
        this.form["appointment_time"] &&
        JSON.stringify(this.form["appointment_time"]).indexOf("-") === -1
      ) {
        this.form["appointment_time"] = this.$toTime(
          parseInt(this.form["appointment_time"]),
          "yyyy-MM-dd"
        );
      }

      $.db.del("form");
      return param;
    },
    changeBack(index, syrs) {
      if (syrs === 0) {
        this.$message('预约人数已达上限')
        return false
      }
      this.activeIndex = index;
    },
    /**
     * 获取对象后获取缓存表单
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_after(json, func) {
      // var form = $.db.get("form");
      // var obj = Object.assign({} ,form ,this.obj);
      // if (obj) {
      //   delete(obj.examine_state)
      //   delete(obj.examine_reply)
      // 	this.obj = $.push(this.obj ,obj);
      // }
      // if (form) {
      //   delete(form.examine_state)
      //   delete(form.examine_reply)
      // 	this.form = $.push(this.form ,form);
      // }

      if (func) {
        func(json);
      }
    },
  },
  computed: {
    timeObj() {
      if (this.form["time_obj"]) {
        const arr = JSON.parse(this.form.time_obj).timeSlots;
        arr.forEach((element) => {
          element.syrs = element.maxPeople - Math.floor(Math.random() * (element.maxPeople - 1)) + 1;;
        });
        return arr;
      }
    },
  },
  created() {
    this.get_user_session_regular_users();
    this.get_list_user_regular_users();
  },
};
</script>

<style scoped lang="less">
.form-item2 {
  width: 100%;
  padding: 10px;
  .text {
    font-size: 20px;
    font-weight: 600;
    color: #d19233;
    text-align: center;
  }
  .display_div {
    display: flex;
    > div {
      border-radius: 8px;
      padding: 10px;
      margin: 0 10px;
      background: #f2f2f2;
      cursor: pointer;
    }
  }
}
</style>
