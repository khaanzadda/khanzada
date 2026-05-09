// import React, { useState } from "react";
// import "./Header.css";
// import logo from "../assets/logo.png";
// import ci from "../assets/ci.png";

// export default function Header() {
//     const [open, setOpen] = useState(false);

//     return (
//         <>
//         <header className= "main-header" >
//         <div className="header-left" >
//             <img
//                         src={ logo }
//     alt = "Taha Hashmi"
//     className = "brand-logo"
//         />
//         </div>

//         < div className = "header-right" >
//             <button
//                         className="contact-btn"
//     onClick = {() => setOpen(true)
// }
//                     >
//     CONTACT NOW
//         </button>

//         < button className = "menu-btn" aria - label="More options" >
//             <img src={ ci } alt = "Menu" className = "menu-icon" />
//                 </button>
//                 </div>
//                 </header>

// {/* POPUP */ }
// {
//     open && (
//         <div className="contact-overlay" onClick = {() => setOpen(false)
// }>
//     <div
//                         className="contact-modal"
// onClick = {(e) => e.stopPropagation()}
//                     >
//     <button
//                             className="close-btn"
// onClick = {() => setOpen(false)}
//                         >
//                             ✕
// </button>

//     < h2 > Contact Us </h2>

//         < form className = "contact-form" >
//             <input type="text" placeholder = "Your Name" />
//                 <input type="email" placeholder = "Email Address" />
//                     <textarea placeholder="Your Message" rows = "4" />
//                         <button type="submit" > Send Message </button>
//                             </form>
//                             </div>
//                             </div>
//             )}
// </>
//     );
// }



// /* ===== CONTACT MODAL ===== */

// .contact - overlay {
//     position: fixed;
//     inset: 0;
//     background: rgba(0, 0, 0, 0.65);
//     backdrop - filter: blur(6px);
//     z - index: 999;
//     display: flex;
//     align - items: center;
//     justify - content: center;
// }

// .contact - modal {
//     background: #fff;
//     color: #000;
//     width: 420px;
//     max - width: 92 %;
//     border - radius: 20px;
//     padding: 28px;
//     position: relative;
//     animation: scaleIn 0.25s ease;
// }

// @keyframes scaleIn {
//     from {
//         opacity: 0;
//         transform: scale(0.95);
//     }
//     to {
//         opacity: 1;
//         transform: scale(1);
//     }
// }

// .close - btn {
//     position: absolute;
//     top: 14px;
//     right: 16px;
//     background: transparent;
//     border: none;
//     font - size: 20px;
//     cursor: pointer;
// }

// .contact - modal h2 {
//     margin - bottom: 16px;
//     font - size: 22px;
// }

// .contact - form {
//     display: flex;
//     flex - direction: column;
//     gap: 12px;
// }

// .contact - form input,
// .contact - form textarea {
//     padding: 12px 14px;
//     border - radius: 10px;
//     border: 1px solid #ccc;
//     font - size: 14px;
//     font - family: inherit;
// }

// .contact - form button {
//     margin - top: 10px;
//     padding: 12px;
//     border - radius: 999px;
//     border: none;
//     background: #000;
//     color: #fff;
//     font - size: 13px;
//     letter - spacing: 0.12em;
//     cursor: pointer;
// }

// .contact - form button:hover {
//     opacity: 0.85;
// }
