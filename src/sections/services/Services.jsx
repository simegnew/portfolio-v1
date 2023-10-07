import './services.css'
import Card from './../../components/Card';
import data from './data';

const Services = () => {
  return (
    <section  id="services">
      <h2>services</h2>
      <p>I give you the best in all the services below</p>
      <div className="container services__container">
        {data.map((item) => (
          <Card key={item.id} classsName="services__item">
            <span className='service__icon'>{item.icon}</span>
            <div className='service__card-sec'>
              <h5>{item.title}</h5>
              <small>{item.desc}</small>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Services