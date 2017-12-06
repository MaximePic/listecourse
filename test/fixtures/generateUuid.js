
module.exports = {
    generateUuid: () => {
        let uuid = new Date();

        return uuid.getTime() + Math.round(Math.random() * 999);
    }
};