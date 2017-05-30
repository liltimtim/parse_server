module.exports = {
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/parse-example',
    PARSE_APP_ID: process.env.PARSE_APP_ID || 'your_app_id',
    PARSE_MASTER_KEY: process.env.PARSE_MASTER_KEY || '?Ag4M)ZA*BBpIGL!XIqCe6acB&rcmL',
    PARSE_SERVER_URL: process.env.PARSE_SERVER_URL || 'http://localhost:1337/parse',
    PARSE_ADMIN_USERNAME: process.env.PARSE_ADMIN_USERNAME || 'admin',
    PARSE_ADMIN_PASSWORD: process.env.PARSE_ADMIN_PASSWORD || 'QAZwsxEDC1234!@#$',
    PARSE_DASHBOARD_APP_NAME: process.env.PARSE_DASHBOARD_APP_NAME || 'your_app_id_dashboard',
    PARSE_SERVER_MOUNT: process.env.PARSE_SERVER_MOUNT || '/parse'
}