import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "pt-BR", "es"];
export const defaultLocale = "pt-BR";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.includes(locale as any);

  return {
    messages: (
      await import(`../messages/${isValidLocale ? locale : defaultLocale}.json`)
    ).default,
  };
});
