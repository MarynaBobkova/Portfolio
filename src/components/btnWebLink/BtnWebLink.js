import linkIcon from './linkIcon.svg'

const BtnWebLink = ({link}) => {
  return (
    <a href={link}  target="_blank" rel="noreferrer" className="btn-outline">
      <img src={linkIcon} alt="" />
      Website 
    </a>
  );
};

export default BtnWebLink;
