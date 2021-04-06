export default function paymentLinkGenerator(number: number, sum: number, comment: PaymentType) {
  return `https://qiwi.com/payment/form/99?currency=RUB&amount=${sum}&extra%5B%27account%27%5D=${number}&extra%5B%27comment%27%5D=${JSON.stringify(
    comment
  )}`;
}

/*====================*/

type PaymentType = {
  type: number;
  user?: number;
  gp_id?: number;
};
