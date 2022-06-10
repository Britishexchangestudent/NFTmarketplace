const Button = ({ classStyles, btnName, handleClick }) => (
  <button type="button" className={`nft-gradient text-sm minlg:text-lg px-6 py-3 minlg:px-8 font-poppins font-semibold text-white ${classStyles}`} onClick={handleClick}>
    {btnName}
  </button>
);

export default Button;
