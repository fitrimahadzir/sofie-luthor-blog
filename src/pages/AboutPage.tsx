import { Link } from 'react-router-dom'
import Newsletter from '../components/Newsletter'
import SectionHeading from '../components/SectionHeading'
import { siteConfig } from '../config/site'

const TEAM = [
  {
    name: 'KEVIN\nPERRY',
    role: 'Hip-Hop & Breakdance',
    image: '/images/danceschool2-pic5.jpg',
  },
  {
    name: 'ALICE\nBOYD',
    role: 'Jazz & Modern Dance',
    image: '/images/danceschool2-pic6.jpg',
  },
  {
    name: 'BRANDON\nROSS',
    role: 'Ballroom Dances',
    image: '/images/danceschool2-pic7.jpg',
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>ABOUT {siteConfig.name.toUpperCase()}</h1>
          <div className="page-hero__script">25 years on the dance floor</div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            title="THE JOB OF FEET IS WALKING, BUT THEIR HOBBY IS DANCING"
            script="what's your style?"
            description="Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus, faucibus lorem eget, egestas eros. We have been teaching dance for 25 years — from our first wobbly steps to workshops that fill the room."
          />

          <div className="team-grid">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="team-card"
                style={{ backgroundImage: `url(${member.image})` }}
              >
                <div>
                  <h3>
                    {member.name.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h3>
                  <p style={{ color: '#fff', fontWeight: 600 }}>{member.role}</p>
                  <div className="team-card__socials">
                    <a href={siteConfig.socials.twitter} aria-label="Twitter">
                      <i className="icon-twitter-circled" />
                    </a>
                    <a href={siteConfig.socials.facebook} aria-label="Facebook">
                      <i className="icon-facebook-circled" />
                    </a>
                    <a href={siteConfig.socials.instagram} aria-label="Instagram">
                      <i className="icon-instagram-circled" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <Link to="/contact" className="button button--dark">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
