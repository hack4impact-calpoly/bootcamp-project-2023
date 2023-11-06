import Image from "next/image";
import style from "./tuscany.module.css";
import "../../globals.css";

export default function Tuscany() {
  return (
    <div>
      {/* content goes here */}
      <main>
        <h1 className={style.pageTitle}>Tuscany</h1>
        <h2 className={style.pageDate}>
          <em>10/23/2023</em>
        </h2>
        <p className={style.blogContent}>
          This weekend, my study abroad organization, AIA, put together a
          program-wide trip throughout Tuscany, specifically Florence and Pisa.
          <br />
          <br />
          We left Rome Friday morning (waking up at an ungodly 6am to catch an
          early 7am train to Florence), and spent the rest of the day immersing
          ourselves in the history and culture of Florence. Of course, we
          climped the Duomo, also known as the "Florence Cathedral" and "The
          Cathedral of Saint Mary of the Flower", which was surprisingly
          exhausting. Coming in at 455 (+/- 5) steps with low ceilings, narrow
          spiral staircases, tight turn radii, and steep steps, it took a good
          amount of time and breathing to go up. But once at the top, the view
          of the city was gorgeous and worth every step. Our group collected to
          capture the moment together, and immediately after the pictures, rain
          came <em>pouring</em> down. We prompty made our way down, but everyone
          else at the top had the same idea, not to mention everyone still
          trying to climb up. Suffice to say, the singular entrance/exist was
          extremely bottle-necked and we all became very drenched. <br />
          <br />
          This was also the day we had the chance to try the famous Florentine
          steak, <em>Bistecca alla Fiorentina</em>. Made from the sirloin of a
          young steer part of the <em>Chianina</em> breed, this steak must be
          prepared in a particular way. Namely, it must be at least a kilogram,
          5-6 cm tall, grilled over charcoal embers, and turned exactly once.
          There's more to it, but the quality was unparalleled. <br />
          <br />
          The next day, we ventured to Pisa to visit the signiture Leaning
          Tower, piazza, and cathedral. While we made it up the Leaning Tower of
          Pisa without getting rained on, the down pour quickly followed our
          descent from the tower. Naturally, we didn't let that stop us from
          capturing our own iconic pictures. <br />
          <br />
          Returning from a thoroughly soaked Pisa, we decided the best way to
          warm us up and enjoy the rainy day vibes was to visit
          <em>Riviore Firenze</em>, the birthplace of the hot chocolate. Now,
          I've had many a hot chocos, but none quite compared to their house
          signiture. The thick, gooey, dark chocolate had a rich flavor profile
          that was perfectly cut and complimented by the house-made whipped
          cream. As a sipping chocolate, it was something to enjoy over a longer
          period but certainly hit the spot. Additionally, this place is,
          allegedly, where the negroni was invented, but this seems to be a more
          dubious claim. Still, it was an excellent negroni, so inventors or
          not, it was certainly worth it.
        </p>
        <Image
          src="/tuscany_duomo.jpg"
          alt="the Florence Cathedral by Brunelleschi"
          className={style.blogPic}
          width="350"
          height="350"
        />
        <Image
          src="/tuscany_duomo_top.jpg"
          alt="at the top of the Florence Cathedral, overlooking the city of Florence"
          className={style.blogPic}
          width="350"
          height="350"
        />
        <Image
          src="/tuscany_group.jpg"
          alt="a group picture at the top of the Duomo"
          className={style.blogPic}
          width="350"
          height="350"
        />
        <Image
          src="/tuscany_steak.jpg"
          alt="a traditional Florentine steak"
          className={style.blogPic}
          width="350"
          height="350"
        />
        <Image
          src="/tuscany_pisa.jpg"
          alt="me at the Leaning Tower of Pisa"
          className={style.blogPic}
          width="350"
          height="350"
        />
        <Image
          src="/tuscany_hot_chocolate.jpg"
          alt="the original hot chocolate"
          className={style.blogPic}
          width="350"
          height="350"
        />
      </main>
    </div>
  );
}
