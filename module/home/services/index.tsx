"use client";

import React from "react";
import { WebDesignImage } from "./service-images";
import { UseIntersectionObserver } from "@/common/hooks/useIntersectionObserver";

export const Services = () => {
  const targetRef = UseIntersectionObserver({
    onIntersect: () => {
      targetRef?.current?.classList.add("animate-translateY", "opacity-100");
    },
    intersectionOptions: { root: null, rootMargin: "0px", threshold: 0.8 },
  });

  console.log("Service Page =========>",typeof Window === "undefined");

  return (
    <section className="py-24">
      <div className="text-center opacity-0" ref={targetRef}>
        <h2 className="text-6xl font-bold">
          My broad{" "}
          <span
            className="text-white px-1"
            style={{
              background: "linear-gradient(rgba(0, 0, 0, 0) 6%, #ff4a60 6%)",
            }}
          >
            set of services
          </span>
        </h2>
        <p className="mt-7 text-xl opacity-80 font-semibold max-w-2xl mx-auto">
          Lacus, adipiscing lectus convallis purus aliquet cursus magnaol montes
          augue donec cras turpis ultrices nulla sed doler.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
        <div className="border-[3px] border-[#0b0b0b] rounded-3xl overflow-hidden hover:shadow-[-10px_10px_#0b0b0b] hover:-translate-y-[10px] duration-300 transition-[transform,box-shadow] group flex flex-col">
          <WebDesignImage />
          <div className="p-8">
            <h3 className="text-3xl font-bold">Web Design</h3>
            <p className="mt-4 text-lg opacity-80 font-semibold leading-relaxed">
              Lacus, adipiscing lectus convallis purus aliquet cursus magnaol
              montes augue donec cras.
            </p>
          </div>
        </div>
        <div className="border-[3px] border-[#0b0b0b] rounded-3xl overflow-hidden hover:shadow-[-10px_10px_#0b0b0b] hover:-translate-y-[10px] duration-300 transition-[transform,box-shadow] group flex flex-col">
          <WebDesignImage />
          <div className="p-8">
            <h3 className="text-3xl font-bold">Web Design</h3>
            <p className="mt-4 text-lg opacity-80 font-semibold leading-relaxed">
              Lacus, adipiscing lectus convallis purus aliquet cursus magnaol
              montes augue donec cras.
            </p>
          </div>
        </div>
        <div className="border-[3px] border-[#0b0b0b] rounded-3xl overflow-hidden hover:shadow-[-10px_10px_#0b0b0b] hover:-translate-y-[10px] duration-300 transition-[transform,box-shadow] group flex flex-col">
          <WebDesignImage />
          <div className="p-8">
            <h3 className="text-3xl font-bold">Web Design</h3>
            <p className="mt-4 text-lg opacity-80 font-semibold leading-relaxed">
              Lacus, adipiscing lectus convallis purus aliquet cursus magnaol
              montes augue donec cras.
            </p>
          </div>
        </div>
        <div className="border-[3px] border-[#0b0b0b] rounded-3xl overflow-hidden hover:shadow-[-10px_10px_#0b0b0b] hover:-translate-y-[10px] duration-300 transition-[transform,box-shadow] group flex flex-col">
          <WebDesignImage />
          <div className="p-8">
            <h3 className="text-3xl font-bold">Web Design</h3>
            <p className="mt-4 text-lg opacity-80 font-semibold leading-relaxed">
              Lacus, adipiscing lectus convallis purus aliquet cursus magnaol
              montes augue donec cras.
            </p>
          </div>
        </div>
        <div className="border-[3px] border-[#0b0b0b] rounded-3xl overflow-hidden hover:shadow-[-10px_10px_#0b0b0b] hover:-translate-y-[10px] duration-300 transition-[transform,box-shadow] group flex flex-col">
          <WebDesignImage />
          <div className="p-8">
            <h3 className="text-3xl font-bold">Web Design</h3>
            <p className="mt-4 text-lg opacity-80 font-semibold leading-relaxed">
              Lacus, adipiscing lectus convallis purus aliquet cursus magnaol
              montes augue donec cras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
