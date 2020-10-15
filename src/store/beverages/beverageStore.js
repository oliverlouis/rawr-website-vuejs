import beverageGetters from './beverageGetters';

export default {
	namespaced: true,

	state() {
		return {
			beverageItems: [
				{
					productId: 1,
					name: 'Coke',
					price: '$3.00',
					image: require('../../assets/coke.jpg')
				},
				{
					productId: 2,
					name: 'Tea',
					price: '$4.50',
					image: require('../../assets/tea.jpg')
				},
				{
					productId: 3,
					name: 'Coffee',
					price: '$5.00',
					image: require('../../assets/coffee.jpg')
				},
				{
					productId: 4,
					name: 'Orange Juice',
					price: '$6.00',
					image: require('../../assets/orange-juice.jpg')
				},
				{
					productId: 5,
					name: 'Smoothie',
					price: '$14.00',
					image: require('../../assets/smoothie.jpg')
				},
				{
					productId: 6,
					name: 'Wine',
					price: '$8.00',
					image: require('../../assets/wine.jpg')
				}
			]
		};
	},
	getters: beverageGetters
};
