import SectionTitle from "../components/SectionTitle";
import { motion } from "motion/react";
import { featuresData } from "../data/features";
import type { IFeature } from "../types";

export default function FeaturesSection() {
    return (
        <div id="features" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle text1="Features" text2="What you our genertor?" text3=" Create stunning thumbnails that get click, without the hassle." />
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-16 px-6">
                {featuresData.map((feature: IFeature, index: number) => (
                    <motion.div key={index} className={`${index === 1 ? 'p-px rounded-[13px] bg-linear-to-br from-pink-600 to-slate-800' : ''}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <div className="p-6 rounded-xl space-y-4 border border-slate-800 bg-slate-950 max-w-80 w-full">

                            <img src={feature.icon} alt={feature.icon} className="w-8 h-8" />
                            <h3 className="text-base font-medium text-white">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 line-clamp-2 pb-4">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="mt-40 relative mx-auto max-w-5xl">
                <div className="absolute -z-50 size-100 -top-10 -left-20 aspect-square rounded-full bg-pink-500/40 blur-3xl"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-12 items-center">

                    {/* LEFT BIG PREVIEW */}
                    <motion.div
                        className="md:col-span-2 relative group"
                        initial={{ y: 120, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    >
                        {/* Glow Background */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl rounded-3xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

                        <img
                            className="relative rounded-3xl border border-white/10 shadow-2xl w-full hover:scale-[1.02] transition duration-500"
                            src="/assets/features-showcase-1.png"
                            alt="AI Thumbnail Generator Preview"
                        />

                        {/* Floating badge */}
                        <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full text-xs text-pink-400 font-medium shadow-lg">
                            ⚡ AI Powered Thumbnail
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        className="md:col-span-1"
                        initial={{ y: 120, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 140, damping: 20 }}
                    >
                        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-xl">

                            <h3 className="text-3xl font-semibold text-white leading-snug">
                                Generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Scroll-Stopping</span> Thumbnails
                            </h3>

                            <p className="text-slate-400 mt-4 leading-relaxed">
                                Stop guessing what works. Our AI analyzes viral design patterns,
                                bold typography, and high-CTR layouts to generate thumbnails that
                                instantly grab attention.
                            </p>

                            {/* Feature bullets */}
                            <div className="mt-6 space-y-3 text-sm text-slate-300">
                                <div className="flex items-center gap-2">
                                    <span className="text-pink-500">✓</span> AI-Optimized Layouts
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-pink-500">✓</span> One-Click YouTube Preview
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-pink-500">✓</span> Download in HD Quality
                                </div>
                            </div>

                            {/* CTA Button */}
                            <a
                                href="#"
                                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium hover:scale-105 transition duration-300 shadow-lg shadow-pink-500/20"
                            >
                                🚀 Start Generating
                            </a>
                        </div>
                    </motion.div>

                </div>

            </div>
        </div>
    );
}