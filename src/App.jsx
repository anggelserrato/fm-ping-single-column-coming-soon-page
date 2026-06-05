import pingIcon from './assets/logo.svg';
import dashboardIllustration from './assets/illustration-dashboard.png';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';
import InstagramIcon from './icons/InstagramIcon';
import { useState } from 'react';

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

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e.preventDefault();
    if (!email) {
      setError('Whoops! It looks like you forgot to add your email');
    } else if (!emailRegex.test(email)) {
      setError('Please provide a valid email address');
    } else {
      setError('');
      setEmail('');
      console.log('Email submitted:', email);
    }
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-[320px] flex-col items-center px-4 pt-[84px] pb-[34px] md:max-w-[712px]">
      <header className="mb-card-500 flex flex-col items-center">
        <img
          src={pingIcon}
          alt="Ping logo"
          className="mb-card-500 h-card-200 w-[54px] md:mb-card-600 md:h-card-300 md:w-[86px]"
        />
        <h1 className="mb-card-100 text-preset-2-light text-card-gray-400 md:mb-card-200">
          We are launching{' '}
          <span className="font-bold text-card-blue-950">soon!</span>
        </h1>
        <p className="text-preset-4-light text-card-blue-950">
          Subscribe and get notified
        </p>
      </header>

      <section className="h-[130px] justify-start">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex w-full flex-col items-center justify-center gap-card-100 md:flex-row md:gap-card-200"
        >
          <div className="relative flex w-full flex-col items-center md:items-start">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address..."
              className={`h-card-500 w-full rounded-[28px] border px-6 py-4 text-preset-4-light text-card-blue-950 placeholder:text-card-blue-200 focus:outline-card-blue-500 md:h-[56px] md:text-[1rem] ${error ? 'border-card-red-400' : 'border-card-blue-200'}`}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'email-error' : undefined}
            />
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            {error && (
              <p
                id="email-error"
                className="mt-card-100 mb-card-200 text-center text-preset-5 text-card-red-400 md:absolute md:top-full md:mt-2 md:mb-0 md:ml-6 md:text-left md:text-[0.75rem]"
                aria-live="polite"
              >
                {error}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="h-card-500 w-full cursor-pointer rounded-[28px] bg-card-blue-500 py-3 text-preset-4-semibold text-white shadow-[0_5px_10px_2px_rgba(79,125,243,0.23)] transition-colors duration-200 hover:bg-card-blue-500/75 md:h-[56px] md:w-[200px]"
          >
            Notify Me
          </button>
        </form>
      </section>

      <figure className="mt-auto md:w-[90%]">
        <img src={dashboardIllustration} alt="Dashboard illustration" />
      </figure>

      <footer className="mt-auto flex flex-col items-center md:mt-[72px]">
        <ul className="mb-card-300 flex flex-row items-center gap-card-200">
          {socialLinks.map((link) => (
            <li>
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${link.label} page`}
                className="flex h-[31px] w-[31.224px] items-center justify-center rounded-full border border-card-blue-200 text-card-blue-500 transition-colors duration-200 outline-none hover:border-card-blue-500 hover:bg-card-blue-500 hover:text-white focus-visible:ring-2 focus-visible:ring-card-blue-500 focus-visible:ring-offset-2"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-preset-4-light text-card-gray-400 md:text-[0.75rem]">
          &copy; Copyright Ping. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

export default App;
