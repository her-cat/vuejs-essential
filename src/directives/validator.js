// 具体的验证逻辑
function validate(el, modifiers, bindingValue) {
  bindingValue = bindingValue && typeof bindingValue === 'object' ? bindingValue : {}
  const value = typeof el.value === 'string' ? el.value.trim() : ''
  const { title = '该项', error } = bindingValue
  let defaultError = ''

  if (modifiers.required && value === '') {
    defaultError = `${title}不能为空`
  } else if (bindingValue.target) {
    const target = document.querySelector(bindingValue.target)
    const targetValue = target ? target.value : null

    if (targetValue !== value) {
      defaultError = `输入的${title}不匹配`
    }
  } else if (bindingValue.regex) {
    try {
      if (!bindingValue.regex.test(value)) {
        defaultError = `${title}格式不正确`
      }
    } catch (e) {}
  }

  if (defaultError) {
    if (error === undefined) {
      showError(el, defaultError)
    } else {
      showError(el, error)
    }
  } else {
    showError(el)
  }

  checkIsCanSubmit(el)
}

// 显示或隐藏错误提示元素
function showError(el, error) {
  const parentElement = el.parentElement
  const errorElement = getErrorElement(el)

  if (error === undefined) {
    errorElement.style.display = 'none'
    parentElement.classList.remove('has-error')
  } else {
    errorElement.textContent = error
    errorElement.style.display = 'block'
    parentElement.classList.add('has-error')
  }
}

// 创建或者返回一个错误提示元素
function getErrorElement(el) {
  const parentElement = el.parentElement
  let errorElement = parentElement.querySelector('.help-block')

  if (!errorElement) {
    const tpl = `<span class="help-block"></span>`
    const fragment = document.createRange().createContextualFragment(tpl)

    parentElement.appendChild(fragment)
    errorElement = parentElement.querySelector('.help-block')
  }

  return errorElement
}

function checkIsCanSubmit(el) {
  // 指定当前一系列验证项的父级，我们这里指定为含 data-validator-form 的元素
  const form = el.closest('[data-validator-form]')
  // 指定一个按钮来检查所有验证项，我们这里指定为含 type=submit 的元素
  const submitBtn = form.querySelector('[type=submit]');
  // 获取错误信息
  const errors = form.querySelectorAll('.has-error')
  // 通过有无错误信息来控制是否可以提交
  submitBtn.canSubmit = !errors.length
}

export default {
  bind(el, binding, vnode) {
    // 使用解构赋值声明 value = binding.value,  arg = binding.arg,  modifiers = binding.modifiers
    const { value, arg, modifiers } = binding
    // 如果没传对应的事件名称参数，就默认使用 change 事件
    const eventType = ['change', 'blur', 'input'].indexOf(arg) !== -1 ? arg : 'change'
    // 默认处理器，当用户开始输入时，移除错误提示
    const defaultHandler = () => {
      showError(el)
    }
    // 验证处理器，当用户触发对应的事件时，验证用户输入的信息
    const handler = () => {
      validate(el, modifiers, value)
    }

    // 在 el 元素上的添加 input 事件监听
    el.addEventListener('input', defaultHandler, false)
    // 在 el 元素上的添加用户指定的事件监听
    el.addEventListener(eventType, handler, false)

    // 移除 el 元素上事件监听和数据绑定的方法
    el.destroy = () => {
      el.removeEventListener('input', defaultHandler, false)
      el.removeEventListener(eventType, handler, false)
      el.destroy = null
    }
    // 当页面加载完毕后就检查是否可以提交
    window.onload = () => checkIsCanSubmit(el)
  },
  inserted(el, binding, vnode) {
    const { value, modifiers } = binding
    // 指定当前一系列验证项的父级，我们这里指定为含 data-validator-form 的元素
    const form = el.closest('[data-validator-form]')
    // 指定一个按钮来检查所有验证项，我们这里指定为含 type=submit 的元素
    const submitBtn = form ? form.querySelector('[type=submit]') : null

    if (submitBtn) {
      // 提交处理器
      const submitHandler = () => validate(el, modifiers, value)

      // 在按钮上的添加 click 事件监听
      submitBtn.addEventListener('click', submitHandler, false)

      // 移除按钮上事件监听和数据绑定的方法
      el.destroySubmitBtn = () => {
        submitBtn.removeEventListener('click', submitHandler, false)
        el.destroySubmitBtn = null
      }
    }
  },
  unbind(el) {
    // 移除事件监听和数据绑定
    el.destroy()
    if (el.destroySubmitBtn) el.destroySubmitBtn()
  }
}
