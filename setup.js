#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🍳 Setting up Recipe Sharing Platform...\n');

// Check if Node.js version is compatible
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);

if (majorVersion < 18) {
  console.error('❌ Node.js 18+ is required. Current version:', nodeVersion);
  process.exit(1);
}

console.log('✅ Node.js version check passed');

// Create environment files if they don't exist
const serverEnvPath = path.join(__dirname, 'server', '.env');
const clientEnvPath = path.join(__dirname, 'client', '.env');

if (!fs.existsSync(serverEnvPath)) {
  console.log('📝 Creating server environment file...');
  fs.copyFileSync(
    path.join(__dirname, 'server', 'env.example'),
    serverEnvPath
  );
  console.log('✅ Server environment file created');
}

if (!fs.existsSync(clientEnvPath)) {
  console.log('📝 Creating client environment file...');
  fs.copyFileSync(
    path.join(__dirname, 'client', 'env.example'),
    clientEnvPath
  );
  console.log('✅ Client environment file created');
}

// Install dependencies
console.log('\n📦 Installing dependencies...');
try {
  console.log('Installing root dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('Installing server dependencies...');
  execSync('npm install', { cwd: path.join(__dirname, 'server'), stdio: 'inherit' });
  
  console.log('Installing client dependencies...');
  execSync('npm install', { cwd: path.join(__dirname, 'client'), stdio: 'inherit' });
  
  console.log('✅ All dependencies installed successfully');
} catch (error) {
  console.error('❌ Failed to install dependencies:', error.message);
  process.exit(1);
}

// Create necessary directories
console.log('\n📁 Creating directories...');
const dirs = [
  'server/uploads',
  'server/data',
  'client/public'
];

dirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
});

console.log('\n🎉 Setup completed successfully!');
console.log('\n📋 Next steps:');
console.log('1. Review and update environment files if needed:');
console.log('   - server/.env');
console.log('   - client/.env');
console.log('2. Start the development servers:');
console.log('   npm run dev');
console.log('3. Open your browser to http://localhost:3000');
console.log('\n🍳 Happy cooking!');
