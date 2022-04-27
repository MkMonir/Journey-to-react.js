import { Link } from 'react-router-dom';
import Card from './../components/shared/Card';

function About() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a React App to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to="/"> Back to homepage </Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
