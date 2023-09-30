import './services.css'
import Card from './../../components/Card';
import data from './data';

const Services = () => {
  return (
    <section className="container" id="services">
      <h2>services</h2>
      <p>I give you the best in all the services below</p>
      <div className="services__container">
        {data.map((item) => (
          <Card key={item.id} classsName="services__item">
            <span>{item.icon}</span>
            <h5>{item.title}</h5>
            <small>{item.desc}</small>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Services