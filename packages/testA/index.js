import test from './src/index.vue';
test.install = function(Vue) {
    Vue.component(test.name, test);
};
export default test;