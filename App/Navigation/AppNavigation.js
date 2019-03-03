import React from 'react';
import { Platform } from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import { Colors } from '../Themes';

import NewsScreen from '../Containers/NewsScreen';
import ProfileScreen from '../Containers/ProfileScreen';
import LoginScreen from '../Containers/LoginScreen';
import CourseScreen from '../Containers/CourseScreen';
import ListLessonsScreen from '../Containers/ListLessonsScreen';
import LessonDetailScreen from '../Containers/LessonDetailScreen';
import ResultScreen from '../Containers/ResultScreen';
import LoggedOut from '../Containers/LoggedOut';
import LogIn from '../Containers/LogIn';
import ForgotPassword from '../Containers/ForgotPassword';
import TurnOnNotifications from '../Containers/TurnOnNotifications';

const TabNav = TabNavigator(
	{
		CourseScreenTab: {
			screen: CourseScreen
		},
		NewsScreenTab: {
			screen: NewsScreen
		},
		ProfileScreen: {
			screen: ProfileScreen
		}
	},
	{
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: false,
		initialRouteName: 'CourseScreenTab',
		tabBarOptions: {
			showLabel: true,
			showIcon: true,
			style: {
				backgroundColor: '#fff'
			},
			tabStyle: {
				borderTopWidth: 1,
				borderTopColor: '#ececec',
				flex: 1
			},
			labelStyle: {
				fontSize: 12,
				color: '#c1c1c1',
				paddingBottom: 3
			},
			indicatorStyle: {
				backgroundColor: 'transparent'
			}
		}
	}
);

const AppNavigation = StackNavigator(
	{
		TabRoot: { screen: TabNav },
		LoginScreen: { screen: LoginScreen },
		Lessons: { screen: ListLessonsScreen },
		LessonDetail: { screen: LessonDetailScreen },
		Result: { screen: ResultScreen },
		LogIn: { screen: LogIn },
		LoggedOut: { screen: LoggedOut },
		ForgotPassword: { screen: ForgotPassword },
		TurnOnNotifications: { screen: TurnOnNotifications }
	},
	{
		headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
		initialRouteName: 'LoggedOut',
		cardStyle: { shadowColor: 'transparent' },
		/* header main config. */
		navigationOptions: {
			headerStyle: {
				backgroundColor: Colors.purpleAccent
			},
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}
	}
);

export default AppNavigation;
