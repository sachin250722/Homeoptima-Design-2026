/* ============================================================
   charts.js — HomeOptima
   Centralised Chart.js configurations for all pages.
   Each section is guarded by a canvas element check so this
   file is safe to include on every page.
   ============================================================ */

(function () {
  "use strict";

  /* ----------------------------------------------------------
       Home Value Hub Results — Market Trend Line Chart
    ---------------------------------------------------------- */
  var marketTrendCanvas = document.getElementById("marketTrendChart");
  if (marketTrendCanvas) {
    new Chart(marketTrendCanvas, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Avg. Sale Price ($)",
            data: [],
            borderColor: "#1a56db",
            backgroundColor: "rgba(26,86,219,0.08)",
            borderWidth: 2,
            pointRadius: 4,
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
          tooltip: { mode: "index", intersect: false },
        },
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              callback: function (val) {
                return "$" + val.toLocaleString();
              },
            },
          },
        },
      },
    });
  }

  /* ----------------------------------------------------------
       Home Value Hub Results — Price Distribution Bar Chart
    ---------------------------------------------------------- */
  var priceDistCanvas = document.getElementById("priceDistributionChart");
  if (priceDistCanvas) {
    new Chart(priceDistCanvas, {
      type: "bar",
      data: {
        labels: [],
        datasets: [
          {
            label: "Listings",
            data: [],
            backgroundColor: "rgba(26,86,219,0.7)",
            borderColor: "#1a56db",
            borderWidth: 1,
            borderRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  }

  /* ----------------------------------------------------------
       Listing Details — Neighbourhood Stats Doughnut Chart
    ---------------------------------------------------------- */
  var neighbourhoodCanvas = document.getElementById("neighbourhoodStatsChart");
  if (neighbourhoodCanvas) {
    new Chart(neighbourhoodCanvas, {
      type: "doughnut",
      data: {
        labels: ["Schools", "Parks", "Transit", "Shopping", "Healthcare"],
        datasets: [
          {
            data: [],
            backgroundColor: ["#1a56db", "#16bdca", "#fdba8c", "#e74694", "#6875f5"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "right" },
        },
      },
    });
  }

  /* ----------------------------------------------------------
       My Properties — Portfolio Value Line Chart
    ---------------------------------------------------------- */
  var portfolioCanvas = document.getElementById("portfolioValueChart");
  if (portfolioCanvas) {
    new Chart(portfolioCanvas, {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "Portfolio Value ($)",
            data: [],
            borderColor: "#0e9f6e",
            backgroundColor: "rgba(14,159,110,0.08)",
            borderWidth: 2,
            pointRadius: 4,
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
        },
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              callback: function (val) {
                return "$" + val.toLocaleString();
              },
            },
          },
        },
      },
    });
  }
})();

// ================================================================
//  Home Value Hub Results — Equity Pie Chart
// ================================================================
(function () {
  var ctx = document.getElementById("equityChart");
  if (!ctx) return;
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Equity", "Mortgage"],
      datasets: [
        {
          data: [32, 68],
          backgroundColor: ["#E9BD5F", "#2C6EFE"],
          borderWidth: 0,
          hoverOffset: 4,
        },
      ],
    },
    options: {
      cutout: "62%",
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (ctx) {
              return ctx.label + ": " + ctx.parsed + "%";
            },
          },
        },
      },
    },
  });
})();

// ================================================================
//  Home Value Hub Results — Market Stats Line Chart + tab switcher
// ================================================================
(function () {
  var ctx = document.getElementById("marketChart");
  if (!ctx) return;
  var labels = [
    "Sep 2014",
    "Sep 2015",
    "Sep 2016",
    "Sep 2017",
    "Sep 2018",
    "Sep 2019",
    "Sep 2020",
    "Sep 2021",
    "Sep 2022",
    "Sep 2023",
    "Sep 2024",
    "Sep 2025",
  ];
  var data = [895000, 980000, 1100000, 1150000, 1080000, 1050000, 1120000, 1450000, 1520000, 1350000, 2100000, 1249000];
  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Valuation",
          data: data,
          borderColor: "#2C6EFE",
          backgroundColor: "rgba(44,110,254,0.08)",
          borderWidth: 2,
          pointBackgroundColor: "#2C6EFE",
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 11 }, color: "#929DAA" },
        },
        y: {
          grid: { color: "rgba(0,0,0,0.05)" },
          ticks: {
            font: { size: 11 },
            color: "#929DAA",
            callback: function (v) {
              return v >= 1000000 ? (v / 1000000).toFixed(1) + "M" : v / 1000 + "K";
            },
          },
          min: 500000,
          max: 2200000,
        },
      },
    },
  });

  // chart tab switcher for home-value-hub
  document.querySelectorAll(".hvh-market-tab").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".hvh-market-tab").forEach(function (b) {
        b.classList.remove("hvh-market-tab--active");
      });
      this.classList.add("hvh-market-tab--active");
    });
  });
})();

