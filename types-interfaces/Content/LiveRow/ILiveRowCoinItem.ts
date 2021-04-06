import ILiveRowItem from "./ILiveRowItem";

/*====================*/

interface ILiveRowCoinItem extends ILiveRowItem {
  data: {
    eop: number;
    result: number;
    user: {
      id: number;
      avatar: string;
    };
  };
}

/*====================*/

export default ILiveRowCoinItem;
