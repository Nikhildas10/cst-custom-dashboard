import "dotenv/config";
interface Credentials {
    PORT?: number;
    DATABASE_URL?: string;
    ACCESS_TOKEN_SECRET?: string;
}

const credentials: Credentials = {
    PORT: parseInt(process.env.PORT as string) || 8000,
    DATABASE_URL: process.env.DATABASE_URL,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
};

export default credentials;
