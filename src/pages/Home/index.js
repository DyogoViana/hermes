import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import { ProductList } from './styles';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

function Home({ amount, addToCartRequest }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function loadProducts() {
			const response = await api.get('products');
			const data = response.data.map((product) => ({
				...product,
				priceFormatted: formatPrice(product.price),
			}));

			setProducts(data);
		}

		loadProducts();
	}, []); // Array vazio para executar apenas uma vez quando o componente for montado.

	function handleAddProduct(id) {
		addToCartRequest(id);
	}

	return (
		<ProductList>
			{products.map((product) => (
				<li key={product.id}>
					<img src={product.image} alt={product.title} />

					<strong>{product.title}</strong>
					<span>{product.priceFormatted}</span>

					<button
						type="button"
						onClick={() => handleAddProduct(product.id)}
					>
						<div>
							{/* Quantidade do mesmo produto -- Adicionar ao carrinho.  */}
							<MdShoppingCart size={16} color="#fff" />{' '}
							{amount[product.id] || 0}
						</div>

						<span>Adicionar ao carrinho</span>
					</button>
				</li>
			))}
		</ProductList>
	);
}

const mapStateToProps = (baseState) => ({
	amount: baseState.cart.reduce((amount, product) => {
		amount[product.id] = product.amount;

		return amount;
	}, {}),
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
