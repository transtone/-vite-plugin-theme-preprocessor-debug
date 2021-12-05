import 'virtual:windi.css'
import '@/assets/style/normal.less'
import { createApp } from 'vue'
import App from './App.vue'
import VueRx from "@nopr3d/vue-next-rx/dist/vue-next-rx"
import parseJson from 'json-parse-even-better-errors'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import "ant-design-vue/dist/antd.less"
import message from 'ant-design-vue/es/message'
import { SearchOutlined, CloseOutlined } from '@ant-design/icons-vue'
import Layout from 'ant-design-vue/es/layout'
import Divider from 'ant-design-vue/es/divider'
import Button from 'ant-design-vue/es/button'
import Popover from 'ant-design-vue/es/popover'
import PopConfirm from 'ant-design-vue/es/popconfirm'
import PageHeader from 'ant-design-vue/es/page-header'
import Checkbox from 'ant-design-vue/es/checkbox'
import Radio from 'ant-design-vue/es/radio'
import Input from 'ant-design-vue/es/input'
import Tag from 'ant-design-vue/es/tag'
import Select from 'ant-design-vue/es/select'
import DatePicker from 'ant-design-vue/es/date-picker'
import ConfigProvider from 'ant-design-vue/es/config-provider'
import Dropdown from 'ant-design-vue/es/dropdown'
import Tooltip from 'ant-design-vue/es/tooltip'
import Menu from 'ant-design-vue/es/menu'
import Pagination from 'ant-design-vue/es/pagination'
import Card from 'ant-design-vue/es/card'
import Tabs from 'ant-design-vue/es/tabs'
import List from 'ant-design-vue/es/list'
import Modal from 'ant-design-vue/es/modal'
import Alert from 'ant-design-vue/es/alert'
import Tree from 'ant-design-vue/es/tree'
import TreeSelect from 'ant-design-vue/es/tree-select'
import Form from 'ant-design-vue/es/form'
import Space from 'ant-design-vue/es/space'
import Table from 'ant-design-vue/es/table'
import Upload from 'ant-design-vue/es/upload'
import Avatar from 'ant-design-vue/es/avatar'
import InputNumber from 'ant-design-vue/es/input-number'
import Cascader from 'ant-design-vue/es/cascader'
import Switch from 'ant-design-vue/es/switch'
import Breadcrumb from 'ant-design-vue/es/breadcrumb'
import Rate from 'ant-design-vue/es/rate'
import Drawer from 'ant-design-vue/es/drawer'
import VXETable from 'vxe-table'
import './assets/style/vxe-table-style.css'
import VXETablePluginAntd from 'vxe-table-plugin-antd'
import 'vxe-table-plugin-antd/dist/style.css'

VXETable.use(VXETablePluginAntd)

dayjs.locale('zh-cn')
window.dayjs = dayjs
window.parseJson = parseJson.noExceptions

let app = null

  const { container } = props
  app = createApp(App)
  setupGlobDirectives(app)
  router = routers
  app.config.productionTip = false

  app.config.globalProperties.$message = message
  app.provide('message', message)

  app.config.globalProperties.dayjs = dayjs

  app.component('SearchOutlined', SearchOutlined)
  app.component('CloseOutlined', CloseOutlined)

  app.use(Layout).use(Button).use(Popover).use(Input).use(Select).use(DatePicker).use(ConfigProvider).use(Tabs).use(Tree).use(Alert)
    .use(Dropdown).use(Tooltip).use(Menu).use(Pagination).use(Card).use(TreeSelect).use(List).use(Modal).use(Form).use(Divider).use(PopConfirm)
    .use(Space).use(Table).use(Avatar).use(InputNumber).use(Cascader).use(Switch).use(Rate).use(PageHeader).use(Checkbox).use(Radio)
    .use(Tag).use(Upload).use(Drawer).use(Breadcrumb)
    .use(VXETable).use(VueRx).use(store).use(router).mount(container ? container.querySelector('#app') : '#app')
