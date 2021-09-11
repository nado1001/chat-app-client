import React from "react";

interface ButtonProps {
  name: string;
  // ボタンをクリックした時のイベント
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  // 主ボタンか副ボタンかのフラグ primary?: boolean;
  primary?: any;
}

/**
 * @package
 */
export type { ButtonProps };
