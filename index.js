import Vue from 'vue';
import VueComponent from './src/vue-component.vue';

new Vue({
    el: '#container',
    components: {
        'vue-component': VueComponent
    },
    data() {
        return {};
    }
});
