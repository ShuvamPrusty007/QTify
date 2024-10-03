import React from "react";
import styles from "./Logo.module.css";
import LogoImg from "../../assets/logo.png";

const Logo=()=>{

return(
    <div className={styles.logoDiv}>
        <img src={LogoImg} width={67} alt="logo"/>
    </div>
)
};

export default Logo;




// import React from "react";
// import LogoImage from "../../assets/logo.png";
// import styles from "./Logo.module.css";

// export default function Logo() {
//   return (
//   <div className={styles.logoDiv}>
//         <img src={LogoImage} width={67} alt="logo"/>
//     </div>
//   )

// }
