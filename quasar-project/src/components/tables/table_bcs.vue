<template>
  <div class="q-pa-md">

    <!--  TẠO BẢNG BẰNG QTABLE -->
    <!-- <q-btn color="primary" icon="check" label="OK" @click="canhbaomucdo('95', '100', '90')" /> -->
    <q-markup-table wrap-cells bordered >
      <thead>
        <tr>
          <th class="text-center th-tieude">
            <span class="text-tieude">TT</span>
          </th>
          <th class="text-center"><span class="text-tieude">CHỈ SỐ</span></th>
          <th :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`">
            <span class="text-tieude">ĐVT</span>
          </th>
          <th :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`">
            <span class="text-tieude">Chỉ tiêu năm</span>
          </th>
          <th :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`">
            <span class="text-tieude">Kế hoạch</span>
          </th>
          <th class="text-center">
            <span class="text-tieude">Thực hiện</span>
          </th>
          <th :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`">
            <span class="text-tieude">% so KH</span>
          </th>
          <th :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`">
            <span class="text-tieude">Ngưỡng cảnh báo</span>
          </th>
          <th :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`">
            <span class="text-tieude">Người cập nhật lần cuối</span>
          </th>
        </tr>
      </thead>

      <tbody>
        <template v-for="(topic, index) in tables" :key="topic.id">
          <tr class="text-left bg-cyan-14">
            <td class="top-size">
              <span class="topic-id">{{ ++index }}</span>
            </td>
            <td class="topic-size">
              {{ topic.name }}
            </td>
            <td class="topic-size">-</td>
            <td
              :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
              class="topic-size"
            >
              -
            </td>
            <td
              :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
              class="topic-size"
            >
              -
            </td>
            <td
              :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
              class="topic-size"
            >
              -
            </td>
            <td
              :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
              class="topic-size"
            >
              -
            </td>
            <td
              :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
              class="topic-size"
            >
              -
            </td>
            <td
              :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
              class="topic-size"
            >
              -
            </td>
          </tr>

          <template v-for="(target1, index1) in topic.targets" :key="index1">
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
                class="text-right target1-size"
              >
               <q-badge color="blue-grey"  class="badge-number">
                {{ toSwap(target1.setindicators[0].year_plan) }}
                </q-badge>
              </td>
              <td
                :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
                class="text-right target1-size"
              >
              <q-badge  color="teal" class="badge-number">
                {{ toSwap(target1.setindicators[0].plan) }}
              </q-badge>
              </td>
              <td class="text-right target1-size">
                <q-badge color="blue-grey" class="badge-number">
                {{ toSwap(target1.setindicators[0].total_plan) }}
                </q-badge>
              </td>

              <td
                :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
                class="text-right target1-size"
              > <q-badge color="teal" class="badge-number">
                {{
                  tinhphantram(
                    target1.setindicators[0].total_plan,
                    target1.setindicators[0].plan
                  )
                }}
                </q-badge>
              </td>
              <td class="test1"
                :class="
                  canhbaomucdo(
                    tinhphantram(
                      target1.setindicators[0].total_plan,
                      target1.setindicators[0].plan
                    ),
                    target1.setindicators[0].plan_warning,
                    target1.setindicators[0].min_warning
                  ) == 0
                    ? 'bg-red-6'
                    : canhbaomucdo(
                        tinhphantram(
                          target1.setindicators[0].total_plan,
                          target1.setindicators[0].plan
                        ),
                        target1.setindicators[0].plan_warning,
                        target1.setindicators[0].min_warning
                      ) == 1
                    ? 'bg-amber-3'
                    : 'bg-green-14'
                "
              ></td>
              <td
                :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
                class="text-left target1-size"
              >
                {{ target1.setindicators[0]?.detail_set_indicator?.name }}
                {{ time(target1.setindicators[0].updated_at) }}
              </td>
            </tr>
            <template
              v-for="(target2, index2) in target1.targets"
              :key="index2"
            >
              <tr class="text-left">
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
                ><q-badge color="blue-grey" class="badge-number">
                  {{ toSwap(target2.setindicators[0].year_plan) }}
                 </q-badge>
                 </td>
                <td
                  :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
                  class="text-right target1-size"
                >
                <q-badge color="teal" class="badge-number">
                  {{ toSwap(target2.setindicators[0].plan) }}
                  </q-badge>
                </td>

                <td class="text-right target1-size">
                  <q-badge color="blue-grey" class="badge-number">
                  {{ toSwap(target2.setindicators[0].total_plan) }}
                  </q-badge>
                </td>

                <td
                  :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
                  class="text-right target1-size"
                >
                <q-badge  color="teal" class="badge-number">
                  {{
                    tinhphantram(
                      target2.setindicators[0].total_plan,
                      target2.setindicators[0].plan
                    )
                  }}
                  </q-badge>
                </td>

                <td class="test1"
                  :class="
                    canhbaomucdo(
                      tinhphantram(
                        target2.setindicators[0].total_plan,
                        target2.setindicators[0].plan
                      ),
                      target2.setindicators[0].plan_warning,
                      target2.setindicators[0].min_warning
                    ) == 0
                      ? 'bg-red-6'
                      : canhbaomucdo(
                          tinhphantram(
                            target2.setindicators[0].total_plan,
                            target2.setindicators[0].plan
                          ),
                          target2.setindicators[0].plan_warning,
                          target2.setindicators[0].min_warning
                        ) == 1
                      ? 'bg-amber-3'
                      : 'bg-green-14'
                  "
                ></td>
                <td
                  :class="`col-md-3 ${$q.screen.xs ? 'hidden' : ''}`"
                  class="text-left target1-size"
                >
                  {{ target2.setindicators[0]?.detail_set_indicator?.name }}
                  {{ time(target1.setindicators[0].updated_at) }}
                  <!--  {{ str.slice(1,3)}} -->
                  <!--     {{timeToParse(target1.setindicator[0]?.detail_set_indicator?.update_at )}} -->
                  <!--      {{ (target1.setindicators[0].detail_set_indicator.updated_at).slice(1,12) }} -->
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
import setindicator from "../../boot/callApi/setindicators";
import { ref } from "vue";
import { date } from "quasar";
import topics from "src/boot/callApi/topics";
import sp from "src/boot/sp/sp";

