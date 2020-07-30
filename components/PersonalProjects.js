export default function PersonalProjects() {
  return (
    <section>
      <h2 className="text-subtitle">Personal Projects</h2>
      <div>
        <p className="text-caption">
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
          Binbox is an app that lets users make anonymous on-demand email
          inboxes with one tap of a button. The user can then use these inboxes
          as they wish, for example sign up for websites that they are not
          comfortable sharing their main email address with. The inboxes are
          iCloud synced, making them accessible on all of their iOS and macOS
          devices.
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
        <p className="text-caption">
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
          Stops app displays the schedule of Yaroslavl’s public transport at the
          stop that is closest to the user. It’s fully automated, removing the
          need to manually dig through a long list of stops. Transport routes
          can be added to favorites to make their schedule visible at a glance,
          as well as to sync them to the Apple Watch companion app. The users
          also get access to the live transport location map with predicted
          arrival times.
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
