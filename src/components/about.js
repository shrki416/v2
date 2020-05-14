import React from "react"

const About = () => (
  <>
    <section
      style={{
        background: `#bdc3c7`,
        marginBottom: `1.5rem`,
      }}
    >
      <h2>About Me</h2>
      <div>
        <div>
          <h3>Hi! It's Me</h3>
          <p>
            I'm a self-taught developer who is passionate about learning and
            building software. I received my MS in Information Technology from
            Southern New Hampshire University in January 2019 and have been
            learning and developing since.
          </p>
          <p>
            Software is in all industries. It is shaping our world and I want to
            contribute to it and make an impact. I can't imagine where we'd be
            without cool software.
          </p>
        </div>

        <div>
          <h3>Why Dev</h3>
          <p>
            It leads to innovations and creativity that literally change the
            world. Learning software development makes me feel like I there's
            nothing I can't do, which is an awesome feeling.
          </p>
          <p>
            Problem solving is an essential part of developing and I love that
            feeling when I find a solution to a problem I run into. Also, I love
            how adaptable you need to be. The industry is moving fast and to
            keep up you always have to be learning and adapting to the industry
            needs which makes it fun.
          </p>
        </div>

        <div>
          <h3>Traveling</h3>
          <p>
            I LOVE to travel. It's one of my favorite things to do. It has been
            so important to my development as a person. It lets me get out of my
            comfort zone, stepping into an unfamiliar place can feel
            intimidating, but once I take the plunge I'm often surprised by how
            confident I get taking on new challenges that I wouldn't have
            tackled before. The world in an incredible place, traveling allows
            me to discover the world's &#127757 remarkable cultural diversity.
          </p>
        </div>
      </div>

      <a href="#work" className="btn">
        My Work
      </a>
    </section>

    <section
      style={{
        background: `#f1c40f`,
        marginBottom: `1.5rem`,
      }}
    >
      <h2>... more about me</h2>
      <p>Joining SDMM</p>

      <div>
        <p>
          <strong>Software Development Mastermind program</strong> is a hands-on
          learning program where I worked with Andy Sterkowitz who is a
          professional full-stack software developer.
        </p>
        <p>
          During the program I was assigned to work on real-world projects that
          aimed to take me outside of my comfort zone and increase my web
          development skills. I completed four projects during that time and met
          the deadlines on all my projects.
        </p>
      </div>

      {/* <Img src={} alt={} /> */}

      {/* <img
        src="img/portfolio-03.jpg"
        alt="Laptop on a desk"
        className="about-me__img"
      /> */}

      <div>
        <a href="img/AA_Resume_v2.pdf" className="btn">
          <strong>Download My Resume</strong>
        </a>
      </div>
    </section>
  </>
)

export default About
