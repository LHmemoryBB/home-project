<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">
		<el-row class="row_ce">
							<el-col v-if="user_group === '管理员' || $check_field('get','product_name') || $check_field('add','product_name') || $check_field('set','product_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品名称" prop="product_name">
												<el-input id="product_name" v-model="form['product_name']" placeholder="请输入商品名称"
							  v-if="user_group === '管理员' || (form['integral_products_id'] && $check_field('set','product_name')) || (!form['integral_products_id'] && $check_field('add','product_name'))" :disabled="disabledObj['product_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','product_name')">{{form['product_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','product_type') || $check_field('add','product_type') || $check_field('set','product_type')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品类型" prop="product_type">
												<el-input id="product_type" v-model="form['product_type']" placeholder="请输入商品类型"
							  v-if="user_group === '管理员' || (form['integral_products_id'] && $check_field('set','product_type')) || (!form['integral_products_id'] && $check_field('add','product_type'))" :disabled="disabledObj['product_type_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','product_type')">{{form['product_type']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','required_points') || $check_field('add','required_points') || $check_field('set','required_points')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="所需积分" prop="required_points">
								<el-input-number id="required_points" v-model.number="form['required_points']"
						v-if="user_group === '管理员' || (form['integral_products_id'] && $check_field('set','required_points')) || (!form['integral_products_id'] && $check_field('add','required_points'))" :disabled="disabledObj['required_points_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','required_points')">{{form['required_points']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','product_images') || $check_field('add','product_images') || $check_field('set','product_images')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品图片" prop="product_images">
								<el-upload :disabled="disabledObj['product_images_isDisabled']" id="product_images" class="avatar-uploader" drag
						accept="image/gif, image/jpeg, image/png, image/jpg" action="" :http-request="upload_product_images"
						:show-file-list="false" v-if="user_group === '管理员' || (form['integral_products_id'] && $check_field('set','product_images')) || (!form['integral_products_id'] && $check_field('add','product_images'))">
						<img v-if="form['product_images']" :src="$fullUrl(form['product_images'])" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-image v-else-if="$check_field('get','product_images')" style="width: 100px; height: 100px"
						:src="$fullUrl(form['product_images'])" :preview-src-list="[$fullUrl(form['product_images'])]">
						<div slot="error" class="image-slot">
							<img src="../../../public/img/error.png" style="width: 90px; height: 90px" />
						</div>
					</el-image>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','product_introduction') || $check_field('add','product_introduction') || $check_field('set','product_introduction')" :xs="24" :sm="24" :lg="24" class="el_form_editor_warp">
				<el-form-item label="商品简介" prop="product_introduction">
					<quill-editor v-model.number="form['product_introduction']"
						v-if="user_group === '管理员' || (form['integral_products_id'] && $check_field('set','product_introduction')) || (!form['integral_products_id'] && $check_field('add','product_introduction')) ">
					</quill-editor>
					<div v-else-if="$check_field('get','product_introduction')" v-html="form['product_introduction']"></div>
				</el-form-item>
			</el-col>
					
	
	
	
	
	
	
	</el-row>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item v-if="$check_action('/integral_products/view','set') || $check_action('/integral_products/view','add') || $check_option('/integral_products/table','examine')">
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
				field: "integral_products_id",
				url_add: "~/api/integral_products/add?",
				url_set: "~/api/integral_products/set?",
				url_get_obj: "~/api/integral_products/get_obj?",
				url_upload: "~/api/integral_products/upload?",

				query: {
					"integral_products_id": 0,
				},

				form: {
								"product_name":  '', // 商品名称
										"product_type":  '', // 商品类型
										"required_points":  0, // 所需积分
										"product_images":  '', // 商品图片
										"product_introduction":  '', // 商品简介
											"integral_products_id": 0, // ID
						
				},
				disabledObj:{
								"product_name_isDisabled": false,
										"product_type_isDisabled": false,
					          			"required_points_isDisabled": false,
										"product_images_isDisabled": false,
										"product_introduction_isDisabled": false,
										},

	
		
		
		
		
	
			}
		},
		methods: {


	
	
			
	
			
	
						/**
			 * 上传商品图片
			 * @param {Object} param 图片参数
			 */
			upload_product_images(param){
						this.uploadFile(param.file, "product_images");
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
					bl = this.$check_action('/integral_products/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/integral_products/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/integral_products/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/integral_products/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/integral_products/view','get');
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
