"use client";

import dynamic from "next/dynamic";

const StarsCanvas = dynamic(
	() => import("./canvas").then((mod) => mod.StarsCanvas),
	{
		ssr: false,
		loading: () => null,
	},
);

export default StarsCanvas;
