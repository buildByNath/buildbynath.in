/* src/index.jsx – plain JSX using CDN globals */

// React and ReactDOM are available as global variables `React` and `ReactDOM`.
// Framer Motion is available as `window['framer-motion']`.
const { motion } = window['framer-motion'];
const { createRoot } = ReactDOM;

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/buildByNath',
    icon: '🐙',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nath-s06/',
    icon: '💼',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/nath.io_?vrfl=ZDV5bmRzbW53M3Iw',
    icon: '📸',
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function App() {
  return (
    <motion.div className="app" variants={containerVariants} initial="hidden" animate="visible">
      {/* Avatar – replace with your own image URL */}
      <motion.img
        src="https://avatars.githubusercontent.com/u/13143792?v=4"
        alt="Nath Avatar"
        className="avatar"
        variants={itemVariants}
      />
      <motion.h1 variants={itemVariants}>Nath (BuildByNath)</motion.h1>
      <motion.p className="bio" variants={itemVariants}>
        Passionate full‑stack developer &amp; AI enthusiast. I build web apps, experiment with machine learning, and love sharing knowledge.
      </motion.p>
      <motion.div className="social-links" variants={itemVariants}>
        {socialLinks.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" title={link.name}>
            {link.icon}
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);


const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/buildByNath',
    icon: '🐙', // placeholder emoji, replace with proper icon if desired
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nath-s06/',
    icon: '💼',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/nath.io_?vrfl=ZDV5bmRzbW53M3Iw',
    icon: '📸',
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function App() {
  return (
    <motion.div className="app" variants={containerVariants} initial="hidden" animate="visible">
      {/* Avatar – you can replace the src with your own image URL */}
      <motion.img
        src="https://avatars.githubusercontent.com/u/13143792?v=4"
        alt="Nath Avatar"
        className="avatar"
        variants={itemVariants}
      />
      <motion.h1 variants={itemVariants}>Nath (BuildByNath)</motion.h1>
      <motion.p className="bio" variants={itemVariants}>
        Passionate full‑stack developer & AI enthusiast. I build web apps, experiment with machine learning, and love sharing knowledge.
      </motion.p>
      <motion.div className="social-links" variants={itemVariants}>
        {socialLinks.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" title={link.name}>
            {link.icon}
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
