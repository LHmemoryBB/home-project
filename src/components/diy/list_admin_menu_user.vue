<template>
  <div class="list_menu diy_menu">
    <router-link
            to="/user_center/index"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/user_center/index'}"
     >
      <span class="left_span">个人首页</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/regular_users/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/regular_users/table'}"
            v-if="user_group == '管理员' || $check_action('/regular_users/table','get')">
      <span class="left_span">普通用户</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/types_of_attractions/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/types_of_attractions/table'}"
            v-if="user_group == '管理员' || $check_action('/types_of_attractions/table','get')">
      <span class="left_span">景点类型</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/attraction_information/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/attraction_information/table'}"
            v-if="user_group == '管理员' || $check_action('/attraction_information/table','get')">
      <span class="left_span">景点信息</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/attraction_reservation/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/attraction_reservation/table'}"
            v-if="user_group == '管理员' || $check_action('/attraction_reservation/table','get')">
      <span class="left_span">景点预约</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/tourist_attraction_ticket_refund/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/tourist_attraction_ticket_refund/table'}"
            v-if="user_group == '管理员' || $check_action('/tourist_attraction_ticket_refund/table','get')">
      <span class="left_span">景点退票</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/food_classification/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/food_classification/table'}"
            v-if="user_group == '管理员' || $check_action('/food_classification/table','get')">
      <span class="left_span">美食分类</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/food_information/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/food_information/table'}"
            v-if="user_group == '管理员' || $check_action('/food_information/table','get')">
      <span class="left_span">美食信息</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/homestay_information/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/homestay_information/table'}"
            v-if="user_group == '管理员' || $check_action('/homestay_information/table','get')">
      <span class="left_span">民宿信息</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/homestay_reservation/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/homestay_reservation/table'}"
            v-if="user_group == '管理员' || $check_action('/homestay_reservation/table','get')">
      <span class="left_span">民宿预约</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/refunds_for_homestays/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/refunds_for_homestays/table'}"
            v-if="user_group == '管理员' || $check_action('/refunds_for_homestays/table','get')">
      <span class="left_span">民宿退款</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/forum_sharing/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/forum_sharing/table'}"
            v-if="user_group == '管理员' || $check_action('/forum_sharing/table','get')">
      <span class="left_span">论坛分享</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/integral_products/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/integral_products/table'}"
            v-if="user_group == '管理员' || $check_action('/integral_products/table','get')">
      <span class="left_span">积分商品</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/product_exchange/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/product_exchange/table'}"
            v-if="user_group == '管理员' || $check_action('/product_exchange/table','get')">
      <span class="left_span">商品兑换</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
    <router-link
            to="/online_service/table"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/online_service/table'}"
            v-if="user_group == '管理员' || $check_action('/online_service/table','get')">
      <span class="left_span">在线客服</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>

  <router-link
              to="/user/collect"
              class="menu_item"
              :class="{ selected: this.$route.path=== '/collect/list'}"
              v-if="user_group == '管理员' || $check_action('/collect/list','get')">
        <span class="left_span">收藏</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
  </router-link>
  </div>
</template>

<script>
import mixin from "@/mixins/page.js";
export default {
  mixins: [mixin],
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },

  components: {
  },
};
</script>

<style scoped>
.list_menu {
  flex: 0 0 25%;
  border-bottom: 1px solid #eee;
}
.menu_item {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border: 1px solid #eee;
  border-bottom: none;
  background-color: #fff;
}
.menu_item.selected {
  background-color: #000;
}
.menu_item.selected span {
  color: #fff ;
}
.content {
  flex: 0 0 74%;
}
</style>
