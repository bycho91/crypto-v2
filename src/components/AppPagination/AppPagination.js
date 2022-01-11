import Pagination from "@mui/material/Pagination";
import React from "react";

const AppPagination = () => {
  return (
    <div
      className="pagination"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "2em",
      }}
    >
      <Pagination count={10} />
    </div>
  );
};

export default AppPagination;
