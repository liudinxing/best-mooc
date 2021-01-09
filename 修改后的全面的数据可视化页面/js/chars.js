var dom = document.getElementById("firsttab1");
var dom2 = document.getElementById("firsttab2");
var dom3 = document.getElementById("firsttab3");
var dom4 = document.getElementById("firsttab4");
var dom5 = document.getElementById("firsttab5");
var dom6 = document.getElementById("firsttab6");
var dom7 = document.getElementById("firsttab7");
var dom8 = document.getElementById("firsttab8");
var dom9 = document.getElementById("charbar");
var dom10 = document.getElementById("charbar2");
var dom11 = document.getElementById("secondRighttextChar");
var dom12 = document.getElementById("secondRighttextChar1");
var dom13 = document.getElementById("secondChar");
var dom14 = document.getElementById("contentChar1");
var dom15 = document.getElementById("contentChar2");

var myChart = echarts.init(dom,"wonderland");
var myChart2= echarts.init(dom2,"wonderland");
var myChart3 = echarts.init(dom3,"wonderland");
var myChart4 = echarts.init(dom4,"wonderland");
var myChart5 = echarts.init(dom5,"wonderland");
var myChart6= echarts.init(dom6,"wonderland");
var myChart7 = echarts.init(dom7,"wonderland");
var myChart8 = echarts.init(dom8,"wonderland");
var myChart9 = echarts.init(dom9,"wonderland");
var myChart10 = echarts.init(dom10,"wonderland");
var myChart11 = echarts.init(dom11,"wonderland");
var myChart12 = echarts.init(dom12,"wonderland");
var myChart13 = echarts.init(dom13,"wonderland");
var myChart14 = echarts.init(dom14,"wonderland");
var myChart15 = echarts.init(dom15,"wonderland");

window.addEventListener("resize", () => {
    this.myChart.resize();
    this.myChart2.resize();
    this.myChart3.resize();
    this.myChart4.resize();
    this.myChart5.resize();
    this.myChart6.resize();
    this.myChart7.resize();
    this.myChart8.resize();
    this.myChart9.resize();
    this.myChart10.resize();
    this.myChart11.resize();
    this.myChart12.resize();
    this.myChart13.resize();
    this.myChart14.resize();
    this.myChart15.resize();
});


option = {
    tooltip: {
        trigger: 'item',
        formatter: ""
    },

    series: [
        {
            name:'当前热度',
            type:'pie',
            radius: ['40%', '80%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:18805, name:'',itemStyle:{
                        color:"#0268e8"
                    }}
            ]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

option8 = {
    tooltip: {
        trigger: 'item',
        formatter: ""
    },

    series: [
        {
            name:'当前热度',
            type:'pie',
            radius: ['40%', '80%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:23805, name:'',itemStyle:{
                        color:"#0268e8"
                    }}
            ]
        }
    ]
};
if (option8 && typeof option8 === "object") {
    myChart2.setOption(option8, true);
}

option9 = {
    tooltip: {
        trigger: 'item',
        formatter: ""
    },

    series: [
        {
            name:'当前热度',
            type:'pie',
            radius: ['40%', '80%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:13742, name:'',itemStyle:{
                        color:"#0268e8"
                    }}
            ]
        }
    ]
};
if (option9 && typeof option9 === "object") {
    myChart3.setOption(option9, true);
}

option10 = {
    tooltip: {
        trigger: 'item',
        formatter: ""
    },

    series: [
        {
            name:'当前热度',
            type:'pie',
            radius: ['40%', '80%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:14869, name:'',itemStyle:{
                        color:"#0268e8"
                    }}
            ]
        }
    ]
};
if (option10 && typeof option10 === "object") {
    myChart4.setOption(option10, true);
}

option11 = {
    tooltip: {
        trigger: 'item',
        formatter: ""
    },

    series: [
        {
            name:'参与人数',
            type:'pie',
            radius: ['40%', '80%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:540032, name:'',itemStyle:{
                        color:"#0268e8"
                    }}
            ]
        }
    ]
};
if (option11 && typeof option11 === "object") {
    myChart5.setOption(option11, true);
}

option12 = {
    tooltip: {
        trigger: 'item',
        formatter: ""
    },

    series: [
        {
            name:'参与人数',
            type:'pie',
            radius: ['40%', '80%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:365279, name:'',itemStyle:{
                        color:"#0268e8"
                    }}
            ]
        }
    ]
};
if (option12 && typeof option12 === "object") {
    myChart6.setOption(option12, true);
}

option13 = {
    tooltip: {
        trigger: 'item',
        formatter: ""
    },

    series: [
        {
            name:'参与人数',
            type:'pie',
            radius: ['40%', '80%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:163807, name:'',itemStyle:{
                        color:"#0268e8"
                    }}
            ]
        }
    ]
};
if (option13 && typeof option13 === "object") {
    myChart7.setOption(option13, true);
}

option14 = {
    tooltip: {
        trigger: 'item',
        formatter: ""
    },

    series: [
        {
            name:'参与人数',
            type:'pie',
            radius: ['40%', '80%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:163796, name:'',itemStyle:{
                        color:"#0268e8"
                    }}
            ]
        }
    ]
};
if (option14 && typeof option14 === "object") {
    myChart8.setOption(option14, true);
}




