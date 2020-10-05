const breakpoints: { xs: number; sm: number; md: number; xl: number } = {
  xs: 37.5,
  sm: 56.25,
  md: 75,
  xl: 112.5,
};
const sizes = {
  xs: `@media only screen and (max-width: ${breakpoints.xs}em)`,
  sm: `@media only screen and (max-width: ${breakpoints.sm}em)`,
  md: `@media only screen and (max-width: ${breakpoints.md}em)`,
  xl: `@media only screen and (max-width: ${breakpoints.xl}em)`,
};

const { xs, sm, md, xl } = sizes;
export { xs, sm, md, xl };
