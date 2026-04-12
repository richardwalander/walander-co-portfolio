const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();
  
  try {
    console.log('Navigating to Dribbble...');
    await page.goto('https://dribbble.com/richardwalander', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // Wait for shots to load
    await page.waitForSelector('[data-testid="shot-thumbnail"], .shot-thumbnail, .dribbble-shot', { 
      timeout: 10000 
    }).catch(() => console.log('Using fallback selectors...'));
    
    // Extract shot data
    const shots = await page.evaluate(() => {
      const shotElements = document.querySelectorAll('[data-testid="shot-thumbnail"], .shot-thumbnail, .dribbble-shot, .shot');
      const data = [];
      
      shotElements.forEach((el, index) => {
        if (index >= 12) return; // Limit to 12 shots
        
        const linkEl = el.querySelector('a') || el.closest('a');
        const imgEl = el.querySelector('img');
        const titleEl = el.querySelector('[data-testid="shot-title"], .shot-title, h2, h3, .title');
        
        const shot = {
          title: titleEl?.textContent?.trim() || 
                 imgEl?.alt?.trim() || 
                 el.querySelector('img')?.getAttribute('alt')?.trim() ||
                 `Shot ${index + 1}`,
          url: linkEl?.href || 
               el.querySelector('a')?.href ||
               '',
          image: imgEl?.src || 
                 el.querySelector('img')?.src ||
                 '',
          likes: el.querySelector('[data-testid="shot-likes"], .shot-likes, .likes')?.textContent?.trim() || '',
        };
        
        if (shot.url || shot.image) {
          data.push(shot);
        }
      });
      
      return data;
    });
    
    console.log('Found shots:', shots.length);
    console.log(JSON.stringify(shots, null, 2));
    
  } catch (error) {
    console.error('Error:', error.message);
    // Try to get page content for debugging
    const content = await page.content();
    console.log('Page content preview:', content.substring(0, 1000));
  } finally {
    await browser.close();
  }
})();