// ================================================================
//  Life Factors — Population: Households with Children (horizontal bar)
// ================================================================
(function () {
  var ctx = document.getElementById("popHouseholdsChart");
  if (!ctx) return;

  var dataLabelPlugin = {
    id: "dataLabelPlugin",
    afterDatasetsDraw: function (chart) {
      var c = chart.ctx;
      chart.data.datasets.forEach(function (dataset, i) {
        chart.getDatasetMeta(i).data.forEach(function (bar, j) {
          var value = dataset.data[j] + "%";
          c.save();
          c.fillStyle = "rgba(14,23,31,0.88)";
          c.font = "500 14px Poppins, sans-serif";
          c.textAlign = "left";
          c.textBaseline = "middle";
          c.fillText(value, bar.x + 8, bar.y);
          c.restore();
        });
      });
    },
  };

  new Chart(ctx, {
    type: "bar",
    plugins: [dataLabelPlugin],
    data: {
      labels: ["Mississauga", "This Area"],
      datasets: [
        {
          data: [53, 42],
          backgroundColor: ["rgba(112,134,253,0.8)", "rgba(111,209,149,0.8)"],
          borderWidth: 0,
          borderRadius: 2,
          barThickness: 40,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { right: 48 } },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (ctx) { return " " + ctx.raw + "%"; },
          },
        },
      },
      scales: {
        x: {
          position: "top",
          min: 0,
          max: 100,
          grid: { color: "rgba(14,23,31,0.06)" },
          border: { display: false },
          ticks: {
            stepSize: 20,
            font: { size: 12, family: "Poppins, sans-serif" },
            color: "rgba(14,23,31,0.88)",
          },
        },
        y: {
          grid: { display: false },
          border: { display: false },
          ticks: {
            font: { size: 12, family: "Poppins, sans-serif" },
            color: "rgba(14,23,31,0.88)",
          },
        },
      },
    },
  });
})();

// ================================================================
//  Life Factors — Housing: Distribution doughnut chart
// ================================================================
(function () {
  var ctx = document.getElementById("housingDistChart");
  if (!ctx) return;
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Single-detached house", "Semi-detached house", "Apartment"],
      datasets: [{
        data: [62.5, 25, 12.5],
        backgroundColor: ["rgba(112,134,253,0.85)", "rgba(111,209,149,0.85)", "rgba(255,130,118,0.85)"],
        borderColor: ["#fff", "#fff", "#fff"],
        borderWidth: 3,
        hoverOffset: 6,
      }],
    },
    options: {
      cutout: "58%",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (ctx) {
              return " " + ctx.label + ": " + ctx.raw + "%";
            },
          },
        },
      },
    },
  });
})();

// ================================================================
//  Life Factors — Housing: Year of construction doughnut chart
// ================================================================
(function () {
  var ctx = document.getElementById("housingYearChart");
  if (!ctx) return;
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["1961 to 1980"],
      datasets: [{
        data: [100],
        backgroundColor: ["rgba(112,134,253,0.85)"],
        borderColor: ["#fff"],
        borderWidth: 3,
        hoverOffset: 6,
      }],
    },
    options: {
      cutout: "58%",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (ctx) {
              return " " + ctx.label + ": " + ctx.raw + "%";
            },
          },
        },
      },
    },
  });
})();

// ================================================================
//  Life Factors — Education doughnut charts
// ================================================================
(function () {
  function makeDoughnut(id, data) {
    var ctx = document.getElementById(id);
    if (!ctx) return;
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Postsecondary certificate", "No certificate, diploma"],
        datasets: [{
          data: data,
          backgroundColor: ["rgba(112,134,253,0.85)", "rgba(111,209,149,0.85)"],
          borderColor: ["#fff", "#fff"],
          borderWidth: 3,
          hoverOffset: 6,
        }],
      },
      options: {
        cutout: "58%",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (ctx) { return " " + ctx.label + ": " + ctx.raw + "%"; },
            },
          },
        },
      },
    });
  }
  makeDoughnut("eduMissChart", [61, 39]);
  makeDoughnut("eduAreaChart", [55, 45]);
})();

