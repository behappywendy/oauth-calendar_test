<template>
  <div>
    <GoogleSignInButton
      @sign-in="oAuthSignIn('google', $event)"
    ></GoogleSignInButton>
  </div>
</template>

<script>
import GoogleSignInButton from "@/components/GoogleSigninButton.vue";
export default {
  name: "AuthSignin",
  components: {
    GoogleSignInButton,
  },
  methods: {
    async oAuthSignIn(provider, id_token) {
      try {
        await this.$store.dispatch("oAuthLogin", {
          provider,
          id_token,
        });
        console.log("id_token", id_token);
        this.$emit("submit");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
