module.exports = ( admin ) => {
    const devConfig = require('../env/fb_account');

    const prodConfig = {
        "type": "service_account",
        "project_id": "portfolio-c05dd",
        "private_key_id": process.env.PRIVATE_KEY_ID,
        "private_key": process.env.PRIVATE_KEY,
        "client_email": process.env.CLIENT_EMAIL,
        "client_id": process.env.CLIENT_ID,
        "auth_uri": process.env.AUTH_URI,
        "token_uri": process.env.TOKEN_URI,
        "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
        "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL
    }

    const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

    admin.initializeApp({
        credential: admin.credential.cert( config ),
        storageBucket: 'aff-store.appspot.com'
    });
};
