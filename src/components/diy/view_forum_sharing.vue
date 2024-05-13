<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">
		<el-row class="row_ce">
							<el-col v-if="user_group === '管理员' || $check_field('get','share_title') || $check_field('add','share_title') || $check_field('set','share_title')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="分享标题" prop="share_title">
												<el-input id="share_title" v-model="form['share_title']" placeholder="请输入分享标题"
							  v-if="user_group === '管理员' || (form['forum_sharing_id'] && $check_field('set','share_title')) || (!form['forum_sharing_id'] && $check_field('add','share_title'))" :disabled="disabledObj['share_title_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','share_title')">{{form['share_title']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','sharing_categories') || $check_field('add','sharing_categories') || $check_field('set','sharing_categories')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="分享类别" prop="sharing_categories">
												<el-input id="sharing_categories" v-model="form['sharing_categories']" placeholder="请输入分享类别"
							  v-if="user_group === '管理员' || (form['forum_sharing_id'] && $check_field('set','sharing_categories')) || (!form['forum_sharing_id'] && $check_field('add','sharing_categories'))" :disabled="disabledObj['sharing_categories_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','sharing_categories')">{{form['sharing_categories']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','share_time') || $check_field('add','share_time') || $check_field('set','share_time')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="分享时间" prop="share_time">
								<el-date-picker :disabled="disabledObj['share_time_isDisabled']" v-if="user_group === '管理员' || (form['forum_sharing_id'] && $check_field('set','share_time')) || (!form['forum_sharing_id'] && $check_field('add','share_time'))" id="share_time"
						v-model="form['share_time']" type="datetime" placeholder="选择日期时间">
					</el-date-picker>
					<div v-else-if="$check_field('get','share_time')">{{form['share_time']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','regular_users') || $check_field('add','regular_users') || $check_field('set','regular_users')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="普通用户" prop="regular_users">
																		<div v-if="user_group !== '管理员'">
							{{ get_user_session_regular_users(form['regular_users']) }}
							<!--<el-input id="business_name" v-model="form['regular_users']" placeholder="请输入普通用户"-->
							<!--v-if="user_group === '管理员' || (form['forum_sharing_id'] && $check_field('set','regular_users')) || (!form['forum_sharing_id'] && $check_field('add','regular_users'))" :disabled="disabledObj['regular_users_isDisabled']"></el-input>-->
							<!--<div v-else-if="$check_field('get','regular_users')">{{form['regular_users']}}</div>-->
							<el-select v-if="user_group === '管理员' || (form['forum_sharing_id'] && $check_field('set','regular_users')) || (!form['forum_sharing_id'] && $check_field('add','regular_users'))" id="regular_users" v-model="form['regular_users']" :disabled="disabledObj['regular_users_isDisabled']">
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
								<el-col v-if="user_group === '管理员' || $check_field('get','share_description') || $check_field('add','share_description') || $check_field('set','share_description')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="分享描述" prop="share_description">
								<el-input type="textarea" id="share_description" v-model="form['share_description']" placeholder="请输入分享描述"
						v-if="user_group === '管理员' || (form['forum_sharing_id'] && $check_field('set','share_description')) || (!form['forum_sharing_id'] && $check_field('add','share_description'))" :disabled="disabledObj['share_description_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','share_description')">{{form['share_description']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','cover_photo') || $check_field('add','cover_photo') || $check_field('set','cover_photo')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="封面图片" prop="cover_photo">
								<el-upload :disabled="disabledObj['cover_photo_isDisabled']" id="cover_photo" class="avatar-uploader" drag
						accept="image/gif, image/jpeg, image/png, image/jpg" action="" :http-request="upload_cover_photo"
						:show-file-list="false" v-if="user_group === '管理员' || (form['forum_sharing_id'] && $check_field('set','cover_photo')) || (!form['forum_sharing_id'] && $check_field('add','cover_photo'))">
						<img v-if="form['cover_photo']" :src="$fullUrl(form['cover_photo'])" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-image v-else-if="$check_field('get','cover_photo')" style="width: 100px; height: 100px"
						:src="$fullUrl(form['cover_photo'])" :preview-src-list="[$fullUrl(form['cover_photo'])]">
						<div slot="error" class="image-slot">
							<img src="../../../public/img/error.png" style="width: 90px; height: 90px" />
						</div>
					</el-image>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','sharing_content') || $check_field('add','sharing_content') || $check_field('set','sharing_content')" :xs="24" :sm="24" :lg="24" class="el_form_editor_warp">
				<el-form-item label="分享内容" prop="sharing_content">
					<quill-editor v-model.number="form['sharing_content']"
						v-if="user_group === '管理员' || (form['forum_sharing_id'] && $check_field('set','sharing_content')) || (!form['forum_sharing_id'] && $check_field('add','sharing_content')) ">
					</quill-editor>
					<div v-else-if="$check_field('get','sharing_content')" v-html="form['sharing_content']"></div>
				</el-form-item>
			</el-col>
							<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="审核状态" prop="examine_state">
					<el-select id="examine_state" v-model="form['examine_state']"
						v-if="user_group === '管理员' || (form['examine_state'] && $check_examine()) || (!form['examine_state'] && $check_examine())">
						<el-option key="未审核" label="未审核" value="未审核"></el-option>
						<el-option key="已通过" label="已通过" value="已通过"></el-option>
						<el-option key="未通过" label="未通过" value="未通过"></el-option>
					</el-select>
					<div v-else>{{form["examine_state"]}}</div>
				</el-form-item>
			</el-col>
		
	
	
	
	
	
	
	</el-row>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item v-if="$check_action('/forum_sharing/view','set') || $check_action('/forum_sharing/view','add') || $check_option('/forum_sharing/table','examine')">
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
				field: "forum_sharing_id",
				url_add: "~/api/forum_sharing/add?",
				url_set: "~/api/forum_sharing/set?",
				url_get_obj: "~/api/forum_sharing/get_obj?",
				url_upload: "~/api/forum_sharing/upload?",

				query: {
					"forum_sharing_id": 0,
				},

				form: {
								"share_title":  '', // 分享标题
										"sharing_categories":  '', // 分享类别
										"share_time":  '', // 分享时间
										"regular_users": 0, // 普通用户
										"share_description":  '', // 分享描述
										"cover_photo":  '', // 封面图片
										"sharing_content":  '', // 分享内容
									"examine_state": "未审核",
								"forum_sharing_id": 0, // ID
						
				},
				disabledObj:{
								"share_title_isDisabled": false,
										"sharing_categories_isDisabled": false,
										"share_time_isDisabled": false,
										"regular_users_isDisabled": false,
										"share_description_isDisabled": false,
										"cover_photo_isDisabled": false,
										"sharing_content_isDisabled": false,
										},

	
		
		
		
					// 用户列表
				list_user_regular_users: [],
						// 用户组
				group_user_regular_users: "",
				
		
		
	
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
			
	
						/**
			 * 上传封面图片
			 * @param {Object} param 图片参数
			 */
			upload_cover_photo(param){
						this.uploadFile(param.file, "cover_photo");
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
					        if (this.form["share_time"] && this.form["share_time"].indexOf("-")===-1){
            this.form["share_time"] = this.$toTime(parseInt(this.form["share_time"]),"yyyy-MM-dd hh:mm:ss")
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

													if(this.form["share_time"]=="0000-00-00 00:00:00"){
				  this.form["share_time"] = null;
				}
				if(parseInt(this.form["share_time"]) > 9999){
					this.form["share_time"] = this.$toTime(parseInt(this.form["share_time"]),"yyyy-MM-dd hh:mm:ss")
				}
																				

			},

			/**
			 * 提交前验证事件
			 * @param {Object} 请求参数
			 * @return {String} 验证成功返回null, 失败返回错误提示
			 */
			submit_check(param) {
																										if (!param.share_time){
					return "分享时间不能为空";
				}
																																																	return null;
			},

			is_view(){
				var bl = this.user_group == "管理员";

				if(!bl){
					bl = this.$check_action('/forum_sharing/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/forum_sharing/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/forum_sharing/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/forum_sharing/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/forum_sharing/view','get');
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
