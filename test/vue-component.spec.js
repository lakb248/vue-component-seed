/* global describe, it, expect */
import Vue from 'vue';
import VueComponent from '../src/vue-component.vue';

describe('vue-component.vue', () => {
    it('should have correct text', () => {
        expect(VueComponent.data().text).toBe('Hello Vue-Component');
    });

    it('should render correct text', () => {
        const vm = new Vue({
            template: '<div><vue-component></vue-component></div>',
            components: {
                'vue-component': VueComponent
            }
        }).$mount();
        expect(vm.$el.querySelector('h2').textContent)
            .toBe('Hello Vue-Component');
    });
});
