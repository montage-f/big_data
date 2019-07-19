/**
 * Created by MonTage_fz on 2019/7/19
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import $axios from './axios';
Vue.prototype.$axios = $axios;

Vue.use(ElementUI, { size: 'small' });
