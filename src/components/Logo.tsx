import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h3 className="text-3xl font-semibold hover:text-[#159EEC] cursor-pointer duration-200">
      Meddical
      </h3>
    </Link>
  );
};

export default Logo;
