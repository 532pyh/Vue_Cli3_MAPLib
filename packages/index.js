import testA from './testA'
import testB from './testB'
export default {
    install(Vue) {
        Vue.use(testA);
        Vue.use(testB)
    },
}
