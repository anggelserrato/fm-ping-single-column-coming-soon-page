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
    if (!emailRegex.test(email)) {
      setError('Please provide a valid email address');
    } else {
      setError('');
      setEmail('');
      console.log('Email submitted:', email);
    }
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-[320px] flex-col items-center pt-[84px] pb-[34px]">
      <header className="mb-card-500 flex flex-col items-center">
        <img
          src={pingIcon}
          alt="Ping logo"
          className="mb-card-500 h-card-200 w-[54px]"
        />
        <h1 className="mb-card-100 text-[20px] leading-[125%] font-light text-card-gray-400">
          We are launching{' '}
          <span className="font-bold text-card-blue-950">soon!</span>
        </h1>
        <p className="text-[12px] leading-[125%] font-light">
          Subscribe and get notified
        </p>
      </header>

      <section className="h-[130px] w-[90%] justify-start">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex w-full flex-col items-center justify-center gap-card-100"
        >
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address..."
            className="h-card-500 w-full rounded-[28px] border border-card-blue-200 px-6 py-4 text-[12px] leading-[125%] placeholder:text-card-blue-200 focus:outline-card-blue-500"
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? 'email-error' : undefined}
          />
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          {error && (
            <p
              id="email-error"
              className="mb-card-200 text-[10px] leading-[125%] font-normal text-card-red-400 italic"
              aria-live="polite"
            >
              {error}
            </p>
          )}
          <button
            type="submit"
            className="h-card-500 w-full cursor-pointer rounded-[28px] bg-card-blue-500 py-3 text-[12px] leading-[125%] font-semibold text-white shadow-[0_5px_10px_2px_rgba(79,125,243,0.23)] transition-colors duration-200 hover:bg-card-blue-500/75"
          >
            Notify Me
          </button>
        </form>
      </section>

      <figure className="mt-auto">
        <img src={dashboardIllustration} alt="Dashboard illustration" />
      </figure>

      <footer className="mt-auto flex flex-col items-center">
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
        <p className="text-[12px] leading-[125%] font-light text-card-gray-400">
          &copy; Copyright Ping. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

export default App;
