<template>
	<div class="diy_list page_attraction_information" id="attraction_information_list">
		<div class="warp">
			<div class="container diy_list_container">
				<div class="diy_list_title">
					<div class="col">
						<span class="title">景点信息列表</span>
					</div>
				</div>
				<div class="leis_box"> 
				<div class="iudis_box">
			
				<div class="row diy_list_search">
					<div class="col">
						<!-- 搜索栏 -->
						<div class="view Search">
							<span class="diy_list_search_title">关键字搜索：</span>
																							<b-form-input size="sm" class="mr-sm-2" placeholder="景点名称搜索" v-model="query['attraction_name']" />
																														<b-form-input size="sm" class="mr-sm-2" placeholder="景点类型搜索" v-model="query['types_of_attractions']" />
																														<b-form-input size="sm" class="mr-sm-2" placeholder="景点城市搜索" v-model="query['attraction_cities']" />
																														<b-form-input size="sm" class="mr-sm-2" placeholder="景点地址搜索" v-model="query['attraction_address']" />
																																																																																																																					<b-button size="sm" @click="search()" >
								<b-icon icon="search"/>
							</b-button>
						</div>
						<!-- /搜索栏 -->
					</div>
				</div>
				<div class="diy_list_select_box">
					<span class="diy_list_select_title">下拉搜索：</span>
						<div class="diy_list_dropdown_box">
						<div class="col">
							<!-- 筛选 -->
							<div class="view sift">
															<b-dropdown text="景点类型" variant="outline-dark" left>
									<b-dropdown-item @click="filter_set('全部','types_of_attractions')">全部</b-dropdown-item>
										<b-dropdown-item v-for="(o, i) in list_types_of_attractions" :key="i" @click="filter_set(o['types_of_attractions'],'types_of_attractions')" >
												{{ o['types_of_attractions'] }}
										</b-dropdown-item>
								</b-dropdown>
																										<!-- 排序 -->
							
								<b-dropdown text="排序" variant="outline-dark" left>
										<b-dropdown-item v-for="(o, i) in list_sort" :key="i" @click="set_sort(o)" >
												{{ o.name }}
										</b-dropdown-item>
								</b-dropdown>
						
							<!--/排序 -->
							</div>
							<!-- /筛选 -->
						</div>
					</div>
				
				</div>
			</div>
				<div class="row diy_list_box">
					<div class="col">
						<!-- 列表 -->
						<list_attraction_information :list="list" />
						<!-- /列表 -->
					</div>
				</div>
	</div>
	<!-- 大盒子结尾 -->
				<div class="row diy_list_page_box">
					<div class="col overflow-auto flex_cc">
						<!-- 分页器 -->
<!--						<diy_pager v-model="query['page']" :size="query['size']" :count="count" v-on:toPage="toPage" v-on:toSize="toSize" ></diy_pager>-->
            <b-pagination
                v-model="query.page"
                :total-rows="count"
                :per-page="query.size"
                @change="goToPage"
            />
						<!-- /分页器 -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import list_attraction_information from "@/components/diy/list_attraction_information.vue";
	import diy_pager from "@/components/diy/diy_pager";
	import mixin from "@/mixins/page.js";

	export default {
		mixins: [mixin],
		components: {
			diy_pager,
			list_attraction_information,
		},
		data() {
			return {
				url_get_list: "~/api/attraction_information/get_list?like=0",

				// 查询条件
				query: {
					keyword: "",
					page: 1,
					size: 12,
								"attraction_name": "", // 景点名称
											"types_of_attractions": "", // 景点类型
											"attraction_cities": "", // 景点城市
											"attraction_address": "", // 景点地址
														},
				// 排序内容
				list_sort: [{
						name: "创建时间从高到低",
						value: "create_time desc",
					},
					{
						name: "创建时间从低到高",
						value: "create_time asc",
					},
					{
						name: "更新时间从高到低",
						value: "update_time desc",
					},
					{
						name: "更新时间从低到高",
						value: "update_time asc",
					},
						{
						name: "景点名称正序",
						value: "attraction_name asc",
					},
					{
						name: "景点名称倒序",
						value: "attraction_name desc",
					},
							{
						name: "景点类型正序",
						value: "types_of_attractions asc",
					},
					{
						name: "景点类型倒序",
						value: "types_of_attractions desc",
					},
							{
						name: "景点城市正序",
						value: "attraction_cities asc",
					},
					{
						name: "景点城市倒序",
						value: "attraction_cities desc",
					},
							{
						name: "景点地址正序",
						value: "attraction_address asc",
					},
					{
						name: "景点地址倒序",
						value: "attraction_address desc",
					},
												],

							// 景点类型列表
				"list_types_of_attractions": [""],
																				
			}
		},
		methods: {
      get_list_before(param) {
      },
			/**
			 * 筛选选择
			 */
			filter_set(o,key) {
			    if (o == "全部") {
			        this.query[key] = "";
			    } else {
			        this.query[key] = o;
			    }
			    this.search();
			},

			/**
			 * 排序
			 */
			set_sort(o) {
			    this.query.orderby = o.value;
			    this.search();
			},
					/**
			 * 获取景点类型列表
			 */
			async get_list_types_of_attractions() {
				var json = await this.$get("~/api/types_of_attractions/get_list?");
				if (json.result) {
					this.list_types_of_attractions = json.result.list;
				} else if (json.error) {
					console.log(json.error);
				}
			},
													/**
			 * 筛选
			 */
												filter_types_of_attractions(o) {
				if (o == "全部") {
					this.query["types_of_attractions"] = "";
				} else {
					this.query["types_of_attractions"] = o;
				}
				this.search();
			},
																											/**
			 * 重置
			 */
			reset() {
							this.query.attraction_name = ""
										this.query.types_of_attractions = ""
										this.query.attraction_cities = ""
										this.query.attraction_address = ""
														this.search();
			},

			// 返回条数
			toSize(i){
				this.query.size = i;
				this.first();
			},

			// 返回页数
			toPage(i){
				this.query.page = i;
				this.first();
			},

      goToPage(v){
        this.query.page = v;
        this.goToNew(v)
      },

		},
		computed: {
		},
		created() {
						/**
			 * 获取景点类型列表
			 */
			this.get_list_types_of_attractions();
																						}
	}
</script>

<style>
</style>
