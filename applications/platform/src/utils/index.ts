/*
 * @Author: Just be free
 * @Date:   2021-12-24 18:49:22
 * @Last Modified by:   Just be free
 * @Last Modified time: 2022-01-04 17:04:16
 * @E-mail: justbefree@126.com
 */
import Vue2 from "flight/vue2";

function bindSlotContext(target: any = {}, context: any): any {
  return Object.keys(target).map((key) => {
    const vnode = target[key];
    vnode.context = context;
    return vnode;
  });
}

/*
 * Transform vue2 components to DOM.
 */
export function vue2ToVue3(WrapperComponent: any, wrapperId: any): any {
  let vm: any = null;
  return {
    mounted() {
      const slots = bindSlotContext(this.$slots, this.__self);
      vm = new Vue2({
        render: (createElement: any) => {
          return createElement(
            WrapperComponent,
            {
              on: this.$attrs,
              attrs: this.$attrs,
              props: this.$props,
              scopedSlots: this.$scopedSlots,
            },
            slots
          );
        },
      });
      vm.$mount(`#${wrapperId}`);
    },
    props: WrapperComponent.props,
    render() {
      vm && vm.$forceUpdate();
    },
  };
}

export function vue2ToVue32(WrapperComponent: any): any {
  let vm: any = null;
  return {
    mounted() {
      const slots = bindSlotContext(this.$slots, this.__self);
      vm = new Vue2({
        render: (createElement: any) => {
          return createElement(
            WrapperComponent,
            {
              on: this.$attrs,
              attrs: this.$attrs,
              props: this.$props,
              scopedSlots: this.$scopedSlots,
            },
            slots
          );
        },
      });
      // vm.$mount(`#${wrapperId}`);
      vm.$mount();
    },
    props: WrapperComponent.props,
    render() {
      vm && vm.$forceUpdate();
    },
  };
}