option1 = {
    title : {
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        data: ['发代开','发票发','纳税申','发票旧','发认证']
    },
    series : [
        {
            name: '业务办理',
            type: 'pie',
            radius : '35%',
            center: ['50%', '60%'],
            data:[
                {value:11, name:'工学'},
                {value:7, name:'文史哲'},
                {value:6, name:'理学'},
                {value:3, name:'教育教学'},
                {value:1, name:'其他'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal:{
                    color:function(params) {
                        //自定义颜色
                        var colorList = [
                            '#01b7ff', '#fd7c28', '#6fb440', '#ffc800', '#2d89dc',
                        ];
                        textStyle : {
                            // fontWeight : 300 ,
                                fontSize : 8    //文字的字体大小
                        }
                        return colorList[params.dataIndex]
                    }
                }
            }
        }
    ]
};

if (option1 && typeof option1 === "object") {
    myChart10.setOption(option1, true);
}
option6 = {
    title : {
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        data: ['发代开','发票发','纳税申','发票旧','发认证']
    },
    series : [
        {
            name: '业务办理',
            type: 'pie',
            radius : '35%',
            center: ['50%', '60%'],
            data:[
                {value:498024, name:'计算机'},
                {value:451626, name:'艺术设计'},
                {value:540032, name:'外语'},
                {value:326346, name:'文史哲'},
                {value:287819, name:'其他'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal:{
                    color:function(params) {
                        //自定义颜色
                        var colorList = [
                            '#01b7ff', '#fd7c28', '#6fb440', '#ffc800', '#2d89dc',
                        ];
                        textStyle : {
                            // fontWeight : 300 ,
                                fontSize : 8    //文字的字体大小
                        }
                        return colorList[params.dataIndex]
                    }
                }
            }
        }
    ]
};
if (option6 && typeof option6 === "object") {
    myChart9.setOption(option6, true);
}




option2 = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['差评', '好评'],
            axisTick: {
                alignWithLabel: true
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色

                }
            }

        }
    ],
    yAxis : [
        {
            type : 'value',
            axisTick: {
                show: false
            },
            splitLine:{
                show:false
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色

                }
            }

        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[32.62, 52.68],
            itemStyle:{
                normal:{
                    color: function (params){
                        var colorList = ['#05fef8','#fedc00'];
                        return colorList[params.dataIndex];
                    }
                }
            }

        }
    ]
};
if (option2 && typeof option2 === "object") {
    myChart11.setOption(option2, true);
}






option3 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接问','件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            name:'省级市级',
            type:'pie',
            radius: ['30%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle:{
                normal:{
                    color: function (params){
                        var colorList = ['#05fef8','#fedc00'];
                        return colorList[params.dataIndex];
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'好评'},
                {value:310, name:'差评'}
            ]
        }
    ]
};
if (option3 && typeof option3 === "object") {
    myChart12.setOption(option3, true);
}



// Generate data
var category = ['2020-10-13','2020-10-27','2020-11-10','2020-11-24','2020-12-8','2020-12-22','2021-1-5'];
var dottedBase = +new Date();
var lineData = [147266,148650,182530,242250,483700,498541,540032];
var barData = [985,1384,33880,59720,241450,14841,41491];



// option
option4 = {
    backgroundColor: '#0f375f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['line', 'bar'],
        textStyle: {
            color: '#ccc'
        }
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: {
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    series: [{
        name: 'line',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 5,
        data: lineData
    }, {
        name: 'bar',
        type: 'bar',
        barWidth: 5,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#fbb307'},
                        {offset: 1, color: '#84f00e'}
                    ]
                )
            }
        },
        data: barData
    }, {
        name: 'line',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(20,200,212,0.5)'},
                        {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                        {offset: 1, color: 'rgba(20,200,212,0)'}
                    ]
                )
            }
        },
        z: -12,
        data: lineData
    }, {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#0f375f'
            }
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
    }]
};
if (option4 && typeof option4 === "object") {
    myChart13.setOption(option4, true);
}



option5 = {
    xAxis: {
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        axisTick: {
            show: false
        },
        data: ['00:00', '6:00', '10:00', '12:00', '14:00', '16:00', '20:00','23:00'],
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#fff',//左边线的颜色
                width:'2'//坐标线的宽度
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色

            }
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: true
        },
        splitLine:{
            // show:false
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#fff',//左边线的颜色
                width:'2'//坐标线的宽度
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色

            }
        }
    },
    series: [{
        data: [123, 4270, 16840, 13700, 28019, 14056, 8367,5098,4000,1095],
        type: 'line',
        smooth:.2,
        color:'#04fefa'
    }]
};
if (option5 && typeof option5 === "object") {
    myChart14.setOption(option5, true);
}


option7 = {
    xAxis: {
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        axisTick: {
            show: false
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#fff',//左边线的颜色
                width:'2'//坐标线的宽度
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色

            }
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: true
        },
        splitLine:{
            // show:false
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#fff',//左边线的颜色
                width:'2'//坐标线的宽度
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色

            }
        }
    },
    series: [{
        data: [22123, 27270, 26840, 34700, 24019, 19056, 8367],
        type: 'line',
        smooth:.2,
        color:'#04fefa'
    }]
};
if (option7 && typeof option7 === "object") {
    myChart15.setOption(option7, true);
}
