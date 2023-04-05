import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  //<link rel='icon' href='/favicon.ico' /> line 10
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Павловния Етиштириш',
  keywords: 'Павловния хакида',
  description: 'Ўзбекистонда Павловния Етиштириш, Павловния Хакида Умумий Маьлумотлар',
}

export default Meta