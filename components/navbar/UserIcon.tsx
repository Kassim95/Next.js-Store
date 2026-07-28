import { LuUser } from "react-icons/lu";
import { currentUser } from "@clerk/nextjs/server";

const UserIcon = async () => {
  const user = await currentUser();
  const profileImg = user?.imageUrl;

  if (profileImg) {
    return (
      <img src={profileImg} className="h-6 w-6 rounded-full object-cover" />
    );
  }
  return <LuUser className="h-6 w-6 bg-primary rounded-full text-white" />;
};

export default UserIcon;
