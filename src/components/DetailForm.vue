<template>
  <div class="confirm-factory-page">
    <v-container style="max-width: 630px; position: relative;" class="pt-3 pt-md-12">
      <h2 class="mt-2 mb-2 secondary--text">Page 3 填寫問券 </h2>
      <div v-if="formState.reportType === 1" class="mb-3">
        <h2>目擊黑熊</h2>
        <h2>問券A</h2>
      </div>
      <div v-if="formState.reportType === 2" class="mb-3">
        <h2>發現痕跡</h2>
        <h2>問券B</h2>
      </div>
      <div v-if="formState.reportType === 3" class="mb-3">
        <h2>其他</h2>
        <h2>問券C</h2>
      </div>
      <!-- <h3 class="mt-5 mb-2 primary--text">聯絡人暱稱</h3>

      <p>{{ formState.nickname || '未填寫'  }}</p>

      <h3 class="mt-5 mb-2 primary--text">聯絡方式 (email或電話)</h3>

      <p>{{ formState.contact || '未填寫' }}</p>

      <hr>

      <h2 class="mt-5 secondary--text mb-5">其他工廠資訊（非必填）</h2>

      <p>提供明確的工廠資訊能夠幫助我們更快速的填寫公文。</p>

      <h3 class="mt-5 mb-2 primary--text">工廠描述</h3>

      <v-textarea outlined solo v-model="formState.others" placeholder="例：常常散發異味" />

      <h3 class="mt-5 mb-2 primary--text">工廠外部文字</h3>

      <v-text-field outlined v-model="formState.name" placeholder="例：小明化工廠" color="primary" /> -->
      <div class="bottom-button-container w-100 d-flex justify-center align-items-center px-xs-3 pb-md-9">
        <v-btn x-large rounded @click="submit" style="width: 100%; max-width: 345px;" color="primary">
          下一步
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { createComponent, inject, ref } from '@vue/composition-api'

import { MainMapControllerSymbol } from '../symbols'
import { MapFactoryController } from '../lib/map'
import { useAppState } from '../lib/appState'
import { REPORT_TYPE } from '../types'

import Minimap from './Minimap.vue'

export default createComponent({
  name: 'ConfirmFactory',
  components: {
    Minimap
  },
  props: {
    formState: {
      type: Object,
      default: {}
    },
    previewImages: {
      type: Array,
      default: []
    },
    submit: {
      type: Function
    }
  },
  setup () {
    const mapController = inject(MainMapControllerSymbol, ref<MapFactoryController>())
    const [appState, { pageTransition }] = useAppState()

    const initialFactories = mapController.value?.factories
    const initialLocation = mapController.value?.mapInstance.map.getView().getCenter()

    const reportTypeItems: Array<{ text: string, value?: number }> = [
      ...REPORT_TYPE
    ]

    return {
      appState,
      initialFactories,
      initialLocation,
      gotoStepOne () {
        if (mapController.value) {
          pageTransition.gotoCreateStep(0)
          mapController.value.mapInstance.setLUILayerVisible(true)
        }
      },
      gotoStepTwo () {
        pageTransition.gotoCreateStep(1)
      },
      reportTypeItems
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/components/preview-images.scss';

.confirm-factory-page {
  @import '@/styles/typography.scss';

  background-color: white;
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;

  padding-bottom: 50px;
  overflow-y: auto;
  overflow-x: hidden;

  padding-bottom: 72px;

  h2 {
    font-size: 24px;
  }
}

.bottom-button-container {
  background: white;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 10px 15px;
}

hr {
  color: #EAF3BF;
  border-color: #EAF3BF;
  background-color: #EAF3BF;
  height: 1px;
  border-width: inherit;
}

.minimap-container {
  &.desktop {
    max-width: 430px;
  }
}

.minimap-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
