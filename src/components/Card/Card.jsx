import React from "react";
import styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

function Card({ data, type }) {
  switch (type) {
    case "album": {
      const { image, follows, title, songs } = data;
      return (
        // "?." operator will give null if the value before ?. is undefined
        <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="album" />
              <div className={styles.banner}>
                <Chip
                  label={`${follows} Follows`}
                  className={styles.chip}
                  size="small"
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        </Tooltip>
      );
    }

    case "song": {
      const { image, likes, title, songs } = data;
      return (
        // no tooltip required here according to figma provided
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <img src={image} alt="album" loading="lazy" />
            <div className={styles.banner}>
              <div className={styles.pill}>
                <p>{likes} Likes</p>
              </div>
            </div>
          </div>
          <div className={styles.titleWrapper}>
            <p>{title}</p>
          </div>
        </div>
      );
    }

    default:
      return <></>;
  }
}

export default Card;

/*
sample data recieved: a data is representing one album ->

{
id: "111a44fc-db51-4c0e-9dc8-486ae6fab50b",
title: "Reasonable Stretch",
description: "Tenetur maiores quibusdam amet quae minus nihil enim minima.",
follows: 9687,
image: "https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
slug: "reasonable-stretch",
songs: [
  {      
      id: "cfad0b8e-6d16-4349-8b39-3f075bedd4a6",
      title: "Nothing Compares 2 U",
      artists: [
      "Morris Blick",
      "Fred Upton"
      ],
      genre: {
      key: "pop",
      label: "Pop"
      },
      likes: 98731,
      image: "https://images.pexels.com/photos/8155/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      durationInMs: 58097
  },
  {},
  {},
  {}, etc,
 ]
}

*/





// import React from "react";
// import styles from "./Card.module.css";
// import { Chip, Tooltip } from "@mui/material";

// function Card({ data, type }) {
//   switch (type) {
//     case "album": {
//       const { image, follows, title, songs } = data;
//       return (
//         // "?." operator will give null if the value before ?. is undefined
//         <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
//           <div className={styles.wrapper}>
//             <div className={styles.card}>
//               <img src={image} alt="album" />
//               <div className={styles.banner}>
//                 <Chip
//                   label={`${follows} Follows`}
//                   className={styles.chip}
//                   size="small"
//                 />
//               </div>
//             </div>
//             <div className={styles.titleWrapper}>
//               <p>{title}</p>
//             </div>
//           </div>
//         </Tooltip>
//       );
//     }

//     case "song": {
//       const { image, likes, title, songs } = data;
//       return (
//         // no tooltip required here according to figma provided
//         <div className={styles.wrapper}>
//           <div className={styles.card}>
//             <img src={image} alt="album" loading="lazy" />
//             <div className={styles.banner}>
//               <div className={styles.pill}>
//                 <p>{likes} Likes</p>
//               </div>
//             </div>
//           </div>
//           <div className={styles.titleWrapper}>
//             <p>{title}</p>
//           </div>
//         </div>
//       );
//     }

//     default:
//       return <></>;
//   }
// }

// export default Card;




// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import CardActionArea from '@mui/material/CardActionArea';
// import Chip from '@mui/material/Chip'; 
// import styles from './Card.module.css'; 

// const AlbumCard = ({ album }) => {
//   if (!album) return null; 

//   return (
//     <Card className={styles.card}>
//       <CardActionArea>
//       <div className={styles.mediaSection}>
//           <CardMedia
//             component="img"
//             height="180" 
//             image={album.image}
//             alt={album.title || 'Album Cover'}
//             className={styles['card-media']}
//           />
//           <Chip
//             label={`${album.follows || 0} Follows`}
//             color="primary"
//             className={styles.chip} 
//           />
//         </div>
//       </CardActionArea>
//       <CardContent className={styles['card-content']}>
//           <Typography variant="h6" component="div" className={styles.typography}>
//             {album.title || 'Album Title'}
//           </Typography>
//         </CardContent>
//     </Card>
//   );
// };

// export default AlbumCard;

















// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import CardActionArea from '@mui/material/CardActionArea';
// import Chip from '@mui/material/Chip'; 
// import styles from './Card.module.css'; 
// import axios from 'axios'; 

// const AlbumCard = () => {
//   const [album, setAlbum] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top'); // Example URL
//         setAlbum(response.data);
//       } catch (error) {
//         console.log(error); 
//       }
//     };

//     fetchData();
//   }, []);

//   if (!album) return null; 

//   return (
//     <Card className={styles.card}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="180" // Adjust height as needed
//           image={album.image}
//           alt={album.title}
//           className={styles['card-media']} // Apply CSS styles
//         />
//         <CardContent className={styles['card-content']}>
//           <Chip
//             label={`${album.follows} Follows`}
//             color="primary"
//             className={styles.chip} // Apply CSS styles
//           />
//           <Typography variant="h6" component="div" className={styles.typography}>
//             {album.title}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };

// export default AlbumCard;

// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import CardActionArea from '@mui/material/CardActionArea';
// import Chip from '@mui/material/Chip'; // Import Chip
// import styles from './Card.module.css'; // Import CSS module
// import axios from 'axios'; // Import axios for API requests

// const AlbumCard = ({ album }) => {
//   return (
//     <Card className={styles.card}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="180" // Adjust height as needed
//           image={album.image || '/path/to/default-image.jpg'} // Use a default image if none provided
//           alt={album.title || 'Album Cover'} // Fallback alt text
//           className={styles['card-media']} // Apply CSS styles
//         />
//         <CardContent className={styles['card-content']}>
//           <Chip
//             label={`${album.follows || 0} Follows`} // Default to 0 if follows is undefined
//             color="primary"
//             className={styles.chip} // Apply CSS styles
//           />
//           <Typography variant="h6" component="div" className={styles.typography}>
//             {album.title || 'Album Title'} // Default text if title is undefined
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };

// const AlbumList = () => {
//   const [albums, setAlbums] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top'); // Fetch top albums
//         setAlbums(response.data); // Set the albums data
//       } catch (error) {
//         console.log(error); // Log errors if needed
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className={styles.albumList}>
//       {albums.map((album) => (
//         <AlbumCard key={album.id} album={album} />
//       ))}
//     </div>
//   );
// };

// export default AlbumList;

// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import CardActionArea from '@mui/material/CardActionArea';
// import Chip from '@mui/material/Chip'; 
// import styles from './Card.module.css'; 

// const AlbumCard = ({ album }) => {
//   if (!album) return null; 

//   return (
//     <Card className={styles.card}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="180" 
//           image={album.image }
//           alt={album.title}
//           className={styles['card-media']}
//         />
//         <CardContent className={styles['card-content']}>
//           <Chip
//             label={`${album.follows} Follows`}
//             color="primary"
//             className={styles.chip} 
//           />
//           <Typography variant="h6" component="div" className={styles.typography}>
//             {album.title || 'Album Title'}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };

// export default AlbumCard;