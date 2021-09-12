import React from "react";

type ButtonProps = {
  name: string;
  // ボタンをクリックした時のイベント
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  // 主ボタンか副ボタンかのフラグ
  primary?: string;
};

/**
 * @package
 */
export type { ButtonProps };
