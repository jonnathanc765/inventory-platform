import Vue from 'vue'

export default () => {
  Vue.filter('large_truncate', (value) => {
    if (value && value.length > 70) {
      return `${value.substr(0, 70)}...`
    }
    return value
  })
  Vue.filter('small_truncate', (value) => {
    if (value && value.length > 33) {
      return `${value.substr(0, 33).trim()}...`
    }
    return value
  })
}
