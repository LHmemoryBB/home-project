<template>
	<div class="diy_edit page_homestay_reservation" id="homestay_reservation_edit">
		<div class='warp'>
			<div class='container'>
				<div class='row diy_edit_content_box'>
						<div v-if="$check_field('set','homestay_name') || $check_field('add','homestay_name') || $check_field('get','homestay_name')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								民宿名称:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_homestay_name" v-model="form['homestay_name']" placeholder="请输入民宿名称" v-if="(form['homestay_name'] && $check_field('set','homestay_name')) || (!form['homestay_name'] && $check_field('add','homestay_name'))"  :disabled="disabledObj['homestay_name_isDisabled']"/>
							<span v-else-if="$check_field('get','homestay_name')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','homestay_address') || $check_field('add','homestay_address') || $check_field('get','homestay_address')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								民宿地址:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_homestay_address" v-model="form['homestay_address']" placeholder="请输入民宿地址" v-if="(form['homestay_address'] && $check_field('set','homestay_address')) || (!form['homestay_address'] && $check_field('add','homestay_address'))"  :disabled="disabledObj['homestay_address_isDisabled']"/>
							<span v-else-if="$check_field('get','homestay_address')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','homestay_room_type') || $check_field('add','homestay_room_type') || $check_field('get','homestay_room_type')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								民宿房型:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_homestay_room_type" v-model="form['homestay_room_type']" placeholder="请输入民宿房型" v-if="(form['homestay_room_type'] && $check_field('set','homestay_room_type')) || (!form['homestay_room_type'] && $check_field('add','homestay_room_type'))"  :disabled="disabledObj['homestay_room_type_isDisabled']"/>
							<span v-else-if="$check_field('get','homestay_room_type')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','homestay_prices') || $check_field('add','homestay_prices') || $check_field('get','homestay_prices')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								民宿价格:
							</span>
						</div>
								<!-- 数字 -->
						<div class="diy_field diy_number">
							<input type="number" id="form_homestay_prices" v-model.number="form['homestay_prices']" placeholder="请输入民宿价格" v-if="(form['homestay_prices'] && $check_field('set','homestay_prices')) || (!form['homestay_prices'] && $check_field('add','homestay_prices'))" :disabled="disabledObj['homestay_prices_isDisabled']" />
							<span v-else-if="$check_field('get','homestay_prices')">{{ form['${obj.name}'] }}</span>
						</div>
							</div>
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
							<div v-if="$check_field('set','appointment_quantity') || $check_field('add','appointment_quantity') || $check_field('get','appointment_quantity')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								预约数量:
							</span>
						</div>
								<!-- 数字 -->
						<div class="diy_field diy_number">
							<input type="number" id="form_appointment_quantity" v-model.number="form['appointment_quantity']" placeholder="请输入预约数量" v-if="(form['appointment_quantity'] && $check_field('set','appointment_quantity')) || (!form['appointment_quantity'] && $check_field('add','appointment_quantity'))" :disabled="disabledObj['appointment_quantity_isDisabled']" />
							<span v-else-if="$check_field('get','appointment_quantity')">{{ form['${obj.name}'] }}</span>
						</div>
							</div>
							<div v-if="$check_field('set','appointment_days') || $check_field('add','appointment_days') || $check_field('get','appointment_days')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								预约天数:
							</span>
						</div>
								<!-- 数字 -->
						<div class="diy_field diy_number">
							<input type="number" id="form_appointment_days" v-model.number="form['appointment_days']" placeholder="请输入预约天数" v-if="(form['appointment_days'] && $check_field('set','appointment_days')) || (!form['appointment_days'] && $check_field('add','appointment_days'))" :disabled="disabledObj['appointment_days_isDisabled']" />
							<span v-else-if="$check_field('get','appointment_days')">{{ form['${obj.name}'] }}</span>
						</div>
							</div>
							<div v-if="$check_field('set','appointment_time') || $check_field('add','appointment_time') || $check_field('get','appointment_time')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								预约时间:
							</span>
						</div>
								<!-- 日长 -->
						<div class="diy_field diy_datetime">
							<input type="datetime-local" :disabled="disabledObj['appointment_time_isDisabled']" id="form_appointment_time" v-model="form['appointment_time']" placeholder="请输入预约时间" v-if="(form['appointment_time'] && $check_field('set','appointment_time')) || (!form['appointment_time'] && $check_field('add','appointment_time'))" />
							<span v-else-if="$check_field('get','appointment_time')">{{ form['${obj.name}'] }}</span>
						</div>
							</div>
							<div v-if="$check_field('set','appointment_amount') || $check_field('add','appointment_amount') || $check_field('get','appointment_amount')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								预约金额:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_appointment_amount" v-model="form['appointment_amount']" placeholder="请输入预约金额" v-if="(form['appointment_amount'] && $check_field('set','appointment_amount')) || (!form['appointment_amount'] && $check_field('add','appointment_amount'))"  @focus="set_appointment_amount()" :disabled="disabledObj['appointment_amount_isDisabled']"/>
							<span v-else-if="$check_field('get','appointment_amount')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','appointment_remarks') || $check_field('add','appointment_remarks') || $check_field('get','appointment_remarks')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								预约备注:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_appointment_remarks" v-model="form['appointment_remarks']" placeholder="请输入预约备注" v-if="(form['appointment_remarks'] && $check_field('set','appointment_remarks')) || (!form['appointment_remarks'] && $check_field('add','appointment_remarks'))"  :disabled="disabledObj['appointment_remarks_isDisabled']"/>
							<span v-else-if="$check_field('get','appointment_remarks')">{{ form['${obj.name}'] }}</span>
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
				url_get_obj: "~/api/homestay_reservation/get_obj?",
				url_add: "~/api/homestay_reservation/add?",
				url_set: "~/api/homestay_reservation/set?",

				// 登录权限
				oauth: {
					"signIn": true,
					"user_group": []
				},

				// 查询条件
				query: {
						"homestay_name": "",
							"homestay_address": "",
							"homestay_room_type": "",
							"homestay_prices": 0,
							"regular_users": 0,
							"user_name": "",
							"appointment_quantity": 0,
							"appointment_days": 0,
							"appointment_time": "",
							"appointment_amount": "",
							"appointment_remarks": "",
						"homestay_reservation_id": 0,
				},

				obj: {
						"homestay_name":  '', // 民宿名称
							"homestay_address":  '', // 民宿地址
							"homestay_room_type":  '', // 民宿房型
							"homestay_prices":  0, // 民宿价格
							"regular_users": 0, // 普通用户
							"user_name":  '', // 用户姓名
							"appointment_quantity":  0, // 预约数量
							"appointment_days":  0, // 预约天数
							"appointment_time": new Date().getTime(),
							"appointment_amount":  '', // 预约金额
							"appointment_remarks":  '', // 预约备注
						"homestay_reservation_id": 0,
				},

				// 表单字段
				form: {
						"homestay_name":  '', // 民宿名称
							"homestay_address":  '', // 民宿地址
							"homestay_room_type":  '', // 民宿房型
							"homestay_prices":  0, // 民宿价格
							"regular_users": 0, // 普通用户
							"user_name":  '', // 用户姓名
							"appointment_quantity":  0, // 预约数量
							"appointment_days":  0, // 预约天数
							"appointment_time": new Date().getTime(),
							"appointment_amount":  '', // 预约金额
							"appointment_remarks":  '', // 预约备注
						"homestay_reservation_id": 0,
				},
				disabledObj:{
						"homestay_name_isDisabled": false,
							"homestay_address_isDisabled": false,
							"homestay_room_type_isDisabled": false,
									"regular_users_isDisabled": false,
							"user_name_isDisabled": false,
											"appointment_time_isDisabled": false,
							"appointment_amount_isDisabled": false,
							"appointment_remarks_isDisabled": false,
					},

														// 用户列表
				list_user_regular_users: [],
													
				// ID字段
				field: "homestay_reservation_id",

			}
		},
		methods: {
      /**
       * 提交前验证事件
       * @param {Object} 请求参数
       * @return {String} 验证成功返回null, 失败返回错误提示
       */
      submit_check(param) {
																																			if (!param.appointment_time){
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
	
				
				
				
				
				
									set_appointment_amount(){
				this.form.appointment_amount = parseFloat(this.form.homestay_prices) * parseFloat(this.form.appointment_quantity) * parseFloat(this.form.appointment_days)
        let r = /^\+?[1-9][0-9]*$/; // 正整数
        if(!r.test(this.form.appointment_amount) ){
          this.form.appointment_amount = this.form.appointment_amount.toFixed(2);
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
				this.$post("~/api/homestay_reservation/upload?", form, (res) => {
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
																	        if (this.form["appointment_time"] && JSON.stringify(this.form["appointment_time"]).indexOf("-")===-1) {
          this.form["appointment_time"] = this.$toTime(parseInt(this.form["appointment_time"]), "yyyy-MM-ddThh:mm")
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
