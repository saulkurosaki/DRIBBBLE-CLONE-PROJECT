import { graph, config, auth } from "@grafbase/sdk";

const g = graph.Standalone();

// @ts-ignore
const Project = g.type("Project", {
  title: g.string(),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string(),
});
// .auth((rules: any) => {
//   rules.public().read();
//   rules.private().create().delete().update();
// });

// @ts-ignore
const User = g.type("User", {
  name: g.string(),
  email: g.string(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(),
  projects: g.ref(Project).list().optional(),
});
// .auth((rules: any) => {
//   rules.public().read();
// });

// const jwt = auth.JWT({
//   issuer: "grafbase",
//   secret: g.env("NEXTAUTH_SECRET"),
// });

export default config({
  schema: g,
  // auth: {
  //   providers: [jwt],
  //   rules: (rules: any) => rules.private(),
  // },
});
