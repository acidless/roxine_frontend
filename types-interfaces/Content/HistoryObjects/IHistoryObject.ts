interface IHistoryObject {
  action_id: number;
  date: Date;
  key?: number;
  user: {
    id: number;
    avatar: string;
  };
}

/*====================*/

export default IHistoryObject;
