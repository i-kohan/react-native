export const createActionName = (baseName, ...names) =>
  `${baseName}` + names.map(a => `.${a}`).join('')
export const createActionNameCurried = baseName => (...names) =>
  createActionName(createActionName(baseName), ...names)
