import { FactoryData, REPORT_TYPE, FactoryType } from '../types'

const factoryTypeMap: { [key: string]: string } = REPORT_TYPE.reduce((acc, obj) => {
  return {
    ...acc,
    [obj.value]: obj.text
  }
}, {})

export const getFactoryTypeText = (factory: FactoryData) => {
  if (factory.type) {
    return factoryTypeMap[factory.type] as FactoryType
  } else {
    return null
  }
}
