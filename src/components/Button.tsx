import React from 'react'
import styles from './Button.module.css'
import Cx from 'classnames'

interface IProps {
  children: React.ReactNode;
  color?: 'primary' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
}

export const Button:React.FC<IProps> = React.memo((props) => {
  const {
    color = 'primary',
    size = 'medium'
  } = props;
  const fontSize = size === 'small' ? 'small' : 'default';

  return (
    <button className={Cx(styles[size], styles[color])}>
      {props.children}
    </button>
  )
});
