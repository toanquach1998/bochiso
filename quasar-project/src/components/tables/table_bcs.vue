<template>
  <div class="q-pa-md">
    <template v-for="(topic) in tables" :key="topic.id">
      <div class="text-left bg-topic">
        <!-- <span class="topic-id">{{ ++index }}</span> -->
      <!--   <span class="topic-size">{{ topic.name }} </span> -->
      </div>

        <div v-for="(target1) in topic.targets" :key="target1.id">
        <div class="bg-test" v-if="toLength(target1.setindicators) == 0  ? false : true">
          <div>
          <!--   <span class="target1-index"> {{ index }}.{{ target1?.order }}</span> -->

            <span class="target1-index">{{topic.name}} <q-icon name="keyboard_double_arrow_right " /> {{ target1.name }}</span>
          </div>

          <div class="row grid-css items-stretch">
            <div
              v-for="(target2, index2) in target1.targets"
              :key="index2"
              class="col-md-4 col-xs-12 col-lg-3"
            >
              <div class="q-pa-md row q-gutter-md q-gutter-xs text-test"  >
                <q-card class="full-height full-width" v-if="toLength(target2.setindicators) == 0  ? false : true">
                  <q-card-section
                    class="row css-section"
                    :class="
                      canhbaomucdo(
                        tinhphantram(
                          target2.setindicators[0].total_plan,
                          target2.setindicators[0].plan
                        ),
                        target2.setindicators[0].plan_warning,
                        target2.setindicators[0].min_warning
                      ) == 0
                        ? 'bg-negative'
                        : canhbaomucdo(
                            tinhphantram(
                              target2.setindicators[0].total_plan,
                              target2.setindicators[0].plan
                            ),
                            target2.setindicators[0].plan_warning,
                            target2.setindicators[0].min_warning
                          ) == 1
                        ? 'bg-amber-8'
                        : 'bg-positive'
                    "
                  >
                    <div
                      class="col-md-12 col-xs-12 target1-size text-center text-color-1 absolute-center"
                    >
                      <span class="h6-text"> {{ target2.name }}</span>
                    </div>
                  </q-card-section>

                  <q-card-section class="row padding1 padding2 tentieude-text">
                    <div class="col-md-5 col-xs-5">Đơn vị tính:</div>
                    <div class="col-md-7 col-xs-7 target1-size">
                      {{ target2.comment }}
                    </div>
                  </q-card-section>

                  <!--    <q-card-section class="row">
                    <div class="col-md col-xs-10">Chỉ tiêu năm:</div>
                    <div class="col-md col-xs-10">
                      <q-badge color="blue-grey" class="badge-number">
                        {{ toSwap(target2.setindicators[0].year_plan) }}
                      </q-badge>
                    </div>
                  </q-card-section> -->

                  <q-card-section class="row padding1 tentieude-text">
                    <div class="col-md-5 col-xs-5">Kế hoạch:</div>
                    <div class="col-md-7 col-xs-7 target1-size">
                      {{ toSwap(target2.setindicators[0].plan) }}
                    </div>
                  </q-card-section>

                  <q-card-section class="row padding1 tentieude-text">
                    <div class="col-md-5 col-xs-5">Thực hiện:</div>
                    <div class="col-md-7 col-xs-7 target1-size">
                      {{ toSwap(target2.setindicators[0].total_plan) }}
                    </div>
                  </q-card-section>

                  <q-card-section class="row padding1 tentieude-text">
                    <div class="col-md-5 col-xs-5">So với kế hoạch:</div>
                    <div class="col-md-7 col-xs-7 target1-size">
                      {{
                        tinhphantram(
                          target2.setindicators[0].total_plan,
                          target2.setindicators[0].plan
                        )
                      }}
                      &nbsp; <span>(%)</span>
                    </div>
                  </q-card-section>

                  <q-card-section class="row no-padding">
                    <div class="col-md-4 col-xs-4"></div>
                    <div class="col-md-8 col-xs-8 last-user text-right">
                      Thông tin cập nhật:
                      {{ target2.setindicators[0]?.detail_set_indicator?.name }}
                      {{ time(target1.setindicators[0].updated_at) }}
                    </div>
                  </q-card-section>
                </q-card>
                 </div>
                 </div>
              </div>
            </div>
          </div>


    </template>

    <!--
      <td>
               {{ ++index }}
 <br/>
                {{ topic.name }}
<br/>

            </td> -->
  </div>
</template>

<script>
import setindicator from "../../boot/callApi/setindicators";
import { ref } from "vue";
import { date } from "quasar";
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
      return ((totalPlan / plan) * 100).toFixed(2);
    },
    time(time) {
      return time.slice(0, 19).replace("T", " ");
    },
    toLength(arr ) {
      return sp.toLength(arr);
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
        re = 0;
      } else if (b > a && a >= c) {
        re = 1;
      } else {
        re = 2;
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

  // sass cho DE MUC
.topic-id
  font-weight: 750
  font-size: 24px
  
.topic-size
  font-size: 24px
  padding: 6px


  //sass cho tieu chi cha
.target1-index
  font-size: 20px
  font-weight: 550
  padding: 5px

.target1-size
  font-size: 18px
  font-weight: 700

//sass cho tieu chi con
.target2-index
  margin-left: 6px

.topic123
  max-width: 10%

  //ten bo chi sass
.q-badge
  padding-top: 6px !important
  padding-bottom: 6px !important
.bg-topic
  font-weight: 700
  margin-bottom: 20px
  text-align: center
  /* background-color: #FFB562 */

//Chinh text
.text-lag
  font-size: 20px
.last-user
  font-style: italic
  font-size: 12px
  padding: 0px 16px 16px 0px
.text-test
  height: 100%
.padding1
  padding-top: 0px
.q-pa-md
  padding-right: 10px

.text-color-1
  color: white

.h6-text
  font-size: 16px
  font-weight: 700
  padding: 10px
  /* line-height: 64px */
//chinh mau nen cho grid
.grid-css

  padding-left: 0px
  margin-left: 0px

.padding2
  padding-top: 20px

// CSS min-height cho mau ten chi so
.css-section
 min-height: 64px
 max-height: 64px

//css ten tieu de goc phai
.tentieude-text
  font-size: 16px

.bg-test
  margin-bottom: 20px
  padding-top: 10px
  border-radius: 5px
  padding-left: 15px
  box-shadow: 0px 2px 9px black
  border-radius: 10px

</style>
