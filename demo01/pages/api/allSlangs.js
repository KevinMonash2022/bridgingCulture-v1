import sql from 'mssql';

const dbConfig = {
    user: process.env.AZURE_SQL_USER,
    password: process.env.AZURE_SQL_PASSWORD,
    database: process.env.AZURE_SQL_DATABASE,
    server: process.env.AZURE_SQL_SERVER,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
    }
};

async function getAllSlangs() {
    try {
        await sql.connect(dbConfig);
        const result = await sql.query`SELECT * FROM slangs_new ORDER BY Slang`;
        return result.recordset;
    } catch (err) {
        console.error('SQL error', err);
        return [];
    }
}

export default async (req, res) => {
    const data = await getAllSlangs();
    res.status(200).json(data);
};
