import { call, put, all, takeLatest } from 'redux-saga/effects'; // Chamar métodos assíncronos e retorna promises.
import api from '../../../services/api';
import { addToCartSuccess } from './actions';

function* addToCart({ id }) {
	const response = yield call(api.get, `/products/${id}`);

	yield put(addToCartSuccess(response.data)); // Dispara o Saga fazendo a chamada a API, chamando o 'success' e cadastra o item no carrinho.
}

// Quando uma action for disparada, aciona essa ação.
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);

/*
	Anotações:

	* = generator = async.
	yield = await -- Aguarda a execução e depois continua o restante do código.
	takeLatest = Saga evita que o usuário execute uma ação duas vezes seguidas, antes de completar a primeira.

*/
