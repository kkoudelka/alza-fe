import AlertDanger from "@components/alerts/danger";
import { CarouselContainer } from "@components/carousel";
import { Categories } from "@components/categories";
import { ProductContainer } from "@components/product-grid";
import { Tabs } from "@components/tabs";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";

import { IApiResponse } from "../src/types";

interface IProps {
  data: IApiResponse | null;
}

const Home: NextPage<IProps> = ({ data }) => {
  return (
    <div className="container mx-auto py-2 md:px-0 px-2">
      {data && data.err > 0 && (
        <AlertDanger>
          {data.msg} (Error code: {data.err})
        </AlertDanger>
      )}
      <h1 className="text-2xl font-bold">Notebooky</h1>
      <Categories />
      <h2 className="mt-3 text-lg font-bold">Nejprodávanější</h2>
      <CarouselContainer />
      <Tabs />
      <ProductContainer />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<IProps> = async (
  context
) => {
  try {
    const result = await fetch(
      "https://www.alza.cz/Services/RestService.svc/v2/products",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filterParameters: {
            id: 18855843,
            isInStockOnly: false,
            newsOnly: false,
            wearType: 0,
            orderBy: 0,
            page: 1,
            params: {
              tId: 0,
              v: [],
            },
            producers: [],
            sendPrices: true,
            type: "action",
            typeId: "",
            branchId: "",
          },
        }),
      }
    );

    const data = (await result.json()) as IApiResponse;

    return { props: { data } };
  } catch (err) {
    console.error(err);
    return { props: { data: null } };
  }
};
