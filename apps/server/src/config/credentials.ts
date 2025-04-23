require("dotenv").config();
interface Credentials {
    PORT?: number;
}

const credentials: Credentials = {
    PORT: parseInt(process.env.PORT as string) || 8000,
};

export default credentials;
