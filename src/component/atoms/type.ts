import React from "react";

type ButtonProps = {
  name: string;
  // ボタンをクリックした時のイベント
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  // 主ボタンか副ボタンかのフラグ primary?: boolean;
  primary?: boolean;
};

/**
 * @package
 */
export type { ButtonProps };
