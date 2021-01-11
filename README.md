SERVER
	- Apollo server
	`npm run server`


	Data Sources - nacitani dat z remote API
	TypeDefs - Schema
	Resolvers - pripojene na data sources ziskava data a definuje query.
CLIENT
	- Vue.js 
	`npm run serve`
	Apollo provider pro pripojeni na GraphQL API
	GraphQL queries v slozce model

Routy pro modul v modulu s nazvem  `router.js`, musi se pak importovat do main router.js


API 
https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/1.svg

https://gitlab.com/dword4/nhlapi/-/blob/master/stats-api.md


---TO-DO----
- Nastavit eslint / DONE
- i18 lokalizace
- Automaticky schovat menu kdyz se zmensuje okno / DONE
- Taby
- Tabulky - vybirani custom sloupcu (checkbox)
- Integrovat chart.js

- Zapas

 CALGARY X PITS

 - last 5 matches
 [chart.js] [chart.js] - s filtrovanim dat

Main Page
	-Nadchazejici zapasy
	- Top 5 tymu
	- Top 5 strelcu
	- Strelci kteri nedali dlouho gol
	- Tym co dlouho nevyhral
	- Tym kteremu se dari
Menu
	- Zapasy
		- Tymy 
		- Hraci
		- Nadchazejici 
	- Tymy
	- Hraci
	- Tabulky