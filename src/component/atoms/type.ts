import React from "react";

type ButtonProps = {
  name: string;
  // ボタンをクリックした時のイベント
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  // 主ボタンか副ボタンかのフラグ
  primary?: string;
};

type TextFieldProps = {
  // テキストが入力された場合のイベント
  onInput: (e: React.FormEvent<HTMLDivElement>) => void; // テキストからフォーカスが外れた場合のイベント
  onBlur: (e: React.FormEvent<HTMLDivElement>) => void; // プレースホルダー用
  placeholder: string;
};

/**
 * @package
 */
export type { ButtonProps, TextFieldProps };
