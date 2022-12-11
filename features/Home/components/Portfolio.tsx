import dynamic from 'next/dynamic';

import React, { useState, useEffect } from 'react';

import useSwr from 'swr';

import { ibmPlexSansCondensed, ibmPlexSans } from '@/assets/fonts';
import { BarChart, PortfolioContainer, PortfolioDescription, Slider } from './index.styled';
import { fetcher } from '@/lib/fetch';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const arrayOfRisksLabels = [
	'Alternative',
	'Commodities',
	'Emerging Stocks',
	'Foriegn Bonds',
	'Foriegn Stocks',
	'Nigerian Bonds',
	'Nigerian Stocks',
	'Real Estate',
	'Risk Score/Tolerence',
	'T-Bills',
	'Tech Stocks',
	'_id',
] as const;

type riskLabel = typeof arrayOfRisksLabels[number];

type RiskData = {
	[key in riskLabel]: string;
};

type GraphData = {
	[key in riskLabel]: any;
};
export const Portfolio = () => {
	const { data, error } = useSwr<Array<RiskData>>('/api/risks', fetcher);
	const [riskScore, setRisk] = useState(0);
	const [graphData, setGraphData] = useState<Partial<GraphData>>();

	useEffect(() => {
		if (data) {
			const filteredRiskData = data
				.filter((d) => Number(d['Risk Score/Tolerence']) === riskScore)
				.map((d) => {
					return {
						Alternative: Number(d.Alternative.replace('%', '')),
						Commodities: Number(d.Commodities.replace('%', '')),
						'Emerging Stocks': Number(d['Emerging Stocks'].replace('%', '')),
						'Foreign Bonds': Number(d['Foriegn Bonds'].replace('%', '')),
						'Foreign Stocks': Number(d['Foriegn Stocks'].replace('%', '')),
						'Nigerian Bonds': Number(d['Nigerian Bonds'].replace('%', '')),
						'Nigerian Stocks': Number(d['Nigerian Stocks'].replace('%', '')),
						'Real Estate': Number(d['Real Estate'].replace('%', '')),
						'T-Bills': Number(d['T-Bills'].replace('%', '')),
						'Tech Stocks': Number(d['Tech Stocks'].replace('%', '')),
					};
				})[0];

			setGraphData(filteredRiskData);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [riskScore, data]);

	function setRiskHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setRisk(Number(e.target.value));
	}

	if (error) return <div>Failed to load</div>;
	if (!error && !data) return <div>Loading...</div>;
	return (
		<PortfolioContainer id="portfolio">
			<Slider>
				<output className={ibmPlexSansCondensed.className}>Risk Score: {riskScore}</output>
				<input type="range" value={riskScore} min="0" max="10" step="1" onChange={setRiskHandler} />
			</Slider>
			<BarChart>
				{graphData ? (
					<Chart
						options={{
							labels: Object.keys(graphData),
							legend: {
								position: 'top',
								fontSize: '16px',
								fontWeight: 'bold',
								fontFamily: ibmPlexSansCondensed.className,
								labels: {
									colors: '#ffffff',
								},
							},
						}}
						series={Object.values(graphData)}
						type="pie"
						width={500}
					/>
				) : null}
			</BarChart>
			<PortfolioDescription>
				<h2 className={`${ibmPlexSansCondensed.className} u-margin-bottom-small`}>Get your Portfolio</h2>
				<p className={ibmPlexSans.className}>
					Adjust the Risk Tolerence to generate your investment portfolio. Nunc feugiat maximus sollicitudin.
					Aenean sed malesuada odio. Sed turpis enim, venenatis ac efficitur ut, viverra nec diam. Donec vel
					luctus tortor. Donec ut odio facilisis orci commodo interdum a non nisl. Donec aliquam, orci et
					ultrices eleifend, quam felis iaculis nisl, in vestibulum sapien nisi vitae lacus. Aenean tristique
					nulla eu risus facilisis, ut pharetra ante cursus. Sed elementum nunc eros, sit amet egestas turpis
					egestas in. Sed ac tellus erat. Donec molestie a tortor quis dignissim. Nullam lacinia, mauris sit
					amet mollis varius, elit metus euismod justo, eu porta lorem metus quis lorem. Praesent eget libero
					justo. Praesent elementum orci et arcu pretium, id tincidunt mauris accumsan.
				</p>
			</PortfolioDescription>
		</PortfolioContainer>
	);
};
