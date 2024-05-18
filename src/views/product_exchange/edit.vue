<template>
  <div class="diy_edit page_product_exchange" id="product_exchange_edit">
    <div class="warp">
      <div class="container">
        <div class="row diy_edit_content_box">
          <div
            v-if="
              $check_field('set', 'product_name') ||
              $check_field('add', 'product_name') ||
              $check_field('get', 'product_name')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 商品名称: </span>
            </div>
            <!-- 文本 -->
            <div class="diy_field diy_text">
              <input
                type="text"
                id="form_product_name"
                v-model="form['product_name']"
                placeholder="请输入商品名称"
                v-if="
                  (form['product_name'] &&
                    $check_field('set', 'product_name')) ||
                  (!form['product_name'] && $check_field('add', 'product_name'))
                "
                :disabled="disabledObj['product_name_isDisabled']"
              />
              <span v-else-if="$check_field('get', 'product_name')">{{
                form["${obj.name}"]
              }}</span>
            </div>
          </div>
          <div
            v-if="
              $check_field('set', 'product_type') ||
              $check_field('add', 'product_type') ||
              $check_field('get', 'product_type')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 商品类型: </span>
            </div>
            <!-- 文本 -->
            <div class="diy_field diy_text">
              <input
                type="text"
                id="form_product_type"
                v-model="form['product_type']"
                placeholder="请输入商品类型"
                v-if="
                  (form['product_type'] &&
                    $check_field('set', 'product_type')) ||
                  (!form['product_type'] && $check_field('add', 'product_type'))
                "
                :disabled="disabledObj['product_type_isDisabled']"
              />
              <span v-else-if="$check_field('get', 'product_type')">{{
                form["${obj.name}"]
              }}</span>
            </div>
          </div>
          <div
            v-if="
              $check_field('set', 'required_points') ||
              $check_field('add', 'required_points') ||
              $check_field('get', 'required_points')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 所需积分: </span>
            </div>
            <!-- 数字 -->
            <div class="diy_field diy_number">
              <input
                type="number"
                id="form_required_points"
                v-model.number="form['required_points']"
                placeholder="请输入所需积分"
                v-if="
                  (form['required_points'] &&
                    $check_field('set', 'required_points')) ||
                  (!form['required_points'] &&
                    $check_field('add', 'required_points'))
                "
                :disabled="disabledObj['required_points_isDisabled']"
              />
              <span v-else-if="$check_field('get', 'required_points')">{{
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
              <select
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
                <option
                  v-for="o in list_user_regular_users"
                  :value="o['user_id']"
                >
                  {{ o["nickname"] + "-" + o["username"] }}
                </option>
              </select>
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
              <input
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
              $check_field('set', 'user_points') ||
              $check_field('add', 'user_points') ||
              $check_field('get', 'user_points')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 用户积分: </span>
            </div>
            <!-- 数字 -->
            <div class="diy_field diy_number">
              <input
                type="number"
                id="form_user_points"
                v-model.number="form['user_points']"
                placeholder="请输入用户积分"
                v-if="
                  (form['user_points'] && $check_field('set', 'user_points')) ||
                  (!form['user_points'] && $check_field('add', 'user_points'))
                "
                :disabled="disabledObj['user_points_isDisabled']"
              />
              <span v-else-if="$check_field('get', 'user_points')">{{
                form["${obj.name}"]
              }}</span>
            </div>
          </div>
          <div
            v-if="
              $check_field('set', 'contact_phone_number') ||
              $check_field('add', 'contact_phone_number') ||
              $check_field('get', 'contact_phone_number')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 联系电话: </span>
            </div>
            <!-- 文本 -->
            <div class="diy_field diy_text">
              <input
                type="text"
                id="form_contact_phone_number"
                v-model="form['contact_phone_number']"
                placeholder="请输入联系电话"
                v-if="
                  (form['contact_phone_number'] &&
                    $check_field('set', 'contact_phone_number')) ||
                  (!form['contact_phone_number'] &&
                    $check_field('add', 'contact_phone_number'))
                "
                :disabled="disabledObj['contact_phone_number_isDisabled']"
              />
              <span v-else-if="$check_field('get', 'contact_phone_number')">{{
                form["${obj.name}"]
              }}</span>
            </div>
          </div>
          <div
            v-if="
              $check_field('set', 'user_address') ||
              $check_field('add', 'user_address') ||
              $check_field('get', 'user_address')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 用户地址: </span>
            </div>
            <!-- 文本 -->
            <div class="diy_field diy_text">
              <input
                type="text"
                id="form_user_address"
                v-model="form['user_address']"
                placeholder="请输入用户地址"
                v-if="
                  (form['user_address'] &&
                    $check_field('set', 'user_address')) ||
                  (!form['user_address'] && $check_field('add', 'user_address'))
                "
                :disabled="disabledObj['user_address_isDisabled']"
              />
              <span v-else-if="$check_field('get', 'user_address')">{{
                form["${obj.name}"]
              }}</span>
            </div>
          </div>
          <div
            v-if="
              $check_field('set', 'exchange_quantity') ||
              $check_field('add', 'exchange_quantity') ||
              $check_field('get', 'exchange_quantity')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 兑换数量: </span>
            </div>
            <!-- 数字 -->
            <div class="diy_field diy_number">
              <input
                type="number"
                id="form_exchange_quantity"
                v-model.number="form['exchange_quantity']"
                placeholder="请输入兑换数量"
                v-if="
                  (form['exchange_quantity'] &&
                    $check_field('set', 'exchange_quantity')) ||
                  (!form['exchange_quantity'] &&
                    $check_field('add', 'exchange_quantity'))
                "
				@input="set_redeem_points()"
                :disabled="disabledObj['exchange_quantity_isDisabled']"
              />
              <span v-else-if="$check_field('get', 'exchange_quantity')">{{
                form["${obj.name}"]
              }}</span>
            </div>
          </div>
          <div
            v-if="
              $check_field('set', 'redeem_points') ||
              $check_field('add', 'redeem_points') ||
              $check_field('get', 'redeem_points')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 兑换积分: </span>
            </div>
            <!-- 文本 -->
            <div class="diy_field diy_text">
              <input
                type="text"
                id="form_redeem_points"
                v-model="form['redeem_points']"
                placeholder="请输入兑换积分"
                v-if="
                  (form['redeem_points'] &&
                    $check_field('set', 'redeem_points')) ||
                  (!form['redeem_points'] &&
                    $check_field('add', 'redeem_points'))
                "
                :disabled="true"
              />
              <span v-else-if="$check_field('get', 'redeem_points')">{{
                form["${obj.name}"]
              }}</span>
            </div>
          </div>
          <div
            v-if="
              $check_field('set', 'registration_number') ||
              $check_field('add', 'registration_number') ||
              $check_field('get', 'registration_number')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 登记单号: </span>
            </div>
            <!-- 文本 -->
            <div class="diy_field diy_text">
              <input
                type="text"
                id="form_registration_number"
                v-model="form['registration_number']"
                placeholder="请输入登记单号"
                v-if="
                  (form['registration_number'] &&
                    $check_field('set', 'registration_number')) ||
                  (!form['registration_number'] &&
                    $check_field('add', 'registration_number'))
                "
                :disabled="disabledObj['registration_number_isDisabled']"
              />
              <span v-else-if="$check_field('get', 'registration_number')">{{
                form["${obj.name}"]
              }}</span>
            </div>
          </div>
          <div
            v-if="
              $check_field('set', 'logistics_status') ||
              $check_field('add', 'logistics_status') ||
              $check_field('get', 'logistics_status')
            "
            class="form-item col-12 col-md-6"
          >
            <div class="diy_title">
              <span> 物流状态: </span>
            </div>
            <!-- 选项 -->
            <div class="diy_field diy_down">
              <select
                id="form_logistics_status"
                v-model="form['logistics_status']"
                v-if="
                  (form['logistics_status'] &&
                    $check_field('set', 'logistics_status')) ||
                  (!form['logistics_status'] &&
                    $check_field('add', 'logistics_status'))
                "
              >
                <option v-for="(o,index) in list_logistics_status" :value="o" :key="index">
                  {{ o }}
                </option>
              </select>
              <span v-else-if="$check_field('get', 'logistics_status')">{{
                form["logistics_status"]
              }}</span>
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
      url_get_obj: "~/api/product_exchange/get_obj?",
      url_add: "~/api/product_exchange/add?",
      url_set: "~/api/product_exchange/set?",

      // 登录权限
      oauth: {
        signIn: true,
        user_group: [],
      },

      // 查询条件
      query: {
        product_name: "",
        product_type: "",
        required_points: 0,
        regular_users: 0,
        user_name: "",
        user_points: 0,
        contact_phone_number: "",
        user_address: "",
        exchange_quantity: 0,
        redeem_points: "",
        registration_number: "",
        logistics_status: "",
        product_exchange_id: 0,
      },

      obj: {
        product_name: "", // 商品名称
        product_type: "", // 商品类型
        required_points: 0, // 所需积分
        regular_users: 0, // 普通用户
        user_name: "", // 用户姓名
        user_points: 0, // 用户积分
        contact_phone_number: "", // 联系电话
        user_address: "", // 用户地址
        exchange_quantity: 0, // 兑换数量
        redeem_points: "", // 兑换积分
        registration_number: "", // 登记单号
        logistics_status: "", // 物流状态
        product_exchange_id: 0,
      },

      // 表单字段
      form: {
        product_name: "", // 商品名称
        product_type: "", // 商品类型
        required_points: 0, // 所需积分
        regular_users: 0, // 普通用户
        user_name: "", // 用户姓名
        user_points: 0, // 用户积分
        contact_phone_number: "", // 联系电话
        user_address: "", // 用户地址
        exchange_quantity: 0, // 兑换数量
        redeem_points: "", // 兑换积分
        registration_number: "", // 登记单号
        logistics_status: "", // 物流状态
        product_exchange_id: 0,
      },
      disabledObj: {
        product_name_isDisabled: false,
        product_type_isDisabled: false,
        regular_users_isDisabled: false,
        user_name_isDisabled: false,
        contact_phone_number_isDisabled: false,
        user_address_isDisabled: false,
        redeem_points_isDisabled: false,
        registration_number_isDisabled: false,
        logistics_status_isDisabled: false,
      },

      // 用户列表
      list_user_regular_users: [],
      // 物流状态选项列表
      list_logistics_status: ["待发货", "已发货", "运输中", "已完成"],

      // ID字段
      field: "product_exchange_id",
    };
  },
  methods: {
    /**
     * 提交前验证事件
     * @param {Object} 请求参数
     * @return {String} 验证成功返回null, 失败返回错误提示
     */
    submit_check(param) {
		if(!param.exchange_quantity){
			return '请完善信息';

		}
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

    set_redeem_points() {
      this.form.redeem_points =
        parseFloat(this.form.required_points) *
        parseFloat(this.form.exchange_quantity);
      let r = /^\+?[1-9][0-9]*$/; // 正整数
      if (this.form.exchange_quantity) {
        this.form.redeem_points = this.form.redeem_points.toFixed(2);
      }else{
		this.form.redeem_points = 0.00
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
      this.$post("~/api/product_exchange/upload?", form, (res) => {
        if (res.result) {
          this.form[str] = res.result.url;
        } else if (res.error) {
          this.$toast(res.error.message);
        }
      });
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

      $.db.del("form");
      return param;
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
  created() {
    this.get_user_session_regular_users();
    this.get_list_user_regular_users();
  },
};
</script>

<style>
</style>
