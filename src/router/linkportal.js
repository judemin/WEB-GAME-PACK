import React from 'react';

const LinkPortal = () => {
  const links = [
    { href: "https://poki.com/kr?msockid=1342de1fe3126e612710d19be2816fa5#utm_source=redirect-en-ko", name: "포키게임" },
    { href: "https://ko.y8.com/", name: "y8게임" },
    { href: "https://www.freegame.gg/ko", name: "프리게임" },
    { href: "https://www.crazygames.co.kr/", name: "크레이지게임1" },
    { href: "https://crazygames-poki.com/ko/", name: "크레이지게임2" },
    { href: "https://lagged.com/kr/c/popular", name: "래그드게임" },
    { href: "https://kr.game-game.com/", name: "게임게임" },
    { href: "https://www.addictinggames.com/", name: "어딕팅게임" },
    { href: "https://vidkidz.tistory.com/", name: "비디오키즈게임" },
    { href: "https://www.bestflashgames.com/", name: "베스트플래시게임" },
    { href: "https://ko.freeonlinegames.com/", name: "fog게임" },
    { href: "https://flasharch.com/archive/best", name: "플래시아카이브게임" },
    { href: "https://www.newgrounds.com/games", name: "뉴그라운드게임" },
    { href: "https://armorgames.com/", name: "아머게임" },
    { href: "https://www.kongregate.com/", name: "콩그리게이트게임" },
    { href: "https://www.flashgames247.com/", name: "플래시247게임" },
    { href: "https://www.freewebarcade.com/", name: "프리웹아케이드게임" },
    { href: "https://www.bgames.com/", name: "bg게임" }
  ];

  const styles = {
    container: {
        margin: '0',
        backgroundColor: '#1a1a2e',
        color: '#e94560',
        padding: '20px',
        minHeight: '100vh', // 최소 높이를 뷰포트 높이의 100%로 설정
        width: '100%',
        boxSizing: 'border-box', // padding이 전체 크기에 포함되도록 설정
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    heading: {
      margin: '5px 0',
      textAlign: 'center',
      color: '#AEA1EA',
    },
    list: {
      margin: '5px 0',
      padding: 0,
      listStyle: 'none',
    },
    listItem: {
      margin: '5px 0',
    },
    link: {
      margin: '5px 0',
      display: 'inline-block',
      color: '#AEA1EA', // 네온 블루 계열의 링크 색상
      textDecoration: 'none', // 밑줄 제거
      transition: 'color 0.3s ease', // 부드러운 색상 변화를 위한 트랜지션
      ':hover': {
        color: '#e94560', // 호버 시 네온 핑크 계열로 색상 변경
      },
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>게임 링크 포털</h1>
      <ul style={styles.list}>
        {links.map((link, index) => (
          <li key={index} style={styles.listItem}>
            <a 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.link}
            >
              • {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkPortal;