import foodGetters from './foodGetters';

export default {
	namespaced: true,

	state() {
		return {
			foodItems: [
				{
					productId: 1,
					name: 'Rawr Burger',
					price: '$10.00',
					src: '../../assets/burger.jpg'
				},
				{
					productId: 2,
					name: 'Bake and Shark',
					price: '$15.00',
					src: '../../assets/bake-and-shark.jpg'
				},
				{
					productId: 3,
					name: 'Wissam Special',
					price: '$14.00',
					src: '../../assets/wissam.jpg'
				},
				{
					productId: 4,
					name: 'Rawr Salad',
					price: '$12.00',
					src: '../../assets/salad.jpg'
				},
				{
					productId: 5,
					name: 'Blueberry Bowl',
					price: '$14.00',
					src: '../../assets/blueberry-bowl.jpg'
				},
				{
					productId: 6,
					name: 'Breadfuit Croquettes',
					price: '$10.00',
					src: '../../assets/croquette.jpg'
				}
			]
		};
	},
	getters: foodGetters
};
