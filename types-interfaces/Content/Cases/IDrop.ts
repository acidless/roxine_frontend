export const RarityType = ["common", "uncommon", "rare", "epic", "legendary"];
interface IDrop {
  rarity: number;
  value: number;
  selected?: boolean;
}

/*====================*/

export default IDrop;
