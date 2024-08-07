"use client";

import RiseLoader from "react-spinners/RiseLoader";

export default function Loading() {
  return (
    <article>
      <h1 className="text-2xl mt-5">Henter lister</h1>
      <RiseLoader loading={true} />
    </article>
  );
}
