import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import TabMenu from 'primevue/tabmenu';
import router from './router'
import PrimeVue from 'primevue/config';
import Dropdown from 'primevue/dropdown';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';     //optional for column grouping
import Row from 'primevue/row';
import Sidebar from 'primevue/sidebar';
import SplitButton from 'primevue/splitbutton';
import MultiSelect from 'primevue/multiselect';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';
import Slider from 'primevue/slider';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import Chips from 'primevue/chips';
import Textarea from 'primevue/textarea';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Tree from 'primevue/tree';
import Card from 'primevue/card';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'
const app = createApp(App);
app.use(PrimeVue);
app.component('Tree',Tree);
app.component('Splitter',Splitter);
app.component('Splitterpanel',SplitterPanel);
app.component('Avatar',Avatar);
app.component('AvatarGroup',AvatarGroup);
app.component('Card',Card);
app.component('Accordion',Accordion);
app.component('AccordionTab',AccordionTab);
app.component('Textarea',Textarea);
app.component('Dialog',Dialog);
app.component('Sidebar', Sidebar);
app.component('Chips', Chips);
app.component('SplitButton', SplitButton);
app.component('Button', Button);
app.component('DataTable', DataTable);
app.component('MultiSelect', MultiSelect);
app.component('ProgressBar', ProgressBar);
app.component('Slider', Slider);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('Dropdown', Dropdown);
app.component('TabMenu', TabMenu);
app.component('InputText', InputText);
app.use(router).mount('#app')
