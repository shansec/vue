import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
import type { GlobalAPI } from 'types/global-api'

function Vue(options) {
  if (__DEV__ && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

//@ts-expect-error Vue has function type
initMixin(Vue)
//@ts-expect-error Vue has function type
stateMixin(Vue) // $set $delete $watch
//@ts-expect-error Vue has function type
eventsMixin(Vue)  // $on $emit $off $once
//@ts-expect-error Vue has function type
lifecycleMixin(Vue) // _update $forceUpdate $destroy
//@ts-expect-error Vue has function type
renderMixin(Vue)  // _render $nextTick()

export default Vue as unknown as GlobalAPI
