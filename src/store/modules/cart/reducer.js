import produce from 'immer';

export default function cart(baseState = [], action) {
	switch (action.type) {
		// Adiciona o produto ao carrinho.
		case 'ADD_TO_CART':
			return produce(baseState, (draftState) => {
				const productIndex = draftState.findIndex(
					(productCart) => productCart.id === action.product.id
				);

				if (productIndex >= 0) {
					draftState[productIndex].amount += 1;
				} else {
					draftState.push({
						...action.product,
						amount: 1,
					});
				}
			});

		// Remove o produto do carrinho.
		case 'REMOVE_FROM_CART':
			return produce(baseState, (draftState) => {
				const productIndex = draftState.findIndex(
					(productCart) => productCart.id === action.id
				);

				if (productIndex >= 0) {
					draftState.splice(productIndex, 1);
				}
			});
		default:
			return baseState;
	}
}
