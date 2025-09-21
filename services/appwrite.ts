// track the searches made by a user

import { Client, Databases } from 'react-native-appwrite';

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
const TABLE_ID = process.env.EXPO_PUBLIC_APPWRITE_TABLE_ID;
const PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID);


const database = new Databases(client);





export const updateSearchCount = async (query: string, movie: Movie) => {
    const results = await database.listDocuments

    // check if a record of that search is already been stored
    // if found increment the searchCount field
    // if not found create new document to appwrite
}