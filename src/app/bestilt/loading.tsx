"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <article>
      <h1 className="text-xl mt-5">Når produktet ankommer fjern det fra listen</h1>
      <div className="grid grid-cols-[1fr,100px] gap-2">
        <Skeleton
          className="h-8 mb-2"
          count={5}
        />
        <Skeleton
          className="h-8 mb-2"
          count={5}
          baseColor="#ef4444"
          highlightColor="#f58a8a"
        />
      </div>
    </article>
  );
}
