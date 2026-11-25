const fs = require('fs');
const path = require('path');

const nextDir = path.join(__dirname, '..', '.next');

try {
  if (fs.existsSync(nextDir)) {
    fs.rmSync(nextDir, { recursive: true, force: true });
    console.log('✓ Stale .next build cache cleared.');
  }
} catch (err) {
  // Ignore if locked or non-existent
}
