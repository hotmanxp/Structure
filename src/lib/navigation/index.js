export const initPath = path => {
  return path[0] === '/' ? path : '/' + path
}

export const makeUrl = (path, params) => {
  if (!params) return path
  return Object.entries(params)
    .reduce((resultPath, [key, value]) => {
      const paramReg = new RegExp(`:${key}\\??`)
      return resultPath.replace(paramReg, `${value}`)
    }, initPath(path))
    .replace(/\/:[\w]*\??/g, '')
}