export default {
  name: "table_bcs",
  props: {
    tables: {
      type: Array,
      required: true,
    },
  },
  async created() {
    setInterval(function () {}, 30000);
    const dataToParse = await setindicator.index();
  },
  methods: {
    tinhphantram(totalPlan, plan) {
      return ((totalPlan / plan) * 100).toFixed(3);
    },
    time(time) {
      return time.slice(0, 10);
    },
    toMoney(money) {
      return sp.toMoney(money);
    },
    toSwap(money) {
      return sp.toSwap(money);
    },
    canhbao(tinhphantram) {
      return tinhphantram;
    },
    canhbaomucdo(tinhphantram, planWarning, minWarning) {
      //   console.log(tinhphantram, planWarning ,tinhphantram < planWarning ? 0 : 1);
      //   return tinhphantram < parseInt(planWarning) ? 0 : 1;
      var a = parseFloat(tinhphantram);
      var b = parseFloat(planWarning);
      var c = parseFloat(minWarning);
      var re = 0;
      if (a < c) {
        re= 0;
      } else if (b > a && a >= c) {
        re= 1;
      } else {
        re= 2;
      }
      // console.log('tinhphan tram', tinhphantram)
      // console.log('check chi so', re);
      return re;
    },
  },
  data() {
    return {
      filter: ref(""),
      // tables: {},
      /* tables-detail: {}, */
    };
  },
};
</script>

<style lang="sass" scoped>
.badge-number
  font-size: 16px
.name-bcs
  font-size: 30px

.bg-success
  background-color: #28a745
.bg-danger
  background-color: #f52727





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
  color: $light-blue-9

  // sass cho DE MUC
.topic-id
  font-weight: 750
  font-size: 16px
.topic-size
  font-size: 16px


  //sass cho tieu chi cha
.target1-index

  margin-left: 3px
  font-weight: 550

.target1-size
  font-size: 16px

.test1
  border-radius: 2px

//sass cho tieu chi con
.target2-index

  margin-left: 6px

.topic123
  max-width: 10%

  //ten bo chi sass
.q-badge
  padding-top: 6px !important
  padding-bottom: 6px !important

</style>
