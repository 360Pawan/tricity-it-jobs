import React from "react";

export const Text = () => {
  return (
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
  );
};
