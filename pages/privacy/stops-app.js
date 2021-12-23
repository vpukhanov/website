import Head from 'next/head'

import CommonHead from '../../components/CommonHead'

export default function StopsAppPrivacyPolicy() {
  return (
    <div className='app-container'>
      <Head>
        <title>Stops App Privacy Policy | Vyacheslav Pukhanov</title>
        <meta
          name='description'
          content="Privacy Policy for the Stops: Yaroslavl's Transport app"
        />
        <CommonHead />
      </Head>
      <section className='privacy-en'>
        <h1 className='text-title'>Privacy Policy</h1>
        <p className='text-body location'>
          The "Stops: Yaroslavl's Transport" processes your location locally and
          on-device. We may collect anonymous information about your actions in
          the app, simply to know which features of the app are used the most,
          so we can focus on them during development.
        </p>
        <p className='text-body third-party'>
          The only information that is sent to the information providers{' '}
          <b>yartr.ru</b> and <b>ot76.ru</b>
          by the app is the stop currently selected in the application and the
          list of routes selected by you in the app. Whether they may use and
          store this data is subject to their own privacy policy.
        </p>
        <p className='text-body text-sublime'>
          <em>Last update: April 18, 2020</em>
        </p>
      </section>
      <hr />
      <section className='privacy-ru'>
        <h2 className='text-title'>Политика конфиденциальности</h2>
        <p className='text-body location'>
          Приложение "Остановки: транспорт Ярославля" обрабатывает ваше
          местоположение локально, на вашем устройстве. Мы можем собирать
          анонимную статистику о действиях, выполняемых вами в приложении, чтобы
          знать, какие функции приложения используются наиболее часто, и
          концентрировать силы на ух улучшении.
        </p>
        <p className='text-body third-party'>
          Поставщикам информациии <b>yartr.ru</b> и <b>ot76.ru</b> отправляются
          только данные о выбранной в настоящий момент остановке и список
          отслеживаемых вами на карте маршрутов. Как они могут использовать и
          хранить эти данные - предмет их собственной политики
          конфиденциальности.
        </p>
        <p className='text-body text-sublime'>
          <em>Последнее обновление: 18 апреля 2020</em>
        </p>
      </section>
    </div>
  )
}
