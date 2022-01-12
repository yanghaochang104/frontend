<template>
  <div class="confirm-factory-page">
    <v-container style="max-width: 630px; position: relative;" class="pt-3 pt-md-12">
      <h2 class="mt-2 mb-2 secondary--text">Page 3 填寫「目擊黑熊」問券</h2>
      <div v-if="formState.type === '2-1'" class="mb-3">
        <h2>個體資訊</h2>
        <v-row>
          <v-col cols="6">
            <v-subheader>目擊個體數</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-text-field
              type="number"
              suffix="隻"
              v-model="formState.bearNumber"
            ></v-text-field>
          </v-col>
        </v-row>
        <div>
          <v-row>
            <v-col cols="6">
            </v-col>
            <v-col cols="6">
              <v-radio-group v-model="formState.bearType" row>
                <v-radio
                  label="成熊"
                  value="1"
                ></v-radio>
                <v-radio
                  label="幼熊"
                  value="2"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-subheader>體型</v-subheader>
            </v-col>
            <v-col cols="6">
              <v-radio-group v-model="formState.bearSize" row>
                <v-radio value="1">
                  <template v-slot:label>
                    <v-text-field
                      v-model="formState.bearSizeNumber"
                      prefix="頭尾體長約"
                      suffix="公分"
                    ></v-text-field>
                  </template>
                </v-radio>
                <v-radio
                  label="不清楚"
                  value="2"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-subheader>性別</v-subheader>
            </v-col>
            <v-col cols="6">
              <v-radio-group v-model="formState.bearSex" row>
                <v-radio
                  v-for="(name, index) in ['公', '母', '不清楚']"
                  :key="index"
                  :label="name"
                  :value="index"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-subheader>其他特徵</v-subheader>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="請填入文字"
                v-model="formState.bearFeature"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <h2>黑熊行為與反應</h2>
        <v-row>
          <v-col cols="6">
            <v-subheader>1. 目擊當下，總共幾人同行？</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-text-field
              type="number"
              suffix="人"
              v-model="formState.humanNumber"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-subheader>2. 目擊當下，您正在做什麼？</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-radio-group v-model="formState.humanBehavior">
              <v-radio
                v-for="(name, index) in ['行進', '休息', '開車', '煮食/用餐']"
                :key="index"
                :label="name"
                :value="index"
              ></v-radio>
              <v-radio :value="4">
                <template v-slot:label>
                  <v-text-field
                    label="工作：請填入文字"
                    v-model="formState.humanBehaviorText"
                    v-if="formState.humanBehavior === 4"
                  ></v-text-field>
                  <span v-if="formState.humanBehavior !== 4">工作</span>
                </template>
              </v-radio>
              <v-radio :value="5">
                <template v-slot:label>
                  <v-text-field
                    label="其他：請填入文字"
                    v-model="formState.humanBehaviorText"
                    v-if="formState.humanBehavior === 5"
                  ></v-text-field>
                  <span v-if="formState.humanBehavior !== 5">其它</span>
                </template>
              </v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-subheader>3. 目擊當下，黑熊和您之間的大約距離？</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-radio-group v-model="formState.distance">
              <v-radio
                v-for="(name, index) in ['小於20', '20-50', '50-100', '大於100公尺']"
                :key="index"
                :label="name"
                :value="index"
              ></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-subheader>4. 目擊時黑熊正在做什麼？</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-radio-group v-model="formState.bearBehavior">
              <v-radio
                v-for="(name, index) in ['慢步', '奔跑', '爬樹', '休息', '覓食']"
                :key="index"
                :label="name"
                :value="index"
              ></v-radio>
              <v-radio :value="5">
                <template v-slot:label>
                  <v-text-field
                    label="其他：請填入文字"
                    v-model="formState.bearBehaviorText"
                    v-if="formState.bearBehavior === 5"
                  ></v-text-field>
                  <span v-if="formState.bearBehavior !== 5">其他</span>
                </template>
              </v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row v-if="formState.bearBehavior === 4">
          <v-col cols="6">
            <v-subheader>4-1. 承4，黑熊在吃什麼?？</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-radio-group v-model="formState.food">
              <v-radio
                v-for="(name, index) in ['不清楚', '果實', '莖葉', '昆蟲', '動物', '農作物', '家禽/畜', '蜂蜜', '垃圾/廚餘', '動物飼料', '人類食物', '其他']"
                :key="index"
                :label="name"
                :value="index"
              >
                <template v-slot:label>
                  <v-text-field
                    :label="`請填入${name}名稱`"
                    v-model="formState.foodText"
                    v-if="![0, 7, 8].includes(formState.food) && formState.food === index"
                  ></v-text-field>
                  <span v-if="[0, 7, 8].includes(formState.food) || formState.food !== index">{{name}}</span>
                </template>
              </v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-subheader>5. 黑熊何時注意到人員存在？</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-radio-group v-model="formState.bearNotice">
              <v-radio
                v-for="(name, index) in ['黑熊一直未發現我', '目擊前黑熊就發現我了']"
                :key="index"
                :label="name"
                :value="index"
              ></v-radio>
              <v-radio :value="2">
                <template v-slot:label>
                  <v-text-field
                    label="目擊後約幾分鐘黑熊發現我的存在"
                    v-model="formState.bearNoticeMinutes"
                    type="number"
                    suffix="分鐘"
                  ></v-text-field>
                </template>
              </v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-subheader>6. 您目擊黑熊後，做出什麼反應？</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-radio-group v-model="formState.humanReaction">
              <v-radio
                v-for="(name, index) in ['靜止不動', '緩慢離開', '快速逃跑', '大聲喊叫或發出聲響', '爬樹', '趴在地上裝死']"
                :key="index"
                :label="name"
                :value="index"
              ></v-radio>
              <v-radio :value="6">
                <template v-slot:label>
                  <v-text-field
                    label="其他：請填入文字"
                    v-model="formState.humanReactionText"
                    v-if="formState.humanReaction === 6"
                  ></v-text-field>
                  <span v-if="formState.humanReaction !== 6">其他</span>
                </template>
              </v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-subheader>7. 黑熊發現您後，做出什麼反應？（可複選）</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-checkbox
              v-model="formState.bearReaction"
              v-for="(name, index) in ['繼續原先的活動', '朝人觀望', '戒備', '緩慢走開', '快速逃離', '吼叫威嚇', '主動接近人']"
              :key="index"
              :label="name"
              :value="index"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-subheader>8. 是否有人因為黑熊而受傷？</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-radio-group v-model="formState.humanHurt">
              <v-radio
                  label="是"
                  value="1"
              ></v-radio>
              <v-radio
                  label="否"
                  value="0"
              ></v-radio>
              <v-text-field
                  label="說明"
                  v-model="formState.humanHurtExplanation"
              ></v-text-field>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-subheader>8. 您是否希望以後再看到野外的台灣黑熊？</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-radio-group v-model="formState.ohShownAgain">
              <v-radio
                  label="是"
                  value="1"
              ></v-radio>
              <v-radio
                  label="否"
                  value="0"
              ></v-radio>
              <v-text-field
                  label="為什麼"
                  v-model="formState.ohShownAgainReason"
              ></v-text-field>
            </v-radio-group>
          </v-col>
        </v-row>
      </div>
      <div v-if="formState.type === '2-2'" class="mb-3">
        <h2>發現痕跡</h2>
        <h2>問券B</h2>
      </div>
      <div v-if="formState.type === '2-3'" class="mb-3">
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

    const reportTypeItems: Array<{ text: string, value?: string }> = [
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
