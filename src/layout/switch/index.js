// glob做本地存储 定义接口
const modules = import.meta.glob('./*.vue', { eager: true })

let switchLayoutList = []
for (const path in modules) {
  switchLayoutList.push(modules[path].default)
}

export default switchLayoutList
