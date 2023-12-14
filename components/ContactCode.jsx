import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'jdjia93@gmail.com',
    href: 'mailto:jdjia93@gmail.com',
  },
  {
    social: 'LinkedIn',
    link: 'linkedin.com/in/johnathanjia',
    href: 'www.linkedin.com/in/johnathan-jia-a01315170',
  },
  {
    social: 'GitHub',
    link: 'github.com/drkostas',
    href: 'https://github.com/drkostas',
  },
  {
    social: 'Google Scholar',
    link: 'scholar.google.com/jjia',
    href: 'https://scholar.google.com/citations?hl=en&authuser=1&user=IY2qvMQAAAAJ',
  },
  {
    social: 'Website',
    link: 'jj.github.io',
    href: 'https://jj.github.io',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
       <p className={styles.line}>
       tag: <a>production</a>
        </p>
      <p className={styles.line}>
        <span>kostas</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
