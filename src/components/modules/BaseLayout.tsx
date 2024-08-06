import ServerIntlProvider from '@/components/modules/ServerIntlProvider';
import getIntl from '@/app/intl';


const BaseLayout = ({ intl, children }: any) => {
  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      <main className='text-dark flex flex-col'>
        {children}
      </main>
    </ServerIntlProvider>
  )
}

export default BaseLayout