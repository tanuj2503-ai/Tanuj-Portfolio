import { useEffect } from 'react';

const icons = ['/favicon-nova.svg', '/favicon-aurora.svg', '/favicon-mono.svg'];
const sectionIds = ['hero', 'resume', 'about', 'skills', 'services', 'build-intelligence', 'projects', 'certifications', 'signal-wall', 'contact'];

const TabOrchestrator = () => {
  useEffect(() => {
    let iconIndex = 0;
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let activeSection = 'hero';
    let pulseIndex = 0;

    const phrases = [
      'Welcome to my portfolio.',
      'Crafting premium digital experiences.',
      'Cloud. Apps. Web. Built by Tanuj Sharma.',
      'Open to internships and bold collaborations.',
    ];

    const sectionLabel = {
      hero: 'Home',
      resume: 'Resume Vault',
      about: 'About',
      skills: 'Skills',
      services: 'Services',
      'build-intelligence': 'Build Intelligence',
      projects: 'Projects',
      certifications: 'Certifications',
      'signal-wall': 'Signal Wall',
      contact: 'Contact',
    };

    const setFavicon = (href) => {
      let link = document.querySelector("link[rel='icon']");
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'icon');
        document.head.appendChild(link);
      }
      link.setAttribute('type', 'image/svg+xml');
      link.setAttribute('href', href);
    };

    const animateTab = () => {
      if (document.hidden) {
        pulseIndex = (pulseIndex + 1) % 4;
        const pulse = ['◦', '◉', '◎', '◉'][pulseIndex];
        document.title = `${pulse} Come back to Tanuj's portfolio`;
        setFavicon(icons[2]);
        return;
      }

      const phrase = phrases[phraseIndex];
      const shown = phrase.slice(0, charIndex);
      const symbol = pulseIndex % 2 === 0 ? '◉' : '◎';
      const section = sectionLabel[activeSection] || 'Portfolio';
      document.title = `${symbol} ${shown || 'Welcome'} | ${section}`;

      if (!deleting) {
        charIndex += 1;
        if (charIndex > phrase.length) {
          deleting = true;
        }
      } else {
        charIndex -= 1;
        if (charIndex < 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          charIndex = 0;
        }
      }

      iconIndex = (iconIndex + 1) % icons.length;
      pulseIndex += 1;
      setFavicon(icons[iconIndex]);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          activeSection = visible[0].target.id;
        }
      },
      { threshold: [0.35, 0.6, 0.85] }
    );

    sectionIds.forEach((id) => {
      const node = document.getElementById(id);
      if (node) {
        observer.observe(node);
      }
    });

    document.title = '◉ Welcome to my portfolio | Home';
    setFavicon(icons[0]);

    const interval = window.setInterval(animateTab, 220);
    const onVisibility = () => animateTab();
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.clearInterval(interval);
      document.removeEventListener('visibilitychange', onVisibility);
      observer.disconnect();
    };
  }, []);

  return null;
};

export default TabOrchestrator;
