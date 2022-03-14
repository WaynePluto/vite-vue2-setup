/** 项目文件名 */
let _project_code = ''
/** 路由基路径 */
let _router_base = ''

/** 初始化项目文件名与路由基路径 */
const initCodeAndBase = () => {
  const path = location.pathname
  _router_base = path.substring(0, path.lastIndexOf('/'))
  _project_code = _router_base.substring(_router_base.lastIndexOf('/') + 1)
  _router_base += '/'
}

const getProjectCode = () => _project_code
const getRouterBase = () => _router_base

export { initCodeAndBase, getProjectCode, getRouterBase }
