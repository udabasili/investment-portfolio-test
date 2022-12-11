import { MainLayout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { AboutUs, Portfolio, OurTeam } from '@/features/Home';

export default function Home() {
	return (
		<MainLayout>
			<Header />
			<AboutUs />
			<Portfolio />
			<OurTeam />
		</MainLayout>
	);
}
