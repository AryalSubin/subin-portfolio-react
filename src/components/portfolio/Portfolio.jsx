import "./portfolio.css";
import netflixImg from "../../assets/netflix.jpg";
import bbmsImg from "../../assets/blood.jpg";
import teslaImg from "../../assets/tesla.jpg";
import expenseImg from "../../assets/expenseTracker.jpg";
import blogImg from "../../assets/blog.jpg";
import airTravel from "../../assets/airTravel.jpg";
import luzzy from "../../assets/luzzy_.PNG";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: luzzy,
      title: "Luzzy",
      github: "https://github.com/AryalSubin/Luzzy",
      demo: "https://luzzy.netlify.app/",
    },
    {
      id: 2,
      image: netflixImg,
      title: "Netflix clone",
      github: "https://github.com/AryalSubin/Netflix-clone",
      demo: "https://lsk-netflix-clone.web.app/",
    },
    {
      id: 3,
      image: blogImg,
      title: "Blog App",
      github: "https://github.com/AryalSubin/Blog_App",
      demo: "https://blogproject-93385.firebaseapp.com/",
    },
    {
      id: 4,
      image: bbmsImg,
      title: "Blood Bank Mgmt System",
      github: "https://github.com/AryalSubin/Blood_Bank_Mgt_System",
      demo: "/#portfolio",
    },
    {
      id: 5,
      image: teslaImg,
      title: "Tesla clone",
      github: "https://github.com/AryalSubin/TESLA_CLONE",
      demo: "/#portfolio",
    },
    {
      id: 6,
      image: expenseImg,
      title: "Expense Tracker",
      github: "https://github.com/AryalSubin/ExpenseTracker",
      demo: "https://expense-tracker00.netlify.app/",
    },
    {
      id: 7,
      image: airTravel,
      title: "Air Travel",
      github: "https://github.com/AryalSubin/AirTravel",
      demo: "https://travelair.netlify.app/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3> {title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
