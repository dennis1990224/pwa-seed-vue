import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@/firebase/';
import '@babel/polyfill';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import firebase from 'firebase';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
    beforeCreate() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.$store.commit('setUser', user);
                this.$store.commit('setIsAuthenticated', true);
                router.push('/about');
            }
        });
    }
}).$mount('#app');
