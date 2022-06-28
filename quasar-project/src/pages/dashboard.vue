<template class="test">
  <!-- <cardSocial id="card-social"></cardSocial> -->
<div class="test1">
  <q-form @submit="onSubmit">
    <div class="q-pa-md q-gutter-md row dashboard-select">
      <q-select
        class="col"
        filled
        dense
        v-model="choseUnit"
        :options="units"
        :option-value="(item) => item.id"
        option-label="name"
        label="Khu vực"
      />
      <q-select
        class="col"
        filled
        dense
        v-model="choseMonth"
        :options="months"
        label="Tháng"
      />
      <q-select
        class="col"
        filled
        dense
        v-model="choseYear"
        :options="years"
        label="Năm"
      />
      <q-btn
        dense
        push
        glossy
        type="submit"
        @click="getSetIndicator()"
        color="primary"
        label="Tìm kiếm"
        to="/dashboard"
      />
    </div>
  </q-form>

  <!--  <div class="'row'">
    <progressBCS></progressBCS>
  </div> -->

<!--   <chartColumn></chartColumn>
 -->
  <tableBCS :tables="tables"></tableBCS>
</div>
</template>

<script>
import units from "src/boot/callApi/units";
import setindicators from "src/boot/callApi/setindicators";
import { defineComponent, defineAsyncComponent } from "vue";

const chartColumn = defineAsyncComponent(() =>
  import("components/charts/columnchart.vue")
);

const chartPie = defineAsyncComponent(() =>
  import("components/charts/piechart.vue")
);

const tableBCS = defineAsyncComponent(() =>
  import("components/tables/table_bcs.vue")
);

const progressBCS = defineAsyncComponent(() =>
  import("components/progress_bcs.vue")
);

export default defineComponent({
  name: "dashboard",
  async created() {
    const data = await setindicators.index();
    console.log(data.topics);
    this.tables = data.topics;
    this.unitId = data.topics.id; 
    console.log(this.tables);
    this.months.push({
      label: "cả năm ",
      value: 13,
    });
    for (let i = 1; i < 13; i++) {
      this.months.push({
        label: "Tháng" + i,
        value: i,
      });
    }
    for (let i = 2020; i < 2029; i++) {
      this.years.push({
        label: "Năm" + i,
        value: i,
      });
    }
    const data1 = await units.units();
    this.units = data1.units;
    console.log(this.units);
  },
  mounted() {
    setInterval(async function () {
      const data = await setindicators.index(this.unitId);
      this.tables = data.topics;

    }, 30000);
  },
  components: {
    chartColumn,
    chartPie,
    tableBCS,
    progressBCS,
  },
  data() {
    return {
      years: [],
      months: [],
      tables: {},
      units: [],
      choseYear: null,
      choseMonth: null,
      choseUnit: null,
      unitId: null, 
    };
  },
  methods: {
    async getSetIndicator() {
      const data = await setindicators.index(
        this.choseUnit?.id,
        this.choseYear?.value,
        this.choseMonth?.value
      );
      this.tables = data.topics;
      if (this.tables.lenght == 0) {
        this.showNotif("top", "Bộ chỉ số chưa được tạo", "red");
      } else {
        this.showNotif("top", "Lấy dữ liệu thành công", "green");
      }
    },
  },
});
</script>

<style lang="sass" scoped>
.dashboard-select
  max-width: 600px
  margin-left: auto
  margin-right: auto
.test
  background-color: #f2f2f2
</style>
