<template>
  <div class="diy_edit page_online_service" id="online_service_edit">
    <div class="warp">
      <div class="container">
        <div class="row_div">
          <el-form ref="form" :model="form" :inline="true" label-width="120px">
            <el-form-item label="普通用户:">
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
                  :label="o['nickname']"
                >
                </el-option>
              </el-select>
              <span v-else-if="$check_field('get', 'regular_users')">{{
                form["regular_users"]
              }}</span>
            </el-form-item>
            <el-form-item label="用户姓名:">
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
            </el-form-item>
            <el-form-item label="咨询时间:">
              <el-date-picker
                type="datetime"
                placeholder="选择日期时间"
                :picker-options="pickerOptions"
                :disabled="disabledObj['consultation_time_isDisabled']"
                id="form_consultation_time"
                v-model="form['consultation_time']"
                v-if="
                  (form['consultation_time'] &&
                    $check_field('set', 'consultation_time')) ||
                  (!form['consultation_time'] &&
                    $check_field('add', 'consultation_time'))
                "
              >
              </el-date-picker>
            </el-form-item>

            <!-- <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item> -->
          </el-form>
          <el-form label-width="120px">
            <el-form-item label="咨询内容:">
              <el-input
                type="textarea"
                id="form_reply_content"
                v-model="form['consultation_content']"
                :disabled="disabledObj['consultation_content_isDisabled']"
              ></el-input>
              <!-- <el-input
                type="textarea"
                v-else-if="$check_field('get', 'reply_content')"
                v-model="form['${obj.name}']"
                disabled
              ></el-input> -->
            </el-form-item>
          </el-form>
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
      url_get_obj: "~/api/online_service/get_obj?",
      url_add: "~/api/online_service/add?",
      url_set: "~/api/online_service/set?",

      // 登录权限
      oauth: {
        signIn: true,
        user_group: [],
      },

      // 查询条件
      query: {
        regular_users: 0,
        user_name: "",
        consultation_time: "",
        consultation_content: "",
        reply_content: "",
        online_service_id: 0,
      },

      obj: {
        regular_users: 0, // 普通用户
        user_name: "", // 用户姓名
        consultation_time: new Date().getTime(),
        consultation_content: "", // 咨询内容
        reply_content: "", // 回复内容
        online_service_id: 0,
      },

      // 表单字段
      form: {
        regular_users: 0, // 普通用户
        user_name: "", // 用户姓名
        consultation_time: new Date().getTime(),
        consultation_content: "", // 咨询内容
        reply_content: "", // 回复内容
        online_service_id: 0,
      },
      disabledObj: {
        regular_users_isDisabled: false,
        user_name_isDisabled: false,
        consultation_time_isDisabled: false,
        consultation_content_isDisabled: false,
        reply_content_isDisabled: false,
      },

      // 用户列表
      list_user_regular_users: [],

      // ID字段
      field: "online_service_id",
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
            time.getTime() < today.getTime()
          );
        }
      },
    };
  },
  methods: {
    /**
     * 提交前验证事件
     * @param {Object} 请求参数
     * @return {String} 验证成功返回null, 失败返回错误提示
     */
    submit_check(param) {
      if (!param.consultation_time) {
        return "咨询时间不能为空";
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

    /**
     * 修改文件
     * @param { Object } files 上传文件对象
     * @param { String } str 表单的属性名
     */
    change_file(files, str) {
      var form = new FormData();
      form.append("file", files[0]);
      this.$post("~/api/online_service/upload?", form, (res) => {
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
      if (
        this.form["consultation_time"] &&
        JSON.stringify(this.form["consultation_time"]).indexOf("-") === -1
      ) {
        this.form["consultation_time"] = this.$toTime(
          parseInt(this.form["consultation_time"]),
          "yyyy-MM-ddThh:mm"
        );
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

<style lang="less" scoped>
.container {
  .row_div {
    background-color: #ffffff;
    border-radius: 1.25rem;
    margin-top: 9.5rem;
    border: 1px solid #a2c0a8;
    padding: 30px;
    /deep/ .el-form-item__label {
      font-size: 20px;
      font-weight: 600;
      color: #d19233;
    }
  }
}
</style>
