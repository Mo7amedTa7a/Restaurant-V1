import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

function ProductSkeleton() {
  return (
    <Card sx={{ width: "300px", minHeight: "350px" }}>
      {/* Product Image */}
      <Skeleton
        variant="rectangular"
        width="100%"
        height={180}
        animation="wave"
      />

      <CardContent>
        {/* Product Name */}
        <Skeleton
          variant="text"
          width="70%"
          height={35}
          animation="wave"
        />

        {/* Product Description */}
        <Skeleton
          variant="text"
          width="100%"
          height={20}
          animation="wave"
        />

        <Skeleton
          variant="text"
          width="85%"
          height={20}
          animation="wave"
        />

        {/* Price */}
        <Skeleton
          variant="text"
          width="30%"
          height={35}
          sx={{ marginTop: "10px" }}
          animation="wave"
        />

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "10px",
          }}
        >
          <Skeleton
            variant="rounded"
            width={90}
            height={30}
            animation="wave"
          />

          <Skeleton
            variant="text"
            width={60}
            height={30}
            animation="wave"
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductSkeleton;