import style from "../home.module.css";
import "../global.css";
import Link from "next/link";
import type { IPortfolio } from "../../database/portfolioSchema";
import connectDB from "../../helpers/db";
import Portfolio from "../../database/portfolioSchema";
import PortfolioPreview from "../../components/portfolioPreview";

const portfolios: IPortfolio[] = await getPortfolios();

export default function Portfolio1() {
  console.log("hi these are the portfolios", portfolios);
  return (
    <div>
      <main>
        {portfolios.map((portfolio) => (
          <PortfolioPreview // This is how we call the component
            title={portfolio.title}
            date={portfolio.date}
            description={portfolio.description}
            slug={portfolio.slug}
            image={portfolio.image}
          />
        ))}

        <div className={style.footer}>
          <footer>
            © 2023 My Personal Website | All Rights Reserved | Made with love ♥
          </footer>
        </div>
      </main>
    </div>
  );
}

async function getPortfolios() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const portfolios = await Portfolio.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    console.log("success");
    return portfolios;
  } catch (err) {
    console.log(err);
    return [];
  }
}
