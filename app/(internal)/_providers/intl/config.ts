import { getRequestConfig } from "next-intl/server"
import { IntlErrorCode } from 'next-intl'

export const localePrefix = "as-needed"

export default getRequestConfig(async ({}) => {
  const locale = 'en' // todo get from user

  const messages = (await import(`./messages/${locale}.json`)).default

  return {
    locale,
    messages,
    onError: (error) => {
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        // setNestedKey(messages, error.id, error.id)
      } else {
        console.warn(error)
      }
    }
  }
})
