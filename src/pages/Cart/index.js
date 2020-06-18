import React from 'react';
import {
	MdRemoveCircleOutline,
	MdAddCircleOutline,
	MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
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
					<tr>
						<td>
							{/* PRODUTO - Imagem do produto. */}
							<img
								src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTcgQtXXfJTWsKpIUjVUq_8NbEFDTSaIsNi6tL7ruN5TaWY5hiup9K1sWE34Zwucl9Hrjox3fZ8etCw7UVt30xWH-izSqxwcQ&usqp=CAY"
								alt="Air Jordan Retro"
							/>
						</td>

						<td>
							{/* QUANTIDADE - Descrição e valor do produto. */}
							<strong>Air Jordan Retro</strong>
							<span>R$ 1249,99</span>
						</td>

						<td>
							{/* Botão de adicionar e remover. */}
							<button type="button">
								<MdRemoveCircleOutline size={20} color="#7159c1" />
							</button>
							<input type="number" value={2} readOnly />
							<button type="button">
								<MdAddCircleOutline size={20} color="#7159c1" />
							</button>
						</td>

						<td>
							{/* SUBTOTAL */}
							<strong>R$2.499,98</strong>
						</td>

						<td>
							{/* Botão de delete. */}
							<button type="button">
								<MdDelete size={20} color="#7159c1" />
							</button>
						</td>
					</tr>
				</tbody>
			</ProductTable>

			<footer>
				<button type="button">Finalizar pedido</button>

				<Total>
					<span>TOTAL</span>
					<strong>R$2000,00</strong>
				</Total>
			</footer>
		</Container>
	);
}
