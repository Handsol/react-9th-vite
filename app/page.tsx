import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      HomePage
      <Link href="/detail">To detail Page</Link>
    </div>
  );
};

export default HomePage;
