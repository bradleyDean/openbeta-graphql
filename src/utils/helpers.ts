import { MUUID } from 'uuid-mongodb'

export const muuidToString = (m: MUUID): string => m.toUUID().toString()

/**
 * Detects if string is in uuid-mongodb's "canonical" base64 format.
 * @param s input string
 * @returns
 */
export const isBase64Str = (s: string): boolean => {
  const bc = /[A-Za-z0-9+/=]/.test(s)
  const lc = /.*=$/.test(s) // make sure it ends with '='
  return bc && lc
}

/**
 * Detects if string is in uuid-mongodb's "relaxed" hex format.
 * @param s input string
 * @returns
 */
export const isMuuidHexStr = (s: string): boolean => {
  const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
  return regex.test(s)
}
