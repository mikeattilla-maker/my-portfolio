# Portfolio Project 02 — AI Adoption Across the United States

**Status:** Planned / not yet developed (October 2026)  
**Category:** Business Intelligence · AI Adoption Research · Geographic Analytics  
**Organization:** Covenant Solutions Group (CSG)  
**Planned tools:** Tableau Public · U.S. Census Bureau Business Trends and Outlook Survey (BTOS) · Public data  
**Primary data source:** [U.S. Census Bureau — BTOS Data Downloads](https://www.census.gov/hfp/btos/data_downloads)

## Project overview

This project will investigate where and in which industries U.S. businesses report using artificial intelligence. The plan is to use publicly available U.S. Census Bureau Business Trends and Outlook Survey data to build an interactive Tableau Public dashboard highlighting geographic distribution, industry-level variation, and trends over available survey waves.

The project is designed as a portfolio demonstration of public-sector data analysis, dashboard development, and practical interpretation for decision-makers. **It is not yet a finished analysis.**

## Key research questions

1. How does reported business AI usage vary across the U.S. states or regions made available by BTOS?
2. Which industry groups report the highest and lowest AI use?
3. How has reported usage changed across comparable survey periods?
4. What can the patterns suggest about potential adoption and advisory opportunities, without implying causation?

## Planned dashboard components

- **U.S. map:** State-level adoption estimates where geographic detail is supported by the downloaded data.
- **Industry comparison:** Ranked bar chart of AI-use estimates across industry groups.
- **Trend visualization:** Comparison across compatible survey waves and definitions.
- **Executive summary:** Methodology, key findings, uncertainty, and implications for businesses exploring AI integration.
- **Optional industry focus:** Health Care and Social Assistance (NAICS sector 62), if supported in the data.

## Workflow and methodology

1. Download relevant BTOS releases and accompanying definitions from the U.S. Census Bureau.
2. Confirm the exact AI-use variable and any renamed measure in the chosen release (the Census interface may reference **SI**, formerly **AI**); do not merge differently defined indicators without checking the documentation.
3. Identify the release dates, geography, industry breakdowns, estimate units, and any sampling/uncertainty information.
4. Clean and reshape data for Tableau; retain original provenance and definitions.
5. Calculate or display only measures that the dataset supports. Distinguish survey estimates and percentages from raw business counts.
6. Publish Tableau Public visuals and an executive summary with clear data notes.

## Important limitations

- BTOS measures **business responses and estimates**, not a verified inventory of individual AI systems deployed.
- Geographic and industry data may be published at different aggregation levels. Do not assume every state-by-industry cross-tab is available.
- The healthcare industry category does **not** directly establish how many individual hospitals or healthcare facilities use AI.
- Public releases may have sampling error, suppressed estimates, changing question wording, or changes across waves; assess comparability before plotting trends.
- No adoption percentages or findings are asserted here because the data has not yet been analyzed.

## Planned deliverables

- Cleaned, documented public dataset with source and retrieval date.
- Interactive Tableau Public dashboard.
- Dashboard screenshots / exported visuals.
- One-page executive findings brief.
- A short note describing limitations and reproducibility.

## Relevance to Covenant Solutions Group

The project illustrates CSG's planned capabilities in public data research, market intelligence, interactive visualization, and strategic AI adoption advisory. It also establishes a foundation for a later, more narrowly scoped study of AI adoption in healthcare organizations.

## Progress checklist

- [x] Identify the primary government source and project scope.
- [ ] Download and validate the selected BTOS release(s).
- [ ] Create a Tableau-ready dataset.
- [ ] Build and test the U.S. adoption dashboard.
- [ ] Interpret geographic and industry-level patterns.
- [ ] Publish the completed visualization and executive findings.

**Portfolio description:** Planned interactive Tableau Public analysis of reported AI adoption among U.S. businesses, using Census BTOS data to explore geography, industry differences, and comparable time trends. The objective is to turn trustworthy public-sector data into accessible business intelligence.
