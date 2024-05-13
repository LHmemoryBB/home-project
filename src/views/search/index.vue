<template>
  <div class="page_search search_index">
	<div class="warp">
	  <div class="container">
		<div class="row">
		  <div class="col-12">
			<div class="card_result_search">
			  <div class="title">搜索结果</div>

				<!-- 文章搜索结果 -->
			  <list_result_search
				:list="result_article"
				title="旅游资讯"
				source_table="article"
			  ></list_result_search>


						  <list_result_search
				v-if="$check_action('/regular_users/list', 'get')"
				:list="result_regular_users_user_name"
				title="普通用户用户姓名"
				source_table="regular_users"
			  ></list_result_search>
																		  <list_result_search
				v-if="$check_action('/types_of_attractions/list', 'get')"
				:list="result_types_of_attractions_types_of_attractions"
				title="景点类型景点类型"
				source_table="types_of_attractions"
			  ></list_result_search>
									  <list_result_search
				v-if="$check_action('/attraction_information/list', 'get')"
				:list="result_attraction_information_attraction_name"
				title="景点信息景点名称"
				source_table="attraction_information"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/attraction_information/list', 'get')"
				:list="result_attraction_information_types_of_attractions"
				title="景点信息景点类型"
				source_table="attraction_information"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/attraction_information/list', 'get')"
				:list="result_attraction_information_attraction_cities"
				title="景点信息景点城市"
				source_table="attraction_information"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/attraction_information/list', 'get')"
				:list="result_attraction_information_attraction_address"
				title="景点信息景点地址"
				source_table="attraction_information"
			  ></list_result_search>
																														  <list_result_search
				v-if="$check_action('/attraction_reservation/list', 'get')"
				:list="result_attraction_reservation_attraction_name"
				title="景点预约景点名称"
				source_table="attraction_reservation"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/attraction_reservation/list', 'get')"
				:list="result_attraction_reservation_attraction_cities"
				title="景点预约景点城市"
				source_table="attraction_reservation"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/attraction_reservation/list', 'get')"
				:list="result_attraction_reservation_attraction_address"
				title="景点预约景点地址"
				source_table="attraction_reservation"
			  ></list_result_search>
																				  <list_result_search
				v-if="$check_action('/attraction_reservation/list', 'get')"
				:list="result_attraction_reservation_user_name"
				title="景点预约用户姓名"
				source_table="attraction_reservation"
			  ></list_result_search>
																					  <list_result_search
				v-if="$check_action('/tourist_attraction_ticket_refund/list', 'get')"
				:list="result_tourist_attraction_ticket_refund_attraction_name"
				title="景点退票景点名称"
				source_table="tourist_attraction_ticket_refund"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/tourist_attraction_ticket_refund/list', 'get')"
				:list="result_tourist_attraction_ticket_refund_attraction_cities"
				title="景点退票景点城市"
				source_table="tourist_attraction_ticket_refund"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/tourist_attraction_ticket_refund/list', 'get')"
				:list="result_tourist_attraction_ticket_refund_attraction_address"
				title="景点退票景点地址"
				source_table="tourist_attraction_ticket_refund"
			  ></list_result_search>
																				  <list_result_search
				v-if="$check_action('/tourist_attraction_ticket_refund/list', 'get')"
				:list="result_tourist_attraction_ticket_refund_user_name"
				title="景点退票用户姓名"
				source_table="tourist_attraction_ticket_refund"
			  ></list_result_search>
																								  <list_result_search
				v-if="$check_action('/food_classification/list', 'get')"
				:list="result_food_classification_food_classification"
				title="美食分类美食分类"
				source_table="food_classification"
			  ></list_result_search>
									  <list_result_search
				v-if="$check_action('/food_information/list', 'get')"
				:list="result_food_information_food_name"
				title="美食信息美食名称"
				source_table="food_information"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/food_information/list', 'get')"
				:list="result_food_information_food_classification"
				title="美食信息美食分类"
				source_table="food_information"
			  ></list_result_search>
																					  <list_result_search
				v-if="$check_action('/homestay_information/list', 'get')"
				:list="result_homestay_information_homestay_name"
				title="民宿信息民宿名称"
				source_table="homestay_information"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/homestay_information/list', 'get')"
				:list="result_homestay_information_homestay_address"
				title="民宿信息民宿地址"
				source_table="homestay_information"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/homestay_information/list', 'get')"
				:list="result_homestay_information_homestay_room_type"
				title="民宿信息民宿房型"
				source_table="homestay_information"
			  ></list_result_search>
																								  <list_result_search
				v-if="$check_action('/homestay_reservation/list', 'get')"
				:list="result_homestay_reservation_homestay_name"
				title="民宿预约民宿名称"
				source_table="homestay_reservation"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/homestay_reservation/list', 'get')"
				:list="result_homestay_reservation_homestay_address"
				title="民宿预约民宿地址"
				source_table="homestay_reservation"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/homestay_reservation/list', 'get')"
				:list="result_homestay_reservation_homestay_room_type"
				title="民宿预约民宿房型"
				source_table="homestay_reservation"
			  ></list_result_search>
														  <list_result_search
				v-if="$check_action('/homestay_reservation/list', 'get')"
				:list="result_homestay_reservation_user_name"
				title="民宿预约用户姓名"
				source_table="homestay_reservation"
			  ></list_result_search>
																								  <list_result_search
				v-if="$check_action('/refunds_for_homestays/list', 'get')"
				:list="result_refunds_for_homestays_homestay_name"
				title="民宿退款民宿名称"
				source_table="refunds_for_homestays"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/refunds_for_homestays/list', 'get')"
				:list="result_refunds_for_homestays_homestay_address"
				title="民宿退款民宿地址"
				source_table="refunds_for_homestays"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/refunds_for_homestays/list', 'get')"
				:list="result_refunds_for_homestays_homestay_room_type"
				title="民宿退款民宿房型"
				source_table="refunds_for_homestays"
			  ></list_result_search>
														  <list_result_search
				v-if="$check_action('/refunds_for_homestays/list', 'get')"
				:list="result_refunds_for_homestays_user_name"
				title="民宿退款用户姓名"
				source_table="refunds_for_homestays"
			  ></list_result_search>
																																																																													  <list_result_search
				v-if="$check_action('/product_exchange/list', 'get')"
				:list="result_product_exchange_user_name"
				title="商品兑换用户姓名"
				source_table="product_exchange"
			  ></list_result_search>
																										  <list_result_search
				v-if="$check_action('/product_exchange/list', 'get')"
				:list="result_product_exchange_logistics_status"
				title="商品兑换物流状态"
				source_table="product_exchange"
			  ></list_result_search>
												  <list_result_search
				v-if="$check_action('/online_service/list', 'get')"
				:list="result_online_service_user_name"
				title="在线客服用户姓名"
				source_table="online_service"
			  ></list_result_search>
															</div>
		  </div>
		</div>
	  </div>
	</div>
  </div>
