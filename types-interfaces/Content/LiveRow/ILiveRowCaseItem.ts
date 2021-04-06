import ILiveRowItem from "./ILiveRowItem";

/*====================*/

interface ILiveRowCaseItem extends ILiveRowItem {
  data: {
    eop: number;
    result: {
      case_id: number;
      item_id: number;
      rarity: number;
      value: number;
    };
    user: {
      id: number;
      avatar: string;
    };
  };
}

/*====================*/

export default ILiveRowCaseItem;
