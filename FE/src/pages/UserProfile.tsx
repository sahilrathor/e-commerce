import { useEffect, useState } from "react";
import fetchUserProfile from "../services/fetchUserProfile";
import { useAppInfo } from "../stores/app-info";

const UserProfile = () => {
    const { user } = useAppInfo();
    const [userProfile, setUserProfile] = useState<any>(null);

    useEffect(() => {
        const fetchUserProfileData = async () => {
            const userProfile = await fetchUserProfile(user?.id || '');
            setUserProfile(userProfile);
        }
        fetchUserProfileData();
    }, []);

    if(!userProfile) return <div>
        User not found
    </div>;  

    return (
        <div
            className="w-full h-full min-h-[100dvh] center-items justify-start flex-col"
        >
            <h1>{userProfile?.fullName ? userProfile.fullName : 'User Name'}</h1>
        </div>
    );
}

export default UserProfile;