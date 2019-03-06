<template>
  <div class="navbar-right">
    <ul v-if="auth" class="nav navbar-nav github-login">
      <li>
        <a v-dropdown href="javacript:;">
          <i class="fa fa-plus text-md"></i>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link to="/articles/create">
              <i class="fa fa-paint-brush text-md"></i>
              创作文章
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <a v-dropdown href="javascript:;">
          <span v-if="user">
            <img v-if="user.avatar" :src="user.avatar" class="avatar-topnav">
            <span v-if="user.name">{{ user.name }}</span>
          </span>
          <span v-else>佚名</span>
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link to="/users/1/edit">
              <i class="fa fa-cog text-md i-middle"></i>
              编辑资料
            </router-link>
          </li>
          <li><a @click="logout" href="javascript:;"><i class="fa fa-sign-out text-md"></i>退出</a></li>
        </ul>
      </li>
    </ul>
    <div v-else class="nav navbar-nav github-login">
      <router-link to="/auth/login" class="btn btn-default login-btn">
        <i class="fa fa-user"></i> 登 录
      </router-link>
      <router-link to="/auth/register" class="btn btn-default login-btn">
        <i class="fa fa-user-plus"></i> 注 册
      </router-link>
    </div>
  </div>
</template>

<script>
  // 引入 mapState 辅助函数
  import { mapState } from 'vuex'

  export default {
    name: 'TheEntry',
    // 添加计算属性选项
    computed: {
      // 使用对象展开运算符，将 mapState 对象混入到计算属性之中
      ...mapState([
        // 映射 this.auth 为 store.state.auth
        'auth',
        // 映射 this.user 为 store.state.user
        'user'
      ])
    },
    methods: {
      logout() {
        this.$swal({
          'text': '你确定要退出吗?',
          confirmButtonText: '退出'
        }).then((res) => {
          if (res.value) {
            this.$store.dispatch('logout')
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
