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
							<!-- 民宿退款 -->
							<div><span>民宿退款</span></div>
							<view_refunds_for_homestays v-if="$check_action('/refunds_for_homestays/view','get')"></view_refunds_for_homestays>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	import list_admin_menu_user from "@/components/diy/list_admin_menu_user.vue";
	import view_refunds_for_homestays from "../../components/diy/view_refunds_for_homestays.vue";
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
			view_refunds_for_homestays,
		},
	};
</script>

<style scoped>
	.container {
		min-height: 800px;
	}
</style>
