<template>
  <div class="contact-modal-container">
    <app-modal :open="open" :dismiss="dismiss">
      <div class="page">
        <img width="287" src="/images/oh-shown-logo.png" alt="Oh Shown! Logo">

        <h3>
          有任何回報相關問題<br>
          歡迎聯絡
        </h3>

        <p>
          台灣黑熊保育協會<br>
          TEL: 02-23818696<br>
          Email: <a href="mailto:taiwanblackbear@tbbcatw.com">taiwanblackbear@tbbcatw.com</a><br>
        </p>
      </div>
    </app-modal>
  </div>
</template>

<script lang="ts">
import AppModal from '@/components/AppModal.vue'
import { createComponent } from '@vue/composition-api'

export default createComponent({
  name: 'ContactModal',
  components: {
    AppModal
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    dismiss: {
      type: Function
    }
  }
})
</script>

<style lang="scss">
@import '@/styles/page';
@import '@/styles/variables';

.contact-modal-container .app-modal {
  top: 25px;
  max-height: calc(100% - 50px);
  max-width: calc(100% - 20px);
  padding-top: 60px;

  .page {
    text-align: center;

    h3 {
      color: $primary-color;
      line-height: 1.5em;
    }
  }
}
</style>
