import LiveRowAnyItem from "../../../types-interfaces/Content/LiveRow/LiveRowAnyItem";

/*====================*/

export default abstract class LiveRowItemDriver {
  protected constructor(public item: LiveRowAnyItem) {}

  public toHistoryObject(): any {
    const itemData = this.item.data;

    const historyObject: any = {
      action_id: itemData.eop,
      date: new Date(Date.now()),
      key: this.item.id,
      user: {
        id: itemData.user.id,
        avatar: itemData.user.avatar,
      },
    };

    return historyObject;
  }
}
