function generateSVG(name, langName, score, userRank, grade){
  //티어별로 나오는 이미지를 맵핑
  const tierMap = {
    YELLOW: require('./selTier/tierYellow').TierYellow, //6티어
    GREEN: require('./selTier/tierGreen').TierGreen, //5티어
    BLUE : require('./selTier/tierBlue').TierBlue, //4티어
    RED: require('./selTier/tierRed').TierRed, //3티어
    BLACK: require('./selTier/tierBlack').TierBlack, //2티어
    PURPLE: require('./selTier/tierPurple').TierPurple, //1티어
  };
  
/**
 * 티어별 이미지 표시 코드
 */
  
  const tierComponent = tierMap[grade];
  
  if (!tierComponent) {
    throw new Error(`Unknown color: ${grade}`);
  }

  return`
<svg id="_main_2" data-name="main 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 182.89 190.34" width="184" height="191">
<defs>
  <style>
    @font-face {
      font-family: 'Pretendard';
      src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff2') format('woff2');
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: 'Pretendard';
      src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff2') format('woff2');
      font-weight: 600;
      font-style: normal;
    }
    @font-face {
      font-family: 'Pretendard';
      src:  url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff2') format('woff2');
      font-weight: 700;
      font-style: normal;
    }
    .cls-1 {
      font-family: Pretendard-SemiBold, Pretendard;
      font-weight: 600;
    }

    .cls-1, .cls-2 {
      fill: #1368e8;
    }

    .cls-1, .cls-3 {
      font-size: 8px;
    }

    .cls-4 {
      fill: #191919;
    }

    .cls-3 {
      fill: #ddd;
    }

    .cls-3, .cls-5 {
      font-family: Pretendard-Regular, Pretendard;
    }

    .cls-6 {
      stroke: #ddd;
      stroke-miterlimit: 10;
    }

    .cls-6, .cls-7 {
      fill: #fff;
    }

    .cls-8 {
      opacity: .4;
    }

    .cls-7 {
      font-family: Pretendard-Bold, Pretendard;
      font-size: 14px;
      font-weight: 700;
    }

    .cls-5 {
      fill: #222;
      font-size: 12px;
    }
  </style>
</defs>
<g id="_layer_1-2" data-name="layer 1">
  <g>
    <g>
      <g id="bg-2">
        <rect class="cls-6" x="29.05" y="7.84" width="146" height="146" rx="14" ry="14" transform="translate(11.68 -12.88) rotate(7.66)"/>
      </g>
      <g id="storke">
        <g>
          <path class="cls-2" d="M39.69,30.58l2.07-15.36c.76-5.68,5.66-9.97,11.38-9.97,.51,0,1.03,.04,1.55,.1l112.98,15.19c3.04,.41,5.75,1.98,7.61,4.42s2.66,5.46,2.25,8.51l-2.07,15.36L39.69,30.58Z"/>
          <path class="cls-2" d="M53.14,5.75h0c.49,0,.99,.03,1.48,.1l112.98,15.19c6.01,.81,10.24,6.36,9.44,12.37l-2,14.87L40.25,30.15l2-14.87c.73-5.44,5.41-9.54,10.89-9.54m0-1c-5.92,0-11.07,4.38-11.88,10.4l-2.13,15.86,136.77,18.39,2.13-15.86c.88-6.57-3.73-12.61-10.29-13.49L54.76,4.86c-.54-.07-1.08-.11-1.61-.11h0Z"/>
        </g>
        <path class="cls-2" d="M29.06,113.4l134.79,18.12-2,14.87c-.73,5.44-5.41,9.54-10.89,9.54-.49,0-.99-.03-1.48-.1l-112.98-15.19c-2.91-.39-5.5-1.89-7.28-4.23-1.78-2.34-2.55-5.23-2.16-8.14l2-14.87m-.86-1.12l-2.13,15.86c-.88,6.57,3.73,12.61,10.29,13.49l112.98,15.19c.54,.07,1.08,.11,1.61,.11,5.92,0,11.07-4.38,11.88-10.4l2.13-15.86L28.2,112.28h0Z"/>
        <path class="cls-2" d="M40.2,30.59l134.79,18.12-11.06,82.26L29.13,112.84,40.2,30.59m-.86-1.12l-11.33,84.24,136.77,18.39,11.33-84.24L39.34,29.46h0Z"/>
      </g>
      <text id="score-input" class="cls-7" transform="translate(109.92 29.93) rotate(7.66)"  text-anchor="middle" alignment-baseline="middle" ><tspan x="0" y="0">${score}</tspan></text>
    </g>
    <g>
      <g id="bg-1">
        <rect class="cls-6" x=".5" y="43.84" width="146" height="146" rx="14" ry="14"/>
      </g>
      <g id="shdow" class="cls-8">
        <image width="114" height="87" transform="translate(15.74 98)" xlink:href="data:image/png;base64,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"/>
      </g>
      
    ${tierComponent} //tier img import

      <g id="stroke">
        <g>

          <path class="cls-2" d="M5,75.34v-15.5c0-6.34,5.16-11.5,11.5-11.5h114c6.34,0,11.5,5.16,11.5,11.5v15.5H5Z"/>
          <path class="cls-2" d="M130.5,48.84c6.07,0,11,4.93,11,11v15H5.5v-15c0-6.07,4.93-11,11-11h114m0-1H16.5c-6.63,0-12,5.37-12,12v16H142.5v-16c0-6.63-5.37-12-12-12h0Z"/>
        </g>
        <path class="cls-2" d="M141.5,158.84v15c0,6.07-4.93,11-11,11H16.5c-6.07,0-11-4.93-11-11v-15H141.5m1-1H4.5v16c0,6.63,5.37,12,12,12h114c6.63,0,12-5.37,12-12v-16h0Z"/>
        <path class="cls-2" d="M141.5,75.28v83H5.5V75.28H141.5m1-1H4.5v85H142.5V74.28h0Z"/>
      </g>
      <text id="id-input" class="cls-7" transform="translate(73.98 66.32)" text-anchor="middle" alignment-baseline="middle"><tspan x="0" y="0">${name}</tspan></text>
      <text id="ranking-input" class="cls-5" transform="translate(134.82 176.36)" text-anchor="end" alignment-baseline="middle"><tspan x="0" y="0">${userRank}</tspan></text>
      <g id="rankit-logo">
        <path class="cls-4" d="M12.88,176.25v-5.03c0-1.8,.91-2.76,3.02-2.76h.89v1.24h-.96c-1.05,0-1.55,.55-1.55,1.52v5.03h-1.41Z"/>
        <path class="cls-4" d="M19.74,176.25c-1.55,0-2.11-.62-2.11-1.8v-1.35c0-1.18,.56-1.8,2.11-1.8h3.6v-.94c0-.48-.21-.69-.7-.69h-4.47v-1.22h4.47c1.55,0,2.11,.62,2.11,1.8v4.2c0,1.18-.56,1.8-2.11,1.8h-2.89Zm3.6-3.73h-3.6c-.49,0-.7,.21-.7,.69v1.13c0,.48,.21,.69,.7,.69h2.89c.49,0,.7-.21,.7-.69v-1.82Z"/>
        <path class="cls-4" d="M31.85,176.25v-5.41c0-.76-.35-1.17-1.05-1.17h-2.68c-.38,0-.56,.18-.56,.55v6.03h-1.41v-6.28c0-1.11,.42-1.52,1.55-1.52h3.11c1.69,0,2.46,.9,2.46,2.28v5.52h-1.41Z"/>
        <path class="cls-4" d="M40.14,176.25l-2.82-3.86-1.11,.94v2.92h-1.4v-9.99h1.4v5.47l3.65-3.28h1.62l-3.2,3.08,3.34,4.71h-1.48Z"/>
        <path class="cls-2" d="M44.32,174.75c.34,.09,.39,.17,.3,.51l-.18,.67c-.09,.33-.18,.38-.52,.29l-.68-.18c-.34-.09-.39-.17-.3-.51l.18-.67c.09-.33,.18-.38,.52-.29l.68,.18Zm2.7-8.49l-2.13,7.83-1.4-.37,2.03-7.46h1.51Z"/>
        <path class="cls-4" d="M51.99,176.25c-2.11,0-3.02-.97-3.02-2.76v-3.79h-1.52v-1.24h1.52v-2.2h1.41v2.2h2.5v1.24h-2.5v3.79c0,.97,.49,1.52,1.55,1.52h.96v1.24h-.89Z"/>
      </g>
      <text id="lang-input" class="cls-1" transform="translate(73.98 88.7)" text-anchor="middle" alignment-baseline="middle"><tspan x="0" y="0">${langName}</tspan></text>
    </g>
    <text class="cls-3" transform="translate(163.2 105.2) rotate(-82.34)"><tspan x="0" y="0">click Me!</tspan></text>
  </g>
</g>
</svg>
  `;
}

module.exports = {
generateSVG
};