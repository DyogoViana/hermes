import { call, select, put, all, takeLatest } from 'redux-saga/effects'; // Chamar métodos assíncronos e retorna promises.
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import { addToCartSuccess, updateAmount } from './actions';

function* addToCart({ id }) {
	// Verifica se já não tem um produto no carrinho.
	const productExists = yield select((state) =>
		state.cart.find((productCart) => productCart.id === id)
	);

	if (productExists) {
		const amount = productExists.amount + 1;

		yield put(updateAmount(id, amount));
	} else {
		const response = yield call(api.get, `/products/${id}`);

		const data = {
			...response.data,
			amount: 1,
			priceFormatted: formatPrice(response.data.price),
		};

		yield put(addToCartSuccess(data)); // Dispara o Saga fazendo a chamada a API, chamando o 'success' e cadastra o produto no carrinho.
	}
}

// Quando uma action for disparada, aciona essa ação.
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);

/*
	Anotações:

	* = generator = async.
	yield = await -- Aguarda a execução e depois continua o restante do código.
	takeLatest = Saga evita que o usuário execute uma ação duas vezes seguidas, antes de completar a primeira.

*/
