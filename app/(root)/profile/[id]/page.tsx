import { getUserProjects } from "@/lib/utils";
import { getUserById } from "@/lib/actions/user.actions";
import ProfilePage from "@/components/ProfilePage";

const Profile = async ({ params: { id } }: { params: { id: string } }) => {
  const user = await getUserById(id);
  const userProjectsIds = user?.projects;
  const userProjects: any[] = await getUserProjects(userProjectsIds);

  if (!user) return <p className="no-result-text">Failed to fetch user info</p>;

  return <ProfilePage user={result?.user} />;
};

export default Profile;
