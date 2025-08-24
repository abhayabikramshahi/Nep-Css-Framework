import React, { useRef } from "react";
import ColorDoc from "./ColorDoc";
import BackgroundDoc from "./BackgroundDoc";
import SizeDoc from "./SizeDoc";

export default function DocMain() {
  const colorRef = useRef(null);
  const backgroundRef = useRef(null);
  const sizeRef = useRef(null);

  return (
    <div className="w-full max-w-3xl space-y-12">
      <section ref={colorRef} id="colors">
        <ColorDoc />
      </section>
      <section ref={backgroundRef} id="backgrounds">
        <BackgroundDoc />
      </section>
      <section ref={sizeRef} id="sizes">
        <SizeDoc />
      </section>
    </div>
  );
}
