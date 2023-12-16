const width_threshold = 480; // Ngưỡng chiều rộng để quyết định việc duy trì tỷ lệ khung hình

function drawLineChart() {
  // Vẽ biểu đồ đường
  if ($("#lineChart").length) {
    ctxLine = document.getElementById("lineChart").getContext("2d");
    optionsLine = {
      scales: {
        yAxes: [
          {
            // scaleLabel: {
            //   display: true,
            //   labelString: "Hits"
            // }
          }
        ]
      }
    };

    // Thiết lập tỷ lệ khung hình dựa trên chiều rộng của cửa sổ
    optionsLine.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

    configLine = {
      type: "line",
      data: {
        labels: [
          "Tháng 1",
          "Tháng 2",
          "Tháng 3",
          "Tháng 4",
          "Tháng 5",
          "Tháng 6",
          "Tháng 7",
          "Tháng 8",
          "Tháng 9",
          "Tháng 10",
          "Tháng 11",
          "Tháng 12"
        ],
        datasets: [
          // Dữ liệu cho các dòng trong biểu đồ đường
          {
            label: "Lượt xem",
            data: [88, 68, 79, 57, 40, 60, 70, 66, 77, 88, 88, 99],
            fill: false,
            borderColor: "rgba(245,172,56,255)",
            cubicInterpolationMode: "monotone",
            pointRadius: 3
          },
          {
            label: "Lượt mua",
            data: [33, 45, 37, 21, 55, 74, 69, 40, 60, 70, 66, 77],
            fill: false,
            borderColor: "rgba(86,169,225,255)",
            cubicInterpolationMode: "monotone",
            pointRadius: 3
          },
          {
            label: "Khách hàng",
            data: [44, 19, 38, 46, 85, 66, 79, 45, 37, 21, 55, 56],
            fill: false,
            borderColor: "rgba(203,93,81,255)",
            cubicInterpolationMode: "monotone",
            pointRadius: 3
          }
        ]
      },
      options: optionsLine
    };

    lineChart = new Chart(ctxLine, configLine);
  }
}

function drawBarChart() {
  // Vẽ biểu đồ cột
  if ($("#barChart").length) {
    ctxBar = document.getElementById("barChart").getContext("2d");

    optionsBar = {
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 0.2,
            ticks: {
              beginAtZero: true
            },
            // scaleLabel: {
            //   display: true,
            //   labelString: "Hits"
            // }
          }
        ]
      }
    };

    optionsBar.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

    // Mã màu cho từng cột trong biểu đồ cột
    configBar = {
      type: "horizontalBar",
      data: {
        labels: ["Gấu trúc", "Sân khấu", "Mèo", "Phòng ngủ", "Người cá", "Filter", "Hồ ly"],
        datasets: [
          {
            label: "Sản phẩm",
            data: [33, 40, 28, 49, 58, 38, 44],
            backgroundColor: [
              "#f4a932",
              "#56a9e1",
              "#c74e41",
              "#aa72c1",
              "#42b874",
              "#bfbfbf",
              "#3889FC"
            ],
            borderWidth: 0
          }
        ]
      },
      options: optionsBar
    };

    barChart = new Chart(ctxBar, configBar);
  }
}

function drawPieChart() {
  // Vẽ biểu đồ tròn
  if ($("#pieChart").length) {
    var chartHeight = 300;

    $("#pieChartContainer").css("height", chartHeight + "px");

    ctxPie = document.getElementById("pieChart").getContext("2d");

    optionsPie = {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10
        }
      },
      legend: {
        position: "top"
      },
    };

    // Mã màu cho từng phần trong biểu đồ tròn
    configPie = {
      type: "pie",
      data: {
        datasets: [
          {
            data: [179, 206, 357, 277],
            backgroundColor: ["#f4a932", "#56a9e1", "#c74e41", "#aa72c1"],
            label: "Storage"
          }
        ],
        labels: [
          "Động vật",
          "Phòng ngủ",
          "Kiến trúc",
          "Y khoa"
        ]
      },
      options: optionsPie
    };

    pieChart = new Chart(ctxPie, configPie);
  }
}

function updateLineChart() {
  // Cập nhật biểu đồ đường
  if (lineChart) {
    lineChart.options = optionsLine;
    lineChart.update();
  }
}

function updateBarChart() {
  // Cập nhật biểu đồ cột
  if (barChart) {
    barChart.options = optionsBar;
    barChart.update();
  }
}
