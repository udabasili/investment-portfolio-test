const sizes = {
	mobile: '600px',
	tabPort: '900px',
	tabLand: '1200px',
	bigDesktop: '1800px',
};

export const devices = {
	mobile: `@media screen and (max-width:${sizes.mobile})`,
	tabPort: `@media screen and (max-width:${sizes.tabPort})`,
	tabLand: `@media screen and (max-width:${sizes.tabLand})`,
	bigDesktop: `@media screen and (min-width:${sizes.bigDesktop})`,
};
