<template>
	<div class="diy_edit page_online_service" id="online_service_edit">
		<div class='warp'>
			<div class='container'>
				<div class='row diy_edit_content_box'>
						<div v-if="$check_field('set','regular_users') || $check_field('add','regular_users') || $check_field('get','regular_users')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								普通用户:
							</span>
						</div>
						<div class="diy_field diy_down">
							<select id="form_regular_users" :disabled="disabledObj['regular_users_isDisabled']" v-model="form['regular_users']" v-if="(form['regular_users'] && $check_field('set','regular_users')) || (!form['regular_users'] && $check_field('add','regular_users'))" >
								<option v-for="o in list_user_regular_users" :value="o['user_id']">
									{{o['nickname'] + '-' + o['username']}}
								</option>
							</select>
							<span v-else-if="$check_field('get','regular_users')">{{ form['regular_users'] }}</span>
						</div>
					</div>
							<div v-if="$check_field('set','user_name') || $check_field('add','user_name') || $check_field('get','user_name')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								用户姓名:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_user_name" v-model="form['user_name']" placeholder="请输入用户姓名" v-if="(form['user_name'] && $check_field('set','user_name')) || (!form['user_name'] && $check_field('add','user_name'))"  :disabled="disabledObj['user_name_isDisabled']"/>
							<span v-else-if="$check_field('get','user_name')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','consultation_time') || $check_field('add','consultation_time') || $check_field('get','consultation_time')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								咨询时间:
							</span>
						</div>
								<!-- 日长 -->
						<div class="diy_field diy_datetime">
							<input type="datetime-local" :disabled="disabledObj['consultation_time_isDisabled']" id="form_consultation_time" v-model="form['consultation_time']" placeholder="请输入咨询时间" v-if="(form['consultation_time'] && $check_field('set','consultation_time')) || (!form['consultation_time'] && $check_field('add','consultation_time'))" />
							<span v-else-if="$check_field('get','consultation_time')">{{ form['${obj.name}'] }}</span>
						</div>
							</div>
							<div v-if="$check_field('set','consultation_content') || $check_field('add','consultation_content') || $check_field('get','consultation_content')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								咨询内容:
							</span>
						</div>
								<!-- 多文本 -->
						<div class="diy_field diy_desc">
							<textarea id="form_consultation_content" v-model="form['consultation_content']" v-if="(form['consultation_content'] && $check_field('set','consultation_content')) || (!form['consultation_content'] && $check_field('add','consultation_content'))" :disabled="disabledObj['consultation_content_isDisabled']" />
							<span v-else-if="$check_field('get','consultation_content')">{{ form['${obj.name}'] }}</span>
						</div>
							</div>
							<div v-if="$check_field('set','reply_content') || $check_field('add','reply_content') || $check_field('get','reply_content')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								回复内容:
							</span>
						</div>
								<!-- 多文本 -->
						<div class="diy_field diy_desc">
							<textarea id="form_reply_content" v-model="form['reply_content']" v-if="(form['reply_content'] && $check_field('set','reply_content')) || (!form['reply_content'] && $check_field('add','reply_content'))" :disabled="disabledObj['reply_content_isDisabled']" />
							<span v-else-if="$check_field('get','reply_content')">{{ form['${obj.name}'] }}</span>
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
				url_get_obj: "~/api/online_service/get_obj?",
				url_add: "~/api/online_service/add?",
				url_set: "~/api/online_service/set?",

				// 登录权限
				oauth: {
					"signIn": true,
					"user_group": []
				},

				// 查询条件
				query: {
						"regular_users": 0,
							"user_name": "",
							"consultation_time": "",
							"consultation_content": "",
							"reply_content": "",
						"online_service_id": 0,
				},

				obj: {
						"regular_users": 0, // 普通用户
							"user_name":  '', // 用户姓名
							"consultation_time": new Date().getTime(),
							"consultation_content":  '', // 咨询内容
							"reply_content":  '', // 回复内容
						"online_service_id": 0,
				},

				// 表单字段
				form: {
						"regular_users": 0, // 普通用户
							"user_name":  '', // 用户姓名
							"consultation_time": new Date().getTime(),
							"consultation_content":  '', // 咨询内容
							"reply_content":  '', // 回复内容
						"online_service_id": 0,
				},
				disabledObj:{
						"regular_users_isDisabled": false,
							"user_name_isDisabled": false,
							"consultation_time_isDisabled": false,
							"consultation_content_isDisabled": false,
							"reply_content_isDisabled": false,
					},

						// 用户列表
				list_user_regular_users: [],
									
				// ID字段
				field: "online_service_id",

			}
		},
		methods: {
      /**
       * 提交前验证事件
       * @param {Object} 请求参数
       * @return {String} 验证成功返回null, 失败返回错误提示
       */
      submit_check(param) {
											if (!param.consultation_time){
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
				if(json.result && json.result.list){
					this.list_user_regular_users = json.result.list;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
					async get_user_session_regular_users(){
				var _this = this;
				var json = await this.$get("~/api/user_group/get_obj?name=普通用户");
				if(json.result && json.result.obj){
					var source_table = json.result.obj.source_table;
					var user_id = _this.$store.state.user.user_id;
					if (user_id){
						var url = "~/api/"+source_table+"/get_obj?"
						this.$get(url, {"user_id":_this.$store.state.user.user_id}, function(res) {
							if (res.result && res.result.obj) {
								var arr = []
								for (let key in res.result.obj) {
									arr.push(key)
								}
								var arrForm = []
								for (let key in _this.form) {
									arrForm.push(key)
								}
								_this.form["regular_users"] = user_id
								_this.disabledObj['regular_users' + '_isDisabled'] = true
								for (var i=0;i<arr.length;i++){
                  if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
                    for (var j = 0; j < arrForm.length; j++) {
                      if (arr[i] === arrForm[j]) {
                        if (arr[i] !== "regular_users") {
                          _this.form[arrForm[j]] = res.result.obj[arr[i]]
                          _this.disabledObj[arrForm[j] + '_isDisabled'] = true
                          break;
                        }
                      }
                    }
                  }
								}
							}
						});
					}
				}
				else if(json.error){
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
			get_obj_before(param){
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
          var arr = []
          for (let key in form) {
            arr.push(key)
          }
          var arrForm = []
          for (let key in this.form) {
            arrForm.push(key)
          }
          for (var i=0;i<arr.length;i++){
            if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
              for (var j = 0; j < arrForm.length; j++) {
                if (arrForm[j] === arr[i]) {
                  this.form[arrForm[j]] = form[arr[i]]
                  this.obj[arrForm[j]] = form[arr[i]]
                  this.disabledObj[arrForm[j] + '_isDisabled'] = true
                  break;
                }
              }
            }
          }
        }
					        if (this.form["consultation_time"] && JSON.stringify(this.form["consultation_time"]).indexOf("-")===-1) {
          this.form["consultation_time"] = this.$toTime(parseInt(this.form["consultation_time"]), "yyyy-MM-ddThh:mm")
        }
						
        $.db.del("form");
				return param;
			},

			/**
			 * 获取对象后获取缓存表单
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json ,func){
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

				if(func){
					func(json);
				}
			},

		},
		created() {
					this.get_user_session_regular_users();
					this.get_list_user_regular_users();
															},
	}
</script>

<style>




</style>
