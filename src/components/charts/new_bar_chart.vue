<template>
	<div class="bar_chart" :id="id">条形图</div>
</template>

<script>
	import echarts from "@/assets/js/echarts.min.js";
	export default {
		name: "Home",
		components: {},
		props: {
			id: {
				type: String,
				default: "barChart"
			},
			title: {
				type: String,
				default: "XXX条形图"
			},
			vm: {
				type: Object,
				default: function() {
					return {
						xAxis: "xAxis",
						names: "names",
						values: "values",
					};
				},
			}
		},
		data() {
			return {
				option: {
					title: {
						text: "XXX条形图",
						left: "center",
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
          legend: {
            type: 'scroll',
            orient: 'horizontal',
            y: 'bottom'
          },
					xAxis: [{
						type: 'category',
						axisTick: {
							show: false
						},
						data: []
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [
						// {
						// 	name: 'Forest',
						// 	type: 'bar',
						// 	barGap: 0,
						// 	emphasis: {
						// 		focus: 'series'
						// 	},
						// 	data: [320, 332, 301, 334, 390]
						// },
					]
				}
			};
		},
		created() {},
		mounted() {
      console.log(this.vm)
			let that=this;
			setTimeout(function(){
				that.init_chart();
			},200)
		},
		methods: {
			init_chart() {
				var option = this.option;

				var title = this.title;
				if (title) {
					option.title.text = title;
				}

				var series = this.series;
				option.series = series;

				var xAxis = option.xAxis[0];
				xAxis.data = this.vm.xAxis;

				if (xAxis.data.length>4){
				  option.axisLabel= {
            interval: 0, //使x轴文字显示全
            formatter: function (params) {
              let newParamsName = '';
              const paramsNameNumber = params.length; // 文字总长度
              const provideNumber = 4; //一行显示几个字
              const rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                for (let p = 0; p < rowNumber; p++) {
                  const start = p * provideNumber;
                  const end = start + provideNumber;
                  const tempStr = p === rowNumber - 1 ? params.substring(start, paramsNameNumber) : params.substring(start, end) + '\n';
                  newParamsName += tempStr;
                }
              } else {
                newParamsName = params;
              }
              return newParamsName;
            },
          }
        }

				let myChart = echarts.init(document.getElementById(this.id));
				myChart.setOption(option);
			},
		},
		computed: {
			series() {
				var vm = this.vm;
				var list = this.vm.names;
				var values = vm.values;
				var series = [];
				let labelOption = {
					show: true,
					position: "insideBottom",
					distance: 15,
					align: 'left',
					verticalAlign: 'middle',
					formatter: '{c}',
					fontSize: 16,
					rich: {
						name: {}
					}
				};
				for (let i=0;i<list.length;i++){
					let data = []
					for (let j=0;j<values.length;j++){
						data.push(values[j][i]);
					}
					let dict_type = {
							name: list[i],
							type: 'bar',
							barGap: 0,
							label: labelOption,
							emphasis: {
								focus: 'series'
							},
						 	data: data
					}
					series.push(dict_type);
				}
				return series;
			}
		},
		watch: {
			list() {
				this.init_chart();
			},
		},
	};
</script>
