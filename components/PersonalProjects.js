export default function PersonalProjects() {
  return (
    <section>
      <h2 className="text-subtitle">Personal Projects</h2>
      <div>
        <p className="text-subsubtitle">
          <a
            href="https://apps.apple.com/us/app/binbox-disposable-email/id1507375086"
            target="_blank"
            rel="noopener"
          >
            Binbox
          </a>
          &nbsp;
          <span className="text-sublime">for iOS & macOS</span>
        </p>
        <p className="text-body">
          Binbox is an app that lets you make anonymous on-demand email inboxes
          with one tap of a button. The user can then use these inboxes for
          example to sign up for websites that they are not comfortable sharing
          their main email address with. The inboxes are iCloud synced, making
          them accessible on all of your iOS devices.
        </p>
        <p className="text-body">Key technologies:</p>
        <ul className="text-body">
          <li>Swift</li>
          <li>SwiftUI</li>
          <li>CoreData + Cloud Kit</li>
          <li>NodeJS</li>
          <li>Postfix + Dovecot</li>
        </ul>
      </div>
      <div>
        <p className="text-subsubtitle">
          <a
            href="https://apps.apple.com/us/app/stops-yaroslavls-transport/id1483241565"
            target="_blank"
            rel="noopener"
          >
            Stops: Yaroslavl's Transport
          </a>
          &nbsp;
          <span className="text-sublime">for iOS</span>
        </p>
        <p className="text-body">
          Stops app shows you the schedule of Yaroslavl’s public transport at
          the stop that is closest to you. It’s automatic — no need to manually
          dig through a long list of stops. Add a transport route to your
          favorites to see its schedule at a glance, as well as to sync it to
          the Apple Watch companion app, or view the live transport location map
          with predicted arrival times.
        </p>
        <p className="text-body">Key technologies:</p>
        <ul className="text-body">
          <li>Swift</li>
          <li>UIKit</li>
        </ul>
      </div>
    </section>
  );
}
