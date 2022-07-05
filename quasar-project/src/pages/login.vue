<template>
  <q-layout
    class="q-pa-md bg-image"
    style="
      background-image: url(https://image.winudf.com/v2/image/Y29tLlBSSVNTSS5XYWxscGFwZXIuQmFja2dyb3VuZC5XaGl0ZUJhY2tncm91bmRXYWxscGFwZXJfc2NyZWVuXzBfMTUyODUwODAxNF8wNjk/screen-0.jpg?h=500&fakeurl=1&type=.jpg)
        no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      background-position: center center;
    "
  >
    <q-page-container class="login-container justify-center">
      <div class="">
        <q-img 
          id="login-logo"
          src="../../public/icons/logo-vnpt.png"
        />
      </div>

      <div>
        <q-form class="q-gutter-md" @submit.prevent="userLogin()">
          <q-input
            outlined
            filled 
            style="font-size:18px"
            
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
            style="font-size:18px"
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
import user from "src/boot/callApi/user";
import { mapGetters } from "vuex";
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
        username: "binhdlt.hgi",
        password: "123456",
      },
    };
  },
  methods: {
    async userLogin() {
      console.log(this.login.username, this.login.password);
      const data = await user.login(this.login.username, this.login.password);
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
  max-width: 350px
  min-width: 200px
  margin-top: 40px

.btn-css
  height: 52px

#login-logo
  max-width: 100%
  height:  auto
  margin-bottom: 5px

  
  
.q-field__control
  height: 50px !important

</style>
