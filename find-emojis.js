#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Emoji regex pattern - matches most common emojis
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}\u{1F100}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2300}-\u{23FF}\u{2B50}\u{2B55}\u{231A}\u{231B}\u{2328}\u{23CF}\u{23E9}-\u{23F3}\u{23F8}-\u{23FA}\u{24C2}\u{25AA}\u{25AB}\u{25B6}\u{25C0}\u{25FB}-\u{25FE}\u{2600}-\u{2604}\u{260E}\u{2611}\u{2614}\u{2615}\u{2618}\u{261D}\u{2620}\u{2622}\u{2623}\u{2626}\u{262A}\u{262E}\u{262F}\u{2638}-\u{263A}\u{2640}\u{2642}\u{2648}-\u{2653}\u{265F}\u{2660}\u{2663}\u{2665}\u{2666}\u{2668}\u{267B}\u{267E}\u{267F}\u{2692}-\u{2697}\u{2699}\u{269B}\u{269C}\u{26A0}\u{26A1}\u{26A7}\u{26AA}\u{26AB}\u{26B0}\u{26B1}\u{26BD}\u{26BE}\u{26C4}\u{26C5}\u{26C8}\u{26CE}\u{26CF}\u{26D1}\u{26D3}\u{26D4}\u{26E9}\u{26EA}\u{26F0}-\u{26F5}\u{26F7}-\u{26FA}\u{26FD}\u{2702}\u{2705}\u{2708}-\u{270D}\u{270F}\u{2712}\u{2714}\u{2716}\u{271D}\u{2721}\u{2728}\u{2733}\u{2734}\u{2744}\u{2747}\u{274C}\u{274E}\u{2753}-\u{2755}\u{2757}\u{2763}\u{2764}\u{2795}-\u{2797}\u{27A1}\u{27B0}\u{27BF}\u{2934}\u{2935}\u{2B05}-\u{2B07}\u{2B1B}\u{2B1C}\u{2B50}\u{2B55}\u{3030}\u{303D}\u{3297}\u{3299}]/gu;

// Emoji to React Icon mapping
const emojiToIcon = {
  '🎨': { icon: 'FaPalette', from: 'react-icons/fa' },
  '✨': { icon: 'IoSparkles', from: 'react-icons/io5' },
  '🎯': { icon: 'FaBullseye', from: 'react-icons/fa' },
  '💡': { icon: 'FaLightbulb', from: 'react-icons/fa' },
  '🚀': { icon: 'FaRocket', from: 'react-icons/fa' },
  '📦': { icon: 'FaBox', from: 'react-icons/fa' },
  '🏆': { icon: 'FaTrophy', from: 'react-icons/fa' },
  '⭐': { icon: 'FaStar', from: 'react-icons/fa' },
  '📖': { icon: 'FaBook', from: 'react-icons/fa' },
  '🖌️': { icon: 'FaPaintBrush', from: 'react-icons/fa' },
  '🌈': { icon: 'MdColorLens', from: 'react-icons/md' },
  '🔤': { icon: 'FaFont', from: 'react-icons/fa' },
  '📸': { icon: 'FaImage', from: 'react-icons/fa' },
  '💬': { icon: 'FaComments', from: 'react-icons/fa' },
  '🛡️': { icon: 'FaShieldAlt', from: 'react-icons/fa' },
  '📈': { icon: 'FaChartLine', from: 'react-icons/fa' },
  '💰': { icon: 'FaDollarSign', from: 'react-icons/fa' },
  '🎬': { icon: 'FaFilm', from: 'react-icons/fa' },
  '🎙️': { icon: 'FaMicrophone', from: 'react-icons/fa' },
  '📹': { icon: 'FaVideo', from: 'react-icons/fa' },
  '🎥': { icon: 'FaCamera', from: 'react-icons/fa' },
  '🟢': { icon: 'FaCircle', from: 'react-icons/fa', color: 'green' },
  '🏥': { icon: 'FaHospital', from: 'react-icons/fa' },
  '👂': { icon: 'FaHeadphones', from: 'react-icons/fa' },
  '🧠': { icon: 'FaBrain', from: 'react-icons/fa' },
  '💄': { icon: 'FaPaintBrush', from: 'react-icons/fa' },
  '🤳': { icon: 'FaMobileAlt', from: 'react-icons/fa' },
  '📺': { icon: 'FaTv', from: 'react-icons/fa' },
  '🔥': { icon: 'FaFire', from: 'react-icons/fa' },
  '💀': { icon: 'FaSkull', from: 'react-icons/fa' },
  '😈': { icon: 'FaGrinEvil', from: 'react-icons/fa' },
  '⏰': { icon: 'FaClock', from: 'react-icons/fa' },
  '😤': { icon: 'FaAngry', from: 'react-icons/fa' },
  '✅': { icon: 'FaCheckCircle', from: 'react-icons/fa' },
  '📱': { icon: 'FaMobileAlt', from: 'react-icons/fa' },
  '📊': { icon: 'FaChartBar', from: 'react-icons/fa' },
  '🎨': { icon: 'FaPalette', from: 'react-icons/fa' },
  '🎵': { icon: 'FaMusic', from: 'react-icons/fa' },
  '👑': { icon: 'FaCrown', from: 'react-icons/fa' },
  '📣': { icon: 'FaBullhorn', from: 'react-icons/fa' },
  '🌟': { icon: 'FaStar', from: 'react-icons/fa' },
  '✍️': { icon: 'FaPen', from: 'react-icons/fa' },
  '⚙️': { icon: 'FaCog', from: 'react-icons/fa' },
  '💼': { icon: 'FaBriefcase', from: 'react-icons/fa' },
  '🎞️': { icon: 'FaFilm', from: 'react-icons/fa' },
  '🎭': { icon: 'FaTheaterMasks', from: 'react-icons/fa' },
  '🗣️': { icon: 'FaComments', from: 'react-icons/fa' },
  '📝': { icon: 'FaEdit', from: 'react-icons/fa' },
  '✂️': { icon: 'FaCut', from: 'react-icons/fa' },
  '🌐': { icon: 'FaGlobe', from: 'react-icons/fa' },
  '🖥️': { icon: 'FaDesktop', from: 'react-icons/fa' },
  '💻': { icon: 'FaLaptop', from: 'react-icons/fa' },
  '🛋️': { icon: 'FaCouch', from: 'react-icons/fa' },
  '🙏': { icon: 'FaPrayingHands', from: 'react-icons/fa' },
  '🫧': { icon: 'MdBubbleChart', from: 'react-icons/md' },
};

function findEmojisInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const results = [];

  lines.forEach((line, lineIndex) => {
    const matches = [...line.matchAll(emojiRegex)];
    matches.forEach(match => {
      const emoji = match[0];
      const column = match.index;
      const suggestion = emojiToIcon[emoji] || { icon: 'Unknown', from: 'N/A' };
      
      results.push({
        line: lineIndex + 1,
        column: column + 1,
        emoji,
        context: line.trim(),
        suggestion
      });
    });
  });

  return results;
}

function scanDirectory(dir, extensions = ['.jsx', '.js', '.tsx', '.ts']) {
  const results = {};
  
  function scan(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      // Skip node_modules and build directories
      if (item === 'node_modules' || item === 'build' || item === 'dist' || item === '.git') {
        return;
      }
      
      if (stat.isDirectory()) {
        scan(fullPath);
      } else if (extensions.some(ext => item.endsWith(ext))) {
        const emojis = findEmojisInFile(fullPath);
        if (emojis.length > 0) {
          results[fullPath] = emojis;
        }
      }
    });
  }
  
  scan(dir);
  return results;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
console.log('🔍 Scanning for emojis in React files...\n');

const results = scanDirectory(srcDir);
const totalFiles = Object.keys(results).length;
let totalEmojis = 0;

if (totalFiles === 0) {
  console.log('✅ No emojis found in React files!');
} else {
  console.log(`Found emojis in ${totalFiles} file(s):\n`);
  
  Object.entries(results).forEach(([filePath, emojis]) => {
    const relativePath = path.relative(process.cwd(), filePath);
    console.log(`\n📄 ${relativePath}`);
    console.log('─'.repeat(80));
    
    emojis.forEach(({ line, column, emoji, context, suggestion }) => {
      totalEmojis++;
      console.log(`  Line ${line}:${column} - ${emoji}`);
      console.log(`    Context: ${context.substring(0, 100)}${context.length > 100 ? '...' : ''}`);
      console.log(`    Replace with: <${suggestion.icon} /> from '${suggestion.from}'`);
      console.log('');
    });
  });
  
  console.log('\n' + '='.repeat(80));
  console.log(`📊 Summary: Found ${totalEmojis} emoji(s) in ${totalFiles} file(s)`);
  console.log('='.repeat(80));
  
  // Generate import statements needed
  console.log('\n📦 Required imports:');
  const imports = {};
  Object.values(results).forEach(emojis => {
    emojis.forEach(({ suggestion }) => {
      if (suggestion.from !== 'N/A') {
        if (!imports[suggestion.from]) {
          imports[suggestion.from] = new Set();
        }
        imports[suggestion.from].add(suggestion.icon);
      }
    });
  });
  
  Object.entries(imports).forEach(([from, icons]) => {
    console.log(`import { ${[...icons].join(', ')} } from '${from}';`);
  });
}
