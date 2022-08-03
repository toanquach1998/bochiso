<template>
  <q-layout
    class="q-pa-md bg-image"
    style="
      background-image: url(https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?t=st=1657069042~exp=1657069642~hmac=2e07139a0496cc992799ec09b64e68ad308158ab6769ed4655051fad524e5d6f&w=1480)
        no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      background-position: center center;
    "
  >
    <q-page-container class="login-container justify-center">
      <div class="">
        <q-img id="login-logo" src="../../public/icons/logo-vnpt.png" />
      </div>
      <div class="justify-center text-center topic-name">
        <span>BỘ CHỈ SỐ ĐIỀU HÀNH</span>
      </div>
      <div>
        <q-form class="q-gutter-md" @submit.prevent="userLogin()">
          <q-input
            outlined
            filled
            style="font-size: 18px"
            standout="text-blue-14"
            class="input-h"
            bg-color="blue-grey-2"
            label="Tên đăng nhập"
            v-model="login.username"
          >
          </q-input>
          <q-input
            class="input-h"
            filled
            outlined
            standout
            color="bule-14"
            style="font-size: 18px"
            bg-color="blue-grey-2"
            label="Mật khẩu"
            type="password"
            v-model="login.password"
          >
          </q-input>
          <div>
            <q-btn
              class="full-width btn-css"
              color="light-blue-9"
              label="Đăng nhập"
              type="submit"
            />
          </div>
        </q-form>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";
import user from "src/boot/callApi/user";
import { ref } from "vue";
import { mapGetters } from "vuex";
import noti from "src/boot/noti/noti";
export default {
  name: "login",
  created() {
    if (user.id > 0) {
      this.$router.push("/dashboard");
    }
  },
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      console.log(this.login.username, this.login.password);
       
      const data = await user.login(this.login.username, this.login.password);
      console.log(data.statuscode);
          if (data?.statuscode == 0){
      
        noti.showNoti("Mật khẩu không tồn tại", "red");
      }
         if (data?.statuscode == 2){
        noti.showNoti("Sai mật khẩu", "red");
      };
      
      this.$store.dispatch("User/user", data.user[0]);
      localStorage.setItem("key", data.token);
      
      
      this.$router.push("/dashboard");
   
    },
  },
  computed: {
    ...mapGetters("User", ["user"]),
  },
};
</script>

<style lang="sass" scoped>

.login-container
  margin-right: auto
  margin-left: auto
  padding: 2rem
  max-width: 400px
  min-width: 200px
  margin-top: 60px

.btn-css
  height: 52px

#login-logo
  max-width: 100%
  height:  auto
  margin-bottom: 5px



.q-field__control
  height: 50px !important

//css BCSDH
.topic-name
  margin-bottom: 30px
  font-size: 23px
  font-weight: 600
  color: #1265b6
</style>
