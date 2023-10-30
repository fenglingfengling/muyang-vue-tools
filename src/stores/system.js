import { getConfig } from '@/config/index'

export const useSystemStore = defineStore(
    'system',
    ()=>{
        // 当前可切换布局 浅引入 作用于一层layout
        const currentSwitchlayout = shallowRef(null)
        // 可切换布局列表
        const switchLayoutList = shallowRef([]) 
        // 初始化可切换布局方法
        const initSwitchLayout = list=>{
            if(list && list.length >0){
                switchLayoutList.value = [...list]
                if(!currentSwitchlayout.value){// 初始化一个layout渲染值
                    currentSwitchlayout.value = switchLayoutList.value[0]
                } else {
                  currentSwitchlayout.value = switchLayoutList.value.find(
                    item => item.name === currentSwitchlayout.value.name
                  )
                }
            }
        }
        return {
            currentSwitchlayout,
            switchLayoutList,
            initSwitchLayout
        }
    },
    {
        persist:{
            key: `${getConfig('appCode')}-pinia-system`,
            enabled: true,
            storage: window.localStorage,
            paths: ['currentSwitchlayout.name']
        }
    }

)