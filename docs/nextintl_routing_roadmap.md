# Next-Intl Routing Standardization Roadmap

## Objective
Fully standardize the codebase to use next-intl with routing (locale in URL), clean up all legacy/non-routing i18n patterns, and implement a language switcher using locale-aware links.

---

## 1. Audit & Remove Legacy Patterns
- [x] Search for and remove any usage of `NextIntlProvider` in `src/pages/_app.tsx` or anywhere outside `[locale]/layout.tsx`.
- [x] Remove any manual locale/message loading in `_app.tsx` or custom providers.
- [x] Delete any old i18n utilities, context providers, or message imports not using next-intl's new API.
- [x] Ensure no usage of `router.locale` or classic i18n state/cookie logic.
- [ ] Remove `src/locales/` directory and any unused translation files after migration of all necessary keys.

---

## 2. App Router Structure
- [x] Ensure all locale-aware pages/components live under `src/app/[locale]/`.
- [x] Main layout should be in `src/app/[locale]/layout.tsx` and wrap children with `NextIntlClientProvider` using `useMessages()`.
- [x] All navigation and routing should use the `[locale]` segment.

---

## 3. Consistent useTranslations Usage
- [x] Refactor all components to use `useTranslations('Namespace')` where `'Namespace'` matches a top-level key in your messages JSON.
- [x] Replace all hardcoded user-facing text with translation keys.
- [x] Ensure all translation keys exist in both `en.json` and `es.json`.

---

## 4. Message Files Organization
- [ ] Store all translations in `src/messages/{locale}.json`.
- [ ] Each file should have the same top-level keys (namespaces) and keys within them.

---

## 5. i18n Config Placement
- [ ] Ensure request config is at `src/i18n/request.ts` and uses the default locale fallback before importing messages.
- [ ] next.config.ts should use:
  ```ts
  import createNextIntlPlugin from 'next-intl/plugin';
  const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
  ```

---

## 6. Middleware
- [ ] `src/middleware.ts` should use `createMiddleware` from next-intl and set up supported locales and defaultLocale.

---

## 7. Navigation & Language Switcher
- [ ] Refactor the language switcher to use locale-aware `<Link>` components from `next-intl/navigation`.
- [ ] Remove any `<select>` or state-based language switchers.
- [ ] Ensure switching language updates the URL and reloads the correct locale context.
- [ ] Use `useLocale`, `usePathname`, and `useRouter` from next-intl for navigation.

---

## 8. Testing & Validation
- [ ] Test both `/es` and `/en` routes for correct translations and navigation.
- [ ] Switch languages using the new language switcher and verify all text updates.
- [ ] Check for missing message errors in the console.
- [ ] Run accessibility and SEO checks to ensure locale URLs are indexed and navigable.
- [ ] Make sure all code matches work done on previous steps

---

## 9. Documentation
- [ ] Document the new i18n approach in the project README for future contributors.
- [ ] Add usage examples for `useTranslations`, navigation, and adding new languages.

---

## 10. (Optional) Automation
- [ ] Add a script or CI check to ensure all translation keys exist in all locales.
