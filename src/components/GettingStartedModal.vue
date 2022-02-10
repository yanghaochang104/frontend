<template>
  <div class="getting-started-container">
    <app-modal :open="open" :showCloseButton="false" :dismiss="dismiss">
      <div class="page">
        <h3 class="text-center">歡迎來到<b>OH!SHOWN 黑熊出沒痕跡通報系統！</b></h3>
        <br><br>
        <p>需要大家回報以下黑熊出沒痕跡之照片及資訊：</p>

        <small class="text-center" style="padding-left: 20px; padding-right: 20px;">
          本會(台灣黑熊保護協會)取得您的個人資料，在個人資料保護法及相關法令之規定下，依本處隱私權保護政策，蒐集、處理及利用您的個人資料。 您亦同意本處以您所提供之個人資料確認您的身分、與您進行連絡，以及其他隱私權保護政策規範之使用方式。本人同意本人於Oh Shown!上傳之所有內容，採用創用 CC 姓名標示4.0版台灣授權條款在台灣黑熊保護協會公開分享以及無償作為學術單位、政府單位使用。 並了解本授權條款係適用於全世界，且其有效期間持續至本著作的著作權保護期間屆滿為止，同時具不可撤回之特性。 本人亦了解他人合理使用的權利及其他相關規範，不因本授權條款之內容而受影響。 本人擔保本作品未侵害或抄襲他人之著作（作品中使用他人作品之部份，包含圖像及聲音等），若有違反智慧財產之情事者，願自行負擔一切法律責任。 創用CC台灣授權條款詳見 <a href="http://creativecommons.tw/license" target="_blank">此處</a>。本網站由 <a href="https://g0v.tw/" target="_blank">g0v.tw</a> 社群開發。
        </small>

        <app-button @click="agree">我同意加入回報</app-button>

        <small>
          <a href="https://www.taiwanbear.org.tw/">我不同意，請帶我離開這個頁面</a>
        </small>
      </div>
    </app-modal>
  </div>
</template>

<script lang="ts">
import AppModal from '@/components/AppModal.vue'
import AppButton from '@/components/AppButton.vue'
import { createComponent } from '@vue/composition-api'

export default createComponent({
  name: 'GettingStartedModal',
  components: {
    AppModal,
    AppButton
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    dismiss: {
      type: Function
    }
  },
  setup (props) {
    return {
      agree () {
        localStorage.setItem('use-app', 'true')
        if (props.dismiss) {
          props.dismiss()
        }
      }
    }
  }
})
</script>

<style lang="scss">
@import '@/styles/page';
@import '@/styles/variables';

.getting-started-container .app-modal {
  top: 20px;
  max-height: calc(100% - 40px);
  max-width: calc(100% - 20px);
  padding-top: 35px;

  .page {
    h3 {
      color: $primary-color;
      font-size: 18px;
      margin-top: 0;
      font-weight: normal;
      line-height: 1.2;
    }

    small {
      text-align: center;
      display: block;
      margin: 1em 0;
      line-height: 1.1;
    }

    a {
      color: $primary-color;
      text-decoration: none;
    }

    pre {
      line-height: 1.5em;
      white-space: pre-line;
    }
  }
}
</style>
