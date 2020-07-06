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
