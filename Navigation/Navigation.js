// JavaScript source code
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: { // Encore une fois j'ai mis le m�me nom que celui du component mais libre � vous de choisir un nom diff�rent
    screen: FilmDetail
  }
})

export default createAppContainer(SearchStackNavigator)