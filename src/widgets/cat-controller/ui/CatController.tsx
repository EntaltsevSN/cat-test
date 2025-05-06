import useCat from "../../../entities/model/useCat";
import Cat from "../../../entities/ui/Cat";
import CatForm from "../../cat-form/ui/CatForm";
import CatContext from "../model/CatContext";

function CatController() {
  const cat = useCat();

  return (
    <div className="flex flex-col items-start gap-3 p-4">
      <CatContext.Provider value={cat}>
        <CatForm />
        {!cat.catSettings.isEnabled && <>Enable the cat!!!</>}
        {cat.catSettings.isEnabled && <Cat />}
      </CatContext.Provider>
    </div>
  )
}

export default CatController;