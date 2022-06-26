<template>
  <div class="row q-card" id="chart-pie">
    <apexchart
      class="col-md-4"
      type="polarArea"
      width="400"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <apexchart
      class="col-md-4"
      type="polarArea"
      width="400"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <apexchart
      class="col-md-4"
      type="polarArea"
      width="400"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "piechart",
  data() {
    return {
      series: [42, 47, 52, 58, 65],
      chartOptions: {
        chart: {
          width: 380,
          type: "polarArea",
        },
        labels: [
          "Doanh Thu 1",
          "Doanh Thu 1",
          "Doanh Thu 1",
          "Doanh Thu 1",
          "Doanh Thu 1",
        ],
        fill: {
          opacity: 1,
        },
        stroke: {
          width: 1,
          colors: undefined,
        },
        yaxis: {
          show: false,
        },
        legend: {
          position: "bottom",
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0,
            },
            spokes: {
              strokeWidth: 0,
            },
          },
        },
        theme: {
          monochrome: {
            enabled: true,
            shadeTo: "light",
            shadeIntensity: 0.6,
          },
        },
      },
    };
  },
};
</script>

<style>
#chart-pie {
  margin: 20px;
}
</style>
