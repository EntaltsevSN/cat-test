import { useContext } from "react";
import CatContext from "../../widgets/cat-controller/model/CatContext";
import type { UseCat } from "../model/types";

function Cat() {
  const { catSettings } = useContext(CatContext) as Pick<UseCat, 'catSettings'>;

  return (
    <figure>
      {!catSettings.data && <p>Click "Get cat" to GET CAT!</p>}
      {catSettings.data && (
        <img 
          key={catSettings.data.id}
          src={catSettings.data.url}
          width={catSettings.data.width}
          height={catSettings.data.height}
        />
      )}
    </figure>
  )
}

export default Cat;