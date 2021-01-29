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
- tabulky - vybrat si divize / vsechny tymy
- switching mezi divizema + transition
- Dashboard widgety

- Zapas

 CALGARY X PITS

 - last 5 matches
 [chart.js] [chart.js] - s filtrovanim dat

Tabulka -doma x venku

Main Page
	-Nadchazejici zapasy
	- Odehrane zapasy
		- detail
		- three stars
			- periods overview
		- video highlights

	- Top 5 tymu (podle zvolenych kriterii - default pts)
	- Top 5 strelcu
	- Strelci kteri nedali dlouho gol
	- Tym co dlouho nevyhral
	- Tym kteremu se dari
	
Menu
	- Zapasy
	- Tymy
	- Hraci
	- Tabulky