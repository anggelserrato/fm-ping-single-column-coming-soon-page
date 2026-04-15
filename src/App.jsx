import pingIcon from './assets/logo.svg';
import dashboardIllustration from './assets/illustration-dashboard.png';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';
import InstagramIcon from './icons/InstagramIcon';

function App() {
  const socialLinks = [
    {
      icon: <FacebookIcon />,
      href: 'https://www.facebook.com',
      label: 'Facebook',
    },
    {
      icon: <TwitterIcon />,
      href: 'https://www.twitter.com',
      label: 'Twitter',
    },
    {
      icon: <InstagramIcon />,
      href: 'https://www.instagram.com',
      label: 'Instagram',
    },
  ];

  return (
    <main>
      <section>
        <header>
          <figure>
            <img src={pingIcon} alt="Ping logo" />
          </figure>
          <h1>
            We are launching <span className="font-semibold">soon!</span>
          </h1>
          <p>Subscribe and get notified</p>
          <form>
            <input type="email" placeholder="Your email address..." />
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <button type="submit">Notify Me</button>
          </form>
        </header>

        <footer>
          <figure>
            <img
              src={dashboardIllustration}
              alt="Dashboard illustration"
              className="w-[640px]"
            />
          </figure>
          <div>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${link.label} page`}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p>&copy; Copyright Ping. All rights reserved.</p>
        </footer>
      </section>
    </main>
  );
}

export default App;
