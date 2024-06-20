
import { db } from './firebase';
import { Feedback } from './interface';
import { collection, getDocs, query, where, addDoc, Timestamp } from 'firebase/firestore';

// Function to get all feedbacks
export async function getAllFeedbacks(): Promise<Feedback[]> {
    try {
        const feedbacksCol = collection(db, 'feedbacks');
        const snapshot = await getDocs(feedbacksCol);

        if (snapshot.empty) {
            return [];
        }

        const feedbacks: Feedback[] = [];
        snapshot.forEach(doc => {
            feedbacks.push({
                ...doc.data(),
            } as Feedback);
        });

        return feedbacks;
    } catch (error) {
        console.error('Error fetching all feedbacks:', error);
        throw error;
    }
}

// Function to get filtered feedbacks
export async function getFilteredFeedbacks(filters: Partial<Feedback>): Promise<Feedback[]> {
    try {
        let feedbacksRef = collection(db, 'feedbacks');

        // Apply filters if provided
        if (filters.name) {
            feedbacksRef = query(feedbacksRef, where('name', '==', filters.name)) as any;
        }
        if (filters.email !== undefined) {
            feedbacksRef = query(feedbacksRef, where('email', '==', filters.email)) as any;
        }
        // Add more filters as needed

        const snapshot = await getDocs(feedbacksRef);

        if (snapshot.empty) {
            return [];
        }

        const feedbacks: Feedback[] = [];
        snapshot.forEach(doc => {
            feedbacks.push({
                ...doc.data(),
            } as Feedback);
        });

        return feedbacks;
    } catch (error) {
        console.error('Error fetching filtered feedbacks:', error);
        throw error;
    }
}

// Function to add a new Feedback with default values
export async function addFeedback(feedbackData: Partial<Feedback>): Promise<string> {
    try {
    // Default values
        const defaultBlogData: Omit<Feedback, 'timestamp'> = {
            name: 'Anonymous',
            email: '',
            message: '',
        };

        // Merge input data with default values
        const mergedBlogData: Feedback = {
            ...defaultBlogData,
            ...feedbackData,
            timestamp: feedbackData.timestamp || new Date(), // Use current date if not provided
        };

        // Add Feedback to Firestore
        const blogsCollection = collection(db, 'feedbacks');
        const timestamp = Timestamp.now(); // Current timestamp

        const newBlogRef = await addDoc(blogsCollection, {
            ...mergedBlogData,
            timestamp: timestamp, // Firestore timestamp for date of entry
        });

        console.log('New Feedback added with ID:', newBlogRef.id);
        return newBlogRef.id;
    } catch (error) {
        console.error('Error adding Feedback:', error);
        throw error;
    }
}
