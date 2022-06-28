import React from "react";
import Loader from "react-loader-spinner";

function Loading() {
  return (
    <div className="flex justify-center items-center">
      <Loader type="puff" color="#00BFFF" height={550} width={90} />
    </div>
  );
}

export default Loading;
