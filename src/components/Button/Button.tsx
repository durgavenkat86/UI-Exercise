/**
 * JavaScript utility for conditionally joining classNames together
 */
import classNames from 'classnames';

// Styles
import './styles.css';
 
type ButtonProps = {
  type: 'button' | 'submit' | 'reset' | undefined;
  label: string;
  onClick: () => void;
  bclassName: 'primary' |  'disabled';
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { type, label, onClick, bclassName } = props;
  const buttonStyles: string = classNames('btn', bclassName);

  return (
    <button type={type} 
            onClick={onClick} 
            className={buttonStyles}>
      {label}
    </button>
  )
}
export default Button;