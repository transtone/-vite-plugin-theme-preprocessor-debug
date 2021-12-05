<template>
  <div class="app">
    <a-config-provider :locale="zhCN">
      <div class="blank-page">
        <router-view />
      </div>
    </a-config-provider>
    <div v-if="loading" class="spin-fix is-fullscreen">
      <div class="sk-loading sk-circle-fade">
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
        <div class="sk-circle-fade-dot"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import 'spinkit/spinkit.min.css'
import { ref, computed, onMounted, nextTick, watch, getCurrentInstance } from 'vue'

const toggleTheme = (scopeName = "theme-default") => {
  document.documentElement.className = scopeName
}
toggleTheme('theme-default')
watch(kanban, (val) => {
  if (val) {
    toggleTheme('theme-dark')
  } else {
    toggleTheme('theme-default')
  }
})

</script>

<style lang="stylus">
.ant-border {
  border-style: solid;
  border-color: #f0f0f0;
}

.tag-blue {
  @apply text-blue bg-bg_blue border-solid border-bd_blue
}

.tag-red {
  @apply text-red bg-bg_red border-solid border-bd_red
}

.tag-green {
  @apply text-green bg-bg_green border-solid border-bd_green
}

.tag-yellow {
  @apply text-yellow bg-bg_yellow border-solid border-bd_yellow
}

.tag-gray {
  @apply text-gray bg-bg_gray border-solid border-bd_gray
}

.tag-silver {
  @apply text-tag_silver bg-bg_silver border-solid border-bd_silver
}

// =======================
// 以上是全局公共样式
// ======================
.app {
  background-color: #F0F2F5;

  .qiankun-main {
    height: calc(100vh - 81px);
    overflow-y: auto;

    &.kanban {
      height: 100vh;
    }
  }

  #nav {
    text-align: center;
    padding: 30px;
    color: #2c3e50;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .is-fullscreen {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;

    &.spin-fix {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 9999;
      background-color: rgba(255, 255, 255, 0.9);
    }

    .sk-loading {
      position: relative;
      width: 40px;
      height: 40px;

      .sk-circle-fade-dot:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        background-color: #0078d4;
        border-radius: 100%;
      }
    }
  }

  img {
    display: inherit;
    vertical-align: inherit;
  }
}

.theme-default .theme-bg {
  background: #ffffff !important;
}

.theme-dark .theme-bg {
  background: #141414 !important;
}
</style>
