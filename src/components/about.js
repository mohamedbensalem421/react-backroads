import { Title } from "./title"
export function About(){
  return(
    <section id="about" className="padding">
      <div className="container">
        <Title title="ABOUT" subTitle= "US"/>
        <div className="content">
          <div className="bg-img"></div>
          <div className="text">
            <h1>Explore The Difference</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?</p>
            <a href="#home">READ MORE</a>
          </div>
        </div>
      </div>
    </section>
  )
}