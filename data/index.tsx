import { FaGithub, FaGoogle } from "react-icons/fa";
import { Navlinkstypes, SignInMethodstypes } from "./types";

export const Navlinks: Navlinkstypes[] = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Admin", link: "/admin" },
  { id: 3, title: "register", link: "/register" },
  { id: 4, title: "login", link: "/login" },
];

export const signInMethods: SignInMethodstypes[] = [
  { id: 2, icon: <FaGoogle />, title: 'sign in with google' },
  { id: 3, icon: <FaGithub />, title: 'sign in with github' },
];
