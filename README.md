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
	GraphQL queries v slozce graphql

Routy pro modul v modulu filename `router.js`, musi se pak importovat do main router.js


---TO-DO----
- Nastavit eslint
- i18 lokalizace
- Automaticky schovat menu kdyz se zmensuje okno.
- TABY

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