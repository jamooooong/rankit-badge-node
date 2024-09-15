const express = require('express');
const app = express();
const port = 3000;

// SVG 생성 API
app.get('/badge', (req, res) => {
    const name = req.query.name || 'Default Name';
    const svg = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 432 224" style="enable-background:new 0 0 432 224;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#191919;}
	.st1{fill:#1368E8;}
	.st2{font-family:'Pretendard-SemiBold';}
	.st3{font-size:20px;}
	.st4{fill:#333D44;}
	.st5{font-family:'Pretendard-Medium';}
	.st6{font-size:16px;}
	.st7{fill:#AE67D3;}
	.st8{fill:#FFFFFF;}
	.st9{fill:#231815;}
</style>
<g id="Layer_1">
	<g>
		<path class="st0" d="M16,26v-5c0-1.8,0.9-2.8,3-2.8h0.9v1.2h-1c-1.1,0-1.5,0.6-1.5,1.5v5H16z"/>
		<path class="st0" d="M22.9,26c-1.5,0-2.1-0.6-2.1-1.8v-1.4c0-1.2,0.6-1.8,2.1-1.8h3.6v-0.9c0-0.5-0.2-0.7-0.7-0.7h-4.5v-1.2h4.5
			c1.5,0,2.1,0.6,2.1,1.8v4.2c0,1.2-0.6,1.8-2.1,1.8H22.9z M26.5,22.3h-3.6c-0.5,0-0.7,0.2-0.7,0.7v1.1c0,0.5,0.2,0.7,0.7,0.7h2.9
			c0.5,0,0.7-0.2,0.7-0.7V22.3z"/>
		<path class="st0" d="M35,26v-5.4c0-0.8-0.4-1.2-1.1-1.2h-2.7c-0.4,0-0.6,0.2-0.6,0.6v6h-1.4v-6.3c0-1.1,0.4-1.5,1.5-1.5h3.1
			c1.7,0,2.5,0.9,2.5,2.3V26H35z"/>
		<path class="st0" d="M43.3,26l-2.8-3.9l-1.1,0.9V26h-1.4V16h1.4v5.5l3.7-3.3h1.6l-3.2,3.1l3.3,4.7H43.3z"/>
		<path class="st1" d="M47.4,24.5c0.3,0.1,0.4,0.2,0.3,0.5l-0.2,0.7C47.5,26,47.4,26.1,47,26l-0.7-0.2c-0.3-0.1-0.4-0.2-0.3-0.5
			l0.2-0.7c0.1-0.3,0.2-0.4,0.5-0.3L47.4,24.5z M50.1,16L48,23.8l-1.4-0.4l2-7.5H50.1z"/>
		<path class="st0" d="M55.1,26c-2.1,0-3-1-3-2.8v-3.8h-1.5v-1.2h1.5V16h1.4v2.2H56v1.2h-2.5v3.8c0,1,0.5,1.5,1.5,1.5h1V26H55.1z"/>
	</g>
	<text transform="matrix(1 0 0 1 128 53.5155)" class="st1 st2 st3">${name}’s profile</text>
	<text transform="matrix(1 0 0 1 127.9033 86.3424)" class="st4 st5 st6">tier :</text>
	<text transform="matrix(1 0 0 1 127.9031 116.1018)" class="st4 st5 st6">score :</text>
	<text transform="matrix(1 0 0 1 127.9031 145.8605)" class="st4 st5 st6">소속 학교 :</text>
	<text transform="matrix(1 0 0 1 127.9031 175.6202)" class="st4 st5 st6">소속 지역 :</text>
	<text transform="matrix(1 0 0 1 267.955 86.3424)" class="st4 st5 st6">1tier</text>
	<text transform="matrix(1 0 0 1 267.9548 116.1018)" class="st4 st5 st6">123,456</text>
	<text transform="matrix(1 0 0 1 267.9548 145.8605)" class="st4 st5 st6">광운대학교</text>
	<text transform="matrix(1 0 0 1 267.9548 175.6202)" class="st4 st5 st6">경기도</text>
</g>
<g id="레이어_1">
	<g>
		<path class="st7" d="M108.9,63.9H19.1c-1.7,0-3.1,1.4-3.1,3.1v64.7c0,1.1,0.6,2.2,1.6,2.7l44.9,25.2c0.5,0.3,1,0.4,1.5,0.4
			c0.5,0,1-0.1,1.5-0.4l44.9-25.2c1-0.5,1.6-1.6,1.6-2.7V67C112,65.3,110.6,63.9,108.9,63.9z"/>
		<path class="st8" d="M96.8,108.8c0-0.1,0-0.1,0-0.2c0-0.2,0-0.3,0-0.5c0-0.1,0-0.1,0-0.2c0-0.2,0-0.3,0-0.5c0,0,0-0.1,0-0.1
			c0-0.2,0-0.4-0.1-0.6c0,0,0-0.1,0-0.1c-0.3-2.4-1-4.5-2-6.3l-3.9-20.6l-8.2,11.4c-5-1.7-11.1-2.4-17.7-2.4c-0.1,0-0.3,0-0.4,0
			c-0.1,0-0.2,0-0.3,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.3,0c-0.1,0-0.3,0-0.4,0c-6.6,0.1-12.6,0.8-17.7,2.4
			l-8.2-11.4l-3.9,20.6c-1,1.8-1.7,3.9-2,6.3c0,0,0,0.1,0,0.1c0,0.2,0,0.4-0.1,0.6c0,0,0,0.1,0,0.1c0,0.2,0,0.3,0,0.5
			c0,0.1,0,0.1,0,0.2c0,0.2,0,0.3,0,0.5c0,0.1,0,0.1,0,0.2c0,0.2,0,0.5,0,0.7c0,15.9,14.7,19.8,32.8,19.8s32.8-3.9,32.8-19.8
			C96.8,109.3,96.8,109.1,96.8,108.8z"/>
		<path class="st9" d="M100.2,98.1c-0.1-0.4-0.2-0.8-0.4-1.2l-31.6,8h-8.5l-31.6-8c-0.1,0.4-0.3,0.8-0.4,1.2
			c-2,8,3.9,16.5,13.2,18.9c9.1,2.3,18.2-2,20.5-9.7h5c2.3,7.7,11.3,12,20.5,9.7C96.3,114.5,102.2,106.1,100.2,98.1z"/>
	</g>
</g>
</svg>
    `;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(svg);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
 