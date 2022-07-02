<template>
  <q-layout
    class="q-pa-md bg-image"
    style="
      background-image: url(https://images.pexels.com/photos/58597/pexels-photo-58597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
        no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      background-position: center center;
    "
  >
    <q-page-container class="col-md-12 col-xs-12 login-container justify-center">
      <div class="">
        <q-img
          id="login-logo"
          src="https://kyluc.vn/Userfiles/Upload/images/VNPT.png"
        />
      </div>

      <div>
        <q-form class="q-gutter-md" @submit.prevent="userLogin()">
          <q-input
            outlined
            rounded
            bg-color="blue-grey-1"
            label="Tên đăng nhập"
            v-model="login.username"
          >
          </q-input>
          <q-input
          class="input-height"
            outlined
            rounded
         
            bg-color="blue-grey-1"
            label="Mật khẩu"
            type="password"
            v-model="login.password"
          >
          </q-input>
          <div>
            <q-btn
              class="full-width"
              color="primary"
              label="Đăng nhập"
              type="submit"
              rounded
              fab 
           
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
        username: "ntphong.hgi",
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
  padding: 7rem
  max-width: 550px

#login-logo
  max-width: 100%
  height:  auto
  margin-bottom: 30px
  




</style>
