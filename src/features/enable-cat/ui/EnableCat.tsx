import { useContext } from "react";
import CatContext from "../../../widgets/cat-controller/model/CatContext";
import type { UseCat } from "../../../entities/model/types";

function EnableCat() {
  const { catSettings, toggleIsEnabled } = useContext(CatContext) as 
    Pick<UseCat, 'catSettings' | 'toggleIsEnabled'>;

  return (
    <label htmlFor="enabler" className="flex items-center gap-2">
      <input 
        type="checkbox" 
        id="enabler" 
        checked={catSettings.isEnabled} 
        onChange={toggleIsEnabled} 
      />
      <p>{catSettings.isEnabled ? 'Disable' : 'Enable'} cat</p>
    </label>
  )
}

export default EnableCat;