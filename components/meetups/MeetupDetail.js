import style from './MeetupDetail.module.css';

function MeetupDetail(props) {
  return (
    <section className={style.detail}>
      <img src={props.image} alt={props.title} className="" />
      <h1 className="">{props.title}</h1>
      <address className="">{props.address}</address>
      <p className="">{props.description}</p>
    </section>
  );
}

export default MeetupDetail;
