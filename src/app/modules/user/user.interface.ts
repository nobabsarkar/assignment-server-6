export type TUser = {
  name: string;
  image: string;
  email: string;
  password: string;
  role: "USER" | "ADMIN";
};
