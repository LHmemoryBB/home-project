<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">
		<el-row class="row_ce">
							<el-col v-if="user_group === '管理员' || $check_field('get','product_name') || $check_field('add','product_name') || $check_field('set','product_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品名称" prop="product_name">
												<el-input id="product_name" v-model="form['product_name']" placeholder="请输入商品名称"
							  v-if="user_group === '管理员' || (form['product_exchange_id'] && $check_field('set','product_name')) || (!form['product_exchange_id'] && $check_field('add','product_name'))" :disabled="disabledObj['product_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','product_name')">{{form['product_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','product_type') || $check_field('add','product_type') || $check_field('set','product_type')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品类型" prop="product_type">
												<el-input id="product_type" v-model="form['product_type']" placeholder="请输入商品类型"
							  v-if="user_group === '管理员' || (form['product_exchange_id'] && $check_field('set','product_type')) || (!form['product_exchange_id'] && $check_field('add','product_type'))" :disabled="disabledObj['product_type_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','product_type')">{{form['product_type']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','required_points') || $check_field('add','required_points') || $check_field('set','required_points')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="所需积分" prop="required_points">
								<el-input-number id="required_points" v-model.number="form['required_points']"
						v-if="user_group === '管理员' || (form['product_exchange_id'] && $check_field('set','required_points')) || (!form['product_exchange_id'] && $check_field('add','required_points'))" :disabled="disabledObj['required_points_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','required_points')">{{form['required_points']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','regular_users') || $check_field('add','regular_users') || $check_field('set','regular_users')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="普通用户" prop="regular_users">
																		<div v-if="user_group !== '管理员'">
							{{ get_user_session_regular_users(form['regular_users']) }}
							<!--<el-input id="business_name" v-model="form['regular_users']" placeholder="请输入普通用户"-->
							<!--v-if="user_group === '管理员' || (form['product_exchange_id'] && $check_field('set','regular_users')) || (!form['product_exchange_id'] && $check_field('add','regular_users'))" :disabled="disabledObj['regular_users_isDisabled']"></el-input>-->
							<!--<div v-else-if="$check_field('get','regular_users')">{{form['regular_users']}}</div>-->
							<el-select v-if="user_group === '管理员' || (form['product_exchange_id'] && $check_field('set','regular_users')) || (!form['product_exchange_id'] && $check_field('add','regular_users'))" id="regular_users" v-model="form['regular_users']" :disabled="disabledObj['regular_users_isDisabled']">
								<el-option v-for="o in list_user_regular_users" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
							<el-select v-else-if="$check_field('get','regular_users')" id="regular_users" v-model="form['regular_users']" :disabled="true">
								<el-option v-for="o in list_user_regular_users" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
						</div>
						<el-select v-else id="regular_users" v-model="form['regular_users']" :disabled="disabledObj['regular_users_isDisabled']">
							<el-option v-for="o in list_user_regular_users" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
																</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','user_name') || $check_field('add','user_name') || $check_field('set','user_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="用户姓名" prop="user_name">
												<el-input id="user_name" v-model="form['user_name']" placeholder="请输入用户姓名"
							  v-if="user_group === '管理员' || (form['product_exchange_id'] && $check_field('set','user_name')) || (!form['product_exchange_id'] && $check_field('add','user_name'))" :disabled="disabledObj['user_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','user_name')">{{form['user_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','user_points') || $check_field('add','user_points') || $check_field('set','user_points')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="用户积分" prop="user_points">
								<el-input-number id="user_points" v-model.number="form['user_points']"
						v-if="user_group === '管理员' || (form['product_exchange_id'] && $check_field('set','user_points')) || (!form['product_exchange_id'] && $check_field('add','user_points'))" :disabled="disabledObj['user_points_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','user_points')">{{form['user_points']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','contact_phone_number') || $check_field('add','contact_phone_number') || $check_field('set','contact_phone_number')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="联系电话" prop="contact_phone_number">
												<el-input id="contact_phone_number" v-model="form['contact_phone_number']" placeholder="请输入联系电话"
							  v-if="user_group === '管理员' || (form['product_exchange_id'] && $check_field('set','contact_phone_number')) || (!form['product_exchange_id'] && $check_field('add','contact_phone_number'))" :disabled="disabledObj['contact_phone_number_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','contact_phone_number')">{{form['contact_phone_number']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','user_address') || $check_field('add','user_address') || $check_field('set','user_address')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="用户地址" prop="user_address">
												<el-input id="user_address" v-model="form['user_address']" placeholder="请输入用户地址"
							  v-if="user_group === '管理员' || (form['product_exchange_id'] && $check_field('set','user_address')) || (!form['product_exchange_id'] && $check_field('add','user_address'))" :disabled="disabledObj['user_address_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','user_address')">{{form['user_address']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','exchange_quantity') || $check_field('add','exchange_quantity') || $check_field('set','exchange_quantity')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="兑换数量" prop="exchange_quantity">
								<el-input-number id="exchange_quantity" v-model.number="form['exchange_quantity']"
						v-if="user_group === '管理员' || (form['product_exchange_id'] && $check_field('set','exchange_quantity')) || (!form['product_exchange_id'] && $check_field('add','exchange_quantity'))" :disabled="disabledObj['exchange_quantity_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','exchange_quantity')">{{form['exchange_quantity']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','redeem_points') || $check_field('add','redeem_points') || $check_field('set','redeem_points')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="兑换积分" prop="redeem_points">
												<el-input id="redeem_points" v-model="form['redeem_points']" placeholder="请输入兑换积分"
							  v-if="user_group === '管理员' || (form['product_exchange_id'] && $check_field('set','redeem_points')) || (!form['product_exchange_id'] && $check_field('add','redeem_points'))"  @focus="set_redeem_points()" :disabled="disabledObj['redeem_points_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','redeem_points')">{{form['redeem_points']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','registration_number') || $check_field('add','registration_number') || $check_field('set','registration_number')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="登记单号" prop="registration_number">
												<el-input id="registration_number" v-model="form['registration_number']" placeholder="请输入登记单号"
							  v-if="user_group === '管理员' || (form['product_exchange_id'] && $check_field('set','registration_number')) || (!form['product_exchange_id'] && $check_field('add','registration_number'))" :disabled="disabledObj['registration_number_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','registration_number')">{{form['registration_number']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','logistics_status') || $check_field('add','logistics_status') || $check_field('set','logistics_status')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="物流状态" prop="logistics_status">
								<el-select id="logistics_status" v-model="form['logistics_status']"
						v-if="user_group === '管理员' || (form['product_exchange_id'] && $check_field('set','logistics_status')) || (!form['product_exchange_id'] && $check_field('add','logistics_status'))">
						<el-option v-for="o in list_logistics_status" :key="o" :label="o" :value="o">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','logistics_status')">{{form['logistics_status']}}</div>
							</el-form-item>
			</el-col>
					
	
	
	
	
	
	
	</el-row>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item v-if="$check_action('/product_exchange/view','set') || $check_action('/product_exchange/view','add') || $check_option('/product_exchange/table','examine')">
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
				field: "product_exchange_id",
				url_add: "~/api/product_exchange/add?",
				url_set: "~/api/product_exchange/set?",
				url_get_obj: "~/api/product_exchange/get_obj?",
				url_upload: "~/api/product_exchange/upload?",

				query: {
					"product_exchange_id": 0,
				},

				form: {
								"product_name":  '', // 商品名称
										"product_type":  '', // 商品类型
										"required_points":  0, // 所需积分
										"regular_users": 0, // 普通用户
										"user_name":  '', // 用户姓名
										"user_points":  0, // 用户积分
										"contact_phone_number":  '', // 联系电话
										"user_address":  '', // 用户地址
										"exchange_quantity":  0, // 兑换数量
										"redeem_points":  '', // 兑换积分
										"registration_number":  '', // 登记单号
										"logistics_status":  '', // 物流状态
											"product_exchange_id": 0, // ID
						
				},
				disabledObj:{
								"product_name_isDisabled": false,
										"product_type_isDisabled": false,
					          			"required_points_isDisabled": false,
										"regular_users_isDisabled": false,
										"user_name_isDisabled": false,
					          			"user_points_isDisabled": false,
										"contact_phone_number_isDisabled": false,
										"user_address_isDisabled": false,
					          			"exchange_quantity_isDisabled": false,
										"redeem_points_isDisabled": false,
										"registration_number_isDisabled": false,
										"logistics_status_isDisabled": false,
										},

	
		
		
		
					// 用户列表
				list_user_regular_users: [],
						// 用户组
				group_user_regular_users: "",
				
		
		
		
		
		
		
								// 物流状态选项列表
				list_logistics_status: ['待发货','已发货','运输中','已完成'],
	
	
			}
		},
		methods: {


	
	
			
	
			
	
			
	
				/**
			 * 获取普通用户用户列表
			 */
			async get_list_user_regular_users() {
                var json = await this.$get("~/api/user/get_list?user_group=普通用户");
                if(json.result && json.result.list){
                    this.list_user_regular_users = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					/**
			 * 获取普通用户用户组
			 */
			async get_group_user_regular_users() {
							this.form["regular_users"] = this.$store.state.user.user_id;
							var json = await this.$get("~/api/user_group/get_obj?name=普通用户");
				if(json.result && json.result.obj){
					this.group_user_regular_users = json.result.obj;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
			get_user_session_regular_users(id){
				var _this = this;
				var user_id = {"user_id":id}
				var url = "~/api/"+_this.group_user_regular_users.source_table+"/get_obj?"
				this.$get(url, user_id, function(res) {
					if (res.result && res.result.obj) {
						var arr = []
						for (let key in res.result.obj) {
							arr.push(key)
						}
						var arrForm = []
									for (let key in _this.form) {
							arrForm.push(key)
						}
												_this.form["regular_users"] = id
									_this.disabledObj['regular_users' + '_isDisabled'] = true
						for (var i=0;i<arr.length;i++){
						  if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
							for (var j = 0; j < arrForm.length; j++) {
							  if (arr[i] === arrForm[j]) {
								if (arr[i] !== "regular_users") {
			                      _this.form[arrForm[j]] = res.result.obj[arr[i]]
			                      _this.disabledObj[arrForm[j] + '_isDisabled'] = true
								  break;
								} else {
								  _this.disabledObj[arrForm[j] + '_isDisabled'] = true
								}
							  }
							}
						  }
						}
					}
				});
			},
					get_user_regular_users(id){
				var obj = this.list_user_regular_users.getObj({"user_id":id});
				var ret = "";
				if(obj){
					if(obj.nickname){
						ret = obj.nickname;}
					else{
						ret = obj.username;
					}
				}
				return ret;
			},
			
	
			
	
			
	
			
	
			
	
			
	
										set_redeem_points(){
				this.form.redeem_points = parseFloat(this.form.required_points) * parseFloat(this.form.exchange_quantity)
			},
							
	
			
	
		
			/**
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
																														// 获取缓存数据附加
				form = $.db.get("form");
							$.push(this.form ,form);
												if(this.form && form){
					Object.keys(this.form).forEach(key => {
						Object.keys(form).forEach(dbKey => {
							// if(dbKey === "charging_standard"){
							// 	this.form['charging_rules'] = form[dbKey];
							// 	this.disabledObj['charging_rules_isDisabled'] = true;
							// };
							if(key === dbKey){
								this.disabledObj[key+'_isDisabled'] = true;
							}
						})
					})
				}
																												$.db.del("form");

				return param;
			},

			/**
			 * 获取对象之后
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json, func){

																																																

			},

			/**
			 * 提交前验证事件
			 * @param {Object} 请求参数
			 * @return {String} 验证成功返回null, 失败返回错误提示
			 */
			submit_check(param) {
																																																																																																																		return null;
			},

			is_view(){
				var bl = this.user_group == "管理员";

				if(!bl){
					bl = this.$check_action('/product_exchange/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/product_exchange/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/product_exchange/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/product_exchange/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/product_exchange/view','get');
					console.log(bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限");
				}

				console.log(bl ? "具有当前页面的查看权，请注意这不代表你有字段的查看权" : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行");

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
	}
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
		border-color: #409EFF;
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
