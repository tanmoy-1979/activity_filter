import { string } from 'prop-types';

import './HelpBox.css';

//This is a test comment

function HelpBox({ title, text }) {
  return (
    <article className="help-box-present">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
