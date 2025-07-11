# InsightIQ – Web Performance Analyzer

**InsightIQ** is a sleek and responsive web application that analyzes any public website's performance using key metrics such as:

- Load Time  
- Page Size  
- Total Number of Requests  

Built with **Next.js (App Router)**, **React Query**, **Mantine UI**, and powered by the **Google PageSpeed Insights API**, this tool helps developers and website owners evaluate and improve web performance.

---

## Features

- Enter any website URL and get real-time performance metrics.
- Clean UI with animations and smooth user experience.
- Responsive design, optimized for all screen sizes.
- Uses React Query for caching and efficient async data handling.
- Accessible components with Mantine.

---

## API Integration

This project uses the [Google PageSpeed Insights API (v5)](https://developers.google.com/speed/docs/insights/v5/about) to analyze website performance on desktop devices.

> I used **ChatGPT** to learn about how to work with the Google PageSpeed API and how to integrate it effectively within a Next.js frontend architecture. All application logic, design decisions, and UI implementation were done independently.

---

## Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **UI Library**: [Mantine UI](https://mantine.dev/)
- **Data Fetching**: [React Query (TanStack Query)](https://tanstack.com/query/latest)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **API**: [Google PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v5/about)

---

## Running Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/insightiq.git
cd insightiq

# Install dependencies
yarn install

# Add your API key
touch .env.local
echo "PAGE_SPEED_EVALUATOR_BACKEND_API_URL=https://www.googleapis.com/pagespeedonline/v5/runPagespeed" >> .env.local
echo "NEXT_PUBLIC_PAGE_SPEED_EVALUATOR_API_KEY=your-api-key-here" >> .env.local

# Run the app
yarn dev
