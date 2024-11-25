// pages/index.js
import Head from 'next/head';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "게임 링크 포털 | 2인용 탁구게임 고강서",
    "description": "게임 링크 포털에서 다양한 게임을 만나보세요. 특히 '2인용 탁구게임 고강서'와 같은 인기 있는 게임도 지원합니다.",
    "url": "https://your-domain.com",
    "keywords": ["게임 링크 포털", "2인용 탁구게임", "고강서"],
  };

  return (
    <>
      <Head>
        {/* 페이지 제목 */}
        <title>게임 링크 포털 - 2인용 탁구게임 고강서</title>
        {/* 메타 태그 */}
        <meta
          name="description"
          content="게임 링크 포털에서 인기 있는 2인용 탁구게임 고강서를 즐기고 다양한 게임 링크를 확인하세요."
        />
        <meta
          name="keywords"
          content="게임 링크 포털, 2인용 탁구게임, 고강서, 멀티플레이어 게임, 탁구 게임"
        />
        <meta name="author" content="Your Name or Team" />
        {/* Open Graph 태그 */}
        <meta property="og:title" content="게임 링크 포털 - 2인용 탁구게임 고강서" />
        <meta
          property="og:description"
          content="게임 링크 포털에서 인기 있는 2인용 탁구게임 고강서를 확인하세요."
        />
        <meta property="og:image" content="https://your-domain.com/og-image.jpg" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta property="og:type" content="website" />
        {/* 트위터 카드 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="게임 링크 포털 - 2인용 탁구게임 고강서" />
        <meta
          name="twitter:description"
          content="게임 링크 포털에서 다양한 게임 링크와 함께 2인용 탁구게임 고강서를 즐겨보세요."
        />
        <meta name="twitter:image" content="https://your-domain.com/twitter-image.jpg" />
        {/* 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <main>
        <h1>게임 링크 포털</h1>
        <p>
          인기 있는 게임들을 모아놓은 포털입니다. 특히, <strong>2인용 탁구게임 고강서</strong>와 같은
          멀티플레이어 게임들을 즐겨보세요.
        </p>
        <h2>추천 게임</h2>
        <ul>
          <li>2인용 탁구게임 고강서</li>
          <li>기타 인기 게임들</li>
        </ul>
      </main>
    </>
  );
}