</template>

<script>
import mixin from "../../mixins/page.js";
import list_result_search from "../../components/diy/list_result_search.vue";

export default {
  mixins: [mixin],
  data() {
	return {
	  "query": {
		word: "",
	  },
	  "result_article": [],
						"result_regular_users_user_name":[],
																		"result_types_of_attractions_types_of_attractions":[],
									"result_attraction_information_attraction_name":[],
								"result_attraction_information_types_of_attractions":[],
								"result_attraction_information_attraction_cities":[],
								"result_attraction_information_attraction_address":[],
																														"result_attraction_reservation_attraction_name":[],
								"result_attraction_reservation_attraction_cities":[],
								"result_attraction_reservation_attraction_address":[],
																				"result_attraction_reservation_user_name":[],
																					"result_tourist_attraction_ticket_refund_attraction_name":[],
								"result_tourist_attraction_ticket_refund_attraction_cities":[],
								"result_tourist_attraction_ticket_refund_attraction_address":[],
																				"result_tourist_attraction_ticket_refund_user_name":[],
																								"result_food_classification_food_classification":[],
									"result_food_information_food_name":[],
								"result_food_information_food_classification":[],
																					"result_homestay_information_homestay_name":[],
								"result_homestay_information_homestay_address":[],
								"result_homestay_information_homestay_room_type":[],
																								"result_homestay_reservation_homestay_name":[],
								"result_homestay_reservation_homestay_address":[],
								"result_homestay_reservation_homestay_room_type":[],
														"result_homestay_reservation_user_name":[],
																								"result_refunds_for_homestays_homestay_name":[],
								"result_refunds_for_homestays_homestay_address":[],
								"result_refunds_for_homestays_homestay_room_type":[],
														"result_refunds_for_homestays_user_name":[],
																																																																													"result_product_exchange_user_name":[],
																										"result_product_exchange_logistics_status":[],
												"result_online_service_user_name":[],
													};
  },
  methods: {
	/**
	 * 获取文章
	 */
	get_article() {
	  this.$get("~/api/article/get_list?like=0", { page: 1, size: 10, title: this.query.word }, (json) => {
		if (json.result) {
		  this.result_article = json.result.list;
		}
	  });
	},

				/**
	 * 获取user_name
	 */
	get_regular_users_user_name(){
		let url = "~/api/regular_users/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "user_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_regular_users_user_name = json.result.list;
			result_regular_users_user_name.map(o => o.title = o['user_name'])
	  			this.result_regular_users_user_name = result_regular_users_user_name
		 	}
		});
	},
																/**
	 * 获取types_of_attractions
	 */
	get_types_of_attractions_types_of_attractions(){
		let url = "~/api/types_of_attractions/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "types_of_attractions": this.query.word }, (json) => {
		  if (json.result) {
			var result_types_of_attractions_types_of_attractions = json.result.list;
			result_types_of_attractions_types_of_attractions.map(o => o.title = o['types_of_attractions'])
	  			this.result_types_of_attractions_types_of_attractions = result_types_of_attractions_types_of_attractions
		 	}
		});
	},
							/**
	 * 获取attraction_name
	 */
	get_attraction_information_attraction_name(){
		let url = "~/api/attraction_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "attraction_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_attraction_information_attraction_name = json.result.list;
			result_attraction_information_attraction_name.map(o => o.title = o['attraction_name'])
	  			this.result_attraction_information_attraction_name = result_attraction_information_attraction_name
		 	}
		});
	},
						/**
	 * 获取types_of_attractions
	 */
	get_attraction_information_types_of_attractions(){
		let url = "~/api/attraction_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "types_of_attractions": this.query.word }, (json) => {
		  if (json.result) {
			var result_attraction_information_types_of_attractions = json.result.list;
			result_attraction_information_types_of_attractions.map(o => o.title = o['types_of_attractions'])
	  			this.result_attraction_information_types_of_attractions = result_attraction_information_types_of_attractions
		 	}
		});
	},
						/**
	 * 获取attraction_cities
	 */
	get_attraction_information_attraction_cities(){
		let url = "~/api/attraction_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "attraction_cities": this.query.word }, (json) => {
		  if (json.result) {
			var result_attraction_information_attraction_cities = json.result.list;
			result_attraction_information_attraction_cities.map(o => o.title = o['attraction_cities'])
	  			this.result_attraction_information_attraction_cities = result_attraction_information_attraction_cities
		 	}
		});
	},
						/**
	 * 获取attraction_address
	 */
	get_attraction_information_attraction_address(){
		let url = "~/api/attraction_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "attraction_address": this.query.word }, (json) => {
		  if (json.result) {
			var result_attraction_information_attraction_address = json.result.list;
			result_attraction_information_attraction_address.map(o => o.title = o['attraction_address'])
	  			this.result_attraction_information_attraction_address = result_attraction_information_attraction_address
		 	}
		});
	},
																												/**
	 * 获取attraction_name
	 */
	get_attraction_reservation_attraction_name(){
		let url = "~/api/attraction_reservation/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "attraction_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_attraction_reservation_attraction_name = json.result.list;
			result_attraction_reservation_attraction_name.map(o => o.title = o['attraction_name'])
	  			this.result_attraction_reservation_attraction_name = result_attraction_reservation_attraction_name
		 	}
		});
	},
						/**
	 * 获取attraction_cities
	 */
	get_attraction_reservation_attraction_cities(){
		let url = "~/api/attraction_reservation/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "attraction_cities": this.query.word }, (json) => {
		  if (json.result) {
			var result_attraction_reservation_attraction_cities = json.result.list;
			result_attraction_reservation_attraction_cities.map(o => o.title = o['attraction_cities'])
	  			this.result_attraction_reservation_attraction_cities = result_attraction_reservation_attraction_cities
		 	}
		});
	},
						/**
	 * 获取attraction_address
	 */
	get_attraction_reservation_attraction_address(){
		let url = "~/api/attraction_reservation/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "attraction_address": this.query.word }, (json) => {
		  if (json.result) {
			var result_attraction_reservation_attraction_address = json.result.list;
			result_attraction_reservation_attraction_address.map(o => o.title = o['attraction_address'])
	  			this.result_attraction_reservation_attraction_address = result_attraction_reservation_attraction_address
		 	}
		});
	},
																		/**
	 * 获取user_name
	 */
	get_attraction_reservation_user_name(){
		let url = "~/api/attraction_reservation/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "user_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_attraction_reservation_user_name = json.result.list;
			result_attraction_reservation_user_name.map(o => o.title = o['user_name'])
	  			this.result_attraction_reservation_user_name = result_attraction_reservation_user_name
		 	}
		});
	},
																			/**
	 * 获取attraction_name
	 */
	get_tourist_attraction_ticket_refund_attraction_name(){
		let url = "~/api/tourist_attraction_ticket_refund/get_list?like=0";
				url = url+"&examine_state=已通过";
				this.$get(url, { page: 1, size: 10, "attraction_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_tourist_attraction_ticket_refund_attraction_name = json.result.list;
			result_tourist_attraction_ticket_refund_attraction_name.map(o => o.title = o['attraction_name'])
	  			this.result_tourist_attraction_ticket_refund_attraction_name = result_tourist_attraction_ticket_refund_attraction_name
		 	}
		});
	},
						/**
	 * 获取attraction_cities
	 */
	get_tourist_attraction_ticket_refund_attraction_cities(){
		let url = "~/api/tourist_attraction_ticket_refund/get_list?like=0";
				url = url+"&examine_state=已通过";
				this.$get(url, { page: 1, size: 10, "attraction_cities": this.query.word }, (json) => {
		  if (json.result) {
			var result_tourist_attraction_ticket_refund_attraction_cities = json.result.list;
			result_tourist_attraction_ticket_refund_attraction_cities.map(o => o.title = o['attraction_cities'])
	  			this.result_tourist_attraction_ticket_refund_attraction_cities = result_tourist_attraction_ticket_refund_attraction_cities
		 	}
		});
	},
						/**
	 * 获取attraction_address
	 */
	get_tourist_attraction_ticket_refund_attraction_address(){
		let url = "~/api/tourist_attraction_ticket_refund/get_list?like=0";
				url = url+"&examine_state=已通过";
				this.$get(url, { page: 1, size: 10, "attraction_address": this.query.word }, (json) => {
		  if (json.result) {
			var result_tourist_attraction_ticket_refund_attraction_address = json.result.list;
			result_tourist_attraction_ticket_refund_attraction_address.map(o => o.title = o['attraction_address'])
	  			this.result_tourist_attraction_ticket_refund_attraction_address = result_tourist_attraction_ticket_refund_attraction_address
		 	}
		});
	},
																		/**
	 * 获取user_name
	 */
	get_tourist_attraction_ticket_refund_user_name(){
		let url = "~/api/tourist_attraction_ticket_refund/get_list?like=0";
				url = url+"&examine_state=已通过";
				this.$get(url, { page: 1, size: 10, "user_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_tourist_attraction_ticket_refund_user_name = json.result.list;
			result_tourist_attraction_ticket_refund_user_name.map(o => o.title = o['user_name'])
	  			this.result_tourist_attraction_ticket_refund_user_name = result_tourist_attraction_ticket_refund_user_name
		 	}
		});
	},
																						/**
	 * 获取food_classification
	 */
	get_food_classification_food_classification(){
		let url = "~/api/food_classification/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "food_classification": this.query.word }, (json) => {
		  if (json.result) {
			var result_food_classification_food_classification = json.result.list;
			result_food_classification_food_classification.map(o => o.title = o['food_classification'])
	  			this.result_food_classification_food_classification = result_food_classification_food_classification
		 	}
		});
	},
							/**
	 * 获取food_name
	 */
	get_food_information_food_name(){
		let url = "~/api/food_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "food_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_food_information_food_name = json.result.list;
			result_food_information_food_name.map(o => o.title = o['food_name'])
	  			this.result_food_information_food_name = result_food_information_food_name
		 	}
		});
	},
						/**
	 * 获取food_classification
	 */
	get_food_information_food_classification(){
		let url = "~/api/food_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "food_classification": this.query.word }, (json) => {
		  if (json.result) {
			var result_food_information_food_classification = json.result.list;
			result_food_information_food_classification.map(o => o.title = o['food_classification'])
	  			this.result_food_information_food_classification = result_food_information_food_classification
		 	}
		});
	},
																			/**
	 * 获取homestay_name
	 */
	get_homestay_information_homestay_name(){
		let url = "~/api/homestay_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "homestay_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_homestay_information_homestay_name = json.result.list;
			result_homestay_information_homestay_name.map(o => o.title = o['homestay_name'])
	  			this.result_homestay_information_homestay_name = result_homestay_information_homestay_name
		 	}
		});
	},
						/**
	 * 获取homestay_address
	 */
	get_homestay_information_homestay_address(){
		let url = "~/api/homestay_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "homestay_address": this.query.word }, (json) => {
		  if (json.result) {
			var result_homestay_information_homestay_address = json.result.list;
			result_homestay_information_homestay_address.map(o => o.title = o['homestay_address'])
	  			this.result_homestay_information_homestay_address = result_homestay_information_homestay_address
		 	}
		});
	},
						/**
	 * 获取homestay_room_type
	 */
	get_homestay_information_homestay_room_type(){
		let url = "~/api/homestay_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "homestay_room_type": this.query.word }, (json) => {
		  if (json.result) {
			var result_homestay_information_homestay_room_type = json.result.list;
			result_homestay_information_homestay_room_type.map(o => o.title = o['homestay_room_type'])
	  			this.result_homestay_information_homestay_room_type = result_homestay_information_homestay_room_type
		 	}
		});
	},
																						/**
	 * 获取homestay_name
	 */
	get_homestay_reservation_homestay_name(){
		let url = "~/api/homestay_reservation/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "homestay_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_homestay_reservation_homestay_name = json.result.list;
			result_homestay_reservation_homestay_name.map(o => o.title = o['homestay_name'])
	  			this.result_homestay_reservation_homestay_name = result_homestay_reservation_homestay_name
		 	}
		});
	},
						/**
	 * 获取homestay_address
	 */
	get_homestay_reservation_homestay_address(){
		let url = "~/api/homestay_reservation/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "homestay_address": this.query.word }, (json) => {
		  if (json.result) {
			var result_homestay_reservation_homestay_address = json.result.list;
			result_homestay_reservation_homestay_address.map(o => o.title = o['homestay_address'])
	  			this.result_homestay_reservation_homestay_address = result_homestay_reservation_homestay_address
		 	}
		});
	},
						/**
	 * 获取homestay_room_type
	 */
	get_homestay_reservation_homestay_room_type(){
		let url = "~/api/homestay_reservation/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "homestay_room_type": this.query.word }, (json) => {
		  if (json.result) {
			var result_homestay_reservation_homestay_room_type = json.result.list;
			result_homestay_reservation_homestay_room_type.map(o => o.title = o['homestay_room_type'])
	  			this.result_homestay_reservation_homestay_room_type = result_homestay_reservation_homestay_room_type
		 	}
		});
	},
												/**
	 * 获取user_name
	 */
	get_homestay_reservation_user_name(){
		let url = "~/api/homestay_reservation/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "user_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_homestay_reservation_user_name = json.result.list;
			result_homestay_reservation_user_name.map(o => o.title = o['user_name'])
	  			this.result_homestay_reservation_user_name = result_homestay_reservation_user_name
		 	}
		});
	},
																						/**
	 * 获取homestay_name
	 */
	get_refunds_for_homestays_homestay_name(){
		let url = "~/api/refunds_for_homestays/get_list?like=0";
				url = url+"&examine_state=已通过";
				this.$get(url, { page: 1, size: 10, "homestay_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_refunds_for_homestays_homestay_name = json.result.list;
			result_refunds_for_homestays_homestay_name.map(o => o.title = o['homestay_name'])
	  			this.result_refunds_for_homestays_homestay_name = result_refunds_for_homestays_homestay_name
		 	}
		});
	},
						/**
	 * 获取homestay_address
	 */
	get_refunds_for_homestays_homestay_address(){
		let url = "~/api/refunds_for_homestays/get_list?like=0";
				url = url+"&examine_state=已通过";
				this.$get(url, { page: 1, size: 10, "homestay_address": this.query.word }, (json) => {
		  if (json.result) {
			var result_refunds_for_homestays_homestay_address = json.result.list;
			result_refunds_for_homestays_homestay_address.map(o => o.title = o['homestay_address'])
	  			this.result_refunds_for_homestays_homestay_address = result_refunds_for_homestays_homestay_address
		 	}
		});
	},
						/**
	 * 获取homestay_room_type
	 */
	get_refunds_for_homestays_homestay_room_type(){
		let url = "~/api/refunds_for_homestays/get_list?like=0";
				url = url+"&examine_state=已通过";
				this.$get(url, { page: 1, size: 10, "homestay_room_type": this.query.word }, (json) => {
		  if (json.result) {
			var result_refunds_for_homestays_homestay_room_type = json.result.list;
			result_refunds_for_homestays_homestay_room_type.map(o => o.title = o['homestay_room_type'])
	  			this.result_refunds_for_homestays_homestay_room_type = result_refunds_for_homestays_homestay_room_type
		 	}
		});
	},
												/**
	 * 获取user_name
	 */
	get_refunds_for_homestays_user_name(){
		let url = "~/api/refunds_for_homestays/get_list?like=0";
				url = url+"&examine_state=已通过";
				this.$get(url, { page: 1, size: 10, "user_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_refunds_for_homestays_user_name = json.result.list;
			result_refunds_for_homestays_user_name.map(o => o.title = o['user_name'])
	  			this.result_refunds_for_homestays_user_name = result_refunds_for_homestays_user_name
		 	}
		});
	},
																																																																											/**
	 * 获取user_name
	 */
	get_product_exchange_user_name(){
		let url = "~/api/product_exchange/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "user_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_product_exchange_user_name = json.result.list;
			result_product_exchange_user_name.map(o => o.title = o['user_name'])
	  			this.result_product_exchange_user_name = result_product_exchange_user_name
		 	}
		});
	},
																								/**
	 * 获取logistics_status
	 */
	get_product_exchange_logistics_status(){
		let url = "~/api/product_exchange/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "logistics_status": this.query.word }, (json) => {
		  if (json.result) {
			var result_product_exchange_logistics_status = json.result.list;
			result_product_exchange_logistics_status.map(o => o.title = o['logistics_status'])
	  			this.result_product_exchange_logistics_status = result_product_exchange_logistics_status
		 	}
		});
	},
										/**
	 * 获取user_name
	 */
	get_online_service_user_name(){
		let url = "~/api/online_service/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "user_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_online_service_user_name = json.result.list;
			result_online_service_user_name.map(o => o.title = o['user_name'])
	  			this.result_online_service_user_name = result_online_service_user_name
		 	}
		});
	},
												
  },
  components: { list_result_search },
	created(){
    this.query.word = this.$route.query.word || "";
  },
  mounted() {
	this.get_article();
					this.get_regular_users_user_name();
																	this.get_types_of_attractions_types_of_attractions();
								this.get_attraction_information_attraction_name();
							this.get_attraction_information_types_of_attractions();
							this.get_attraction_information_attraction_cities();
							this.get_attraction_information_attraction_address();
																													this.get_attraction_reservation_attraction_name();
							this.get_attraction_reservation_attraction_cities();
							this.get_attraction_reservation_attraction_address();
																			this.get_attraction_reservation_user_name();
																				this.get_tourist_attraction_ticket_refund_attraction_name();
							this.get_tourist_attraction_ticket_refund_attraction_cities();
							this.get_tourist_attraction_ticket_refund_attraction_address();
																			this.get_tourist_attraction_ticket_refund_user_name();
																							this.get_food_classification_food_classification();
								this.get_food_information_food_name();
							this.get_food_information_food_classification();
																				this.get_homestay_information_homestay_name();
							this.get_homestay_information_homestay_address();
							this.get_homestay_information_homestay_room_type();
																							this.get_homestay_reservation_homestay_name();
							this.get_homestay_reservation_homestay_address();
							this.get_homestay_reservation_homestay_room_type();
													this.get_homestay_reservation_user_name();
																							this.get_refunds_for_homestays_homestay_name();
							this.get_refunds_for_homestays_homestay_address();
							this.get_refunds_for_homestays_homestay_room_type();
													this.get_refunds_for_homestays_user_name();
																																																																												this.get_product_exchange_user_name();
																									this.get_product_exchange_logistics_status();
											this.get_online_service_user_name();
												  },
  watch: {
	$route() {
	  $.push(this.query, this.$route.query);
	  this.get_article();
				  this.get_regular_users_user_name();
																  this.get_types_of_attractions_types_of_attractions();
							  this.get_attraction_information_attraction_name();
						  this.get_attraction_information_types_of_attractions();
						  this.get_attraction_information_attraction_cities();
						  this.get_attraction_information_attraction_address();
																												  this.get_attraction_reservation_attraction_name();
						  this.get_attraction_reservation_attraction_cities();
						  this.get_attraction_reservation_attraction_address();
																		  this.get_attraction_reservation_user_name();
																			  this.get_tourist_attraction_ticket_refund_attraction_name();
						  this.get_tourist_attraction_ticket_refund_attraction_cities();
						  this.get_tourist_attraction_ticket_refund_attraction_address();
																		  this.get_tourist_attraction_ticket_refund_user_name();
																						  this.get_food_classification_food_classification();
							  this.get_food_information_food_name();
						  this.get_food_information_food_classification();
																			  this.get_homestay_information_homestay_name();
						  this.get_homestay_information_homestay_address();
						  this.get_homestay_information_homestay_room_type();
																						  this.get_homestay_reservation_homestay_name();
						  this.get_homestay_reservation_homestay_address();
						  this.get_homestay_reservation_homestay_room_type();
												  this.get_homestay_reservation_user_name();
																						  this.get_refunds_for_homestays_homestay_name();
						  this.get_refunds_for_homestays_homestay_address();
						  this.get_refunds_for_homestays_homestay_room_type();
												  this.get_refunds_for_homestays_user_name();
																																																																											  this.get_product_exchange_user_name();
																								  this.get_product_exchange_logistics_status();
										  this.get_online_service_user_name();
													},
  },
};
</script>

<style scoped>
.card_search {
  text-align: center;
}
.card_result_search>.title {
  text-align: center;
  padding: 10px 0;
}
</style>
