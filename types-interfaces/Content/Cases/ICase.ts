import IDrop from "./IDrop";

/*====================*/

export default interface ICase {
  id: number;
  name: string;
  image: string;
  price: number;
  items: Array<IDrop>;
}
