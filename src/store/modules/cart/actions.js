// Adiciona um produto ao carrinho. Ouvindo apenas o Saga.
export function addToCartRequest(id) {
	return {
		type: '@cart/ADD_REQUEST',
		id,
	};
}

// Após passar pelo Saga, chama o success no Reduce e add as infos no carrinho.
export function addToCartSuccess(product) {
	return {
		type: '@cart/ADD_SUCCESS',
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
