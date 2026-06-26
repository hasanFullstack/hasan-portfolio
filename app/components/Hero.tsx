"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Hero = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const dpr = window.devicePixelRatio || 1;
		let frameId = 0;

		const resize = () => {
			const parent = canvas.parentElement;
			if (!parent) return;
			const rect = parent.getBoundingClientRect();
			canvas.width = rect.width * dpr;
			canvas.height = rect.height * dpr;
			canvas.style.width = `${rect.width}px`;
			canvas.style.height = `${rect.height}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};

		const draw = (time: number) => {
			const t = time / 1000;
			const width = canvas.width / dpr;
			const height = canvas.height / dpr;

			const gradient = ctx.createRadialGradient(
				width * 0.5,
				height * 0.2,
				20,
				width * 0.5,
				height * 0.2,
				width * 0.9,
			);			gradient.addColorStop(0, "rgba(147, 51, 234, 0.35)");
			gradient.addColorStop(0.6, "rgba(15, 23, 42, 0.92)");
			gradient.addColorStop(1, "rgba(15, 23, 42, 0.2)");

			ctx.clearRect(0, 0, width, height);
			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, width, height);

			const offsetY = Math.sin(t * 1.2) * 8;
			const offsetX = Math.cos(t * 0.8) * 6;
			const screen = {
				x: width * 0.05 + offsetX,
				y: height * 0.08 + offsetY,
				w: width * 0.9,
				h: height * 0.8,
			};

			const depth = 18;
			ctx.save();
			ctx.beginPath();
			ctx.moveTo(screen.x, screen.y);
			ctx.lineTo(screen.x + screen.w, screen.y + depth * 0.2);
			ctx.lineTo(screen.x + screen.w - depth, screen.y + screen.h + depth * 0.5);
			ctx.lineTo(screen.x - depth, screen.y + screen.h - depth * 0.1);
			ctx.closePath();
			ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
			ctx.fill();
			ctx.strokeStyle = "rgba(255,255,255,0.08)";
			ctx.lineWidth = 1.5;
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(screen.x, screen.y + 22);
			ctx.lineTo(screen.x + screen.w - 36, screen.y + 22);
			ctx.lineTo(screen.x + screen.w - 50, screen.y + 46);
			ctx.lineTo(screen.x - 16, screen.y + 26);
			ctx.closePath();
			ctx.fillStyle = "rgba(147, 51, 234, 0.12)";
			ctx.fill();

			const panelX = screen.x + 18;
			const panelY = screen.y + 24;
			const panelW = screen.w - 44;
			const panelH = screen.h - 68;
			ctx.fillStyle = "rgba(15, 23, 42, 0.92)";
			ctx.fillRect(panelX, panelY, panelW, panelH);

			ctx.strokeStyle = "rgba(255,255,255,0.08)";
			ctx.lineWidth = 1;
			ctx.strokeRect(panelX, panelY, panelW, panelH);

			const glow = ctx.createRadialGradient(
				panelX + panelW * 0.65,
				panelY + panelH * 0.3,
				0,
				panelX + panelW * 0.65,
				panelY + panelH * 0.3,
				panelW * 0.65,
			);
			glow.addColorStop(0, "rgba(99, 102, 241, 0.35)");
			glow.addColorStop(1, "rgba(99, 102, 241, 0)");
			ctx.fillStyle = glow;
			ctx.fillRect(panelX, panelY, panelW, panelH);

			ctx.fillStyle = "rgba(255,255,255,0.68)";
			for (let row = 0; row < 10; row += 1) {
				const y = panelY + 24 + row * 18;
				const widthRow = panelW * (0.95 - row * 0.03);
				ctx.fillRect(panelX + 16, y, widthRow, 6);
			}

			ctx.fillStyle = "rgba(147, 51, 234, 0.5)";
			for (let i = 0; i < 4; i += 1) {
				const y = panelY + 32 + i * 42;
				ctx.fillRect(panelX + panelW - 88, y, 42, 6);
			}

			ctx.restore();

			const glowCircle = { x: width * 0.3 + Math.sin(t * 1.4) * 8, y: height * 0.7 + Math.cos(t * 1.4) * 6, r: 28 };
			ctx.beginPath();
			ctx.arc(glowCircle.x, glowCircle.y, glowCircle.r, 0, Math.PI * 2);
			ctx.fillStyle = "rgba(147, 51, 234, 0.12)";
			ctx.fill();

			const ring = { x: width * 0.75 + Math.cos(t * 0.9) * 10, y: height * 0.45 + Math.sin(t * 1.1) * 8, r: 16 };
			ctx.beginPath();
			ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
			ctx.strokeStyle = "rgba(59, 130, 246, 0.24)";
			ctx.lineWidth = 2;
			ctx.stroke();

			ctx.beginPath();
			ctx.arc(ring.x, ring.y, ring.r + 12, 0, Math.PI * 2);
			ctx.strokeStyle = "rgba(255,255,255,0.08)";
			ctx.lineWidth = 1.2;
			ctx.stroke();

			frameId = requestAnimationFrame(draw);
		};

		resize();
		frameId = requestAnimationFrame(draw);
		window.addEventListener("resize", resize);

		return () => {
			cancelAnimationFrame(frameId);
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		<section className="relative mx-auto flex h-screen w-full overflow-hidden">
			<div className="absolute inset-0">
				<motion.div
					animate={{
						y: [0, -24, 0],
						x: [0, 24, 0],
						scale: [1, 1.08, 1],
						opacity: [0.7, 0.95, 0.7],
					}}
					transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: [0.22, 1, 0.36, 1] }}
					className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-[#915EFF]/30 blur-3xl"
				/>
				<motion.div
					animate={{
						y: [0, 28, 0],
						x: [0, -18, 0],
						scale: [1, 1.04, 1],
						opacity: [0.6, 0.9, 0.6],
					}}
					transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: [0.22, 1, 0.36, 1] }}
					className="absolute bottom-[18%] right-[8%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
				/>
			</div>

			<div className="paddingX absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5">
				<div className="mt-5 flex flex-col items-center justify-center">
					<div className="h-5 w-5 rounded-full bg-[#915EFF]" />
					<div className="violet-gradient h-40 w-1 sm:h-80" />
				</div>
				<motion.div
					initial={{ opacity: 0, y: 28 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
					className="max-w-2xl"
				>
					<h1 className="heroHeadText text-white">
						Hi, I&apos;m <span className="text-[#915EFF]">Hasan</span>
					</h1>
					<p className="heroSubText">A Software Engineer</p>
					<p className="mt-4 max-w-xl text-[18px] leading-[30px] text-secondary">
						I build modern web experiences with clean UI, strong performance, and thoughtful product design.
					</p>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.95, y: 24 }}
				animate={{
					opacity: 1,
					scale: 1,
					y: [0, -8, 0],
					rotateX: [12, -4, 12],
					rotateY: [-8, 8, -8],
					rotateZ: [-3, 3, -3],
				}}
				transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: [0.22, 1, 0.36, 1] }}
				className="pointer-events-none absolute right-8 top-[22%] hidden h-[320px] w-[240px] items-center justify-center lg:flex"
				style={{ transformStyle: "preserve-3d", perspective: 1200 }}
			>
				<div
					className="relative h-[270px] w-[210px] rounded-[30px] border border-white/15 bg-gradient-to-br from-white/20 via-white/10 to-[#915EFF]/20 p-4 shadow-[0_35px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl"
					style={{ transform: "rotateX(16deg) rotateY(-18deg)" }}
				>
					<div className="absolute inset-0 rounded-[30px] border border-white/10" />
					<div className="relative h-full w-full overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/80 p-3">
						<div className="mb-3 flex items-center gap-2">
							<div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
							<div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
							<div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
						</div>
						<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-4">
							<div className="mb-3 h-2 w-20 rounded-full bg-white/20" />
							<div className="mb-2 h-2 w-full rounded-full bg-white/10" />
							<div className="mb-2 h-2 w-4/5 rounded-full bg-white/10" />
							<div className="mb-4 h-2 w-3/5 rounded-full bg-white/10" />
							<div className="h-20 rounded-[16px] border border-[#915EFF]/30 bg-gradient-to-br from-[#915EFF]/25 via-transparent to-cyan-400/15" />
						</div>
					</div>
					<div className="absolute -bottom-5 left-10 h-6 w-32 rounded-b-2xl border border-white/10 bg-slate-800/70" />
					<div className="absolute -left-5 bottom-8 h-16 w-8 rounded-r-2xl border border-white/10 bg-slate-800/70 shadow-[0_20px_40px_rgba(0,0,0,0.25)]" />
				</div>
			</motion.div>

			<div className="absolute inset-0 hidden lg:block">
				<div className="absolute right-10 top-[18%] h-64 w-64 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm" />
				<div className="absolute bottom-[20%] left-[15%] h-40 w-40 rounded-full border border-[#915EFF]/30 bg-[#915EFF]/10" />
			</div>

			<div className="pointer-events-none absolute right-8 top-[22%] hidden h-[320px] w-[440px] overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/40 shadow-[0_35px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:flex">
				<canvas ref={canvasRef} className="h-full w-full" />
			</div>

			<div className="absolute bottom-32 flex w-full items-center justify-center xs:bottom-2">
				<a href="#about">
					<div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Number.POSITIVE_INFINITY,
								repeatType: "loop",
							}}
							className="mb-1 h-3 w-3 rounded-full bg-secondary"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
