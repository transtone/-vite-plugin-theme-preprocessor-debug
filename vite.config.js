import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import WindiCSS from 'vite-plugin-windicss'
import ViteComponents from 'vite-plugin-components'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'
import path from 'path'
import { themePreprocessorPlugin, themePreprocessorHmrPlugin } from '@zougt/vite-plugin-theme-preprocessor'

const themeVars = require('./src/assets/style/theme.json')

export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    Pages({ replaceSquareBrackets: true, nuxtStyle: true }),
    ViteComponents(),
    PkgConfig(),
    OptimizationPersist(),
    WindiCSS(),
    themePreprocessorPlugin({
      less: {
        // 启用任意主题色模式
        // arbitraryMode: true,
        // 默认的主题色，用于对其他颜色值形成对比值，通常与 src/theme/theme-vars.less 中的一个主题色相同，也可以不相同，就看是不是你想要的效果
        // defaultPrimaryColor: "#512da7",
        multipleScopeVars: [
          {
            scopeName: 'theme-default',
            path: path.resolve('src/assets/theme/default.less'),
          },
          {
            scopeName: 'theme-dark',
            path: path.resolve('src/assets/theme/dark.less'),
          },
        ],
        // css中不是由主题色变量生成的颜色，也让它抽取到主题css内，可以提高权重
        includeStyleWithColors: [
          {
            color: '#ffffff',
            // 此类颜色的是否跟随主题色梯度变化，默认false
            // inGradient: true,
          },
        ],
      },
    }),
    themePreprocessorHmrPlugin(),
  ],
  resolve: {
    alias: [{ find: /^@\//, replacement: '/src/' }],
  },
  server: {
    host: true,
    port: 8000,
  },
  build: {
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true,
      },
    },
    // Turning off brotliSize display can slightly reduce packaging time
    brotliSize: false,
    chunkSizeWarningLimit: 2000,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVars,
      },
    },
  },
  optimizeDeps: {
    include: [
      '@ant-design/icons-vue',
      '@ag-grid-community/vue3/lib/AgGridVue',
      'ant-design-vue/es/locale/zh_CN',
      'ant-design-vue/es/locale/en_US',
    ],
    exclude: [],
  },
})
