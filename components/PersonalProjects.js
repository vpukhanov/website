export default function PersonalProjects() {
  return (
    <section>
      <h2 className='text-subtitle'>Personal Projects</h2>
      <div>
        <p className='text-caption'>
          Binbox &nbsp;
          <span className='text-sublime'>for iOS & macOS</span>
        </p>
        <p className='text-body'>
          Binbox is an app that lets users make anonymous on-demand email
          inboxes with one tap of a button. The user can then use these inboxes
          as they wish, for example sign up for websites that they are not
          comfortable sharing their main email address with. The inboxes are
          iCloud synced, making them accessible on all of their iOS and macOS
          devices.
        </p>
        <p className='text-body'>Key technologies:</p>
        <ul className='text-body'>
          <li>Swift</li>
          <li>SwiftUI</li>
          <li>CoreData + Cloud Kit</li>
          <li>NodeJS</li>
          <li>Postfix + Dovecot</li>
        </ul>
      </div>
      <div>
        <p className='text-caption'>
          Mr. Pub &nbsp;
          <span className='text-sublime'>web app</span>
        </p>
        <p className='text-body'>
          Mister Pub is a work-in-progress platform for developers to
          collaborate on diffs and patches. It strives to streamline the
          collaboration process and reduce friction as much as possible, putting
          the focus on the actual task at hand itself.
        </p>
        <p className='text-body'>Key technologies:</p>
        <ul className='text-body'>
          <li>NextJS (React + SSR)</li>
          <li>
            Google Cloud Platform (Google Kubernetes Engine, Google Cloud
            Storage)
          </li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>Terraform</li>
        </ul>
      </div>
    </section>
  )
}
