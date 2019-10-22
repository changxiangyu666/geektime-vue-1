<template>
  <div>
    {{ fullName }}

    <div>firstName: <input v-model="firstName" /></div>
    <div>lastName: <input v-model="lastName" /></div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      firstName: "Foo",
      lastName: "Bar",
      fullName: "Foo Bar"
    };
  },
  watch: {
    firstName: function(val) {
      clearInterval(this.firstIntervel);
      this.firstIntervel = setInterval(() => {
        this.fullName = val + " " + this.lastName;
      }, 1000);
      console.log("new: %s", val);
    },
    lastName: function(val) {
      clearInterval(this.lastInterval);
      this.lastInterval = setInterval(() => {
        this.fullName = this.firstName + " " + val;
      }, 1000);
      console.log("new: %s", val);
    }
  }
};
</script>
