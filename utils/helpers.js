import moment from 'moment-timezone';

export const calculateExpiryDate = ( subscriptionType , subscriptionDateTime) => {
    const expiryDate = moment.tz(subscriptionDateTime, 'Asia/Kolkata');

    switch( subscriptionType ){
        case 'thirtyMinutes':
            return expiryDate.add(30, 'minutes').toDate();
        case 'hourly':
            return expiryDate.add(1, 'hours').toDate();
        case 'daily':
            return expiryDate.add(1, 'days').toDate();
        case 'twoDays':
            return expiryDate.add(2, 'days').toDate();
        case 'weekly':
            return expiryDate.add(7, 'days').toDate();
        case 'monthly':
            return expiryDate.add(1, 'months').toDate();
        default:
            throw new Error(`Unknown subscription type: ${subscriptionType}`);
    }
}