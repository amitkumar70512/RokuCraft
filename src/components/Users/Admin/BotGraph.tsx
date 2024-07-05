import React, { useEffect, useState } from 'react';
import { getAllBots } from '../../../firebase/bots';
import { Bot } from '../../../firebase/interface';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryPie } from 'victory';

const BotGraph: React.FC = () => {
    const [bots, setBots] = useState<Bot[]>([]);
    const [filteredBots, setFilteredBots] = useState<Bot[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const fetchBots = async () => {
            try {
                const fetchedBots = await getAllBots();
                setBots(fetchedBots);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching bots:', error);
                setError('Failed to fetch bots. Please try again later.');
                setLoading(false);
            }
        };

        fetchBots();
    }, []);

    // Filter bots based on search term
    useEffect(() => {
        const filtered = bots.filter((bot) =>
            bot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            bot.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            bot.userName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBots(filtered);
    }, [bots, searchTerm]);

    // Function to count premium and non-premium bots
    const countBotsByPremiumStatus = (): { premium: number; nonPremium: number } => {
        let premiumCount = 0;
        let nonPremiumCount = 0;

        bots.forEach((bot) => {
            if (bot.isPremium) {
                premiumCount++;
            } else {
                nonPremiumCount++;
            }
        });

        return { premium: premiumCount, nonPremium: nonPremiumCount };
    };

    // Total number of bots
    const totalBots = bots.length;

    // Data for VictoryBar component
    const barChartData = [
        { status: 'Premium Bots', count: countBotsByPremiumStatus().premium },
        { status: 'Non-Premium Bots', count: countBotsByPremiumStatus().nonPremium },
    ];

    // Data for VictoryPie component
    const pieChartData = [
        { x: 'Premium Bots', y: countBotsByPremiumStatus().premium },
        { x: 'Non-Premium Bots', y: countBotsByPremiumStatus().nonPremium },
    ];

    // Handle search input change
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    if (loading) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-5 text-danger">{error}</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Bot Statistics</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="text-center mb-3">Total Bots: {totalBots}</div>
                    <VictoryChart
                        domainPadding={20}
                        theme={VictoryTheme.material}
                    >
                        <VictoryAxis
                            dependentAxis
                            tickFormat={(x) => `${x}`}
                        />
                        <VictoryAxis
                            tickFormat={(x) => `${x}`}
                            label={`Total Bots - ${totalBots}`}
                        />
                        <VictoryBar
                            data={barChartData}
                            x="status"
                            y="count"
                            style={{
                                data: { fill: '#007bff' }, // Customize bar color
                            }}
                        />
                    </VictoryChart>
                </div>
                <div className="col-md-6">
                    <VictoryPie
                        data={pieChartData}
                        colorScale={['#007bff', '#dc3545']}
                        innerRadius={50} // Adjust inner radius for a donut chart effect
                        labelRadius={60} // Ensure innerRadius is defined
                        style={{ labels: { fontSize: 12, fill: '#333' } }}
                    />
                </div>
            </div>
            <h2 className="text-center mt-5 mb-4">Bots Data</h2>
            <div className="row justify-content-center mb-4">
                <div className="col-md-8">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search bots by name..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <div className="table-responsive" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBots.map((bot, index) => (
                            <tr key={bot.id}>
                                <td>{index + 1}</td>
                                <td>{bot.name}</td>
                                <td>{bot.userName}</td>
                                <td>{bot.email}</td>
                                <td>{bot.mobile}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BotGraph;
