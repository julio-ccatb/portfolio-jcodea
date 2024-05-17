"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("../_components/scene"), {
  ssr: false,
  loading: () => <h3>...Loading</h3>,
});

export default function Home() {
  return (
    <main className="bg-background relative h-60">
      <Scene />
    </main>
  );
}
