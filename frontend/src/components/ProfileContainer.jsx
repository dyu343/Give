
import { useAuth } from '../contexts/AuthContext';

export default function ProfileContainer({content}) {
  const { user } = useAuth();

  const displayName = user?.displayName || 'User';

  return (
    <div style={{ borderRadius: "2rem 2rem 0 0" }} className="flex flex-col h-screen w-[100%] bg-defaultPink">
      <p className="text-shadow-white pt-2 pl-5 text-[20px] text-yellow-300 font-header bg-inherit">{"Profile details for " + displayName}</p>
    </div>
  );
}