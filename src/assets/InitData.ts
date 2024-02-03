export interface IFilm {
  id: number;
  name: string;
  background_image: string;
  rating?: number;
  ratings?: IRatings[];
  ratings_count?: number;
  released?: string;
  added?: number;
  metacritic?: number;
  playtime?: number;
  parent_platforms?: IPlatforms[];
  genres?: IGenres[];
  stores?: IStores[];
  clip?: string;
  tags?: ITags[];
  esrb_rating?: IEsrb_rating[];
  short_screenshots?: IShort_screenshots[];
}

interface IRatings {
  id: number;
  title: string;
  count: number;
  persent: number;
}

interface IPlatforms {
  platform: {
    id: number;
    slug: string;
  };
}

interface IGenres {
  id: number;
  name: string;
}

interface IStores {
  id: number;
  store: {
    id: number;
    name: string;
  };
}

interface ITags {
  id: number;
  name: string;
}

interface IEsrb_rating {
  id: number;
  name: string;
}

interface IShort_screenshots {
  id: number;
  image: string;
}
