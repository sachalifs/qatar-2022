import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="M0 0h48v32H0V0Z" fill="#EC1920" />
      <path d="M0 0h32v32H0V0Z" fill="#fff" />
      <path d="M0 0h16v32H0V0Z" fill="#051440" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v32H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
