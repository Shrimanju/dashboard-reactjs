
var Chartist = require("chartist");

var delays = 80,
  durations = 500;



const dailySalesChart = {
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7","8","9","10","11","12","13","14","15","16","17","18","19","20"],
    series: [[12, 17, 7, 17, 23, 18, 38,22,33,4,2,1,43,4]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50, 
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};





module.exports = {
  dailySalesChart,
  
};
