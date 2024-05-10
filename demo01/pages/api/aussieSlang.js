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

async function getAussieAccentData({ letter = null, page = 1, pageSize = 40, search = '' }) {
    try {
        await sql.connect(dbConfig);
        const offset = (page - 1) * pageSize;
        let query = '';
        let countQuery = '';

        if (search) {
            query = sql.query`SELECT * FROM slangs_new WHERE Slang LIKE ${'%' + search + '%'} ORDER BY Slang OFFSET ${offset} ROWS FETCH NEXT ${pageSize} ROWS ONLY`;
            countQuery = sql.query`SELECT COUNT(*) as total FROM slangs_new WHERE Slang LIKE ${'%' + search + '%'}`;
        } else if (letter && letter !== 'all') {
            query = sql.query`SELECT * FROM slangs_new WHERE Slang LIKE ${letter + '%'} ORDER BY Slang OFFSET ${offset} ROWS FETCH NEXT ${pageSize} ROWS ONLY`;
            countQuery = sql.query`SELECT COUNT(*) as total FROM slangs_new WHERE Slang LIKE ${letter + '%'}`;
        } else {
            query = sql.query`SELECT * FROM slangs_new ORDER BY Slang OFFSET ${offset} ROWS FETCH NEXT ${pageSize} ROWS ONLY`;
            countQuery = sql.query`SELECT COUNT(*) as total FROM slangs_new`;
        }

        const [result, totalResult] = await Promise.all([query, countQuery]);
        return { data: result.recordset, total: totalResult.recordset[0].total };
    } catch (err) {
        console.error('SQL error', err);
        return { data: [], total: 0 };
    }
}

export default async (req, res) => {
    const { letter, page = 1, pageSize = 40, search = '' } = req.query;
    const data = await getAussieAccentData({ letter, page: parseInt(page), pageSize: parseInt(pageSize), search });
    res.status(200).json(data);
};












