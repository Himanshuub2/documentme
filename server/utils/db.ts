import { PrismaClient } from "@prisma/client";

class DbConnection {
    private static instance: PrismaClient; 

    private constructor() {}

    public static getInstance(): PrismaClient {
        if (!DbConnection.instance) {
            DbConnection.instance = new PrismaClient();
        }
        return DbConnection.instance;
    }
}

const db = DbConnection.getInstance();

export default db;
