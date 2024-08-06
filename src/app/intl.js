'server-only';

import { createIntl } from '@formatjs/intl';

export default async function getIntl(locale, namespace) {
  return createIntl({
    locale: locale,
    messages: (await import(`@/lang/${locale}/${namespace}.json`)).default
  });
}