const https = require('https');
const http = require('http');

const fetchUrl = (url) => new Promise((resolve, reject) => {
    (url.startsWith('https') ? https : http).get(url, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
    }).on('error', reject);
});

async function run() {
    try {
        const cursor = await fetchUrl('https://cursor.com');
        console.log("Cursor SVGs:", cursor.match(/<svg[^>]*>.*?<\/svg>/g)?.slice(0, 3));
    } catch(e) {
        console.error(e);
    }
}
run();
