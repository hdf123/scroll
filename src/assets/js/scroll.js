import scroll from '@/components/scroll.vue'
// 这里是重点
const Scroll = {
  install: function (Vue) {
    Vue.component('scroll', scroll)
  }
}

// 导出组件
export default Scroll
