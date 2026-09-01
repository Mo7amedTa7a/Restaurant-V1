import styles from "./Footer.module.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ShareIcon from "@mui/icons-material/Share";

const socialLinks = [
  { Icon: FacebookIcon, link: "#" },
  { Icon: InstagramIcon, link: "#" },
  { Icon: MusicNoteIcon, link: "#" },
  { Icon: XIcon, link: "#" },
  { Icon: YouTubeIcon, link: "#" },
  { Icon: ShareIcon, link: "#" },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBorder}></div>

      <p className={styles.subtitle}>Visit us on social media</p>

      <h2 className={styles.title}>Follow us now </h2>

      <div className={styles.socialLinks}>
        {socialLinks.map(({ Icon, link }, index) => (
          <a
            key={index}
            href={link}
            className={styles.socialIcon}
            aria-label={`Social link ${index + 1}`}
          >
            <Icon />
          </a>
        ))}
      </div>

      <p className={styles.copyright}>
        © 2026 <span>Maximum Fast Food</span>
      </p>
    </footer>
  );
};

export default Footer;
