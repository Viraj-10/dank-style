import { inject, flush } from '@dank-style/css-injector';
import type { OrderedSXResolved, StyledValueResolvedWithMeta } from './types';

export { flush };
export function injectInStyle(
  orderedSXResolved: OrderedSXResolved,
  _styleTagId: any = 'css-injected-boot-time',
  _globalStyleMap?: any
) {
  let toBeInjectedCssRules = '';

  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    toBeInjectedCssRules += styleResolved.meta.cssRuleset;
  });

  if (toBeInjectedCssRules) {
    inject(`@media screen {${toBeInjectedCssRules}}`, _styleTagId);
  }
}
