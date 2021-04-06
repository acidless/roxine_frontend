import Layout from "../../../../react/roxine_frontend/Components/Layout/Layouts/Layout";
import { useSelector } from "react-redux";
import Loader from "../../../../react/roxine_frontend/Components/Common/Loaders/Loader/Loader";
import { useRouter } from "next/router";
import ProfileHistory from "../../../../react/roxine_frontend/Components/Pages/Profile/ProfileHistory/ProfileHistory";
import useIdForDispatch from "../../../../react/roxine_frontend/Hooks/UseIdForDispatch/UseIdForDispatch";
import FavoriteGame from "../../../../react/roxine_frontend/Components/Pages/Profile/ProfileStats/FavoriteGame/FavoriteGame";
import DisplayedBadge from "../../../../react/roxine_frontend/Components/Pages/Profile/ProfileStats/DisplayedBadge/DisplayedBadge";
import ProfileCenterBlock from "../../../../react/roxine_frontend/Components/Pages/Profile/ProfileCenterBlock/ProfileCenterBlock";
import { GetCurrentProfile, GetCurrentProfileHistory } from "../../redux/reducers/Users/ProfileReducer/ProfileSelector";
import { GetProfile } from "../../redux/reducers/Users/ProfileReducer/ProfileReducer";

/*====================*/

function Profile() {
  const currentProfile = useSelector(GetCurrentProfile);
  const currentProfileHistory = useSelector(GetCurrentProfileHistory);
  //const currentUser = useSelector(GetCurrentUser);

  /*====================*/

  const router = useRouter();
  const userId = router.query.userId as number | "me";

  /*====================*/

  //const isSelfProfile = (currentUser && userId == currentUser.id) || userId === "me";

  /*====================*/

  useIdForDispatch(userId, GetProfile);

  /*====================*/

  return (
    <Layout title={currentProfile?.name}>
      {currentProfile ? (
        <div className="profile content-center column align-items-center flex-container">
          <section className="profile__top-block">
            {/*{currentProfile.premium && (isSelfProfile || !currentUser?.premium) && (*/}
            {/*  <PremiumBlock premium={currentProfile?.premium} isSelfProfile={isSelfProfile} />*/}
            {/*)}*/}
            <div className="profile__info align-items-stretch flex-container">
              <DisplayedBadge badge={currentProfile.badge} />
              <ProfileCenterBlock currentProfile={currentProfile} />
              <FavoriteGame action_id={currentProfile.favorite_game} />
            </div>
          </section>
          <ProfileHistory
            userId={userId}
            currentProfile={currentProfile}
            currentProfileHistory={currentProfileHistory}
          />
        </div>
      ) : (
        <Loader />
      )}
    </Layout>
  );
}

/*====================*/

export default Profile;
