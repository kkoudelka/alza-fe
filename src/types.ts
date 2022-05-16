export interface IProductData {
  id: number;
  code: string;
  img: string;
  name: string;
  spec: string;
  price: string;
  cprice?: any;
  priceWithoutVat: string;
  avail: string;
  avail_postfix: string;
  availLegend?: any;
  avail_postfix2?: any;
  avail_color: string;
  is_action: boolean;
  action_name?: any;
  rating: number;
  promo_cnt: number;
  promos?: any;
  order: number;
  is_special_service: boolean;
  type: number;
  itemType: string;
  url: string;
  minimumAmount: number;
  amountInPack: number;
  start_time?: any;
  end_time?: any;
  variant_type: number;
  advertising: string;
  categoryName?: any;
  inBasket: number;
}

export interface IApiResponse {
  err: number;
  msg?: any;
  vzt: number;
  user_name: string;
  basket_cnt: number;
  basket_total_cnt: number;
  user_id: number;
  favCnt: number;
  alzaCredit?: any;
  countryID: number;
  countryPhonePrefix: string;
  serverTime: number;
  data_cnt: number;
  data: IProductData[];
}
