import { db } from './firebase';
import {
    collection, query, where, getDocs, addDoc, Timestamp, QuerySnapshot} from 'firebase/firestore';
import { Bot } from './interface';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 to generate random IDs


// Function to add a new bot with default values
export async function addBot(botData: Partial<Bot>): Promise<string> {
    try {
		// Omit 'coins', 'doe', 'dop' from bot interface
		type DefaultBotData = Omit<Bot, 'coins' | 'doe' | 'doc'>;
		// Default values
		const defaultBotData: DefaultBotData = {
		  id: uuidv4(),
		  name: '',
		  image: '',
		  mobile: '',
		  email: '',
		  password: '',
		  isPremium: false,
		  isAdmin: false,
		};

		// Merge input data with default values
		const mergedBotData: Bot = {
		  ...defaultBotData,
		  ...botData,
		  doe: botData.doe || new Date(), // Use current date if not provided
		  doc: botData.doc || new Date(), // Use current date if not provided
		  coins: botData.coins || 0, // Default to 0 if not provided
		};

		// Add bot to Firestore
		const botsCollection = collection(db, 'bots');
		const timestamp = Timestamp.now(); // Current timestamp

		const newBotRef = await addDoc(botsCollection, {
		  ...mergedBotData,
		  doe: timestamp, // Firestore timestamp for date of entry
		  dop: timestamp, // Firestore timestamp for date of publication
		});

		console.log('New bot added with ID:', newBotRef.id);
		return newBotRef.id;
    } catch (error) {
        console.error('Error adding bot:', error);
        throw error;
    }
}

// get all bots
export async function getAllBots(): Promise<Bot[]> {
    try {
        const botsCollection = collection(db, 'bots');
        const snapshot = await getDocs(botsCollection);

        if (snapshot.empty) {
            return [];
        }

        const bots: Bot[] = [];
        snapshot.forEach((doc) => {
            bots.push({
                ...doc.data(),
            } as Bot);
        });

        return bots;
    } catch (error) {
        console.error('Error fetching all bots:', error);
        throw error;
    }
}

export async function getFilteredBots(filters: Partial<Bot>): Promise<Bot[]> {
    try {
        let botsCollection = collection(db, 'bots');

        // Apply filters if provided
        if (filters.id) {
            botsCollection = query(
                botsCollection,
                where('id', '==', filters.id),
            ) as any;
        }

        if (filters.email) {
            botsCollection = query(
                botsCollection,
                where('email', '==', filters.email),
            ) as any;
        }

        if (filters.mobile) {
            botsCollection = query(
                botsCollection,
                where('mobile', '==', filters.mobile),
            ) as any;
        }
        if (filters.isPremium !== undefined) {
            botsCollection = query(
                botsCollection,
                where('isPremium', '==', filters.isPremium),
            ) as any;
        }

        if (filters.isAdmin !== undefined) {
            botsCollection = query(
                botsCollection,
                where('isAdmin', '==', filters.isAdmin),
            ) as any;
        }
        // Add more filters as needed

        const snapshot: QuerySnapshot = await getDocs(botsCollection);

        if (snapshot.empty) {
            return [];
        }

        let bots: Bot[] = [];
        snapshot.forEach((doc) => {
            bots.push({
                id: doc.id,
                ...doc.data(),
            } as Bot);
        });

        // If name filter is provided, filter the bots array for substring match
        if (filters.name) {
            const nameLower = filters.name.toLowerCase();
            bots = bots.filter((bot) => {
                const botNameLower = bot.name.toLowerCase();
                return botNameLower.includes(nameLower);
            });
        }

        // console.log("Filtered bots:", bots);
        return bots;
    } catch (error) {
        console.error('Error fetching filtered bots:', error);
        throw error;
    }
}
