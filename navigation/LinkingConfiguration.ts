/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            TabOneScreen: 'one',
          },
          TabTwo: {
            TabTwoScreen: 'two',
          },
          Home: {
            screens: {
              HomePageScreen: 'one',
            },
          },
          Search: {
            screens: {
              SearchPageScreen: 'two',
            },
          },
          MyClubs: {
            screens: {
              MyClubsPageScreen: 'one',
            },
          },
          Notifications: {
            screens: {
              NotificationsPageScreen: 'one',
            },
          },
          Account: {
            screens: {
              AccountPageScreen: 'one',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
