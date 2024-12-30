"use client";
import React from "react";

const SaveIcon = ({ size = 24, fill = "currentColor", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={size}
    height={size}
    style={{ fill }}  // インラインスタイルで対応
    className={className} // カスタムクラス名
  >
    <path
      d="M502.394,106.098L396.296,0h-15.162v121.49H130.866V0H60.27C26.987,0,0,26.987,0,60.271v391.458
        C0,485.013,26.987,512,60.27,512h391.459C485.014,512,512,485.013,512,451.729V129.286
        C512,120.591,508.542,112.256,502.394,106.098z M408.39,428.121H103.609V216.944H408.39V428.121z"
    />
    <rect
      x="282.012"
      width="68.027"
      height="94.015"
    />
  </svg>
);

export default SaveIcon;
