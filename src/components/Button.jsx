const Button = ({
  name,
  isBeam = false,
  containerClass,
  noHover = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${containerClass} bg-[#d3cdcd] text-dark-primary dark:bg-dark-secondary dark:text-light-primary 
      hover:bg-light-primary hover:text-dark-primary dark:hover:bg-dark-primary dark:hover:text-light-primary transition-colors duration-300;
    }`}
    >
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
