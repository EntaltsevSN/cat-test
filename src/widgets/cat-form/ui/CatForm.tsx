import EnableCat from "../../../features/enable-cat/ui/EnableCat";
import GetCat from "../../../features/get-cat/ui/GetCat";
import RefreshCat from "../../../features/refresh-cat/ui/RefreshCat";

function CatForm() {
  return (
    <form action="" className="flex flex-col gap-3">
      <EnableCat />
      <RefreshCat />
      <GetCat />
    </form>
  )
}

export default CatForm;