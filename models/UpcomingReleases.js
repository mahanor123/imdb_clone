module.exports = (sequelize,type) => {
    return sequelize.define('UpcomingReleases', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        moviename: type.STRING,
        date: type.INTEGER,
    })
    }