/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...all]': RouteRecordInfo<'/[...all]', '/:all(.*)', { all: ParamValue<true> }, { all: ParamValue<false> }>,
    '/app': RouteRecordInfo<'/app', '/app', Record<never, never>, Record<never, never>>,
    '/app/': RouteRecordInfo<'/app/', '/app', Record<never, never>, Record<never, never>>,
    '/app/simbora/config/bancos': RouteRecordInfo<'/app/simbora/config/bancos', '/app/simbora/config/bancos', Record<never, never>, Record<never, never>>,
    '/app/simbora/config/convenios': RouteRecordInfo<'/app/simbora/config/convenios', '/app/simbora/config/convenios', Record<never, never>, Record<never, never>>,
    '/app/simbora/config/produtos': RouteRecordInfo<'/app/simbora/config/produtos', '/app/simbora/config/produtos', Record<never, never>, Record<never, never>>,
    '/app/simbora/config/subprodutos': RouteRecordInfo<'/app/simbora/config/subprodutos', '/app/simbora/config/subprodutos', Record<never, never>, Record<never, never>>,
    '/app/simbora/operacao/novaDigitacao': RouteRecordInfo<'/app/simbora/operacao/novaDigitacao', '/app/simbora/operacao/novaDigitacao', Record<never, never>, Record<never, never>>,
    '/auth': RouteRecordInfo<'/auth', '/auth', Record<never, never>, Record<never, never>>,
    '/auth/': RouteRecordInfo<'/auth/', '/auth', Record<never, never>, Record<never, never>>,
    '/auth/signup': RouteRecordInfo<'/auth/signup', '/auth/signup', Record<never, never>, Record<never, never>>,
  }
}