import { useContext, type MouseEvent } from "react";
import useCatApi from "../../../entities/api/useCatApi";
import CatContext from "../../../widgets/cat-controller/model/CatContext";
import type { UseCat } from "../../../entities/model/types";

function GetCat() {
  const { getCat } = useContext(CatContext) as Pick<UseCat, 'getCat'>;
  const { fetchCat } = useCatApi({ getCat });

  async function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    fetchCat();
  }

  return (
    <button className="border" onClick={handleClick}>Get Cat</button>
  )
}

export default GetCat;