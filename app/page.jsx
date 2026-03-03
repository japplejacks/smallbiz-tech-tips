import { getSortedPosts } from '../lib/posts';
import AdSense from '../components/AdSense';

export default function Home() {
  const posts = getSortedPosts();

  return (
    <>
      <div className="hero">
        <h1>Small Biz Tech Tips</h1>
        <p>Practical IT guides and technology tips to help your small business work smarter.</p>
      </div>

      <AdSense slot="header-ad" />

      {posts.length === 0 ? (
        <p>New content coming soon! Check back for practical technology guides for small business.</p>
      ) : (
        <ul className="post-list">
          {posts.map(post => (
            <li key={post.slug} className="post-card">
              <h2><a href={`/posts/${post.slug}`}>{post.title}</a></h2>
              <span className="post-date">{post.date}</span>
              {post.keywords && (
                <div className="post-keywords">
                  {post.keywords.map(kw => (
                    <span key={kw} className="keyword">{kw}</span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      <AdSense slot="footer-ad" />
    </>
  );
}
