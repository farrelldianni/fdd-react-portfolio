import { Container } from 'react-bootstrap';
import pic from '../Assets/Images/farrell-dianni.JPG'

const AboutMe = () => {
	const styles = {
		heading: {
			fontSize: '6rem',
		},
	};
	return (
		<>
			<Container>
				
				<img src={pic} class="w-25 mb-1 " />
				
				<p>Howdy!</p>
				<h2 style={styles.heading} className='fw-bold'>
					Farrell DiAnni
				</h2>
				<h3 className='fw-bold'>Full Stack Web Developer</h3>
				<p>
                I'm a 26 year old individual whose enthralled with making things as best as I can. Weather it be something tech, alcoholic, or even a fantasy world to fight some kobolds in I'm into it.  <br />
					In the UNC Chapel Hill Full Stack Flex Coding Bootcamp
				</p>
			</Container>
		</>
	);
};

export default AboutMe;