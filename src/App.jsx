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
    <main className="mx-auto flex min-h-screen w-[319.94px] flex-col items-center pt-[84.96px] pb-[34.86px]">
      <header className="flex flex-col items-center">
        <figure className="mb-card-500">
          <img
            src={pingIcon}
            alt="Ping logo"
            className="h-[15.24px] w-[53.58px]"
          />
        </figure>
        <h1 className="mb-card-100 text-[20px] leading-[125%] font-light text-card-gray-400">
          We are launching{' '}
          <span className="text-[20px] leading-[125%] font-bold text-card-blue-950">
            soon!
          </span>
        </h1>
        <p className="mb-card-500 text-[12px] leading-[125%] font-light text-card-blue-950">
          Subscribe and get notified
        </p>
        <form className="flex flex-col items-center justify-center gap-card-100">
          <input
            type="email"
            id="email"
            placeholder="Your email address..."
            className="w-full rounded-full border border-card-blue-200 px-8 py-3 text-[12px] placeholder:text-card-blue-200 focus:outline-card-blue-500 md:text-[14px]"
          />
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <button
            type="submit"
            className="hover:bg-opacity-80 w-full rounded-full bg-card-blue-500 py-3 text-[12px] font-semibold text-white shadow-[0_5px_10px_2px_rgba(79,125,243,0.23)] transition-colors md:w-auto md:text-[14px]"
          >
            Notify Me
          </button>
        </form>
      </header>

      <figure className="mt-auto">
        <img
          src={dashboardIllustration}
          alt="Dashboard illustration"
          className="w-[640px]"
        />
      </figure>

      <footer className="mt-auto flex flex-col items-center">
        <div className="mb-card-300 flex flex-row justify-center">
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
        <p className="text-[12px] leading-[125%] font-light text-card-gray-400">
          &copy; Copyright Ping. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

export default App;
