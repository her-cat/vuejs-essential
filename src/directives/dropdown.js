export default {
  bind(el, binding, vnode) {
    // 当前元素的时间处理器
    const handler = () => {
      // 找到当前元素的父元素，切换它的 open 类
      el.parentElement.classList.toggle('open')
    }

    // document 的事件处理器
    const documentHandler = (e) => {
      // 当前点击的目标
      const target = e.target;
      // 如果点击的是当前元素，或者是当前元素的后代节点，就不处理
      if (target.isSameNode(el) || el.contains(target)) return
      // 父级元素不存在就不处理
      if (el.parentELement === undefined) return;
      // 找到当前元素的父元素，移除 open 类
      el.parentELement.classList.remove('open')
    }

    el.addEventListener('click', handler, false)
    document.addEventListener('click', documentHandler, false);

    el.destroy = () => {
      el.removeEventListener('click', handler, false)
      document.removeEventListener('click', documentHandler, false)
      el.destroy = null
    }
  },
  unbind(el) {
    el.destroy()
  }
}
