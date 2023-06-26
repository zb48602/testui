<h1 align="center">
  A Vue AjaxButton Component by jzy
</h1>

#### AjaxButton 组件调用

`组件的引用`

bashbashbashbash
# main.js
import AjaxButton from '@/components/AjaxButton';
Vue.use(AjaxButton);
bashbashbash

`组件参数API`

- click{Function|点击按钮触发的事件，是参数而不是事件}
- auth-list{Array|权限数组，通过 authority 的混入，使用 this.auths 即可}
- auth-mark{String|控制该按钮权限的标识符，业务的 ajax 接口地址}
- 其他参数同 el-button 组件
- isShow{Boolean|控制按钮右上角红色小圆圈的显示 ，默认false 不显示}
- isShowNumber{String|控制按钮右上角红色小圆圈的显示数字 ，默认不显示数字 ,当数字超出两位后默认显示...}

`组件插槽`

- default{Button 里的文本内容}

`示例代码`

bashbashbashbash
# template
<template>
  <AjaxButton size="small" :click="saveHandle" :auth-list="auths" auth-mark="/api/aaa">保存</AjaxButton>
  <AjaxButton type="warning" :click="saveHandle.bind(this, 1)">保存</AjaxButton>
  <AjaxButton type="small" :isShow=“true” :isShowNumber="'11'":click="saveHandle"  >保存</AjaxButton>
</template>

# js
import { authority } from '@/utils/authMixin';
import { saveApi } from '@/api/xxx/xxx';

export default {
  mixins: [authority],
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    async saveHandle(type) {
      // if (type === 1) {
      //   业务逻辑判断
      // }
      const res = await saveApi(this.formData);
    }
  }
};
bashbashbash
