import React from "react";
import { useSelector } from "react-redux";

const AccountStatus = () => {
  const isSavingsAccount = useSelector((state) => state.isSavingsAccount);
  return (
    <div>
      <h2>{isSavingsAccount ? "Savings Account" : "Current Account"}</h2>
    </div>
  );
};

export default AccountStatus;
