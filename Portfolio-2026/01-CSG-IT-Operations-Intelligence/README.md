# Portfolio Project 01 — IT Operations Intelligence

**Status:** Completed executive dashboard (October 2026)  
**Category:** IT Operations · Business Intelligence · Data Analytics  
**Organization:** Covenant Solutions Group (CSG)  
**Tools:** Microsoft Power BI Desktop · DAX · Excel · Relational Data Modeling  
**Data:** 100% synthetic / fictional; no real client or employee information

## Project overview

Developed an interactive, single-page Power BI executive dashboard using synthetic operational data to monitor IT support workload, service-level agreement (SLA) compliance, and technology asset distribution across multiple business sites. Applied DAX measures, table relationships, and business intelligence visualizations to turn operational records into a management-friendly overview.

The fictional dataset represents four sites within one Mid-Atlantic region. This is a portfolio demonstration, **not** reporting on an actual organization.

## Business question

How can organizational leaders quickly understand the volume of IT incidents, evaluate whether service targets are met, and assess the distribution of managed technology assets?

## Executive dashboard

The completed overview contains four core visuals:

1. **Total Tickets** — headline support workload.
2. **SLA Met Rate** — percentage of tickets meeting the defined service target.
3. **IT Support Tickets by Site** — comparison of ticket volume across fictional locations.
4. **Device Distribution by Region** — asset allocation in the dataset. Because the current dataset contains only a single region (Mid-Atlantic), this chart **does not** establish cross-region differences; a site-level breakdown would be more informative for comparisons.

### Validated synthetic-data reference metrics

| Indicator | Dataset value |
| --- | ---: |
| Business sites | 4 |
| Technology assets | 190 |
| Support tickets | 363 |
| SLA met rate | 77.1% |

These figures describe synthetic sample data only. They should not be interpreted as real-world service performance.

## Methods and skills demonstrated

- Structured multi-table operational data: `Sites`, `Assets`, `Tickets`, and `Costs`.
- Defined one-to-many relationships to support cross-filtering between sites, assets, and incidents.
- Used DAX measures to calculate service workload and SLA compliance.
- Designed a concise, single-page executive report rather than an overly crowded operational dashboard.
- Created a PDF export of the dashboard for offline sharing.

### Example DAX measures

```DAX
Total Tickets = COUNTROWS(Tickets)

SLA Met Tickets =
CALCULATE(
    [Total Tickets],
    Tickets[SLAResult] = "Met"
)

SLA Met Rate =
DIVIDE([SLA Met Tickets], [Total Tickets])
```

## Strategic application

This project demonstrates an entry-level CSG business intelligence offering: combining IT service and asset data into practical, executive-level reporting. A future iteration could incorporate longitudinal trends, actual site comparisons, device risk, spending against budget, and documented management recommendations.

## Portfolio evidence and files

The original author has saved a Power BI report and PDF export, but **the actual `.pbix`, PDF, screenshots, and synthetic dataset are not included in this GitHub entry yet**.

Planned attachment structure (once source artifacts are provided):

```text
01-CSG-IT-Operations-Intelligence/
├── README.md
├── data/
│   └── CSG_PowerBI_Synthetic_IT_Operations_2026.xlsx
├── report/
│   └── CSG_IT_Operations_Intelligence.pbix
└── exports/
    └── executive-overview.pdf
```

**Portfolio description:** Developed an interactive Power BI executive dashboard using synthetic operational data to monitor IT support workload, SLA compliance, and technology asset distribution across multiple business sites. Applied DAX, relational data modeling, and business intelligence visualization to support management decision-making.
