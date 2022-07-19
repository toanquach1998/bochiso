<template>
  <div class="q-pa-md">
    <div class="full-width row div-unit">
      <q-select
        class="col-md-7 col-xs-6 select-unit"
        filled
        dense
        v-model="choseUnit"
        :options="units"
        :option-value="(item) => item.id"
        option-label="name"
        label="Khu vực"
      />
      <q-btn
        dense
        class="col-md-2 col-xs-4"
        type="submit"
        @click="getDetailindicators()"
        color="primary"
        icon="search"
      />
    </div>
    <div class="col-md-9 col-xs-12">
      <span
       
        class="namebcs"
        v-if="unitName !== ' '"
      >
        Cập nhật dữ liệu cho đơn vị: 
        <div class="text-bold" style="display: inline-block">
           {{ unitName }}
       
       
        </div>
    -    <div class="text-bold" style="display: inline-block">
          <p id="d1"></p>
        </div>
        
      </span>
    </div>
    <q-markup-table wrap-cells bordered dense>
      <thead>
        <tr class="q color-thead">
          <th class="text-center th-tieude">
            <span class="text-tieude">TT</span>
          </th>
          <th class="text-center"><span class="text-tieude">Chỉ số</span></th>
          <th
            class="text-center"
            :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
          >
            <span class="text-tieude">ĐVT</span>
          </th>
          <th
            class="text-center"
            :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
          >
            <span class="text-tieude">Kế hoạch</span>
          </th>
          <th class="text-center">
            <span class="text-tieude">Cập nhật dữ liệu thực hiện</span>
          </th>
        </tr>
      </thead>

      <tbody>
        <template v-for="(topic, index) in tables" :key="topic.id">
          <tr class="text-left">
            <td>
              <span class="topic-id">{{ ++index }}</span>
            </td>
            <td class="topic-size">
              {{ topic.name }}
            </td>
            <td :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"></td>
            <td :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"></td>
            <td></td>
          </tr>
          <template v-for="(target1, index1) in topic.targets" :key="index1" >
            <tr class="text-left"  v-if=" toLength(target1.target_updates) == 0 ? false : true">
              <td class="target1-index target1-size">
                {{ index }}.{{ target1?.order }}
              </td>
              <td class="target1-size">
                {{ target1.name }}
              </td>
              <td
                :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
                class="target1-size"
              >
            <!--     {{ target1.comment }} -->
              </td>
         <!--      <td
                :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
                class="text-right target1-size"
              >
                <q-badge color="teal" class="badge-number">
                  {{ toSwap(target1.setindicators[0].plan) }}
                  </q-badge>
              </td>
              <td :props="props" class="text-black">
                <q-input
                  class="target1-size"
                  dense
                  rounded
                  standout
                  :disable="
                    toLength(target1.target_updates) == 0 ? true : false
                  "
                  :bg-color="
                    toLength(target1.target_updates) == 0 ? 'red' : '#121212'
                  "
                  @change="
                    update(
                      target1.setindicators[0].detail_set_indicators[0].id,
                      target1.setindicators[0].detail_set_indicators[0]
                        .total_plan
                    )
                  "
                  v-model="
                    target1.setindicators[0].detail_set_indicators[0].total_plan
                  "
                  type="number"
                  min="0"
                  label="Cập nhật dữ liệu"
                />
              </td>  -->
            </tr>
            <template
              v-for="(target2, index2) in target1.targets"
              :key="index2"
              
            >
              <tr class="text-left" v-if=" toLength(target2.target_updates) == 0 ? false : true">
                <td class="target2-index target1-size">
                  {{ index }}.{{ target1?.order }}.{{ ++index2 }}
                </td>
                <td class="target1-size">
                  {{ target2.name }}
                </td>

                <td
                  :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
                  class="target1-size"
                >
                  {{ target2.comment }}
                </td>

                <td
                  :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
                  class="text-right target1-size"
                >
                  <q-badge color="teal" class="badge-number">
                  {{ toSwap(target2.setindicators[0].plan) }}
                  </q-badge>
                </td>

                <td>
                  <q-input
                    class="target1-size"
                    dense
                    rounded
                    standout
                    :disable="
                      toLength(target2.target_updates) == 0 ? true : false
                    "
                    :bg-color="
                      toLength(target2.target_updates) == 0 ? 'red' : '#121212'
                    "
                    @change="
                      update(
                        target2.setindicators[0].detail_set_indicators[0].id,
                        target2.setindicators[0].detail_set_indicators[0]
                          .total_plan
                      )
                    "
                    v-model="
                      target2.setindicators[0].detail_set_indicators[0]
                        .total_plan
                    "
                    type="number"
                    min="0"
                    label="Cập nhật dữ liệu"
                  />
                </td>
              </tr>
            </template>
          </template>
        </template>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import setindicator from "../boot/callApi/setindicators";
