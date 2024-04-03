import { featuredTours } from "../data";
import { Title } from "./title";

export function Tours() {
  return (
    <section id="tours" className="padding">
      <div className="container">
      <Title title="FEATUED" subTitle= "TOURS"/>
        <div className="content">
          {featuredTours.map(({ id, img, date, title, place, price, days }) => {
            return (
              <article key={id}>
                <div className="bg-img"> 
                <img src={img} alt="" />
                  <div className="date">{date}</div>
                </div>
                <div className="text">
                  <h4>{title}</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cumque vitae tempore voluptatum maxime reprehenderit eum
                    quod exercitationem fugit, qui corporis.
                  </p>
                  <div className="location">
                    <p>
                      <i className="fa-solid fa-map"></i> {place}
                    </p>
                    <p>From ${price}</p>
                    <p>{days} Days</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
