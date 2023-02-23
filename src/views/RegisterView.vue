<template>
  <div>
    <TabsWrapper>
      <Tab title="Register">
        <RegisterForm />
      </Tab>
      <Tab title="Forgot Credentials">
        <ForgotCredentials />
      </Tab>
    </TabsWrapper>
  </div>
</template>
<script>
import Tab from "@/components/Tab.vue";
import TabsWrapper from "@/components/TabsWrapper.vue";
import ForgotCredentials from "@/views/ForgotCredentials.vue";
import RegisterForm from "@/views/RegisterForm.vue";

export default {
  nam: "RegisterView",
  components: {
    TabsWrapper,
    Tab,
    RegisterForm,
    ForgotCredentials,
  },
};
</script>
<style lang=""></style>
