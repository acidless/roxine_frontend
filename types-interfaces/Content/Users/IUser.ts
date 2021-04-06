import IBadge from "../Badge/IBadge";

interface IUser {
  id: number;
  name: string;
  avatar: string;
  balance: number;
  total_activity: number;
  premium:
    | false
    | {
        expire_date: string;
      };
  favorite_game: number;
  badge: IBadge;
  displayed_badge?: IBadge;
  roblox_id: number;
}

/*====================*/

export default IUser;
