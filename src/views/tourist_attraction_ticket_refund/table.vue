<template>
	<div class="page_user" id="user_address">
		<div class="warp">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-12 col-md-3">
						<div class="card_menu">
							<!-- 左侧边栏 -->
							<list_admin_menu_user></list_admin_menu_user>
						</div>
					</div>
					<div class="col-12 col-md-9">
						<div class="card_addres pl-2">
							<!-- 景点退票 -->
							<div><span>景点退票</span></div>
							<table_tourist_attraction_ticket_refund v-if="$check_action('/tourist_attraction_ticket_refund/table','get')"></table_tourist_attraction_ticket_refund>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	import list_admin_menu_user from "@/components/diy/list_admin_menu_user.vue";
	import table_tourist_attraction_ticket_refund from "../../components/diy/table_tourist_attraction_ticket_refund.vue";
	export default {
		data() {
			return {
			};
		},
		mounted() {
		},
		methods: {
		},

		components: {
			list_admin_menu_user,
			table_tourist_attraction_ticket_refund,
		},
	};
</script>

<style scoped>
	.container {
		min-height: 800px;
	}
</style>
