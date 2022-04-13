import style from "config/index.module.scss";

const MOBILE_BREACKPOINT = parseInt(style.mobileBreakpoint);

export const isMobile = (): boolean => {
  const width = document.body.clientWidth;
  return width <= MOBILE_BREACKPOINT;
};
