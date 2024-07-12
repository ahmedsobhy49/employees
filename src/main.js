import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Panel from "primevue/panel";
import Lara from "@/presets/lara";
import App from "./App.vue";
import "./style.css";
import { createPinia } from "pinia";

import "primeicons/primeicons.css";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

import InputText from "../node_modules/primevue/inputtext";
import InputNumber from "../node_modules/primevue/inputnumber";
import Rating from "../node_modules/primevue/rating";
import Textarea from "../node_modules/primevue/textarea";
import RadioButton from "../node_modules/primevue/radiobutton";
import Dropdown from "../node_modules/primevue/dropdown";
import Checkbox from "../node_modules/primevue/checkbox";
import Button from "../node_modules/primevue/button";
import DataTable from "../node_modules/primevue/datatable";
import Column from "../node_modules/primevue/column";
import ColumnGroup from "../node_modules/primevue/columngroup";
import Row from "../node_modules/primevue/row";
import Dialog from "primevue/dialog";

const app = createApp(App);
const pinia = createPinia();

app.component("Panel", Panel);
app.component("Dialog", Dialog);
app.component("InputText", InputText);
app.component("InputNumber", InputNumber);
app.component("Rating", Rating);
app.component("Textarea", Textarea);
app.component("RadioButton", RadioButton);
app.component("Dropdown", Dropdown);
app.component("Checkbox", Checkbox);
app.component("Button", Button);
app.component("Column", Column);
app.component("DataTable", DataTable);
app.component("ColumnGroup", ColumnGroup);
app.component("Row", Row);

app
  .use(PrimeVue, {
    unstyled: true,
    pt: Lara,
  })
  .use(pinia)
  .use(ToastPlugin)
  .mount("#app");
