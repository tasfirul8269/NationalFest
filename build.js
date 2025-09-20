#!/usr/bin/env node

// Build script to handle Vercel permission issues
const { execSync } = require('child_process');
const path = require('path');

try {
  console.log('Starting build process...');
  
  // Try different methods to run vite
  const vitePath = path.join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');
  
  try {
    // Method 1: Direct node execution
    execSync(`node "${vitePath}" build`, { stdio: 'inherit' });
    console.log('Build completed successfully!');
  } catch (error) {
    console.log('Method 1 failed, trying alternative...');
    
    // Method 2: Use require to run vite programmatically
    const vite = require('vite');
    vite.build({
      configFile: path.join(__dirname, 'vite.config.ts')
    }).then(() => {
      console.log('Build completed successfully!');
    }).catch((err) => {
      console.error('Build failed:', err);
      process.exit(1);
    });
  }
} catch (error) {
  console.error('Build script failed:', error);
  process.exit(1);
}
