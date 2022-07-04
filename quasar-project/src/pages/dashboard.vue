<template>
  <!-- <cardSocial id="card-social"></cardSocial> -->
  <div>
    <q-form @submit="onSubmit">
      <div class="q-md q-gutter-md row dashboard-select">
        <q-select
          class="col-md-2 col-xs-10 justify-around"
         
          filled
          dense
          v-model="choseUnit"
          :options="units"
          :option-value="(item) => item.id"
          option-label="name"
          label="Khu vực"
        />
        <q-select
          class="col-md-2 col-xs-10"
          
          filled
          dense
          v-model="choseMonth"
          :options="months"
          label="Tháng"
        />
        <q-select
          class="col-md-2 col-xs-10"
          filled
          dense
          v-model="choseYear"
          :options="years"
          label="Năm"
          table-colspan="2"
        />
        <q-btn
          class="col-md-1 col-xs-5"
          dense
          
          
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
    <div class="row">
      <div class="col-md-9 col-xs-12">
        <span
          :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
          class="namebcs"
          v-if="unitName !== ' '"
        >
          Bộ chỉ số đơn vị:
          <div class="text-bold" style="display: inline-block">
            {{ unitName }} - {{ monthName }} {{ yearName }}
          </div>
        </span>
      </div>
      <div class="col-md-1 col-xs-4">
        <q-icon name="fiber_manual_record" color="red" size="22px" /><span>
          Cảnh báo
        </span>
      </div>
      <div class="col-md-1 col-xs-4">
        <q-icon name="fiber_manual_record" color="yellow" size="22px" /><span>
          Quan tâm
        </span>
      </div>
      <div class="col-md-1 col-xs-4">
        <q-icon name="fiber_manual_record" color="green" size="22px" /><span>
          Chấp nhận
        </span>
      </div>
    </div>
    <tableBCS :tables="tables"></tableBCS>
  </div>
</template>

<script>
import units from "src/boot/callApi/units";
import setindicators from "src/boot/callApi/setindicators";
import { defineComponent, defineAsyncComponent } from "vue";
import { useQuasar } from "quasar";
import { months } from "moment";

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
    //this.unitId = data.topics.id;
    console.log(this.tables);
    this.months.push({
      label: "Cả năm ",
      value: 13,
    });
    for (let i = 1; i < 13; i++) {
      this.months.push({
        label: "Tháng " + i,
        value: i,
      });
    }
    for (let i = 2020; i < 2029; i++) {
      this.years.push({
        label: "Năm " + i,
        value: i,
      });
    }
    //set this year , month
    let date = new Date();
    this.monthName = " Tháng " + (date.getMonth() + 1).toString();
    this.yearName = " Năm " + date.getFullYear().toString();
    this.choseMonth = {
      label: this.monthName,
      value: date.getMonth().toString(),
    };
    this.choseYear = {
      label: this.yearName,
      value: date.getFullYear().toString(),
    };
    const data1 = await units.units();
    this.units = data1.units;
    this.choseUnit = data.unit;
    this.unitName = data.unit.name;
    this.unitId = data.unit.id;
    // console.log(this.unitId);
  },
  async mounted() {
    setInterval(async function () {
      const data = await setindicators.index(this.unitId);
      // alert('lk' , this.unitId);
      this.tables = data.topics;
      console.log('sdf',this.unitId);
      console.log(this.unitName);
    }.bind(this), 10000);
  },
  components: {
    chartColumn,
    chartPie,
    tableBCS,
    progressBCS,
  },
  data() {
    const $q = useQuasar();
    return {
      years: [],
      months: [],
      tables: {},
      units: [],
      choseYear: null,
      choseMonth: null,
      choseUnit: null,
      unitName: "",
      monthName: "",
      yearName: "",
      unitId: "",
      showNotif(position, mess, color) {
        $q.notify({
          message: mess,
          position,
          color: color,
        });
      },
    };
  },
  methods: {
    async getSetIndicator() {
      const data = await setindicators.index(
        this.choseUnit?.id,
        this.choseYear?.value,
        this.choseMonth?.value
      );
      console.log(data.topics.length);
      if (data?.topics.length == 0) {
        this.showNotif("top", "Bộ chỉ số chưa được tạo", "red");
      } else {
        this.showNotif("top", "Lấy dữ liệu thành công", "green");
      }
      this.tables = data.topics;
      this.unitName = this.choseUnit.name;
      this.monthName = " " + this.choseMonth.label;
      this.yearName = " " + this.choseYear.label;
      this.unitId = this.choseUnit.id;
    },
  },
});
</script>

<style lang="sass" scoped>

.namebcs
  margin-left: 20px
  font-size: 20px

.dashboard-select
  max-width: 100%
  margin-top: 10px
  margin-bottom: 10px
  margin-left: auto
  margin-right: auto
</style>
