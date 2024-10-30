const spanStyles = {
  color: 'red',
  fontWeight: 'bold',
  fontSize: '20px',
};

export const Styles = ({children}) => {
  return (
    <span style={spanStyles}>{children}</span>
  )
};