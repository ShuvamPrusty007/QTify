import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";

const Navbar = () => {

    return (
        <>
            <nav className={styles.navbar}>
                <Logo />
                <SearchBar search={"Search a song of your choice"} />
                <Button children={"Give Feedback"} />
            </nav>

        </>

    );
}

export default Navbar;




// import React from "react";
// import { Link } from "react-router-dom";
// import Button from "../Button/Button";
// import Logo from "../Logo/Logo";
// import Search from "../Search/Search";
// import styles from "./Navbar.module.css";

// function Navbar({ searchData }) {
//   return (
//     <nav className={styles.navbar}>
//       <Link to="/">
//         <Logo />
//       </Link>
//       <Search
//         placeholder="Search a song of your choice"
//         searchData={searchData}
//       />
//       <Button>Give Feedback</Button>
//     </nav>
//   );
// }

// export default Navbar;
