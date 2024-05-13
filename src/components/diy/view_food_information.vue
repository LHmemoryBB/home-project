<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">
		<el-row class="row_ce">
							<el-col v-if="user_group === '管理员' || $check_field('get','food_name') || $check_field('add','food_name') || $check_field('set','food_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="美食名称" prop="food_name">
												<el-input id="food_name" v-model="form['food_name']" placeholder="请输入美食名称"
							  v-if="user_group === '管理员' || (form['food_information_id'] && $check_field('set','food_name')) || (!form['food_information_id'] && $check_field('add','food_name'))" :disabled="disabledObj['food_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','food_name')">{{form['food_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','food_classification') || $check_field('add','food_classification') || $check_field('set','food_classification')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="美食分类" prop="food_classification">
								<el-select id="food_classification" v-model="form['food_classification']"						v-if="user_group === '管理员' || (form['food_information_id'] && $check_field('set','food_classification')) || (!form['food_information_id'] && $check_field('add','food_classification'))">
						<el-option v-for="o in list_food_classification" :key="o['food_classification']" :label="o['food_classification']"
							:value="o['food_classification']">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','food_classification')">{{form['food_classification']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','food_address') || $check_field('add','food_address') || $check_field('set','food_address')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="美食地址" prop="food_address">
												<el-input id="food_address" v-model="form['food_address']" placeholder="请输入美食地址"
							  v-if="user_group === '管理员' || (form['food_information_id'] && $check_field('set','food_address')) || (!form['food_information_id'] && $check_field('add','food_address'))" :disabled="disabledObj['food_address_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','food_address')">{{form['food_address']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','food_labels') || $check_field('add','food_labels') || $check_field('set','food_labels')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="美食标签" prop="food_labels">
												<el-input id="food_labels" v-model="form['food_labels']" placeholder="请输入美食标签"
							  v-if="user_group === '管理员' || (form['food_information_id'] && $check_field('set','food_labels')) || (!form['food_information_id'] && $check_field('add','food_labels'))" :disabled="disabledObj['food_labels_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','food_labels')">{{form['food_labels']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','food_pictures') || $check_field('add','food_pictures') || $check_field('set','food_pictures')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="美食图片" prop="food_pictures">
								<el-upload :disabled="disabledObj['food_pictures_isDisabled']" id="food_pictures" class="avatar-uploader" drag
						accept="image/gif, image/jpeg, image/png, image/jpg" action="" :http-request="upload_food_pictures"
						:show-file-list="false" v-if="user_group === '管理员' || (form['food_information_id'] && $check_field('set','food_pictures')) || (!form['food_information_id'] && $check_field('add','food_pictures'))">
						<img v-if="form['food_pictures']" :src="$fullUrl(form['food_pictures'])" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-image v-else-if="$check_field('get','food_pictures')" style="width: 100px; height: 100px"
						:src="$fullUrl(form['food_pictures'])" :preview-src-list="[$fullUrl(form['food_pictures'])]">
						<div slot="error" class="image-slot">
							<img src="../../../public/img/error.png" style="width: 90px; height: 90px" />
						</div>
					</el-image>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','introduction_to_food') || $check_field('add','introduction_to_food') || $check_field('set','introduction_to_food')" :xs="24" :sm="24" :lg="24" class="el_form_editor_warp">
				<el-form-item label="美食简介" prop="introduction_to_food">
					<quill-editor v-model.number="form['introduction_to_food']"
						v-if="user_group === '管理员' || (form['food_information_id'] && $check_field('set','introduction_to_food')) || (!form['food_information_id'] && $check_field('add','introduction_to_food')) ">
					</quill-editor>
					<div v-else-if="$check_field('get','introduction_to_food')" v-html="form['introduction_to_food']"></div>
				</el-form-item>
			</el-col>
					
	
	
	
	
	
	
	</el-row>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item v-if="$check_action('/food_information/view','set') || $check_action('/food_information/view','add') || $check_option('/food_information/table','examine')">
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
				field: "food_information_id",
				url_add: "~/api/food_information/add?",
				url_set: "~/api/food_information/set?",
				url_get_obj: "~/api/food_information/get_obj?",
				url_upload: "~/api/food_information/upload?",

				query: {
					"food_information_id": 0,
				},

				form: {
								"food_name":  '', // 美食名称
										"food_classification":  '', // 美食分类
										"food_address":  '', // 美食地址
										"food_labels":  '', // 美食标签
										"food_pictures":  '', // 美食图片
										"introduction_to_food":  '', // 美食简介
											"food_information_id": 0, // ID
						
				},
				disabledObj:{
								"food_name_isDisabled": false,
										"food_classification_isDisabled": false,
										"food_address_isDisabled": false,
										"food_labels_isDisabled": false,
										"food_pictures_isDisabled": false,
										"introduction_to_food_isDisabled": false,
										},

	
								// 美食分类选项列表
				list_food_classification: [""],
	
		
		
		
		
	
			}
		},
		methods: {


	
	
			
				/**
			 * 获取美食分类列表
			 */
			async get_list_food_classification() {
				var json = await this.$get("~/api/food_classification/get_list?");
				if(json.result && json.result.list){
					this.list_food_classification = json.result.list;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
					
			
	
			
	
						/**
			 * 上传美食图片
			 * @param {Object} param 图片参数
			 */
			upload_food_pictures(param){
						this.uploadFile(param.file, "food_pictures");
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
					bl = this.$check_action('/food_information/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/food_information/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/food_information/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/food_information/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/food_information/view','get');
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
						this.get_list_food_classification();
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
