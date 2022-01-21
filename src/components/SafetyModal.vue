<template>
  <v-dialog v-model="safetyModalState" v-bind="$attrs" max-width="350">
    <div class="safety-modal">
      <v-carousel progress-color='#914109' light hide-delimiter-background :progress="false">
        <v-card>
          <v-carousel-item class="page pa-3">
            <h1 class="mt-3 pb-1 mb-4">安全須知</h1>
            <p>
              遇到黑熊怎麼辦？
            </p>
          </v-carousel-item>
          <v-carousel-item class="page pa-3">
            <img src="/images/safety_notice/bear-1.png" alt="">
            <h2>
              遠遠看到黑熊
            </h2>
            <p>
              冷靜，逐漸增加與熊之間的距離，繞道離開，千萬不要為了拍照靠近黑熊。
            </p>
          </v-carousel-item>
          <v-carousel-item class="page pa-3">
            <img src="/images/safety_notice/bear-2.png" alt="">
            <h2>近距離遇到黑熊…</h2>
            <p>
              原地不動，冷靜地對熊說話並表示自己沒有威脅性，評估地勢，面對熊後退，逐漸增加與熊之間的距離。
            </p>
          </v-carousel-item>
          <v-carousel-item class="page pa-3">
            <img src="/images/safety_notice/3.png" alt="">
            <h2>黑熊朝人接近</h2>
            <p>面對熊，緩緩後退離開現場</p>
          </v-carousel-item>
          <v-carousel-item class="page pa-3">
            <img src="/images/safety_notice/bear-4.png" alt="">
            <h2>避免遇到熊</h2>
            <p>在山區行走：大聲說話、攜帶熊鈴，認識熊跡，發現熊跡時，繞道避開。在營地：落實無痕山林，垃圾廚餘密封並帶下山。</p>
          </v-carousel-item>
          <v-carousel-item class="page pa-3">
            <img src="/images/safety_notice/5.png" alt="">
            <h2>避免人熊衝突？</h2>
            <p>與林地的邊緣保持一段空曠地，果園將落果腐爛果撿起。農舍或畜舍用嚇阻動物用的電網圍起來。</p>
          </v-carousel-item>
        </v-card>
      </v-carousel>
    </div>
  </v-dialog>
</template>

<script lang="ts">
import { createComponent, computed } from '@vue/composition-api'

export default createComponent({
  name: 'SafetyModal',
  props: {
    value: {
      required: true,
      type: Boolean
    }
  },
  setup (props, context) {
    const safetyModalState = computed({
      get: () => props.value,
      set: (value) => context.emit('input', value)
    })

    return {
      safetyModalState
    }
  }
})
</script>

<style lang="scss">
@import '@/styles/page';
@import '@/styles/variables';

.safety-modal {
  .page {
    overflow: hidden;

    img {
      max-height: 45vh;

      display: block;
      margin: 0 auto;
    }

    h2 {
      font-size: 36px;
      color: $primary-color;
      border: none;
      margin-bottom: -5px;
    }
  }
}
</style>
G
