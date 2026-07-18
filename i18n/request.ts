import { getRequestConfig } from "next-intl/server";
import { routing } from "@/i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  const isSupportedLocale = (
    value: string | undefined,
  ): value is (typeof routing.locales)[number] =>
    !!value &&
    routing.locales.includes(value as (typeof routing.locales)[number]);

  if (!isSupportedLocale(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
