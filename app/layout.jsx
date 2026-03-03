import './globals.css';

export const metadata = {
  title: 'Small Biz Tech Tips | Practical Technology Guides for Small Business',
  description: 'Practical IT guides, software reviews, and technology tips to help small businesses work smarter. By Apple Core Tech.',
  openGraph: {
    title: 'Small Biz Tech Tips',
    description: 'Practical technology guides for small business owners',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_ADSENSE_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body>
        <header>
          <nav>
            <a href="/" className="logo">Small Biz Tech Tips</a>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="https://applecoreatl.com" target="_blank" rel="noopener">Apple Core Tech</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Small Biz Tech Tips — A project by <a href="https://applecoreatl.com">Apple Core Tech</a></p>
          <p className="affiliate-disclosure">Some links on this site are affiliate links. We may earn a commission at no extra cost to you.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}><a href="/privacy">Privacy Policy</a> · <a href="/about">About</a></p>
        </footer>
      </body>
    </html>
  );
}
