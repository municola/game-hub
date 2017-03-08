import React from 'react';

const style = {
  buttonStyle: {
    fontSize: '23px',
    width: '200px',
    padding: '20px',
    backgroundColor: '#15ADFF',
    color: 'white',
    border: '2px solid white',
  },
};

export default function Button(props) {
  return (
    <div className="buttonClass">
      <button style={style.buttonStyle} type="button" onClick={props.change}>
        {props.title}</button>
    </div>
  );
}

Button.propTypes = {
  title: React.PropTypes.string.isRequired,
  change: React.PropTypes.func.isRequired,
};
