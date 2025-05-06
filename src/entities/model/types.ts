export type CatData = {
  breeds: unknown[],
  id: string,
  url: string,
  width: number,
  height: number
};

export type CatSettings = {
  isEnabled: boolean,
  isAutoRefresh: boolean,
  data: CatData | null
};

export type UseCat = {
  catSettings: CatSettings,
  toggleIsEnabled: () => void,
  toggleIsAutoRefresh: () => void,
  getCat: (data: CatData) => void,
  seconds: number
};