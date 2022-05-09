import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
  const currentBalance = useSelector((state) => state.balance);

  const store = useSelector((state) => state);
  console.log("store", store);
  return (
    <div>
      <h2>Rs.{currentBalance}</h2>
    </div>
  );
};

export default Balance;
