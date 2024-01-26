export interface INavigationProp {
  navigation: {
    navigate: (routeName: TRouteName) => void
  }
}

// FIXME: Make route names type-safe
type TRouteName = string
