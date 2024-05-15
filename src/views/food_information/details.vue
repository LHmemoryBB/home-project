<template>
  <div class="diy_details page_food_information" id="food_information_details">
    <div class="warp_dt_box">
      <div class="warp">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card_food_information">
                <div_food_information :obj="obj"></div_food_information>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import div_food_information from "@/components/diy/div_food_information.vue";
import mixin from "@/mixins/page.js";
export default {
  mixins: [mixin],
  components: {
    div_food_information,
  },
  data() {
    return {
      url_get_obj: "~/api/food_information/get_obj?",

      field: "food_information_id",

      obj: {
        praise_len: 0,
      },

      query: {
        food_name: "",
        food_classification: "",
        food_address: "",
        food_labels: "",
        food_pictures: "",
        introduction_to_food: "",
        food_information_id: 0,
      },
      // 点赞
      praise: 0,
      // 点赞状态
      state_praise: false,
      // 收藏状态
      state_collect: false,
    };
  },
  methods: {
    get_obj_after(json) {
      // 判断是否获取到数据
      if (json && json.result && json.result.obj) {
        console.log(json.result.obj);
        var obj = json.result.obj;
        this.obj = obj;
        // 获取点赞数
        this.get_praise(obj);
        // 初始化收藏状态
        this.get_collect(obj);
      }
    },
    /**
     * 初始化收藏状态
     * @param {Object} obj
     */
    get_collect(obj) {
      var user_id = this.user.user_id;

      var query = {
        source_table: "food_information",
        source_field: "food_information_id",
        source_id: obj["food_information_id"],
        user_id,
      };

      this.$get("~/api/collect/count?", query, (res) => {
        console.log(res);
        if (res.result || res.result === 0) {
          var bl = res.result ? true : false;
          this.state_collect = bl;
          console.log("收藏状态：" + bl);
        } else if (res.error) {
          console.error(res.error);
        }
      });
    },
    /****
     * 分享点击
     *
     *  */
    toShare(e) {
      window.open(e);
    },
    /**
     * 改变收藏状态
     */
    change_collect() {
      var user_id = this.user.user_id;

      var query = {
        source_table: "food_information",
        source_field: "food_information_id",
        source_id: this.obj["food_information_id"],
        user_id,
      };

      // 收藏状态
      if (this.state_collect) {
        this.state_collect = false;
        this.$get("~/api/collect/del?", query, (res) => {
          if (res.result) {
            this.$toast("取消收藏");
          } else if (res.error) {
            this.$toast(res.error.message);
            console.error(res.error);
          }
        });
      } else {
        this.state_collect = true;
        query.title = this.obj.food_name;
        query.img = this.obj.food_pictures;
        this.$post("~/api/collect/add?", query, (res) => {
          if (res.result) {
            this.$toast("收藏成功");
          } else if (res.error) {
            this.$toast(res.error.message);
            console.error(res.error);
          }
        });
      }
    },
    /**
     * 获取点赞
     * @param {Object} obj
     */
    get_praise(obj) {
      var user_id = this.user.user_id;

      this.$get(
        "~/api/praise/count?",
        {
          source_table: "food_information",
          source_field: "food_information_id",
          source_id: obj["food_information_id"],
        },
        (res) => {
          if (res.result || res.result === 0) {
            this.praise = res.result;
            console.log("点赞数：", res.result);
          } else if (res.error) {
            this.$toast(res.error.message);
            console.error(res.error);
          }
        }
      );

      this.$get(
        "~/api/praise/count?",
        {
          source_table: "food_information",
          source_field: "food_information_id",
          source_id: obj["food_information_id"],
          user_id,
        },
        (res) => {
          if (res.result || res.result === 0) {
            this.state_praise = res.result ? true : false;
            console.log("点赞状态：", res.result);
          } else if (res.error) {
            this.$toast(res.error.message);
            console.error(res.error);
          }
        }
      );
    },

    /**
     * 改变点赞数
     */
    change_praise(obj) {
      var user_id = this.user.user_id;

      var query = {
        source_table: "food_information",
        source_field: "food_information_id",
        source_id: this.obj["food_information_id"],
        user_id,
      };

      var _this = this;
      _this.obj.praise_len = parseInt(_this.obj.praise_len);
      // 点赞状态
      if (this.state_praise) {
        this.state_praise = false;
        this.$get("~/api/praise/del?", query, (res) => {
          if (res.result) {
            var praise_len = _this.obj.praise_len - 1;
            this.$post(
              "~/api/food_information/set?food_information_id=" +
                _this.obj["food_information_id"],
              {
                praise_len,
              },
              (res) => {
                if (res.result) {
                  console.log("添加点赞数状态：", res.result);
                } else if (res.error) {
                  console.error(res.error);
                }
              }
            );
            this.$toast("取消点赞");
          } else if (res.error) {
            this.$toast(res.error.message);
            console.error(res.error);
          }
        });
      } else {
        this.state_praise = true;
        this.$post("~/api/praise/add?", query, (res) => {
          if (res.result) {
            var praise_len = _this.obj.praise_len + 1;
            this.$post(
              "~/api/food_information/set?food_information_id=" +
                _this.obj["food_information_id"],
              {
                praise_len,
              },
              (res) => {
                if (res.result) {
                  console.log("添加点赞数状态：", res.result);
                } else if (res.error) {
                  console.error(res.error);
                }
              }
            );
            this.$toast("点赞成功");
          } else if (res.error) {
            this.$toast(res.error.message);
            console.error(res.error);
          }
        });
      }
    },
  },

  mounted() {},
};
</script>

<style>
.qecode {
  display: flex;
  align-content: center;
  width: 270px;
  background: white;
  position: absolute;
  left: 20%;
  top: 20px;
  z-index: 999;
}
.qecodeImg {
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  padding-top: 10px;
  margin: 0 auto;
}
.btn_share {
  display: inline-block;
  position: relative;
  top: 15px;
  background: rgb(240, 238, 238);
  border: 1px solid #ccc;
  height: 38px;
  margin-left: 10px;
  padding: 3px 10px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;
}
.btn_share_icon {
  width: 30px;
  height: 28px;
  float: left;
  margin-right: 10px;
}
.share_box {
  display: none;
  float: left;
}
.share_box img {
  width: 30px;
  height: 28px;
  margin-right: 10px;
}
.btn_share:hover .share_box {
  display: block;
}
</style>
