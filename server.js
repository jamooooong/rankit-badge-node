const express = require('express');
const app = express();
const port = 3000;
const { getUserRank } = require('./api/api');
const { generateSVG } = require('./src/generateSvg');

// SVG 생성 API
app.get('/badge', async (req, res) => {
    const name = req.query.name || 'Default Name';
    
    try {
        // API 호출
        const userData = await getUserRank(name);
        
        // API 응답에서 langName 추출
        const langName =  '으으으';
        const score = '스스스';
        const userRank = '등등등';
        const grade = 'yellow';
        const svg = generateSVG(name, langName, score, userRank, grade);
        
        // camo 캐싱 방지를 위한 헤더 설정
        res.setHeader('Cache-Control', 'max-age=0, no-cache, no-store, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');

        res.setHeader('Content-Type', 'image/svg+xml');
        res.send(svg);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
