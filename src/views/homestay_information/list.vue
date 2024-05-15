<template>
  <div
    class="diy_list page_homestay_information"
    id="homestay_information_list"
  >
    <div class="warp">
      <div class="container diy_list_container">
        <div class="diy_list_title">
          <div class="col">
            <span class="title">民宿信息列表</span>
          </div>
        </div>
        <div class="leis_box">
          <div class="iudis_box">
            <div class="row diy_list_search">
              <div class="col">
                <!-- 搜索栏 -->
                <div class="view Search">
                  <span class="diy_list_search_title">关键字搜索：</span>
                  <b-form-input
                    size="sm"
                    class="mr-sm-2"
                    placeholder="民宿名称搜索"
                    v-model="query['homestay_name']"
                  />
                  <b-form-input
                    size="sm"
                    class="mr-sm-2"
                    placeholder="民宿地址搜索"
                    v-model="query['homestay_address']"
                  />
                  <b-form-input
                    size="sm"
                    class="mr-sm-2"
                    placeholder="民宿房型搜索"
                    v-model="query['homestay_room_type']"
                  />
                  <b-button size="sm" @click="search()">
                    <b-icon icon="search" />
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
                    <!-- 排序 -->

                    <b-dropdown text="排序" variant="outline-dark" left>
                      <b-dropdown-item
                        v-for="(o, i) in list_sort"
                        :key="i"
                        @click="set_sort(o)"
                      >
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
              <list_homestay_information :list="list" />
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
import list_homestay_information from "@/components/diy/list_homestay_information.vue";
import diy_pager from "@/components/diy/diy_pager";
import mixin from "@/mixins/page.js";

export default {
  mixins: [mixin],
  components: {
    diy_pager,
    list_homestay_information,
  },
  data() {
    return {
      url_get_list: "~/api/homestay_information/get_list?like=0",

      // 查询条件
      query: {
        keyword: "",
        page: 1,
        size: 12,
        homestay_name: "", // 民宿名称
        homestay_address: "", // 民宿地址
        homestay_room_type: "", // 民宿房型
      },
      // 排序内容
      list_sort: [
        {
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
          name: "民宿名称正序",
          value: "homestay_name asc",
        },
        {
          name: "民宿名称倒序",
          value: "homestay_name desc",
        },
        {
          name: "民宿地址正序",
          value: "homestay_address asc",
        },
        {
          name: "民宿地址倒序",
          value: "homestay_address desc",
        },
        {
          name: "民宿房型正序",
          value: "homestay_room_type asc",
        },
        {
          name: "民宿房型倒序",
          value: "homestay_room_type desc",
        },
      ],
    };
  },
  methods: {
    get_list_before(param) {},
    /**
     * 筛选选择
     */
    filter_set(o, key) {
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
     * 筛选
     */
    /**
     * 重置
     */
    reset() {
      this.query.homestay_name = "";
      this.query.homestay_address = "";
      this.query.homestay_room_type = "";
      this.search();
    },

    // 返回条数
    toSize(i) {
      this.query.size = i;
      this.first();
    },

    // 返回页数
    toPage(i) {
      this.query.page = i;
      this.first();
    },

    goToPage(v) {
      this.query.page = v;
      this.goToNew(v);
    },
  },
  computed: {},
  created() {},
};
</script>

<style></style>
