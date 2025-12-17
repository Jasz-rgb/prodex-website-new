import { useState, useEffect } from "react";
import { portfolioData, portfolioYears } from "./portfolioData";

const Portfolio = () => {
  const getYearFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("year") || "All";
  };
  const yearFromUrl = getYearFromUrl();

  const initialIndex = portfolioYears.indexOf(yearFromUrl);
  const [activeIndex, setActiveIndex] = useState(
    initialIndex === -1 ? 0 : initialIndex
  );
  useEffect(() => {
    const index = portfolioYears.indexOf(yearFromUrl);
    if (index !== -1 && index !== activeIndex) {
      setActiveIndex(index);
    }
  }, [yearFromUrl, activeIndex]);

  const activeYear = portfolioYears[activeIndex];

  const progress = (activeIndex / (portfolioYears.length - 1)) * 100;
  const [sparkKey, setSparkKey] = useState(0);

  useEffect(() => {
    setSparkKey((k) => k + 1);
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

      setActiveIndex((i) => {
        const nextIndex =
          e.key === "ArrowLeft"
            ? i === 0
              ? portfolioYears.length - 1
              : i - 1
            : i === portfolioYears.length - 1
            ? 0
            : i + 1;

        const year = portfolioYears[nextIndex];
        const params = new URLSearchParams();
        if (year !== "All") params.set("year", year);

        window.history.pushState({}, "", `/?${params.toString()}#portfolio`);
        return nextIndex;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredData =
    activeYear === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.year === activeYear);

  return (
    <section
      className="portfolio"
      id="portfolio"
      tabIndex={0}
      style={{
        padding: "5rem 2rem",
        textAlign: "center",
        background:
          "radial-gradient(circle at top, rgba(0, 180, 255, 0.08), #050b10 60%)",
        color: "#e6f6ff",
      }}
    >
      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
        }

        .portfolio h2 {
          font-size: 2.25rem;
          line-height: 2.5rem;
          font-weight: 700;
          text-align: center;
          color: #ffffffff;
          margin-bottom: 0;
          letter-spacing: 0;
          position: relative;
          padding-bottom: 32px;
        }

        .portfolio h2::before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 200px;
          height: 2px;
          background: rgba(255, 255, 255, 0.4);
          transform: translateX(-50%);
          border-radius: 999px;
        }

        .portfolio h2::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -1px;
          width: 40px;
          height: 5px;
          background: linear-gradient(90deg, #00e5ff, #1da1f2);
          transform: translateX(-50%);
          border-radius: 999px;
        }

        .subtitle {
          max-width: 720px;
          margin: 1.8rem auto 3rem;
          font-size: 1.05rem;
          line-height: 1.7;
          color: #9fb9c9;
        }

        .portfolio-grid {
          column-count: 3;
          column-gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          text-align: left;
        }

        .portfolio-card {
          position: relative;
          overflow: hidden;
          border-radius: 14px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.04),
            rgba(255, 255, 255, 0.01)
          );
          display: block;
          margin-bottom: 2rem;
          break-inside: avoid;
          box-shadow:
            0 10px 30px rgba(0, 0, 0, 0.6),
            inset 0 0 0 1px rgba(0, 229, 255, 0.15);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          text-decoration: none;
        }

        .portfolio-card:hover {
          transform: translateY(2px);
          box-shadow:
            0 18px 45px rgba(0, 229, 255, 0.25),
            inset 0 0 0 1px rgba(0, 229, 255, 0.35);
        }

        .portfolio-card img {
          width: 100%;
          display: block;
          transition: transform 0.5s ease;
        }

        .portfolio-card:hover img {
          transform: scale(1.08);
        }

        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto 4rem;
        }

        .timeline-line {
          position: relative;
          height: 4px;
          background: rgba(0, 229, 255, 0.15);
          border-radius: 999px;
          overflow: visible;
        }

        .timeline-progress {
          height: 100%;
          background: linear-gradient(90deg, #00e5ff, #1da1f2);
          border-radius: 999px;
          transition: width 0.5s ease;
          position: absolute;
          inset: 0;
          width: 0%;
          box-shadow:
            0 0 12px rgba(0, 229, 255, 0.9),
            0 0 28px rgba(0, 229, 255, 0.6);
          animation: burn-flicker 1.2s infinite linear;
        }

        .timeline-years {
          display: flex;
          justify-content: space-between;
          margin-top: 1.2rem;
        }

        .timeline-year {
          background: #050b10;
          border: 2px solid rgba(0, 229, 255, 0.3);
          color: #bfefff;
          padding: 0.45rem 1rem;
          border-radius: 999px;
          cursor: pointer;
          position: relative;
        }

        .timeline-year::before {
          content: "";
          position: absolute;
          top: -22px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 20px;
          background: linear-gradient(
            to bottom,
            rgba(0, 229, 255, 0.6),
            rgba(0, 229, 255, 0.15)
          );
        }
        
        .timeline-year.active {
          background: linear-gradient(135deg, #00e5ff, #1da1f2);
          color: #031018;
          border: none;
        }

        @keyframes burn-flicker {
          0% { filter: brightness(1); }
          50% { filter: brightness(1.3); }
          100% { filter: brightness(1); }
        }

        .spark {
          position: absolute;
          right: -10px;
          top: 50%;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          transform: translateY(-50%);
          background: radial-gradient(
            circle,
            #ffffff 0%,
            #7ff6ff 30%,
            #00e5ff 55%,
            rgba(0, 229, 255, 0.35) 100%
          );
          pointer-events: none;
          box-shadow:
            0 0 12px rgba(255, 255, 255, 1),
            0 0 28px rgba(0, 229, 255, 0.9),
            0 0 55px rgba(0, 229, 255, 0.7),
            0 0 85px rgba(0, 229, 255, 0.4);
          animation: spark-burn 0.9s infinite ease-in-out;
        }

        @keyframes spark-burn {
          0% {
            opacity: 0.9;
            filter: brightness(1);
            transform: translateY(-50%) scale(0.9);
          }
          50% {
            opacity: 1;
            filter: brightness(1.5);
            transform: translateY(-50%) scale(1.15);
          }
          100% {
            opacity: 0.85;
            filter: brightness(1.1);
            transform: translateY(-50%) scale(1);
          }
        }

        @media (max-width: 1024px) {
          .portfolio-grid { column-count: 2; }
        }

        @media (max-width: 600px) {
          .portfolio-grid { column-count: 1; }
        }
      `}</style>

      <h2>PORTFOLIO</h2>

      <p className="subtitle">
        When it comes to competitions and events, winning is a tradition here at
        ProDex! Since its inception in 2012, our teams have not just represented
        ProDex and IITKGP, but have also won numerous intra-institutional,
        national and international level events.
        <br />
        <br />
        (*Click on the event banner to learn more)
      </p>

      <div className="timeline">
        <div className="timeline-line">
          <div className="timeline-progress" style={{ width: `${progress}%` }}>
            <span key={sparkKey} className="spark" />
          </div>
        </div>

        <div className="timeline-years">
          {portfolioYears.map((year, index) => (
            <button
              key={year}
              className={`timeline-year ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => {
                setActiveIndex(index);

                const params = new URLSearchParams();
                if (year !== "All") params.set("year", year);

                window.history.pushState(
                  {},
                  "",
                  `/?${params.toString()}#portfolio`
                );
              }}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="portfolio-grid">
        {filteredData.map((item) => (
          <a
            key={item.id}
            href={
              activeYear === "All"
                ? item.link
                : `${item.link}?fromYear=${activeYear}`
            }
            className="portfolio-card"
          >
            <img src={item.image} alt={item.title} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
