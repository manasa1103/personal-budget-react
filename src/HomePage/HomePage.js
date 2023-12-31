import React from 'react';
import Charts from "../Charts/Charts";

function HomePage() {
  return (
    <main>
    <div className="container">

        <div className="page-area">

            <section>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </section>
    
            <section>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </section>
    
            <section>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </section>
    
            <section>
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </section>
    
            <section>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </section>
    
            <section>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </section>
    
            <section>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </section>
    
            <section>
                <h1>Chart</h1>
                <p>
                    {/*<canvas id="myChart" width="400" height="400"></canvas>*/}
                </p>
                {/* <Charts/> */}
            </section>
                   
            <section className="text-box">
                {/*<h1 tabIndex="26
                ">D3JS Donut Chart</h1>
                <p tabIndex="27">
                <div id="d3DonutChart"></div>
                </p>*/}
            </section>
        </div>
    </div>
    </main>
  );
}

export default HomePage;
