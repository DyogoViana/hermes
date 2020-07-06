// Adiciona um produto ao carrinho.
export function addToCart(product) {
	return {
		type: '@cart/ADD',
		product,
	};
}

// Remove um produto do carrinho.
export function removeFromCart(id) {
	return {
		type: '@cart/REMOVE',
		id,
	};
}

// Adiciona ou subtrai produtos do carrinho.
export function updateAmount(id, amount) {
	return {
		type: '@cart/UPDATE_AMOUNT',
		id,
		amount,
	};
}
