/**
 * Created by MonTage_fz on 2019/7/19
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import $echarts from 'echarts';
import $axios from './axios';

Vue.prototype.$axios = $axios;
Vue.prototype.$echarts = $echarts;

Vue.use(ElementUI, { size: 'small' });
Vue.use(Antd, { size: 'small' });
