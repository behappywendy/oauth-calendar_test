<template>
  <AuthSignin></AuthSignin>
  <div class="shadow">
    <button @click="Logout">登出</button>
  </div>
</template>

<script>
import AuthSignin from "@/components/AuthSignin.vue";
export default {
  name: "Navigation",
  components: { AuthSignin },
  methods: {
    async Logout() {
      try {
        const isLogout = window.confirm("確定要登出");
        if (isLogout) {
          const auth2 = window.gapi.auth2.getAuthInstance();
          auth2.signOut().then(() => {
            console.log("Google User signed out.");
          });
          // 可以在這個時候移除 cookie
          window.alert("已登出");
          this.$router.push({ name: "Signin" }); // 回到登入頁
        }
      } catch (error) {
        if (error instanceof Error) {
          window.alert(error.messages);
        } else {
          window.alert(error.detail);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
