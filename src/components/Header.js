import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Link from './Link';

const List = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	height: 49px;
`

const HeaderWrapper = styled.header`
	width: 100%;
	height: 49px;
	background-color: #242424;
	opacity: 0.8;
`

class Header extends Component {
	render () {
		return (
				<HeaderWrapper>
					<Grid>
						<Row>
							<Col lg={12}>
								<nav>
									<List>
										<Link link="#" text="Вызов мастера"/>
										<Link link="#" text="Прайс на ремонт"/>
										<Link link="#" text="Наши преимущества"/>
										<Link link="#" text="Схема работы"/>
										<Link link="#" text="Отзывы клиентов"/>
										<Link link="#" text="Примеры работ"/>
										<Link link="#" text="Контакты"/>
									</List>
								</nav>
							</Col>
						</Row>
					</Grid>
				</HeaderWrapper>
			)
	}
}

export default Header;