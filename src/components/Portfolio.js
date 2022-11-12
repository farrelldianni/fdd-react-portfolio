import { Row, Col, Container } from 'react-bootstrap';

import PortfolioCard from './Portfolio-Card';

const Portfolio = () => {
	const portfolioWork = [
		{
			title: 'W.U.F.R.',
			img: 'https://preview.redd.it/funfbfz8p2t21.jpg?width=640&crop=smart&auto=webp&s=4f39f4fb8bf026f38400cea0e4d774617ca33776',
			description: 'A quick reference program to check your Dungeon and Dragons spells!',
			url: 'https://github.com/farrelldianni/Weave-User-Field-Reference',
		},
		{
			title: 'Vinder',
			img: 'https://static01.nyt.com/images/2019/09/15/opinion/sunday/15peyser/15peyser-articleLarge-v2.gif?quality=75&auto=webp&disable=upscale',
			description: 'For those late gaming nights when you need help, someone to talk to, or a fellow gamer',
			url: 'https://github.com/farrelldianni/Fullstack-Group-Project',
		},
		{
			title: 'Dungeon Chest',
			img: 'https://imgs.search.brave.com/cKvFEOJl5mNZ85XkArX9wSrU5IEO5xKrZ-jK_0dyCCI/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9zdGF0/aWMyLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE5LzA1L2R1bmdl/b25zLWFuZC1kcmFn/b25zLWhlYWRlci5q/cGc',
			description: 'Do you need to store and/or make DnD characters quickly? Come check out the Dungeon Chest',
			url: 'https://github.com/MaddieBurns12/dungeon-chest',
		},
	];

	const styles = {
		heading: {
			fontSize: '4rem',
			textAlign: 'center',
		},
	};

	return (
		<>
			<h2 style={styles.heading}>Portfolio</h2>
			<Container>
				<Row>
					{portfolioWork.map((item, index) => (
						<Col lg={4} key={index} className='d-flex mx-auto'>
							<PortfolioCard
								title={item.title}
								img={item.img}
								description={item.description}
								url={item.url}
							></PortfolioCard>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default Portfolio;