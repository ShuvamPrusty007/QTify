import React from "react";
// The imported PNG file is treated as a React component, and you can use it just like any other React component in your application.
import {ReactComponent as SearchIcon} from  "../../assets/Search-icon.svg";
import styles from "./Search.module.css";

const Search = ({search}) => {

    return (
        <form className={styles.wrapper}>
            <input
                className={styles.search}
                placeholder={search}
            />
            <button className={styles.searchButton} type="submit"><SearchIcon /></button>
        </form>
    );
}

export default Search;





// import React from "react";
// import styles from "./Search.module.css";
// import { ReactComponent as SearchIcon } from "../assets/Search icon.svg";
// import {useAutocomplete} from "@mui/base/useAutocomplete";
// import { styled } from "@mui/system";
// import { truncate } from "../helpers/helpers";
// import { useNavigate } from "react-router-dom";
// import { Tooltip } from "@mui/material";


// const Listbox = styled("ul")(({ theme }) => ({
//   width: "100%",
//   margin: 0,
//   padding: 0,
//   position: "absolute",
//   borderRadius: theme.shape.borderRadius,  // Use theme-defined border radius
//   border: `1px solid ${theme.palette.primary.main}`,  // Use theme primary color
//   top: theme.spacing(7.5),  // 60px, using theme spacing for consistency
//   height: "max-content",
//   maxHeight: "500px",
//   zIndex: 10,
//   overflowY: "scroll",
//   left: 0,
//   bottom: 0,
//   right: 0,
//   listStyle: "none",
//   backgroundColor: theme.palette.background.default,  // Use theme background color
//   overflow: "auto",
//   "& li.Mui-focused": {
//     backgroundColor: theme.palette.action.hover,  // Use theme action hover color
//     color: theme.palette.getContrastText(theme.palette.action.hover),  // Contrast text color
//     cursor: "pointer",
//   },
//   "& li:active": {
//     backgroundColor: theme.palette.action.selected,  // Use theme action selected color
//     color: theme.palette.getContrastText(theme.palette.action.selected),  // Contrast text color
//   },
// }));


// function Search({ searchData, placeholder }) {
//   const {
//     getRootProps,
//     getInputLabelProps,
//     value,
//     getInputProps,
//     getListboxProps,
//     getOptionProps,
//     groupedOptions,
//   } = useAutocomplete({
//     id: "use-autocomplete-demo",
//     options: searchData || [],
//     getOptionLabel: (option) => option.title,
//   });

//   const navigate = useNavigate();
//   const onSubmit = (e, value) => {
//     e.preventDefault();
//     console.log(value);
//     navigate(`/album/${value.slug}`);
//     //Process form data, call API, set state etc.
//   };

//   return (
//     <div style={{ position: "relative" }}>
//       <form
//         className={styles.wrapper}
//         onSubmit={(e) => {
//           onSubmit(e, value);
//         }}
//       >
//         <div {...getRootProps()}>
//           <input
//             name="album"
//             className={styles.search}
//             placeholder={placeholder}
//             required
//             {...getInputProps()}
//           />
//         </div>
//         <div>
//           <button className={styles.searchButton} type="submit">
//             <SearchIcon />
//           </button>
//         </div>
//       </form>
//       {groupedOptions.length > 0 ? (
//         <Listbox {...getListboxProps()}>
//           {groupedOptions.map((option, index) => {
//             // console.log(option);
//             const artists = option.songs.reduce((accumulator, currentValue) => {
//               accumulator.push(...currentValue.artists);
//               return accumulator;
//             }, []);

//             return (
//               <li
//                 className={styles.listElement}
//                 {...getOptionProps({ option, index })}
//               >
//                 <div>
//                   <p className={styles.albumTitle}>{option.title}</p>

//                   <p className={styles.albumArtists}>
//                     {truncate(artists.join(", "), 40)}
//                   </p>
//                 </div>
//               </li>
//             );
//           })}
//         </Listbox>
//       ) : null}
//     </div>
//   );
// }

// export default Search;



// const Listbox = styled("ul")(({ theme }) => ({
//   width: "100%",
//   margin: 0,
//   padding: 0,
//   position: "absolute",
//   borderRadius: "0px 0px 10px 10px",
//   border: "1px solid var(--color-primary)",
//   top: 60,
//   height: "max-content",
//   maxHeight: "500px",
//   zIndex: 10,
//   overflowY: "scroll",
//   left: 0,
//   bottom: 0,
//   right: 0,
//   listStyle: "none",
//   backgroundColor: "var(--color-black)",
//   overflow: "auto",
//   "& li.Mui-focused": {
//     backgroundColor: "#4a8df6",
//     color: "white",
//     cursor: "pointer",
//   },
//   "& li:active": {
//     backgroundColor: "#2977f5",
//     color: "white",
//   },
// }));