import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = ({ selectSection }) => {
	const styles = {
		background: {
			background: '#5e7e7c',
		},
		color: {
			color: '#fff',
		},
	};

	return (
		<Navbar variant='light' expand='lg' style={styles.background}>
			<Container>
				<Navbar.Brand
					onClick={() => {
						selectSection('About Me');
					}}
					href='#top'
					style={styles.color}
				>
					Farrell DiAnni
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav' className='flex-grow-0'>
					<Nav className='me-auto'>
						<Nav.Link
							onClick={() => {
								selectSection('About Me');
							}}
							style={styles.color}
						>
							About Me
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								selectSection('Portfolio');
							}}
							style={styles.color}
						>
							Portfolio
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								selectSection('Contact');
							}}
							style={styles.color}
						>
							Contact
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								selectSection('Resume');
							}}
							style={styles.color}
							href='https://docs.google.com/document/d/e/2PACX-1vTNxxAV-upn9LtYWjS4PO-yokoZYF76_ou6r7_6fHyVjUXhoelE8LcsjnX9DI_PaQ/pub'
							target='_blank'
						>
							Resume
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;