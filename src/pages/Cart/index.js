import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	MdRemoveCircleOutline,
	MdAddCircleOutline,
	MdDelete,
} from 'react-icons/md';

import { formatPrice } from '../../util/format';
import { Container, ProductTable, Total } from './styles';
import * as CartActions from '../../store/modules/cart/actions';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
	// Adiciona produto ao carrinho.
	function increment(product) {
		updateAmountRequest(product.id, product.amount + 1);
	}

	// subtrai produto do carrinho.
	function decrement(product) {
		updateAmountRequest(product.id, product.amount - 1);
	}

	return (
		<Container>
			<ProductTable>
				<thead>
					<tr>
						<th />
						<th>PRODUTO</th>
						<th>QTD</th>
						<th>SUBTOTAL</th>
						<th />
					</tr>
				</thead>

				<tbody>
					{cart.map((product) => (
						<tr>
							<td>
								{/* PRODUTO - Imagem do produto. */}
								<img src={product.image} alt={product.title} />
							</td>

							<td>
								{/* QUANTIDADE - Descrição e valor do produto. */}
								<strong>{product.title}</strong>
								<span>{product.priceFormatted}</span>
							</td>

							<td>
								<div>
									{/* Botão de adicionar ou subtrair itens. */}
									<button
										type="button"
										onClick={() => decrement(product)}
									>
										<MdRemoveCircleOutline
											size={20}
											color="#7159c1"
										/>
									</button>
									<input
										type="number"
										value={product.amount}
										readOnly
									/>
									<button
										type="button"
										onClick={() => increment(product)}
									>
										<MdAddCircleOutline size={20} color="#7159c1" />
									</button>
								</div>
							</td>

							<td>
								{/* SUBTOTAL */}
								<strong>{product.subtotal}</strong>
							</td>

							<td>
								{/* Botão de delete. */}
								<button
									type="button"
									onClick={() => removeFromCart(product.id)}
								>
									<MdDelete size={20} color="#7159c1" />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</ProductTable>

			<footer>
				<button type="button">Finalizar pedido</button>

				{/* Valor total da compra. */}
				<Total>
					<span>TOTAL</span>
					<strong>{total}</strong>
				</Total>
			</footer>
		</Container>
	);
}

const mapStateToProps = (baseState) => ({
	cart: baseState.cart.map((product) => ({
		...product,
		subtotal: formatPrice(product.price * product.amount),
	})),

	total: formatPrice(
		baseState.cart.reduce((total, product) => {
			return total + product.price * product.amount;
		}, 0) // Inicia com o valor 'zero' no total das compras.
	),
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
