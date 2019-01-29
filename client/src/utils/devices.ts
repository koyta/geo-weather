export const DEVICE_TYPE = {
  MOBILE: "mobile",
  MOBILE_BIG: "mobile-big",
  TABLET: "tablet",
  TABLET_BIG: "tablet-big",
  LAPTOP: "laptop",
  DESKTOP: "desktop",
};

export function checkDevice() {
  const width = window.innerWidth || document.body.clientWidth;
  if (width < 576) return DEVICE_TYPE.MOBILE;
  if (width >= 576 && width < 768) return DEVICE_TYPE.MOBILE_BIG;
  if (width >= 768 && width < 1024) return DEVICE_TYPE.TABLET;
  if (width >= 1024 && width < 1440) return DEVICE_TYPE.TABLET_BIG;
  if (width === 1440) return DEVICE_TYPE.LAPTOP;
  return DEVICE_TYPE.DESKTOP;
}
