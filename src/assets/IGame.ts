export interface IGame {
  id: number;
  name: string;
  background_image: string;
  rating?: number;
  ratings?: IRatings[];
  ratings_count?: number;
  released?: string;
  added?: number;
  description?: string;
  platforms?: IPlatforms[];
  metacritic?: number;
  playtime?: number;
  parent_platforms?: IPlatforms[];
  genres?: INameWithId[];
  developers?: INameWithId[];
  publishers?: INameWithId[];
  stores?: IStores[];
  clip?: string;
  tags?: INameWithId[];
  esrb_rating?: INameWithId | null;
  short_screenshots?: IShort_screenshots[];
}

export interface INameWithId{
  id: number;
  name: string;
}

export interface IRatings {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface IPlatforms {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}


export interface IStores {
  id: number;
  store: {
    id: number;
    name: string;
    url?: string;
    slug:string;
  };
}

export interface IShort_screenshots {
  id: number;
  image: string;
}

