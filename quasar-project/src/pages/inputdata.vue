<template>
  <div class="q-pa-md ">
    <div class="full-width row div-unit">
    <q-select
      class="col-md-6 col-xs-6 select-unit"
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
        push 
        glossy 
        class="col-md-4 col-xs-4"
        type="submit"
        @click="getDetailindicators()"
        color="primary"
        label="Xác nhận"
      />
      </div>
    <q-markup-table wrap-cells bordered>
      <thead>
        <tr>
          <th class="text-center th-tieude">
            <span class="text-tieude">TT</span>
          </th>
          <th class="text-center"><span class="text-tieude">CHỈ SỐ</span></th>
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
            <span class="text-tieude">Thực hiện</span>
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
            <td :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`">-</td>
            <td :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`">-</td>
            <td>-</td>
          </tr>
          <template
            v-for="(target1, index1) in topic.targets"
            :key="index1"
          >
            <tr class="text-left">
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
                {{ target1.comment }}
              </td>
              <td
                :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
                class="target1-size"
              >
                {{ target1.setindicators[0].plan }}
              </td>
              <td :props="props" class="text-black">
                <!-- {{ target1.setindicators[0].detail_set_indicators[0].total_plan }} -->
                <!-- <q-popup-edit v-model="target1.setindicators[0].detail_set_indicators[0].total_plan" 
              auto-save v-slot="scope" 
              
               >
              <q-input type="number" v-model.number="scope.value"
               dense autofocus @keyup.enter="scope.set" />
               <q-btn color="purple" @click="update(target1.setindicators[0].detail_set_indicators[0].id,target1.setindicators[0].detail_set_indicators[0])" label="Cập nhật" />
            </q-popup-edit> -->
                <q-input
                  class="target1-size"
                  dense
                  rounded
                  standout
                  text-color=""
                  bg-color="#e2e2e2"
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
              </td>
            </tr>
            <template
              v-for="(target2, index2) in target1.targets"
              :key="index2"
            >
              <tr class="text-left">
                <td class="target2-index target1-size">
                  {{ index  }}.{{ target1?.order }}.{{
                    ++index2
                  }}
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
                  class="target1-size"
                >
                  {{ target2.setindicators[0].plan }}
                </td>

                <td>
                  <q-input
                    class="target1-size"
                    dense
                    rounded
                    standout
                    bg-color="#e2e2e2"
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

      
        <q-input filled  dense debounce="400" v-model="filter"
         placeholder="Search" >
          <div>
            <q-icon name="search" />
          </div>
        </q-input>
    
      
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import setindicator from "../boot/callApi/setindicators";
import detailsetindicator from "../boot/callApi/detailsetindicators";
import units from "../boot/callApi/units"

export default {
  name: "inputdata",

  async created() {
    setInterval(function () {}, 30000);
    /*   const data = await setindicator.index(); */
    const cator = await detailsetindicator.detail(-1);
    this.tables = cator.topics;
    console.log(this.cators);
    const data1 = await units.units();
    this.units = data1.units;
  },
  methods: {
    tinhphantram(totalPlan, plan) {
      /* console.log(plan)
       console.log(totalPlan)
      console.log((plan/totalPlan)*100) */
      return (totalPlan / plan) * 100;
    },
    async update(id, total_plan) {
      const data = await detailsetindicator.update(id, total_plan);
      if (data.statuscode == 1) {
        this.showNotif("top", "Cập nhât dữ liệu thành công", "green");
      } else {
        this.showNotif("top", "Cập nhật dữ liệu thất bại", "red");
      }
    },
    canhbao(tinhphantram) {
      return tinhphantram;
    },
    async getDetailindicators() {
      const data = await detailsetindicator.detail(this.choseUnit.id);
      console.log(this.choseUnit.id);
      this.tables = data.topics;
    },
    
  },

  data() {
    const $q = useQuasar();
    return {
      tables: {},
      units: [],
      choseUnit: null,
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
.topic-id
  font-weight: 750
  font-size: 16px
.topic-size
  font-size: 16px

.target1-size
  font-size: 16px


.text-left:hover
  background-color: #bbb9b9
</style>


