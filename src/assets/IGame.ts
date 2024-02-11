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
  genres?: IGenres[];
  developers?: IDevelopers[];
  publishers?: IPublishers[];
  stores?: IStores[];
  clip?: string;
  tags?: ITags[];
  esrb_rating?: IEsrb_rating | null;
  short_screenshots?: IShort_screenshots[];
}

export interface IPublishers {
  id:number;
  name: string;
}

export interface IDevelopers {
  id:number;
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

export interface IGenres {
  id: number;
  name: string;
}

export interface IStores {
  id: number;
  store: {
    id: number;
    name: string;
    url?: string;
    slug:string;
    domain: string;
  };
}

export interface ITags {
  id: number;
  name: string;
}

export interface IEsrb_rating {
  id: number;
  name: string;
}

export interface IShort_screenshots {
  id: number;
  image: string;
}