// ================================================================
//  Life Factors — Commute Times doughnut charts
// ================================================================
(function () {
  var LABELS = ["Worked at home", "Less than 15 minutes", "15 to 29 minutes", "31 to 60 minutes", "60 minutes and over"];
  var BG     = ["rgba(152,138,252,0.85)", "rgba(112,134,253,0.85)", "rgba(111,209,149,0.85)", "rgba(255,174,76,0.85)", "rgba(7,219,250,0.85)"];

  function makeCommute(id, data) {
    var ctx = document.getElementById(id);
    if (!ctx) return;
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: LABELS,
        datasets: [{
          data: data,
          backgroundColor: BG,
          borderColor: "#fff",
          borderWidth: 3,
          hoverOffset: 6,
        }],
      },
      options: {
        cutout: "55%",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (ctx) { return " " + ctx.label + ": " + ctx.raw + "%"; },
            },
          },
        },
      },
    });
  }

  makeCommute("commuteMissChart", [25.4, 28.4, 14.2, 24.6, 7.5]);
  makeCommute("commuteAreaChart", [25.4, 30.8, 16.2, 28.0, 7.5]);
})();

// ================================================================
//  Life Factors — Immigrants doughnut charts
// ================================================================
(function () {
  function makeDoughnut(id, labels, data, colors) {
    var ctx = document.getElementById(id);
    if (!ctx) return;
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: colors,
          borderColor: "#fff",
          borderWidth: 3,
          hoverOffset: 6,
        }],
      },
      options: {
        cutout: "58%",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (ctx) { return " " + ctx.label + ": " + ctx.raw + "%"; },
            },
          },
        },
      },
    });
  }

  // Immigrants - Mississauga
  makeDoughnut(
    "immigMissChart",
    ["Non-immigrants", "Immigrants"],
    [55, 45],
    ["rgba(112,134,253,0.85)", "rgba(111,209,149,0.85)"]
  );

  // Immigrants - This Area
  makeDoughnut(
    "immigAreaChart",
    ["Non-immigrants", "Immigrants"],
    [65, 38],
    ["rgba(112,134,253,0.85)", "rgba(111,209,149,0.85)"]
  );

  // Major Ethnicities - This Area
  makeDoughnut(
    "immigEthnicChart",
    ["Indian (India)", "Pakistani", "Italian", "Jamaican", "Sri Lankan"],
    [25.4, 22.1, 20.9, 10.5, 5.8],
    [
      "rgba(152,138,252,0.85)",
      "rgba(112,134,253,0.85)",
      "rgba(111,209,149,0.85)",
      "rgba(255,174,76,0.85)",
      "rgba(7,219,250,0.85)",
    ]
  );
})();

// ================================================================
//  Real Estate Scorecard — Demand Supply Graph (rescDemandChart)
//  3 lines: For sale (blue) / Sold (gold) / New (green)
// ================================================================
(function () {
  var ctx = document.getElementById("rescDemandChart");
  if (!ctx) return;
  var labels = ["Sep 2014","Sep 2015","Sep 2016","Sep 2017","Sep 2018","Sep 2019","Sep 2020","Sep 2021","Sep 2022","Sep 2023","Sep 2024","Sep 2025"];
  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "For sale",
          data: [1950000, 1580000, 1370000, 1620000, 1860000, 1530000, 1870000, 1840000, 1720000, 1680000, 2120000, 1840000],
          borderColor: "#2C6EFE",
          backgroundColor: "transparent",
          borderWidth: 2,
          pointBackgroundColor: "#2C6EFE",
          pointRadius: 5,
          pointHoverRadius: 7,
          tension: 0.4,
          fill: false,
        },
        {
          label: "Sold",
          data: [1650000, 2080000, 1910000, 1820000, 1820000, 1820000, 1820000, 1550000, 1860000, 1820000, 1820000, 1940000],
          borderColor: "#E9BD5F",
          backgroundColor: "transparent",
          borderWidth: 2,
          pointBackgroundColor: "#E9BD5F",
          pointRadius: 5,
          pointHoverRadius: 7,
          tension: 0.4,
          fill: false,
        },
        {
          label: "New",
          data: [530000, 1200000, 1230000, 1210000, 1190000, 1210000, 1330000, 1550000, 1360000, 1420000, 1270000, 1580000],
          borderColor: "#8DEB92",
          backgroundColor: "transparent",
          borderWidth: 2,
          pointBackgroundColor: "#8DEB92",
          pointRadius: 5,
          pointHoverRadius: 7,
          tension: 0.4,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { mode: "index", intersect: false },
      },
      scales: {
        x: {
          grid: { color: "rgba(0,0,0,0.05)", drawBorder: false },
          ticks: { font: { size: 11 }, color: "rgba(14,23,31,0.7)", maxRotation: 35, minRotation: 35 },
        },
        y: {
          grid: { color: "rgba(0,0,0,0.05)", borderDash: [4, 4] },
          ticks: {
            font: { size: 11 }, color: "rgba(14,23,31,0.7)",
            callback: function (v) { return v >= 1000000 ? (v / 1000000).toFixed(1) + "M" : (v / 1000) + "K"; },
          },
          min: 500000, max: 2200000,
        },
      },
    },
  });
})();

