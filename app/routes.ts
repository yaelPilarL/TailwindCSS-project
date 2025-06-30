import { index, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  {
    path: "colors", // URL: /colors
    file: "routes/colors.tsx",
  },
] satisfies RouteConfig;
