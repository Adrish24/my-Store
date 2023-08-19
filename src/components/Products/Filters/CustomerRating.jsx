import { useContext, useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import AppContext from "../../../context/AppContext";

const labels = {
  1: "& above",
  2: "& above",
  3: "& above",
  4: "& above",
};


function CustomerRating() {
  
  const { rating, hover, setHover,select, setCategory, handleRatingSelect } = useContext(AppContext)

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  
  // useEffect(() => {
  //   setCategory(select);
  // },[])
  
  return (
    <div className="p-3">
      <h1 className="text-xs font-semibold uppercase mb-2">Customer Rating</h1>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Rating
          name="hover-feedback"
          value={rating}
          precision={1}
          getLabelText={getLabelText}
          onChange={(event, newRating) => {
            handleRatingSelect(newRating);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {rating !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
        )}
      </Box>
    </div>
  );
}

export default CustomerRating;
