<template>
  <q-card class="my-card" id="chart-column">
    <q-card-section>
      <div class="text-h6" style="font-size: 25px">Kế hoạch theo tháng</div>
    </q-card-section>
    <q-card-section>
      <div class="">
        <apexchart
          class=""
          type="bar"
          height="320"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "columnchart",
  data() {
    return {
      series: [
        {
          name: "KH tháng",
          data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        },
        {
          name: "Thực hiện",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 50, 20, 10],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
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
            "Tháng 12",
          ],
        },
        yaxis: {
          title: {
            text: "Triệu (VNĐ)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          theme: "dark",
          y: {
            formatter: function (val) {
              return "$ " + val + " tr";
            },
          },
        },
      },
    };
  },
};
</script>

<style lang="sass" scoped>
#chart-column
  margin: $myMargin
</style>
