// // Footer.jsx — Site footer with contact, social links, and copyright
// import React from "react";
// import "./Footer.css";

// // Social icon SVGs (inline — no external dependency needed)
// const SocialIcon = ({ href, label, children }) => (
//   <a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="footer__social-link"
//     aria-label={label}
//   >
//     {children}
//   </a>
// );

// const Footer = () => {
//   const year = new Date().getFullYear();

//   return (
//     <footer id="contact" className="footer">
//       {/* Top content area */}
//       <div className="footer__top">
//         {/* Brand column */}
//         <div className="footer__brand">
//           <div className="footer__logo">☕ Coffee House</div>
//           <p className="footer__tagline">
//             Brewed with passion, served with love. Every cup tells a story.
//           </p>

//           {/* Social icons */}
//           <div className="footer__socials">
//             {/* Instagram */}
//             <SocialIcon href="https://instagram.com" label="Instagram">
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//                 <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//               </svg>
//             </SocialIcon>

//             {/* Twitter / X */}
//             <SocialIcon href="https://twitter.com" label="Twitter">
//               <svg viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//               </svg>
//             </SocialIcon>

//             {/* Facebook */}
//             <SocialIcon href="https://facebook.com" label="Facebook">
//               <svg viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//               </svg>
//             </SocialIcon>

//             {/* YouTube */}
//             <SocialIcon href="https://youtube.com" label="YouTube">
//               <svg viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//               </svg>
//             </SocialIcon>
//           </div>
//         </div>

//         {/* Quick links */}
//         <div className="footer__col">
//           <h4 className="footer__col-title">Quick Links</h4>
//           <ul className="footer__list">
//             <li><a href="#home">Home</a></li>
//             <li><a href="#menu">Our Menu</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </div>

//         {/* Contact info */}
//         <div className="footer__col">
//           <h4 className="footer__col-title">Contact Us</h4>
//           <ul className="footer__list footer__list--contact">
//             <li>📍 123 Brew Lane, Mumbai, MH</li>
//             <li>📞 +91 98765 43210</li>
//             <li>✉️ hello@coffeehouse.in</li>
//             <li>🕐 Mon–Sun: 7 AM – 10 PM</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom copyright bar */}
//       <div className="footer__bottom">
//         <p>© {year} Coffee House. All rights reserved.</p>
//         <p className="footer__made">Made with ☕ &amp; ❤️</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
