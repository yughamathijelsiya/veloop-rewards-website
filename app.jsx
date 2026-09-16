import React, { useState } from 'react';
import { Menu, X, Home, Gamepad2, Star, Users, Mail, Phone, MapPin, Facebook, Twitter, Instagram, ArrowRight, ChevronDown } from 'lucide-react';

export default function VELOOPWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const games = [
    { id: 1, name: 'Roblox Mobile', desc: 'Battle Royale', image: '🎮', color: '#FF6B6B' },
    { id: 2, name: 'Free Fire', desc: 'Action & Strategy', image: '🔥', color: '#FFD700' },
    { id: 3, name: 'Minecraft', desc: 'Creative Building', image: '⛏️', color: '#9370DB' },
    { id: 4, name: 'Angry Birds', desc: 'Puzzle Game', image: '🐦', color: '#FF8C00' },
    { id: 5, name: 'Subway Surfers', desc: 'Runner Game', image: '🏃', color: '#00CED1' },
    { id: 6, name: 'XP Catcher', desc: 'Rewards Game', image: '💰', color: '#32CD32' },
  ];

  const features = [
    { icon: '⭐', title: 'Level Up System', desc: 'Unlock rewards as you level up' },
    { icon: '🎮', title: 'Multiple Games', desc: 'Play various games to earn XP' },
    { icon: '💎', title: 'Premium Rewards', desc: 'Get exclusive VE currency rewards' },
    { icon: '🏆', title: 'Leaderboard', desc: 'Compete with other players' },
    { icon: '📈', title: 'Progress Tracking', desc: 'Track your journey in detail' },
    { icon: '🎁', title: 'Daily Bonuses', desc: 'Claim rewards every day' },
  ];

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll contact you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const renderNavigation = () => (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <div style={styles.logo}>
          <span style={styles.logoText}>V</span>
          <span style={styles.logoName}>VELOOP</span>
        </div>

        <div style={styles.desktopMenu}>
          {[
            { label: 'Home', page: 'home' },
            { label: 'Games', page: 'games' },
            { label: 'Features', page: 'features' },
            { label: 'About', page: 'about' },
            { label: 'Contact', page: 'contact' },
          ].map((item) => (
            <span
              key={item.page}
              style={{
                ...styles.navLink,
                ...(currentPage === item.page ? styles.navLinkActive : {}),
              }}
              onClick={() => {
                setCurrentPage(item.page);
                setMobileMenuOpen(false);
              }}
            >
              {item.label}
            </span>
          ))}
        </div>

        <div style={styles.mobileMenuBtn} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {mobileMenuOpen && (
        <div style={styles.mobileMenu}>
          {[
            { label: 'Home', page: 'home' },
            { label: 'Games', page: 'games' },
            { label: 'Features', page: 'features' },
            { label: 'About', page: 'about' },
            { label: 'Contact', page: 'contact' },
          ].map((item) => (
            <div
              key={item.page}
              style={styles.mobileMenuItem}
              onClick={() => {
                setCurrentPage(item.page);
                setMobileMenuOpen(false);
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </nav>
  );

  const renderHome = () => (
    <div>
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Level Up Your Gaming</h1>
          <p style={styles.heroDesc}>Earn rewards, unlock levels, and play amazing games</p>
          <button style={styles.heroBtnPrimary} onClick={() => setCurrentPage('games')}>
            Play Games Now <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </button>
          <button style={styles.heroBtnSecondary} onClick={() => setCurrentPage('features')}>
            Learn More
          </button>
        </div>
        <div style={styles.heroEmoji}>🎮</div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Popular Games</h2>
        <p style={styles.sectionDesc}>Play and earn rewards with our game collection</p>
        <div style={styles.gamesGrid}>
          {games.slice(0, 6).map((game) => (
            <div key={game.id} style={styles.gameCard}>
              <div style={{...styles.gameCardImage, background: game.color}}>
                <span style={{ fontSize: '48px' }}>{game.image}</span>
              </div>
              <div style={styles.gameCardContent}>
                <h3 style={styles.gameCardTitle}>{game.name}</h3>
                <p style={styles.gameCardDesc}>{game.desc}</p>
                <button style={styles.gameCardBtn}>Play Now →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.statsSection}>
        <div style={styles.stat}>
          <div style={styles.statNumber}>10K+</div>
          <div style={styles.statLabel}>Active Players</div>
        </div>
        <div style={styles.stat}>
          <div style={styles.statNumber}>50+</div>
          <div style={styles.statLabel}>Games Available</div>
        </div>
        <div style={styles.stat}>
          <div style={styles.statNumber}>1M+</div>
          <div style={styles.statLabel}>Rewards Earned</div>
        </div>
        <div style={styles.stat}>
          <div style={styles.statNumber}>100%</div>
          <div style={styles.statLabel}>Free to Play</div>
        </div>
      </div>

      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Start Earning?</h2>
        <p style={styles.ctaDesc}>Join thousands of players and start your journey today</p>
        <button style={styles.ctaBtn} onClick={() => setCurrentPage('games')}>
          Start Playing Now
        </button>
      </div>
    </div>
  );

  const renderGames = () => (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>🎮 All Games</h1>
      <p style={styles.pageDesc}>Explore our complete game collection and start earning rewards</p>
      
      <div style={styles.gamesGrid}>
        {games.map((game) => (
          <div key={game.id} style={styles.gameCard}>
            <div style={{...styles.gameCardImage, background: game.color}}>
              <span style={{ fontSize: '64px' }}>{game.image}</span>
            </div>
            <div style={styles.gameCardContent}>
              <h3 style={styles.gameCardTitle}>{game.name}</h3>
              <p style={styles.gameCardDesc}>{game.desc}</p>
              <div style={styles.gameCardReward}>Earn: +25 XP • +10 VEs</div>
              <button style={styles.gameCardBtn}>Play Now →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFeatures = () => (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>✨ Features</h1>
      <p style={styles.pageDesc}>Discover what makes VELOOP the best rewards platform</p>
      
      <div style={styles.featuresGrid}>
        {features.map((feature, i) => (
          <div key={i} style={styles.featureCard}>
            <div style={styles.featureIcon}>{feature.icon}</div>
            <h3 style={styles.featureTitle}>{feature.title}</h3>
            <p style={styles.featureDesc}>{feature.desc}</p>
          </div>
        ))}
      </div>

      <div style={styles.levelSystemSection}>
        <h2 style={styles.levelSystemTitle}>🏆 Level System</h2>
        <p style={styles.levelSystemDesc}>Progress through levels and unlock exclusive rewards</p>
        <div style={styles.levelGrid}>
          {[1, 2, 3, 4, 5].map((level) => (
            <div key={level} style={styles.levelCard}>
              <div style={styles.levelNumber}>Level {level}</div>
              <div style={styles.levelReward}>+{level * 50} VEs</div>
              <div style={styles.levelBadge}>Unlocked</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>📖 About VELOOP</h1>
      
      <div style={styles.aboutSection}>
        <div style={styles.aboutContent}>
          <h2 style={styles.aboutTitle}>Who We Are</h2>
          <p style={styles.aboutText}>
            VELOOP is a gamified rewards platform that brings excitement and earning opportunities together.
          </p>
        </div>
        <div style={styles.aboutEmoji}>🌟</div>
      </div>

      <div style={styles.aboutSection}>
        <div style={styles.aboutContent}>
          <h2 style={styles.aboutTitle}>Why Choose Us?</h2>
          <ul style={styles.aboutList}>
            <li>✅ Earn real rewards playing games</li>
            <li>✅ Level up and unlock exclusive perks</li>
            <li>✅ Join a community of 10K+ players</li>
            <li>✅ Daily bonuses and challenges</li>
          </ul>
        </div>
        <div style={styles.aboutEmoji}>💎</div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>📞 Contact Us</h1>
      <p style={styles.pageDesc}>Have questions? Get in touch with our team</p>

      <div style={styles.contactGrid}>
        <div style={styles.contactCard}>
          <Mail size={32} style={{ color: '#00CED1' }} />
          <h3 style={styles.contactTitle}>Email</h3>
          <p style={styles.contactInfo}>support@veloop.com</p>
        </div>
        <div style={styles.contactCard}>
          <Phone size={32} style={{ color: '#FFD700' }} />
          <h3 style={styles.contactTitle}>Phone</h3>
          <p style={styles.contactInfo}>+1 (555) 123-4567</p>
        </div>
        <div style={styles.contactCard}>
          <MapPin size={32} style={{ color: '#32CD32' }} />
          <h3 style={styles.contactTitle}>Address</h3>
          <p style={styles.contactInfo}>Tech City, Digital Ave</p>
        </div>
      </div>

      <div style={styles.contactFormSection}>
        <h2 style={styles.formTitle}>Send us a Message</h2>
        <form style={styles.contactForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            style={styles.formInput}
            value={formData.name}
            onChange={handleFormChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            style={styles.formInput}
            value={formData.email}
            onChange={handleFormChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            style={{...styles.formInput, minHeight: '150px'}}
            value={formData.message}
            onChange={handleFormChange}
            required
          ></textarea>
          <button type="submit" style={styles.submitBtn}>Send Message</button>
        </form>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      {renderNavigation()}

      <div style={styles.mainContent}>
        {currentPage === 'home' && renderHome()}
        {currentPage === 'games' && renderGames()}
        {currentPage === 'features' && renderFeatures()}
        {currentPage === 'about' && renderAbout()}
        {currentPage === 'contact' && renderContact()}
      </div>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>VELOOP</h4>
            <p style={styles.footerText}>Gamified rewards platform</p>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Quick Links</h4>
            <div style={styles.footerLinks}>
              <span onClick={() => setCurrentPage('home')}>Home</span>
              <span onClick={() => setCurrentPage('games')}>Games</span>
              <span onClick={() => setCurrentPage('features')}>Features</span>
            </div>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Legal</h4>
            <div style={styles.footerLinks}>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p style={styles.footerCopyright}>© 2024 VELOOP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
    color: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  navbar: {
    background: 'rgba(10, 14, 39, 0.95)',
    borderBottom: '1px solid rgba(0, 206, 209, 0.2)',
    padding: '0',
    backdropFilter: 'blur(10px)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '16px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  logoText: { color: '#FFD700', fontSize: '24px' },
  logoName: {
    background: 'linear-gradient(90deg, #FFD700 0%, #00CED1 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  desktopMenu: {
    display: 'flex',
    gap: '32px',
  },
  navLink: {
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '14px',
    fontWeight: '500',
  },
  navLinkActive: {
    color: '#FFD700',
    borderBottom: '2px solid #FFD700',
    paddingBottom: '4px',
  },
  mobileMenuBtn: {
    display: 'none',
    cursor: 'pointer',
  },
  mobileMenu: {
    display: 'none',
    background: 'rgba(26, 31, 46, 0.95)',
    borderTop: '1px solid rgba(0, 206, 209, 0.2)',
  },
  mobileMenuItem: {
    padding: '16px 32px',
    borderBottom: '1px solid rgba(0, 206, 209, 0.1)',
    cursor: 'pointer',
  },
  mainContent: {
    minHeight: 'calc(100vh - 80px)',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px',
  },
  hero: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '48px',
    alignItems: 'center',
    padding: '80px 0',
  },
  heroContent: {},
  heroTitle: {
    fontSize: '48px',
    fontWeight: '700',
    marginBottom: '16px',
    background: 'linear-gradient(135deg, #FFD700 0%, #00CED1 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroDesc: {
    fontSize: '18px',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: '32px',
  },
  heroBtnPrimary: {
    padding: '14px 32px',
    background: 'linear-gradient(135deg, #FFD700 0%, #00CED1 100%)',
    border: 'none',
    borderRadius: '8px',
    color: '#000',
    fontWeight: '600',
    cursor: 'pointer',
    marginRight: '16px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
  },
  heroBtnSecondary: {
    padding: '14px 32px',
    background: 'transparent',
    border: '2px solid rgba(0, 206, 209, 0.5)',
    borderRadius: '8px',
    color: '#fff',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '14px',
  },
  heroEmoji: {
    fontSize: '120px',
    textAlign: 'center',
  },
  section: {
    padding: '80px 0',
  },
  sectionTitle: {
    fontSize: '36px',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '16px',
  },
  sectionDesc: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    marginBottom: '48px',
  },
  gamesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },
  gameCard: {
    background: 'rgba(0, 206, 209, 0.1)',
    border: '1px solid rgba(0, 206, 209, 0.2)',
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  gameCardImage: {
    padding: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '200px',
  },
  gameCardContent: {
    padding: '20px',
  },
  gameCardTitle: {
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 8px 0',
  },
  gameCardDesc: {
    fontSize: '12px',
    color: 'rgba(255, 255, 255, 0.6)',
    margin: '0 0 12px 0',
  },
  gameCardReward: {
    fontSize: '11px',
    color: '#FFD700',
    fontWeight: '600',
    marginBottom: '12px',
  },
  gameCardBtn: {
    width: '100%',
    padding: '8px',
    background: 'linear-gradient(135deg, #FFD700 0%, #00CED1 100%)',
    border: 'none',
    borderRadius: '6px',
    color: '#000',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '12px',
  },
  statsSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px',
    padding: '60px 32px',
    background: 'rgba(0, 206, 209, 0.1)',
    borderRadius: '16px',
  },
  stat: {
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#FFD700',
    marginBottom: '8px',
  },
  statLabel: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.6)',
  },
  ctaSection: {
    textAlign: 'center',
    padding: '80px 0',
  },
  ctaTitle: {
    fontSize: '36px',
    fontWeight: '700',
    marginBottom: '16px',
  },
  ctaDesc: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: '32px',
  },
  ctaBtn: {
    padding: '14px 48px',
    background: 'linear-gradient(135deg, #FFD700 0%, #00CED1 100%)',
    border: 'none',
    borderRadius: '8px',
    color: '#000',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '16px',
  },
  pageContainer: {
    padding: '60px 0',
  },
  pageTitle: {
    fontSize: '40px',
    fontWeight: '700',
    marginBottom: '16px',
    textAlign: 'center',
  },
  pageDesc: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    marginBottom: '48px',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    marginBottom: '60px',
  },
  featureCard: {
    background: 'rgba(0, 206, 209, 0.1)',
    border: '1px solid rgba(0, 206, 209, 0.2)',
    borderRadius: '16px',
    padding: '32px 24px',
    textAlign: 'center',
  },
  featureIcon: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  featureTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '12px',
    margin: '0 0 12px 0',
  },
  featureDesc: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: '1.6',
    margin: 0,
  },
  levelSystemSection: {
    background: 'rgba(0, 206, 209, 0.1)',
    border: '1px solid rgba(0, 206, 209, 0.2)',
    borderRadius: '16px',
    padding: '48px',
  },
  levelSystemTitle: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '12px',
  },
  levelSystemDesc: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: '32px',
  },
  levelGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '12px',
  },
  levelCard: {
    background: 'rgba(26, 31, 46, 0.6)',
    border: '1px solid rgba(0, 206, 209, 0.3)',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
  },
  levelNumber: {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '8px',
  },
  levelReward: {
    fontSize: '
