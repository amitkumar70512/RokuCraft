import { db } from "./firebase";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  QuerySnapshot,
  updateDoc,
} from "firebase/firestore";
import { Bot, Coins } from "./interface";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4 to generate random IDs

// Function to add a new bot with default values
export async function addBot(botData: Partial<Bot>): Promise<string> {
  try {
    type DefaultBotData = Omit<Bot, "coins" | "date_of_creation">;
    type DefaultCoinsData = Coins;

    // Default values
    const defaultBotData: DefaultBotData = {
      id: uuidv4(),
      name: "",
      userName: "",
      password: "",
      image: "",
      mobile: "",
      email: "",
      isPremium: false,
      isAdmin: false,
    };

    // Get the current date and add 365 days to it
    const currentDate = new Date();
    const expiryDate = new Date(currentDate);
    expiryDate.setDate(currentDate.getDate() + 365);

    // Default values for Coins
    const defaultCoinsData: DefaultCoinsData = {
      count: 0,
      date_of_expiry: expiryDate.toISOString(), // 365 days added
    };

    // Merge input data with default values
    const mergedBotData: Bot = {
      ...defaultBotData,
      ...botData,
      date_of_creation: botData.date_of_creation || new Date().toISOString(), // Use current date if not provided
      coins: {
        ...defaultCoinsData,
        ...botData.coins,
      },
    };

    // Add bot to Firestore
    const botsCollection = collection(db, "bots");

    const newBotRef = await addDoc(botsCollection, {
      ...mergedBotData,
    });

    console.log("New bot added with ID:", newBotRef.id);
    return newBotRef.id;
  } catch (error) {
    console.error("Error adding bot:", error);
    throw error;
  }
}

// get all bots
export async function getAllBots(): Promise<Bot[]> {
  try {
    const botsCollection = collection(db, "bots");
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
    console.error("Error fetching all bots:", error);
    throw error;
  }
}

export async function getFilteredBots(filters: Partial<Bot>): Promise<Bot[]> {
  try {
    let botsCollection = collection(db, "bots");

    // Apply filters if provided
    if (filters.id) {
      botsCollection = query(
        botsCollection,
        where("id", "==", filters.id)
      ) as any;
    }

    if (filters.userName) {
      botsCollection = query(
        botsCollection,
        where("userName", "==", filters.userName)
      ) as any;
    }

    if (filters.email) {
      botsCollection = query(
        botsCollection,
        where("email", "==", filters.email)
      ) as any;
    }

    if (filters.mobile) {
      botsCollection = query(
        botsCollection,
        where("mobile", "==", filters.mobile)
      ) as any;
    }
    if (filters.isPremium !== undefined) {
      botsCollection = query(
        botsCollection,
        where("isPremium", "==", filters.isPremium)
      ) as any;
    }

    if (filters.isAdmin !== undefined) {
      botsCollection = query(
        botsCollection,
        where("isAdmin", "==", filters.isAdmin)
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
    console.error("Error fetching filtered bots:", error);
    throw error;
  }
}

export async function getBotByUserName(userName: string): Promise<Bot | null> {
  try {
    let botsCollection = collection(db, "bots");
    const q = query(botsCollection, where("userName", "==", userName));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No matching users.");
      return null;
    }

    const doc = querySnapshot.docs[0];
    const botData = doc.data();

    const bot: Bot = {
      id: doc.id,
      ...botData,
    } as Bot;

    return bot;
  } catch (error) {
    console.error("Error fetching User:", error);
    throw error;
  }
}

// Function to update bot data based on userName
export async function updateBot(
  userName: string,
  updatedBotData: Partial<Bot>
): Promise<void> {
  try {
    const botsCollection = collection(db, "bots");
    const q = query(botsCollection, where("userName", "==", userName));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error(`Bot with userName ${userName} not found`);
    }

    const docRef = querySnapshot.docs[0].ref;
    const botData = querySnapshot.docs[0].data() as Bot;

    // Merge existing bot data with updated data
    const updatedBot: Partial<Bot> = {
      ...botData,
      ...updatedBotData,
    };

    // Update the Firestore document with the merged data
    await updateDoc(docRef, updatedBot);

    console.log(`Bot with userName ${userName} updated successfully.`);
  } catch (error) {
    console.error("Error updating bot:", error);
    throw error;
  }
}
