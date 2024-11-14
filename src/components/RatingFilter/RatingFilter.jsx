// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import "./ratingFilter.css";

// const RatingFilter = ({ value, onChange }) => {
//   const handleStarClick = (rating) => {
//     onChange(rating);
//   };

//   return (
//     <div className="rating-filter">
//       <label>Rating</label>
//       <div className="star-container">
//         {[1, 2, 3, 4, 5].map((starValue) => (
//           <FontAwesomeIcon
//             key={starValue}
//             icon={faStar}
//             className={`star ${starValue <= value ? "filled" : ""}`}
//             onClick={() => handleStarClick(starValue)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RatingFilter;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./ratingFilter.css";

const RatingFilter = ({ value, onChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseEnter = (rating) => {
    setHoveredRating(rating);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleStarClick = (rating) => {
    onChange(rating);
  };

  return (
    <div className="rating-filter">
      <label>Rating</label>
      <div
        className="star-container"
        onMouseLeave={handleMouseLeave} 
      >
        {[1, 2, 3, 4, 5].map((starValue) => (
          <FontAwesomeIcon
            key={starValue}
            icon={faStar}
            className={`star ${
              starValue <= (hoveredRating || value) ? "filled" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(starValue)} 
            onClick={() => handleStarClick(starValue)}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingFilter;
