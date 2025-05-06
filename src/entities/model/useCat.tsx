import { useEffect, useState } from "react";
import useCatApi from "../api/useCatApi";
import type { CatData, CatSettings } from "./types";

function useCat() {
  const { fetchCat } = useCatApi({getCat});
  const [catSettings, setCatSettings] = useState<CatSettings>({
    isEnabled: true,
    isAutoRefresh: false,
    data: null
  });
  const MAX_SECONDS = 5;
  const [seconds, setSeconds] = useState(MAX_SECONDS);

  useEffect(() => {
    if (!catSettings.isAutoRefresh) return;

    const TimerInterval = setInterval(() => {
      setSeconds((state) => state === 0 ? MAX_SECONDS : state - 1);
    }, 1000);

    const RefreshInterval = setInterval(() => {
      fetchCat();
    }, (MAX_SECONDS + 1) * 1000);

    return () => {
      clearInterval(TimerInterval);
      clearInterval(RefreshInterval);
    }
  }, [catSettings.isAutoRefresh]);

  function toggleIsEnabled() {
    setCatSettings((state) => ({
      ...state,
      isEnabled: !state.isEnabled
    }));
  }

  function toggleIsAutoRefresh() {
    setCatSettings((state) => ({
      ...state,
      isAutoRefresh: !state.isAutoRefresh
    }));
    if (catSettings.isAutoRefresh) {
      setSeconds(MAX_SECONDS);
    }
  }

  function getCat(data: CatData) {
    setCatSettings((state: CatSettings) => ({
      ...state,
      data
    }));
  }

  return {catSettings, toggleIsEnabled, toggleIsAutoRefresh, getCat, seconds};
}

export default useCat;