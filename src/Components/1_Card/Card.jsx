import PlaceHolder from '../../assets/image.jpg';
import Button from '../2_Button/Button';

function Card({
  title = 'Card Exapmle',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat minus beatae. Repudiandae voluptatem cum magnam modi minima quae sapiente?',
  BtnTxt,
  _PlaceHolder = PlaceHolder,
}) {
  return (
    <div className="Card">
      <img src={_PlaceHolder} alt="Image" />
      <h2>{title}</h2>
      <p>{desc}</p>
      <Button props={BtnTxt} />
    </div>
  );
}
export default Card;
