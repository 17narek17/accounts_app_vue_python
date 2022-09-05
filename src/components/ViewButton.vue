<template lang="">
  <div @click="redirect">View</div>
</template>
<script>
export default {
  props: [ "account_id" ],
  methods: {
    redirect() {
      this.$router.push( `/accounts/${this.account_id}` );
    },
  },
};
</script>
<style lang=""></style>
