<script>
/**
 * @Author: 焦质晔
 * @Date: 2019-06-20 10:00:00
 * @Last Modified by:   焦质晔
 * @Last Modified time: 2019-06-20 10:00:00
 **/
export default {
  name: 'AjaxButton',
  props: {
    // 点击执行的方法 必传
    click: {
      type: Function,
      default: null,
      required: true
    },
    size: {
      type: String,
      default: 'small'
    },
    type: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    // 权限校验参数
    authList: {
      type: Array,
      default: null
    },
    authMark: {
      type: String,
      default: ''
    },
    // 控制按钮上面的红色小圆圈的
    isShow:{
      type:Boolean,
      default:false
    },
    // 小圆圈上面的数字
    isShowNumber:{
      type:String,
      default:''
    }
  },
  data() {
    return {
      ajaxing: false
    };
  },
  computed: {
    isDisabled() {
      return this.ajaxing || this.disabled;
    },
    isVisible() {
      // 没有权限控制，默认该按钮显示状态
      if (!this.authList) return true;
      return this.authList.includes(this.authMark);
    },
    showNumberlength () {
      let showNumberlength = 0
      if (this.isShowNumber.length>2) {
        showNumberlength = 3
      }
      if (showNumberlength<3){
        return true
      } else{
        return false
      }
    },
  },
  methods: {
    async sleep(timeLen) {
      return new Promise(resolve => {
        setTimeout(resolve, timeLen);
      });
    },
    async clickHandle() {
      this.ajaxing = true;
      try {
        await this.click();
      } catch (err) {}
      await this.sleep(100);
      this.ajaxing = false;
    }
  },
  render() {
    const { $props, $listeners, $attrs, $slots, ajaxing, isDisabled, isVisible,isShow,isShowNumber } = this;
    const wrapProps = {
      key: 'ajax-btn',
      props: {
        ...$props,
        loading: ajaxing,
        disabled: isDisabled
      },
      attrs: { ...$attrs },
      on: {
        ...$listeners,
        click: this.clickHandle
      }
    };
    return isVisible ?
     <span class="dw">
      <span class="yuan" v-show={isShow}>{this.showNumberlength?isShowNumber:'...'}</span>
       <el-button {...wrapProps}>{$slots['default']}</el-button>
     </span>
     : null;
  }
};
</script>
<style lang="less" scoped>
  .dw{
  position: relative;
    .yuan{
    background: red;
    position:absolute;
    right: -2px;
    top: -14px;
    border-radius: 50%;
    color:#fff;
    background: red;
    position: absolute;
    width: 16px;
    line-height: 16px;
    color: #fff;
    height: 16px;
    text-align: center;
    }
}
</style>
