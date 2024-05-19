<template>
  <el-main class="bg edit_wrap">
    <el-form
      ref="form"
      :model="form"
      status-icon
      label-width="120px"
      v-if="is_view()"
    >
      <el-row class="row_ce">
        <el-col
          v-if="
            user_group === '管理员' ||
            $check_field('get', 'homestay_name') ||
            $check_field('add', 'homestay_name') ||
            $check_field('set', 'homestay_name')
          "
          :xs="24"
          :sm="12"
          :lg="8"
          class="el_form_item_warp"
        >
          <el-form-item label="民宿名称" prop="homestay_name">
            <el-input
              id="homestay_name"
              v-model="form['homestay_name']"
              placeholder="请输入民宿名称"
              v-if="
                user_group === '管理员' ||
                (form['homestay_reservation_id'] &&
                  $check_field('set', 'homestay_name')) ||
                (!form['homestay_reservation_id'] &&
                  $check_field('add', 'homestay_name'))
              "
              :disabled="disabledObj['homestay_name_isDisabled']"
            ></el-input>
            <div v-else-if="$check_field('get', 'homestay_name')">
              {{ form["homestay_name"] }}
            </div>
          </el-form-item>
        </el-col>
        <el-col
          v-if="
            user_group === '管理员' ||
            $check_field('get', 'homestay_address') ||
            $check_field('add', 'homestay_address') ||
            $check_field('set', 'homestay_address')
          "
          :xs="24"
          :sm="12"
          :lg="8"
          class="el_form_item_warp"
        >
          <el-form-item label="民宿地址" prop="homestay_address">
            <el-input
              id="homestay_address"
              v-model="form['homestay_address']"
              placeholder="请输入民宿地址"
              v-if="
                user_group === '管理员' ||
                (form['homestay_reservation_id'] &&
                  $check_field('set', 'homestay_address')) ||
                (!form['homestay_reservation_id'] &&
                  $check_field('add', 'homestay_address'))
              "
              :disabled="disabledObj['homestay_address_isDisabled']"
            ></el-input>
            <div v-else-if="$check_field('get', 'homestay_address')">
              {{ form["homestay_address"] }}
            </div>
          </el-form-item>
        </el-col>
        <el-col
          v-if="
            user_group === '管理员' ||
            $check_field('get', 'homestay_room_type') ||
            $check_field('add', 'homestay_room_type') ||
            $check_field('set', 'homestay_room_type')
          "
          :xs="24"
          :sm="12"
          :lg="8"
          class="el_form_item_warp"
        >
          <el-form-item label="民宿房型" prop="homestay_room_type">
            <el-input
              id="homestay_room_type"
              v-model="form['homestay_room_type']"
              placeholder="请输入民宿房型"
              v-if="
                user_group === '管理员' ||
                (form['homestay_reservation_id'] &&
                  $check_field('set', 'homestay_room_type')) ||
                (!form['homestay_reservation_id'] &&
                  $check_field('add', 'homestay_room_type'))
              "
              :disabled="disabledObj['homestay_room_type_isDisabled']"
            ></el-input>
            <div v-else-if="$check_field('get', 'homestay_room_type')">
              {{ form["homestay_room_type"] }}
            </div>
          </el-form-item>
        </el-col>
        <el-col
          v-if="
            user_group === '管理员' ||
            $check_field('get', 'homestay_prices') ||
            $check_field('add', 'homestay_prices') ||
            $check_field('set', 'homestay_prices')
          "
          :xs="24"
          :sm="12"
          :lg="8"
          class="el_form_item_warp"
        >
          <el-form-item label="民宿价格" prop="homestay_prices">
            <el-input-number
              id="homestay_prices"
              v-model.number="form['homestay_prices']"
              v-if="
                user_group === '管理员' ||
                (form['homestay_reservation_id'] &&
                  $check_field('set', 'homestay_prices')) ||
                (!form['homestay_reservation_id'] &&
                  $check_field('add', 'homestay_prices'))
              "
              :disabled="disabledObj['homestay_prices_isDisabled']"
            ></el-input-number>
            <div v-else-if="$check_field('get', 'homestay_prices')">
              {{ form["homestay_prices"] }}
            </div>
          </el-form-item>
        </el-col>
        <el-col
          v-if="
            user_group === '管理员' ||
            $check_field('get', 'regular_users') ||
            $check_field('add', 'regular_users') ||
            $check_field('set', 'regular_users')
          "
          :xs="24"
          :sm="12"
          :lg="8"
          class="el_form_item_warp"
        >
          <el-form-item label="普通用户" prop="regular_users">
            <div v-if="user_group !== '管理员'">
              {{ get_user_session_regular_users(form["regular_users"]) }}
              <!--<el-input id="business_name" v-model="form['regular_users']" placeholder="请输入普通用户"-->
              <!--v-if="user_group === '管理员' || (form['homestay_reservation_id'] && $check_field('set','regular_users')) || (!form['homestay_reservation_id'] && $check_field('add','regular_users'))" :disabled="disabledObj['regular_users_isDisabled']"></el-input>-->
              <!--<div v-else-if="$check_field('get','regular_users')">{{form['regular_users']}}</div>-->
              <el-select
                v-if="
                  user_group === '管理员' ||
                  (form['homestay_reservation_id'] &&
                    $check_field('set', 'regular_users')) ||
                  (!form['homestay_reservation_id'] &&
                    $check_field('add', 'regular_users'))
                "
                id="regular_users"
                v-model="form['regular_users']"
                :disabled="disabledObj['regular_users_isDisabled']"
              >
                <el-option
                  v-for="o in list_user_regular_users"
                  :key="o['username']"
                  :label="o['nickname'] + '-' + o['username']"
                  :value="o['user_id']"
                >
                </el-option>
              </el-select>
              <el-select
                v-else-if="$check_field('get', 'regular_users')"
                id="regular_users"
                v-model="form['regular_users']"
                :disabled="true"
              >
                <el-option
                  v-for="o in list_user_regular_users"
                  :key="o['username']"
                  :label="o['nickname'] + '-' + o['username']"
                  :value="o['user_id']"
                >
                </el-option>
              </el-select>
            </div>
            <el-select
              v-else
              id="regular_users"
              v-model="form['regular_users']"
              :disabled="disabledObj['regular_users_isDisabled']"
            >
              <el-option
                v-for="o in list_user_regular_users"
                :key="o['username']"
                :label="o['nickname'] + '-' + o['username']"
                :value="o['user_id']"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col
          v-if="
            user_group === '管理员' ||
            $check_field('get', 'user_name') ||
            $check_field('add', 'user_name') ||
            $check_field('set', 'user_name')
          "
          :xs="24"
          :sm="12"
          :lg="8"
          class="el_form_item_warp"
        >
          <el-form-item label="用户姓名" prop="user_name">
            <el-input
              id="user_name"
              v-model="form['user_name']"
              placeholder="请输入用户姓名"
              v-if="
                user_group === '管理员' ||
                (form['homestay_reservation_id'] &&
                  $check_field('set', 'user_name')) ||
                (!form['homestay_reservation_id'] &&
                  $check_field('add', 'user_name'))
              "
              :disabled="disabledObj['user_name_isDisabled']"
            ></el-input>
            <div v-else-if="$check_field('get', 'user_name')">
              {{ form["user_name"] }}
            </div>
          </el-form-item>
        </el-col>
        <el-col
          v-if="
            user_group === '管理员' ||
            $check_field('get', 'appointment_quantity') ||
            $check_field('add', 'appointment_quantity') ||
            $check_field('set', 'appointment_quantity')
          "
          :xs="24"
          :sm="12"
          :lg="8"
          class="el_form_item_warp"
        >
          <el-form-item label="预约数量" prop="appointment_quantity">
            <el-input-number
              id="appointment_quantity"
              v-model.number="form['appointment_quantity']"
              v-if="
                user_group === '管理员' ||
                (form['homestay_reservation_id'] &&
                  $check_field('set', 'appointment_quantity')) ||
                (!form['homestay_reservation_id'] &&
                  $check_field('add', 'appointment_quantity'))
              "
              :disabled="disabledObj['appointment_quantity_isDisabled']"
            ></el-input-number>
            <div v-else-if="$check_field('get', 'appointment_quantity')">
              {{ form["appointment_quantity"] }}
            </div>
          </el-form-item>
        </el-col>
        <el-col
          v-if="
            user_group === '管理员' ||
            $check_field('get', 'appointment_days') ||
            $check_field('add', 'appointment_days') ||
            $check_field('set', 'appointment_days')
          "
          :xs="24"
          :sm="12"
          :lg="8"
          class="el_form_item_warp"
        >
          <el-form-item label="预约天数" prop="appointment_days">
            <el-input-number
              id="appointment_days"
              v-model.number="form['appointment_days']"
              v-if="
                user_group === '管理员' ||
                (form['homestay_reservation_id'] &&
                  $check_field('set', 'appointment_days')) ||
                (!form['homestay_reservation_id'] &&
                  $check_field('add', 'appointment_days'))
              "
              :disabled="disabledObj['appointment_days_isDisabled']"
            ></el-input-number>
            <div v-else-if="$check_field('get', 'appointment_days')">
              {{ form["appointment_days"] }}
            </div>
          </el-form-item>
        </el-col>
        <el-col
          v-if="
            user_group === '管理员' ||
            $check_field('get', 'appointment_time') ||
            $check_field('add', 'appointment_time') ||
            $check_field('set', 'appointment_time')
          "
          :xs="24"
          :sm="12"
          :lg="8"
          class="el_form_item_warp"
        >
          <el-form-item label="预约时间" prop="appointment_time">
            <el-date-picker
              :disabled="disabledObj['appointment_time_isDisabled']"
              v-if="
                user_group === '管理员' ||
                (form['homestay_reservation_id'] &&
                  $check_field('set', 'appointment_time')) ||
                (!form['homestay_reservation_id'] &&
                  $check_field('add', 'appointment_time'))
              "
              id="appointment_time"
              v-model="form['appointment_time']"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker>
            <div v-else-if="$check_field('get', 'appointment_time')">
              {{ $dayJs(Number(form["appointment_time"])).format('YYYY-MM-DD') }}
            </div>
          </el-form-item>
        </el-col>
        <el-col
          v-if="
            user_group === '管理员' ||
            $check_field('get', 'appointment_amount') ||
            $check_field('add', 'appointment_amount') ||
            $check_field('set', 'appointment_amount')
          "
          :xs="24"
          :sm="12"
          :lg="8"
          class="el_form_item_warp"
        >
          <el-form-item label="预约金额" prop="appointment_amount">
            <el-input
              id="appointment_amount"
              v-model="form['appointment_amount']"
              placeholder="请输入预约金额"
              v-if="
                user_group === '管理员' ||
                (form['homestay_reservation_id'] &&
                  $check_field('set', 'appointment_amount')) ||
                (!form['homestay_reservation_id'] &&
                  $check_field('add', 'appointment_amount'))
              "
              @focus="set_appointment_amount()"
              :disabled="disabledObj['appointment_amount_isDisabled']"
            ></el-input>
            <div v-else-if="$check_field('get', 'appointment_amount')">
              {{ form["appointment_amount"] }}
            </div>
          </el-form-item>
        </el-col>
        <el-col
          v-if="
            user_group === '管理员' ||
            $check_field('get', 'appointment_remarks') ||
            $check_field('add', 'appointment_remarks') ||
            $check_field('set', 'appointment_remarks')
          "
          :xs="24"
          :sm="12"
          :lg="8"
          class="el_form_item_warp"
        >
          <el-form-item label="预约备注" prop="appointment_remarks">
            <el-input
              id="appointment_remarks"
              v-model="form['appointment_remarks']"
              placeholder="请输入预约备注"
              v-if="
                user_group === '管理员' ||
                (form['homestay_reservation_id'] &&
                  $check_field('set', 'appointment_remarks')) ||
                (!form['homestay_reservation_id'] &&
                  $check_field('add', 'appointment_remarks'))
              "
              :disabled="disabledObj['appointment_remarks_isDisabled']"
            ></el-input>
            <div v-else-if="$check_field('get', 'appointment_remarks')">
              {{ form["appointment_remarks"] }}
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
        <el-form-item
          v-if="
            $check_action('/homestay_reservation/view', 'set') ||
            $check_action('/homestay_reservation/view', 'add') ||
            $check_option('/homestay_reservation/table', 'examine')
          "
        >
          <el-button type="primary" @click="submit()">提交</el-button>
          <el-button @click="cancel()">取消</el-button>
        </el-form-item>
        <el-form-item v-else>
          <el-button @click="cancel()">返回</el-button>
        </el-form-item>
      </el-col>
    </el-form>
  </el-main>
