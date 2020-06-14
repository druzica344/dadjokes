import Vue from "vue";
import App from './components/app.vue';
import './index.html';

new Vue({
  el: "#app", 
  render: h => h(App),
}); 