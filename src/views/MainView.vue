<template>
  <a-table :columns="columns" :data-source="main.accountsData" />
</template>

<script>
  import { useAccountsStore } from "@/store/useAccounts";

  export default {
    setup() {
      const main = useAccountsStore();
      
      return {
        main,
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
          {
            title: "View",
            dataIndex: "view",
            key: "view",
          },
        ],
      };
    },
    mounted() {
      fetch( process.env.VUE_APP_API_URL )
        .then(( res ) => res.json())
        .then(( data ) => {
          this.main.setAccounts( data );
        });
    },
  };
</script>
