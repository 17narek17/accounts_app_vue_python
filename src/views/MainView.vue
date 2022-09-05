<template>
  <a-table :columns="columns" :data-source="main.accountsData" />
</template>

<script>
  import { useAccountsStore } from "@/store/useAccounts";
  import { createPinia } from "pinia";

  const pinia = createPinia();
  const main = useAccountsStore( pinia );

  export default {
    setup() {
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
          main.setAccounts( data );
        });
    },
  };
</script>
