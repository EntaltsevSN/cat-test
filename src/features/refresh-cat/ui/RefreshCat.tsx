import { useContext } from "react";
import CatContext from "../../../widgets/cat-controller/model/CatContext";
import type { UseCat } from "../../../entities/model/types";

function RefreshCat() {
  const { catSettings, toggleIsAutoRefresh, seconds } = useContext(CatContext) as 
    Pick<UseCat, 'catSettings' | 'toggleIsAutoRefresh' | 'seconds'>;

  return (
    <label htmlFor="refresher" className="flex items-center gap-2">
      <input 
        type="checkbox" 
        id="refresher" 
        checked={catSettings.isAutoRefresh} 
        onChange={toggleIsAutoRefresh}  
      />
      <p>Auto-refresh cat in {seconds} seconds</p>
    </label>
  )
}

export default RefreshCat;