<template>
  <div>
    <a-table :columns="columns" :data-source="dataSource" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dataSource: [],
      };
    },
    setup() {
      return {
        columns: [
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Age",
            dataIndex: "age",
            key: "age",
          },
          {
            title: "Owner",
            dataIndex: "owner",
            key: "owner",
          },
        ],
      };
    },
    mounted() {
      fetch( process.env.VUE_APP_API_URL + "/accounts/" + this.$route.params.id )
        .then(( res ) => res.json())
        .then(( data ) => this.dataSource = [data]);
    },
  };
</script>