// ================================================================
//  Real Estate Scorecard — Market Direction Chart (rescMarketChart)
//  Price line (blue) + Best fit trendline (gold)
// ================================================================
(function () {
  var ctx = document.getElementById("rescMarketChart");
  if (!ctx) return;
  var labels = ["Sep 2014","Sep 2015","Sep 2016","Sep 2017","Sep 2018","Sep 2019","Sep 2020","Sep 2021","Sep 2022","Sep 2023","Sep 2024","Sep 2025"];
  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Price",
          data: [1870000, 1180000, 1350000, 1200000, 1560000, 820000, 1860000, 1170000, 1860000, 1730000, 2120000, 1570000],
          borderColor: "#2C6EFE",
          backgroundColor: "transparent",
          borderWidth: 2,
          pointBackgroundColor: "#2C6EFE",
          pointRadius: 5,
          pointHoverRadius: 7,
          tension: 0.4,
          fill: false,
        },
        {
          label: "Best fit trendline",
          data: [1050000, 1150000, 1220000, 1290000, 1360000, 1430000, 1500000, 1600000, 1680000, 1750000, 1900000, 2050000],
          borderColor: "#E9BD5F",
          backgroundColor: "transparent",
          borderWidth: 2,
          borderDash: [],
          pointRadius: 0,
          tension: 0,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { mode: "index", intersect: false },
      },
      scales: {
        x: {
          grid: { color: "rgba(0,0,0,0.05)", borderDash: [4, 4] },
          ticks: { font: { size: 11 }, color: "rgba(14,23,31,0.7)", maxRotation: 35, minRotation: 35 },
        },
        y: {
          grid: { color: "rgba(0,0,0,0.05)", borderDash: [4, 4] },
          ticks: {
            font: { size: 11 }, color: "rgba(14,23,31,0.7)",
            callback: function (v) { return v >= 1000000 ? (v / 1000000).toFixed(1) + "M" : (v / 1000) + "K"; },
          },
          min: 500000, max: 2200000,
        },
      },
    },
  });
})();

// ================================================================
//  Real Estate Scorecard — Sidebar Bar Chart (rescSidebarChart)
//  Your prior (blue) / Current (gold), months Apr-Oct
// ================================================================
(function () {
  var ctx = document.getElementById("rescSidebarChart");
  if (!ctx) return;
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      datasets: [
        {
          label: "Your prior",
          data: [69, 17, 32, 20, 41, 11, 57],
          backgroundColor: "rgba(44,110,254,0.6)",
          borderWidth: 0,
          borderRadius: 2,
          barPercentage: 0.7,
          categoryPercentage: 0.6,
        },
        {
          label: "Current",
          data: [42, 58, 50, 80, 15, 57, 53],
          backgroundColor: "rgba(233,189,95,0.6)",
          borderWidth: 0,
          borderRadius: 2,
          barPercentage: 0.7,
          categoryPercentage: 0.6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { mode: "index", intersect: false },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 10 }, color: "rgba(0,0,0,0.7)", maxRotation: 35, minRotation: 35 },
          stacked: false,
        },
        y: {
          beginAtZero: true,
          grid: { color: "rgba(0,0,0,0.05)", borderDash: [3, 3] },
          ticks: { font: { size: 10 }, color: "rgba(0,0,0,0.5)" },
          display: false,
        },
      },
    },
  });
})();
