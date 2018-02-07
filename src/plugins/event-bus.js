
import Vue from 'Vue'

const bus = new Vue()

export default function install(Vue) {
  Object.defineProperties(Vue.prototype, {
    $bus: {
      get() {
        return bus
      }
    }
  })
}
