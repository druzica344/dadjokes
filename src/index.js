import './index.html';
import './style.css';

new Vue({
  el: "#app", 
  data: {
    upLikes: 0,
    downLikes: 0
  },
  methods: {
    likesUp(){
      this.upLikes ++;
    },
    likesDown(){
      this.downLikes ++;
    }
  }
});

