import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Category {
  readonly id: string;
  readonly title: string;
  readonly movies?: Movie[];
  constructor(init: ModelInit<Category>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

export declare class Movie {
  readonly id: string;
  readonly title: string;
  readonly poster: string;
  readonly year?: number;
  readonly numberOfSeasons?: number;
  readonly plot?: string;
  readonly cast?: string;
  readonly creator?: string;
  readonly categoryID: string;
  readonly seasons?: Season[];
  constructor(init: ModelInit<Movie>);
  static copyOf(source: Movie, mutator: (draft: MutableModel<Movie>) => MutableModel<Movie> | void): Movie;
}

export declare class Season {
  readonly id: string;
  readonly name: string;
  readonly movie?: Movie;
  readonly episodes?: Episode[];
  constructor(init: ModelInit<Season>);
  static copyOf(source: Season, mutator: (draft: MutableModel<Season>) => MutableModel<Season> | void): Season;
}

export declare class Episode {
  readonly id: string;
  readonly title: string;
  readonly poster: string;
  readonly duration: string;
  readonly plot?: string;
  readonly video: string;
  readonly season?: Season;
  constructor(init: ModelInit<Episode>);
  static copyOf(source: Episode, mutator: (draft: MutableModel<Episode>) => MutableModel<Episode> | void): Episode;
}