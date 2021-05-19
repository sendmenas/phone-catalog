import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PHONES } from "../utils/apiUrls";
import { getData } from "../utils/api";
import { PhoneList } from "./PhoneList";

export const BrandPage = () => {
  const [isLoading, setLoader] = useState(false);
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    getData(PHONES, setPhones);
  }, []);
  console.log(phones);

  let { brand } = useParams();
  let itemList = phones.filter((item) => item.brand === brand);
  return <PhoneList items={itemList} />;
};
