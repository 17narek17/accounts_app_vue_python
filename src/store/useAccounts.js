import { defineStore } from 'pinia'
import ViewButton from "../components/ViewButton"

export const useAccountsStore = defineStore( "main", {
  state: () => ({
    accountsData: []
  }),
  actions: {
    setAccounts( accounts ) {
      this.accountsData = accounts.map( account => ({
        ...account,
        view: <ViewButton account_id={ account._id }/>
      }))
    }
  }
})