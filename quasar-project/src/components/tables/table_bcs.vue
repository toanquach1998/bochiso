<template>
  <div class="q-pa-md">
    <!--  TẠO BẢNG BẰNG QTABLE -->
    <!-- <q-btn color="primary" icon="check" label="OK" @click="canhbaomucdo('95', '100', '90')" /> -->
    
      

      <template v-for="(topic, index) in tables" :key="topic.id">
        <div class="text-left bg-topic">
        <q-badge>  <span class="topic-id">{{ ++index }}</span>
          <span class="topic-size">{{ topic.name }} </span> </q-badge>
        </div>
        <template v-for="(target1, index1) in topic.targets" :key="index1">
          <div >
            <span class="target1-index target1-size">
              {{ index }}.{{ target1?.order }}</span
            >
            <span class="target1-size target1-index"> {{ target1.name }}</span>
          </div>
          <div class="row grid-css">
            <div
              v-for="(target2, index2) in target1.targets"
              :key="index2"
              class="col-md-3 col-xs-12"
            >
              <div class="q-pa-md row q-gutter-md text-test column-reverse">
                <q-card bordered dense class="full-height full-width flex-direction"  :class="
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
                      ? 'bg-warning '
                      : 'bg-positive'
                  ">
                  

                
                  <q-card-section class="row full-width">
                    <div class="col-md col-xs-10 target1-size">Chỉ số:</div>
                    <div class="col-md col-xs-10 target1-size">{{ target2.name }}</div>
                  </q-card-section>

                  <q-card-section class="row">
                    <div class="col-md col-xs-10">Đơn vị tính:</div>
                    <div class="col-md col-xs-10">{{ target2.comment }}</div>
                  </q-card-section>
 
               <!--    <q-card-section class="row">
                    <div class="col-md col-xs-10">Chỉ tiêu năm:</div>
                    <div class="col-md col-xs-10">
                      <q-badge color="blue-grey" class="badge-number">
                        {{ toSwap(target2.setindicators[0].year_plan) }}
                      </q-badge>
                    </div>
                  </q-card-section> -->
              

                  <q-card-section class="row">
                    <div class="col-md col-xs-10">Kế hoạch:</div>
                    <div class="col-md col-xs-10">
                        {{ toSwap(target2.setindicators[0].plan) }}
                    </div>
                  </q-card-section>
 

                 
 
                    <q-card-section class="row">
                    <div class="col-md col-xs-10">Thực hiện:</div>
                    <div class="col-md col-xs-10">
                  {{ toSwap(target2.setindicators[0].total_plan) }}
                    </div>
                  </q-card-section>
 
                    <q-card-section class="row">
                    <div class="col-md col-xs-10">% so KH:</div>
                    <div class="col-md col-xs-10">
                  {{
                    tinhphantram(
                      target2.setindicators[0].total_plan,
                      target2.setindicators[0].plan
                    )
                  }}
                    </div>
                  </q-card-section>
 
            

                         <q-card-section class="row">
                    <div class="col-md col-xs-10">Cập nhật lần cuối:</div>
                    <div class="col-md col-xs-10">
                   {{ target2.setindicators[0]?.detail_set_indicator?.name }}
                  {{ time(target1.setindicators[0].updated_at) }}
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </template>
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
      return ((totalPlan / plan) * 100).toFixed(3);
    },
    time(time) {
      return time.slice(0, 19).replace("T", " ");
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
  font-size: 14px
  font-weight: 600
  
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
.bg-topic
  font-weight: 700
  /* background-color: #FFB562 */
.grid-css
  color: white

//Chinh text  
.text-lag
  font-size: 20px
</style>
