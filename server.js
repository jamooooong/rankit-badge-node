const express = require('express');
const app = express();
const port = 3000;
const { getUserRank } = require('./api/api');
const { generateSVG } = require('./src/generateSvg');
const { generateFailSVG } = require('./src/generateFailSvg');

// 캐시 방지 헤더 설정 함수
const setNoCacheHeaders = (res) => {
  res.setHeader('Cache-Control', 'max-age=0, no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
};

// SVG 응답 전송 함수
const sendSVGResponse = (res, svg) => {
  setNoCacheHeaders(res);
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
};

// SVG 생성
app.get('/badge', async (req, res) => {
  const name = req.query.name || 'Default Name';
  
  try {
    const userData = await getUserRank(name);
    const { langName, score, userRank, grade } = userData;
    const formattedScore = `${score} 점`;
    const formattedRank = `${userRank} 등`;
    
    const svg = generateSVG(name, langName, formattedScore, formattedRank, grade);
    sendSVGResponse(res, svg);
  } catch (error) {
    console.error('Error generating badge:', error);
    const svg = generateFailSVG();
    sendSVGResponse(res, svg);
  }
});

app.listen(port, () => {
  console.log(`Server running for rankit-badge at port: ${port}`);
});
