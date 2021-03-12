export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Coming_Soon: undefined;
  Search: undefined;
  Downloads: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  MovieDetailsScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Episode = {
  id: string,
  title: string,
  poster: string,
  duration: string,
  plot: string,
  video: string,
}
