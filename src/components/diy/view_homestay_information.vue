<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">
		<el-row class="row_ce">
							<el-col v-if="user_group === '管理员' || $check_field('get','homestay_name') || $check_field('add','homestay_name') || $check_field('set','homestay_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="民宿名称" prop="homestay_name">
												<el-input id="homestay_name" v-model="form['homestay_name']" placeholder="请输入民宿名称"
							  v-if="user_group === '管理员' || (form['homestay_information_id'] && $check_field('set','homestay_name')) || (!form['homestay_information_id'] && $check_field('add','homestay_name'))" :disabled="disabledObj['homestay_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','homestay_name')">{{form['homestay_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','homestay_address') || $check_field('add','homestay_address') || $check_field('set','homestay_address')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="民宿地址" prop="homestay_address">
												<el-input id="homestay_address" v-model="form['homestay_address']" placeholder="请输入民宿地址"
							  v-if="user_group === '管理员' || (form['homestay_information_id'] && $check_field('set','homestay_address')) || (!form['homestay_information_id'] && $check_field('add','homestay_address'))" :disabled="disabledObj['homestay_address_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','homestay_address')">{{form['homestay_address']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','homestay_room_type') || $check_field('add','homestay_room_type') || $check_field('set','homestay_room_type')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="民宿房型" prop="homestay_room_type">
												<el-input id="homestay_room_type" v-model="form['homestay_room_type']" placeholder="请输入民宿房型"
							  v-if="user_group === '管理员' || (form['homestay_information_id'] && $check_field('set','homestay_room_type')) || (!form['homestay_information_id'] && $check_field('add','homestay_room_type'))" :disabled="disabledObj['homestay_room_type_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','homestay_room_type')">{{form['homestay_room_type']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','homestay_prices') || $check_field('add','homestay_prices') || $check_field('set','homestay_prices')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="民宿价格" prop="homestay_prices">
								<el-input-number id="homestay_prices" v-model.number="form['homestay_prices']"
						v-if="user_group === '管理员' || (form['homestay_information_id'] && $check_field('set','homestay_prices')) || (!form['homestay_information_id'] && $check_field('add','homestay_prices'))" :disabled="disabledObj['homestay_prices_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','homestay_prices')">{{form['homestay_prices']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','number_of_rooms') || $check_field('add','number_of_rooms') || $check_field('set','number_of_rooms')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="房间数量" prop="number_of_rooms">
								<el-input-number id="number_of_rooms" v-model.number="form['number_of_rooms']"
						v-if="user_group === '管理员' || (form['homestay_information_id'] && $check_field('set','number_of_rooms')) || (!form['homestay_information_id'] && $check_field('add','number_of_rooms'))" :disabled="disabledObj['number_of_rooms_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','number_of_rooms')">{{form['number_of_rooms']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','contact_phone_number') || $check_field('add','contact_phone_number') || $check_field('set','contact_phone_number')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="联系电话" prop="contact_phone_number">
												<el-input id="contact_phone_number" v-model="form['contact_phone_number']" placeholder="请输入联系电话"
							  v-if="user_group === '管理员' || (form['homestay_information_id'] && $check_field('set','contact_phone_number')) || (!form['homestay_information_id'] && $check_field('add','contact_phone_number'))" :disabled="disabledObj['contact_phone_number_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','contact_phone_number')">{{form['contact_phone_number']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','homestay_pictures') || $check_field('add','homestay_pictures') || $check_field('set','homestay_pictures')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="民宿图片" prop="homestay_pictures">
								<el-upload :disabled="disabledObj['homestay_pictures_isDisabled']" id="homestay_pictures" class="avatar-uploader" drag
						accept="image/gif, image/jpeg, image/png, image/jpg" action="" :http-request="upload_homestay_pictures"
						:show-file-list="false" v-if="user_group === '管理员' || (form['homestay_information_id'] && $check_field('set','homestay_pictures')) || (!form['homestay_information_id'] && $check_field('add','homestay_pictures'))">
						<img v-if="form['homestay_pictures']" :src="$fullUrl(form['homestay_pictures'])" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-image v-else-if="$check_field('get','homestay_pictures')" style="width: 100px; height: 100px"
						:src="$fullUrl(form['homestay_pictures'])" :preview-src-list="[$fullUrl(form['homestay_pictures'])]">
						<div slot="error" class="image-slot">
							<img src="../../../public/img/error.png" style="width: 90px; height: 90px" />
						</div>
					</el-image>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','homestay_introduction') || $check_field('add','homestay_introduction') || $check_field('set','homestay_introduction')" :xs="24" :sm="24" :lg="24" class="el_form_editor_warp">
				<el-form-item label="民宿简介" prop="homestay_introduction">
					<quill-editor v-model.number="form['homestay_introduction']"
						v-if="user_group === '管理员' || (form['homestay_information_id'] && $check_field('set','homestay_introduction')) || (!form['homestay_information_id'] && $check_field('add','homestay_introduction')) ">
					</quill-editor>
					<div v-else-if="$check_field('get','homestay_introduction')" v-html="form['homestay_introduction']"></div>
				</el-form-item>
			</el-col>
					
	
	
	
	
	
	
	</el-row>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item v-if="$check_action('/homestay_information/view','set') || $check_action('/homestay_information/view','add') || $check_option('/homestay_information/table','examine')">
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
				field: "homestay_information_id",
				url_add: "~/api/homestay_information/add?",
				url_set: "~/api/homestay_information/set?",
				url_get_obj: "~/api/homestay_information/get_obj?",
				url_upload: "~/api/homestay_information/upload?",

				query: {
					"homestay_information_id": 0,
				},

				form: {
								"homestay_name":  '', // 民宿名称
										"homestay_address":  '', // 民宿地址
										"homestay_room_type":  '', // 民宿房型
										"homestay_prices":  0, // 民宿价格
										"number_of_rooms":  0, // 房间数量
										"contact_phone_number":  '', // 联系电话
										"homestay_pictures":  '', // 民宿图片
										"homestay_introduction":  '', // 民宿简介
											"homestay_information_id": 0, // ID
						
				},
				disabledObj:{
								"homestay_name_isDisabled": false,
										"homestay_address_isDisabled": false,
										"homestay_room_type_isDisabled": false,
					          			"homestay_prices_isDisabled": false,
					          			"number_of_rooms_isDisabled": false,
										"contact_phone_number_isDisabled": false,
										"homestay_pictures_isDisabled": false,
										"homestay_introduction_isDisabled": false,
										},

	
		
		
		
		
		
		
		
	
			}
		},
		methods: {


	
	
			
	
			
	
			
	
			
	
			
	
						/**
			 * 上传民宿图片
			 * @param {Object} param 图片参数
			 */
			upload_homestay_pictures(param){
						this.uploadFile(param.file, "homestay_pictures");
					},
	
	
			
	
		
			/**
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
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
					bl = this.$check_action('/homestay_information/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/homestay_information/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/homestay_information/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/homestay_information/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/homestay_information/view','get');
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
