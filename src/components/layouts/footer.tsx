import React from 'react';

const Footer: React.VFC = () => (
  <footer>
    <div
      style={{
        margin: '2.25rem 1rem 0',
      }}
    >
      <p>
        このサイトはGoogle Analyticsを使用しています。
        <a href="https://policies.google.com/technologies/partner-sites?hl=ja">詳しく見る</a>
      </p>
      <p>
        © 2021 Yuukin256 (<a href="https://twitter.com/Yuukin256">@Yuukin256</a>), Built with{' '}
        <a href="https://www.gatsbyjs.com">Gatsby</a>.
      </p>
    </div>
  </footer>
);

export default Footer;
