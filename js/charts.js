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
