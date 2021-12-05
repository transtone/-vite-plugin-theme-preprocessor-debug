<template>
  <div class="app p-5">
    <a-config-provider :locale="zhCN">
      <div>
        <a-button @click="handleToggleTheme">切换主题</a-button>
      </div>
      <div>
        <a-breadcrumb>
          <a-breadcrumb-item><a>整体看板</a></a-breadcrumb-item>
          <a-breadcrumb-item><a>经营导图 </a></a-breadcrumb-item>
          <a-breadcrumb-item><a>资产折损 </a></a-breadcrumb-item>
          <a-breadcrumb-item><a>商务条件 </a></a-breadcrumb-item>
        </a-breadcrumb>
      </div>

      <div>
        <a-button @click="handleShowMsg">弹窗</a-button>
      </div>

    </a-config-provider>
  </div>
</template>

<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { ref, computed, onMounted, nextTick, watch, inject, } from 'vue'

const toggleTheme = (scopeName = "theme-default") => {
  document.documentElement.className = scopeName
}

const currTheme = ref('theme-default')

const handleToggleTheme = () => {
  if (currTheme.value === 'theme-default') {
    toggleTheme('theme-dark')
    currTheme.value = 'theme-dark'
  } else {
    toggleTheme('theme-default')
    currTheme.value = 'theme-default'
  }
}

const message = inject('message')

const handleShowMsg = () => {
  message.success("欲穷千里目，更上一层楼")
}

</script>