</template>

<script>
import mixin from "@/mixins/page.js";

export default {
  mixins: [mixin],
  data() {
    return {
      field: "homestay_reservation_id",
      url_add: "~/api/homestay_reservation/add?",
      url_set: "~/api/homestay_reservation/set?",
      url_get_obj: "~/api/homestay_reservation/get_obj?",
      url_upload: "~/api/homestay_reservation/upload?",

      query: {
        homestay_reservation_id: 0,
      },

      form: {
        homestay_name: "", // 民宿名称
        homestay_address: "", // 民宿地址
        homestay_room_type: "", // 民宿房型
        homestay_prices: 0, // 民宿价格
        regular_users: 0, // 普通用户
        user_name: "", // 用户姓名
        appointment_quantity: 0, // 预约数量
        appointment_days: 0, // 预约天数
        appointment_time: "", // 预约时间
        appointment_amount: "", // 预约金额
        appointment_remarks: "", // 预约备注
        homestay_reservation_id: 0, // ID
      },
      disabledObj: {
        homestay_name_isDisabled: false,
        homestay_address_isDisabled: false,
        homestay_room_type_isDisabled: false,
        homestay_prices_isDisabled: false,
        regular_users_isDisabled: false,
        user_name_isDisabled: false,
        appointment_quantity_isDisabled: false,
        appointment_days_isDisabled: false,
        appointment_time_isDisabled: false,
        appointment_amount_isDisabled: false,
        appointment_remarks_isDisabled: false,
      },

      // 用户列表
      list_user_regular_users: [],
      // 用户组
      group_user_regular_users: "",
    };
  },
  methods: {
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
    /**
     * 获取普通用户用户组
     */
    async get_group_user_regular_users() {
      this.form["regular_users"] = this.$store.state.user.user_id;
      var json = await this.$get("~/api/user_group/get_obj?name=普通用户");
      if (json.result && json.result.obj) {
        this.group_user_regular_users = json.result.obj;
      } else if (json.error) {
        console.error(json.error);
      }
    },
    get_user_session_regular_users(id) {
      var _this = this;
      var user_id = { user_id: id };
      var url =
        "~/api/" + _this.group_user_regular_users.source_table + "/get_obj?";
      this.$get(url, user_id, function (res) {
        if (res.result && res.result.obj) {
          var arr = [];
          for (let key in res.result.obj) {
            arr.push(key);
          }
          var arrForm = [];
          for (let key in _this.form) {
            arrForm.push(key);
          }
          _this.form["regular_users"] = id;
          _this.disabledObj["regular_users" + "_isDisabled"] = true;
          for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== "examine_state" && arr[i] !== "examine_reply") {
              for (var j = 0; j < arrForm.length; j++) {
                if (arr[i] === arrForm[j]) {
                  if (arr[i] !== "regular_users") {
                    _this.form[arrForm[j]] = res.result.obj[arr[i]];
                    _this.disabledObj[arrForm[j] + "_isDisabled"] = true;
                    break;
                  } else {
                    _this.disabledObj[arrForm[j] + "_isDisabled"] = true;
                  }
                }
              }
            }
          }
        }
      });
    },
    get_user_regular_users(id) {
      var obj = this.list_user_regular_users.getObj({ user_id: id });
      var ret = "";
      if (obj) {
        if (obj.nickname) {
          ret = obj.nickname;
        } else {
          ret = obj.username;
        }
      }
      return ret;
    },

    set_appointment_amount() {
      this.form.appointment_amount =
        parseFloat(this.form.homestay_prices) *
        parseFloat(this.form.appointment_quantity) *
        parseFloat(this.form.appointment_days);
    },

    /**
     * 获取对象之前
     * @param {Object} param
     */
    get_obj_before(param) {
      var form = "";
      // 获取缓存数据附加
      form = $.db.get("form");
      $.push(this.form, form);
      if (this.form && form) {
        Object.keys(this.form).forEach((key) => {
          Object.keys(form).forEach((dbKey) => {
            // if(dbKey === "charging_standard"){
            // 	this.form['charging_rules'] = form[dbKey];
            // 	this.disabledObj['charging_rules_isDisabled'] = true;
            // };
            if (key === dbKey) {
              this.disabledObj[key + "_isDisabled"] = true;
            }
          });
        });
      }
      if (
        this.form["appointment_time"] &&
        this.form["appointment_time"].indexOf("-") === -1
      ) {
        this.form["appointment_time"] = this.$toTime(
          parseInt(this.form["appointment_time"]),
          "yyyy-MM-dd hh:mm:ss"
        );
      }
      $.db.del("form");

      return param;
    },

    /**
     * 获取对象之后
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_after(json, func) {
      if (this.form["appointment_time"] == "0000-00-00 00:00:00") {
        this.form["appointment_time"] = null;
      }
      if (parseInt(this.form["appointment_time"]) > 9999) {
        this.form["appointment_time"] = this.$toTime(
          parseInt(this.form["appointment_time"]),
          "yyyy-MM-dd hh:mm:ss"
        );
      }
    },

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

    is_view() {
      var bl = this.user_group == "管理员";

      if (!bl) {
        bl = this.$check_action("/homestay_reservation/table", "add");
        console.log(
          bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限"
        );
      }
      if (!bl) {
        bl = this.$check_action("/homestay_reservation/table", "set");
        console.log(
          bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限"
        );
      }
      if (!bl) {
        bl = this.$check_action("/homestay_reservation/view", "add");
        console.log(
          bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限"
        );
      }
      if (!bl) {
        bl = this.$check_action("/homestay_reservation/view", "set");
        console.log(
          bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限"
        );
      }
      if (!bl) {
        bl = this.$check_action("/homestay_reservation/view", "get");
        console.log(
          bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限"
        );
      }

      console.log(
        bl
          ? "具有当前页面的查看权，请注意这不代表你有字段的查看权"
          : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行"
      );

      return bl;
    },
    /**
     * 上传文件
     * @param {Object} param
     */
    uploadimg(param) {
      this.uploadFile(param.file, "avatar");
    },
  },
  created() {
    this.get_list_user_regular_users();
    this.get_group_user_regular_users();
  },
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
