import WomenTimeline from "@/components/WomenTimeline";
import HipHopFeminism from "@/components/HipHopFeminism"; 

export default function WomenPage() {
  return (
    <main>
      <header className="women-hero">
        <p className="section-label">A FEATURED COLLECTION</p>

        <h1>Women in Hip-Hop</h1>

        <p className="women-intro">
          Women have shaped hip-hop from its earliest roots to its growth as
          a global culture. Explore the MCs, organizers, groups, executives,
          and cultural figures whose contributions are essential to the hsitory of hip-hop.
        </p>
      </header>

      <section className="women-overview">
        <div className="overview-heading">
          <p className="section-label">BEYOND THE SIDELINES</p>

          <h2>Women Were Always Here.</h2>
        </div>

        <div className="women-roles">
          <article>
            <span>01</span>
            <h3>Organizers</h3>
            <p>
              From Cindy Campbell's 1973 back-to-school jam onward, women
              helped create the spaces where hip-hop developed.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>MCs</h3>
            <p>
              Sha-Rock, Roxanne Shanté, MC Lyte, Queen Latifah, and many
              others established women as innovators in lyrical performance,
              battling, and storytelling.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Groups</h3>
            <p>
              Groups including The Sequence and Salt-N-Pepa challenged the
              idea that recorded rap was exclusively a male space.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Industry</h3>
            <p>
              Sylvia Robinson's work with Sugar Hill Records demonstrates
              women's influence behind the scenes as producers, executives,
              and decision-makers.
            </p>
          </article>
        </div>
      </section>

      <WomenTimeline />
    <HipHopFeminism />
    

    </main>
  );
}