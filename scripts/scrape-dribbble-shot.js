const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();
  
  try {
    const shotUrl = process.argv[2] || 'https://dribbble.com/shots/20143473-Web-page-design-exploration-for-freelance-payments-service';
    console.log('Fetching shot:', shotUrl);
    
    await page.goto(shotUrl, { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // Wait for image to load
    await page.waitForSelector('img[src*="cdn.dribbble.com"]', { 
      timeout: 10000 
    });
    
    // Extract image data - look for main shot image (larger images)
    const shotData = await page.evaluate(() => {
      const imgEls = document.querySelectorAll('img[src*="cdn.dribbble.com"]');
      let mainImg = '';
      
      for (const img of imgEls) {
        const src = img.src;
        // Skip avatars and small images
        if (!src.includes('avatars') && (src.includes('still-') || src.includes('original'))) {
          mainImg = src;
          break;
        }
      }
      
      // Try to get from srcset if no direct match
      if (!mainImg) {
        for (const img of imgEls) {
          const srcset = img.srcset;
          if (srcset && !img.src.includes('avatars')) {
            mainImg = img.src;
            break;
          }
        }
      }
      
      const titleEl = document.querySelector('h1, [data-testid="shot-title"], .shot-title');
      
      return {
        title: titleEl?.textContent?.trim() || document.title,
        image: mainImg || '',
        url: window.location.href,
      };
    });
    
    console.log('Shot data:', JSON.stringify(shotData, null, 2));
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();