import detailsetindicator from "../boot/callApi/detailsetindicators";
import units from "../boot/callApi/units";
import notis from "../boot/noti/noti";
import sp from "src/boot/sp/sp";
export default {
  name: "inputdata",

  async created() {
    /*   const data = await setindicator.index(); */
    const cator = await detailsetindicator.detail(-1);
    this.tables = cator.topics;

    const data1 = await units.units();
    this.units = data1.units;
    this.unitName = cator.unit.name;
    this.choseUnit = cator.unit;
      const d = new Date();
let text = d.toLocaleDateString('vi-VN');
document.getElementById("d1").innerHTML = text; 
  },
  methods: {
  
    toLength(arr) {
      console.log(arr);
      return arr.length;
    },
    async update(id, total_plan) {
      const data = await detailsetindicator.update(id, total_plan);
      if (data.statuscode == 1) {
        this.showNotif("top", "Cập nhât dữ liệu thành công", "green");
      } else {
        this.showNotif("top", "Cập nhật dữ liệu thất bại", "red");
      }
    },
   
    async getDetailindicators() {
      console.log(this.choseUnit.id);
      const data = await detailsetindicator.detail(this.choseUnit.id);
      this.tables = data.topics;
      if (data?.statuscode == 1) {
        this.unitName = data.unit.name;
        notis.showNoti(" Đã load " + this.unitName, "black");
      }
    },
    nowDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = yy + "/" + mm + "/" + yyyy;
     return  nowDate(document.write(today));
    },
    toMoney(money) {
      return sp.toMoney(money);
    },
    toSwap(money) {
      return sp.toSwap(money);
    },
  },

  data() {
  
    const $q = useQuasar();
    return {
      tables: {},
      units: [],
      choseUnit: null,
      unitName: "",
      unitID: "",
      /* tables-detail: {}, */
      showNotif(position, mess, color) {
        $q.notify({
          message: mess,
          position,
          color: color,
        });
      },
    };
  },
};
</script>

<style lang="sass" scoped>

.div-unit
  margin: 20px
  max-width: 400px

.bg-success
  background-color: #28a745
.bg-danger
  background-color: #f52727

.target1-index

  margin-left: 3px
  font-weight: 550
.target2-index

  margin-left: 6px
.background-red
  background-color: red
.background-green
  background-color: green

.select-unit
  margin-right: 10px

.header-bcs
  margin-bottom: 10px

.textover
  white-space: nowarp
.target-level
  margin-left: 10px
  border-left: 10px solid #f1f3f4

.text-tieude
  font-size: 16px
  font-weight: bold
  color: #0277bd
.topic-id
  font-weight: 750
  font-size: 16px
.topic-size
  font-size: 16px
  font-weight: 550
.target1-size
  font-size: 16px


.namebcs
  font-size: 20px

.body--light
  background-color: #f8faff


.body.body--dark
  background-color: yellow

.badge-number
  font-size: 16px
.q-badge
  padding-top: 6px !important
  padding-bottom: 6px !important
</style>
