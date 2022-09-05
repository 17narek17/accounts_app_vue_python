import Antd from "ant-design-vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";

const pinia = createPinia()

createApp( App )
    .use( router )
    .use( Antd )
    .use( pinia )
    .mount( "#app" );
