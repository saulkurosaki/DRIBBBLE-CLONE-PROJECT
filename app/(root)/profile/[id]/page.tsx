import { getUserById } from "@/lib/actions/user.actions";
import ProfilePage from "@/components/ProfilePage";

const Profile = async ({ params: { id } }: { params: { id: string } }) => {
  const user = await getUserById(id);

  console.log(user);

  if (!user) return <p className="no-result-text">Failed to fetch user info</p>;

  return <ProfilePage user={user} />;
};

export default Profile;
