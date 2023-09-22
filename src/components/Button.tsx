import React from 'react'
import styles from './Button.module.css'
import Cx from 'classnames'

interface IProps {
  children: React.ReactNode;
  color?: 'primary' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
}

const Button:React.FC<IProps> = (props) => {
  const {
    color = 'primary',
    size = 'medium'
  } = props;

  return (
    <button className={Cx(styles[size], styles[color])}>
      {props.children}
    </button>
  )
};

export default Button;