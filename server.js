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
        const favorite = userData.langName || 'Unknown';

        const svg = generateSVG(name, favorite);

        res.setHeader('Content-Type', 'image/svg+xml');
        res.send(svg);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
