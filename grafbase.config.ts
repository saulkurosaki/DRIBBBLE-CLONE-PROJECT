import { graph, config, auth } from "@grafbase/sdk";

const g = graph.Standalone();

// @ts-ignore
const User = g
  .model("User", {
    name: g.string().length({ min: 2, max: 100 }),
    email: g.string().unique(),
    avatarUrl: g.url(),
    description: g.string().length({ min: 2, max: 1000 }).optional(),
    githubUrl: g.url().optional(),
    linkedinUrl: g.url().optional(),
    projects: g.ref(Project).list().optional(),
  })
  .auth((rules: any) => {
    rules.public().read();
  });

// @ts-ignore
const Project = g
  .model("Project", {
    title: g.string().length({ min: 3 }),
    description: g.string(),
    image: g.url(),
    liveSiteUrl: g.url(),
    githubUrl: g.url(),
    category: g.string().search(),
    createdBy: g.ref(User),
  })
  .auth((rules: any) => {
    rules.public().read();
    rules.private().create().delete().update();
  });

// const jwt = auth.JWT({
//   issuer: 'grafbase',
//   secret:  g.env('NEXTAUTH_SECRET')
// })

export default config({
  graph: g,
  // auth: {
  //   providers: [jwt],
  //   rules: (rules) => rules.private()
  // },
});
