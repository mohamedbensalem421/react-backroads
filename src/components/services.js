
import { services } from "../data";
import { Title } from "./title";

export function Services() {
  return (
    <section id="services" className="padding">
      <div className="container">
      <Title title="OUR" subTitle= "SERVICES"/>
        <div className="content">
          {services.map(({ id, services, icon }) => {
            return (
              <article key={id}>
                <div className="icon">
                  <i className={icon}></i>
                </div>
                <div className="text">
                  <h4>{services}</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Asperiores, officia.
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
