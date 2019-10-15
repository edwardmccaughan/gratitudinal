import GratitudeShow from './components/GratitudeShow.vue'
import GratitudeIndex from './components/GratitudeIndex.vue'
import GratitudeNew from './components/GratitudeNew.vue'
import GratitudeDailyInterface from './components/GratitudeDailyInterface.vue'
import UserShow from './components/UserShow.vue'

export default [
  { path: '/gratitudes/new', component: GratitudeNew, name: 'new_gratidute_path' },
  { path: '/gratitudes/:id', component: GratitudeShow, name: 'gratidute_path' },
  { path: '/gratitudes', component: GratitudeIndex, name: 'gratidutes_path' },
  { path: '/gratitudes_daily', component: GratitudeDailyInterface, name: 'daily_gratidutes_path' },
  { path: '/user', component: UserShow, name: 'user_path'},
  { path: '/',redirect: '/gratitudes_daily'}
]