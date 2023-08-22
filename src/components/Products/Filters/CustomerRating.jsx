import { useContext } from "react";
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
  
  const { rating, hover, setHover, handleRatingSelect } = useContext(AppContext)

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  
  // useEffect(() => {
  //   setCategory(select);
  // },[])
  
  return (
    <div className="3xl:p-3 2xl:p-3 xl:p-3 lg:p-3 md:p-3 xs:p-3 2xs:p-2 3xs:p-2">
      <h1 className="text-xs font-semibold uppercase mb-2 2xs:text-2xs 3xs:text-2xs">Customer Rating</h1>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Rating
        sx={{
          "@media (min-width: 520px) and (max-width: 639px)": {
            fontSize: '24px'
        }, 
        "@media (min-width: 415px) and (max-width: 519px)": {
          fontSize: '16px'
      },
        "@media (min-width: 360px) and (max-width: 414px)": {
          fontSize: '16px'
      }
        }}
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
          <Box className="xs:text-xs 2xs:text-2xs 3xs:text-2xs" sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
        )}
      </Box>
    </div>
  );
}

export default CustomerRating;
