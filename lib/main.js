export const arrayToString = (arr = []) => (arr && arr.length > 0 ? `,${arr.join(',')},` : '')

export const stringToArray = (mongoLikeArrStr = '') => (
  mongoLikeArrStr ? mongoLikeArrStr.split(',').slice(1, -1) : []
)
