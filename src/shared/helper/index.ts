export const getNavigationLink = (slug: string) => `/post/${slug}`;
export const getHref = (slug: string) => ({
  pathname: "/post",
  query: { post: slug },
});

export function concatenateStrings(...args: string[]): string {
  return args.join(",");
}
