<template>
  <div class="q-pa-md">
    <q-markup-table dark class="bg-indigo-8">
      <thead>
        <tr>
          <th class="text-center th-tieude">
            <span class="text-tieude">TT</span>
          </th>
          <th class="text-center"><span class="text-tieude">CHỈ SỐ</span></th>
          <th class="text-center"><span class="text-tieude">ĐVT</span></th>
          <th class="text-center"><span class="text-tieude">Kế hoạch</span></th>
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
            <td>
              {{ topic.name }}
            </td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <template
            v-for="(target1, index1) in topic.targets"
            :key="target1.id"
          >
            <tr class="text-left">
              <td>{{ ++index - index + 1 }}.{{ ++index1 }}</td>
              <td>
                {{ target1.name }}
              </td>
              <td>
                {{ target1.comment }}
              </td>
              <td>
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
                  dense
                  rounded
                  standout
                  text-color="black"
                  bg-color="white"
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
              :key="target2.id"
            >
              <tr class="text-left">
                <td>
                  {{ index - index1 + index2 }}.{{ ++index1 - index2 - 1 }}.{{
                    ++index2
                  }}
                </td>
                <td>
                  {{ target2.name }}
                </td>

                <td>
                  {{ target2.comment }}
                </td>

                <td>
                  {{ target2.setindicators[0].plan }}
                </td>

                <td>
                  <q-input
                    dense
                    rounded
                    standout
                    color="black"
                    bg-color="white"
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

export default {
  name: "inputdata",

  async created() {
    setInterval(function () {}, 30000);
    /*   const data = await setindicator.index(); */
    const cator = await detailsetindicator.detail();

    this.tables = cator.topics;

    console.log(this.cators);
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
        this.showNotif("top", " thanh cong ", "green");
      } else {
        this.showNotif("top", "that bai", "red");
      }
    },
    canhbao(tinhphantram) {
      return tinhphantram;
    },
  },

  data() {
    const $q = useQuasar();
    return {
      tables: {},
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
.bg-green
  color: #a2aa33
.bg-success
  background-color: #28a745
.bg-danger
  background-color: #f52727



.background-red
  background-color: red
.background-green
  background-color: green



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
  font-weight: 700



.topic-name
  margin-left: 20px
</style>
